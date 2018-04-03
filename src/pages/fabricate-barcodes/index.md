---
title: "Fabricate Barcodes"
date: "2018-01-30"
link: "https://www.fabricateinc.com/barcodes"
thumbnail: "FabricateBarcodes.jpg"
---

[Fabricate Barcodes](https://www.fabricateinc.com/barcodes) is an online storefront that sells barcodes. I was the backend developer and created an application written in JavaScript using Node.js. The application listens for incoming transactions, verifies and processes those transaction and finally emails the purchased barcodes to the client. Available barcodes are stored in an Amazon S3 bucket and transaction data is stored in a MongoDB database. An overview of the application is presented in the figure below.

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180131211608737.png)

Barcodes are purchased through the PayPal Express Checkout API. An Instant Payment Notification (IPN) is sent to the application when a payment is confirmed. Incoming transaction trigger a series of operations. The authenticity of the transaction is verified and the transaction is placed in a queue to be processed in sequence. See the code snippet below.

```javascript
let queue = new Queue(1, Infinity)

// Paypal IPN Listener
router.post('/listen', function (req, res) {
  res.sendStatus(200)
  ipn.verify(req.body, {'allow_sandbox': false}, function callback (err, mes) {
    if (err) {
      console.error(err)
    } else {
      queue.add(() => main(req.body))
      .then(() => console.log('Transaction Completed'))
      .catch(err => console.log(err))
    }
  })
})

async function main (body) {
  console.log('Transaction Started')
  let transaction = createNewTransaction(body)
  return transaction.checkIfUnique()
    .then(() => transaction.checkIfValid())
    .then(() => transaction.selectFilesToSell())
    .then(() => transaction.addToDatabase())
    .then(() => transaction.verifyQuantity())
    .then(() => transaction.verifyFilesPerCode())
    .then(() => transaction.verifyFilesAreNotAlreadySold())
    .then(() => transaction.emailFiles())
    .then(() => transaction.updateTransactionStatus())
    .then(() => transaction.removeFilesFromBucket())
    .catch(err => console.log(err))
}
```

Transactions are managed by creating an object and running it through a series of checks before retrieving and sending the purchased barcodes. See the code snippet below.

```javascript
class Transaction {
  constructor (id, date, name, clientEmail, paymentStatus, recieverEmail, price, currency) {
    this.id = id
    this.date = date
    this.name = name
    this.clientEmail = clientEmail
    this.quantity = null
    this.soldFiles = []
    this.paymentStatus = paymentStatus
    this.recieverEmail = recieverEmail
    this.price = price
    this.curreny = currency
    this.isValid = [null, {complete: null, email: null, price: null, currency: null}]
    this.IsComplete = false
  }

  async checkIfUnique () {
    let count = await db.Transaction.count({id: this.id})
    if (count) {
      throw new Error(`Transaction ${this.id} is not unique!`)
    }
  }
}  
```

When all the checks have completed, the purchased barcodes are retrieved and sent to the buyer by email. See the code snippet below.

```javascript
  async emailFiles () {
    let attachments
    let transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        user: process.env.ORDERS_EMAIL,
        pass: process.env.ORDERS_EMAIL_PASSWORD
      }
    })
    try {
      attachments = await this.createAttachments()
    } catch (err) {
      throw new Error(`Error creating attachments`, err)
    }

    let message = {
      from: process.env.ORDERS_EMAIL,
      to: this.clientEmail, // Must be changed to this.clientEmail
      subject: 'Thank you for your recent FabricateBarcodes Purchase',
      html: `<h3>Dear ${this.name},</h3>...`
      attachments: attachments
    }

    try {
      console.log('Preparing to send email')
      await transporter.sendMail(message)
      .then(() => console.log('Email Sent Successfully'))
    } catch (err) {
      throw new Error('Error sending email -->', err)
    }
  }

  async createAttachments () {
    let promises = this.soldFiles.map(file => {
      let params = {Bucket: process.env.BUCKETEER_BUCKET_NAME,
        Key: file}
      return {filename: file,
        path: s3.getSignedUrl('getObject', params)}
    })
    return Promise.all(promises)
  }
```

The project was completed successfully and can be visited [here](https://www.fabricateinc.com/barcodes).
