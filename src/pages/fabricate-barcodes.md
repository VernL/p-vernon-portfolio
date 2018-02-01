---
title: "Fabricate Barcodes"
date: "2018-01-30"
link: "https://www.fabricateinc.com/barcodes"
---

[Fabricate Barcodes](https://www.fabricateinc.com/barcodes) is an online storefront that sells barcodes. I was the backend developer and created an application written in JavaScript using Node.js. The application listens for incoming transactions, verifies and processes those transaction and finally emails the purchased barcodes to the client. Available barcodes are stored in an Amazon S3 bucket and transaction data is stored in a MongoDB database hosted on mlabs.com. The project is hosted on Heroku. A diagram of the application is presented in the figure below.

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180131122822338.png)

An overview of my work is detailed in the sections below.

I added PayPal express checkout buttons to the checkout page on the storefront. I configured PayPal to send an Instant Payment Notification (IPN) once a payment has been confirmed. The IPN contains details of the Transaction such as the buyer's name and e-mail address, the quantity of barcodes purchased and the payment status. My application listens for incoming IPN notifications and activates a series of operations.

The first operation verifies the authenticity of the request. Once the transaction is verified, the main function of the API is executed. Note that the main function is wrapped in a queue so that incoming transactions are processed one at a time. This insures that the previous transaction is completed and that sold barcodes are removed from the database before a new transaction begins. This section of code is presented in the figure below.

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180130145551253.png)

Incoming transactions create an instance of a Transaction object and run through a series of checks before retrieving and sending the purchased barcodes. A sample of this process is presented in the figure below.  

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180131130652327.png)

When all the checks have completed, the purchased barcodes are retrieved and sent by email thanks to a module called Nodemailer. I was originally concerned about this step but the implementation turned out to be fairly straight forward.  

![](https://s3.ca-central-1.amazonaws.com/vernon-portfolio/20180130154131372.png)

The project was completed successfully and can be visited [here](https://www.fabricateinc.com/barcodes). Through this project, I gained considerable experience in backend development and asynchronous programing as well as integrating third party API's and libraries such as PayPal, AWS and Nodemailer.

In short, this project was a win and I look forward to the next :D

Thanks for reading,

Vernon
