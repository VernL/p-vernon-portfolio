---
title: "Fabricate Barcodes"
date: "2018-01-30"
link: "https://www.fabricateinc.com/barcodes"
---

[Fabricate Barcodes](https://www.fabricateinc.com/barcodes) is an online storefront that sells barcodes. I was the backend developer and created an application written in JavaScript using Node.js. The application listens for incoming transactions, verifies and processes those transaction and finally emails the purchased barcodes to the client. Available barcodes are stored in an Amazon S3 bucket and transaction data is stored in a MongoDB database. An overview of the application is presented in the figure below.

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180131211608737.png)

Barcodes are purchased through the PayPal Express Checkout API. An Instant Payment Notification (IPN) is sent to the application when a payment is confirmed. Incoming transaction trigger a series of operations. The authenticity of the transaction is verified and the transaction is placed in a queue to be processed in sequence. See the code snippet below.

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180130145551253.png)

Transactions are managed by creating an object and running it through a series of checks before retrieving and sending the purchased barcodes. See the code snippet below.

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180131130652327.png)

When all the checks have completed, the purchased barcodes are retrieved and sent to the buyer by email. See the code snippet below.

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180130154131372.png)

The project was completed successfully and can be visited [here](https://www.fabricateinc.com/barcodes).