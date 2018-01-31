---
title: "Fabricate Barcodes"
date: "2018-01-30"
link: "https://www.fabricateinc.com/barcodes"
---

Fabricate Barcodes is an online storefront that sells barcodes. The store is targeted towards inventors and crowdfunders who are usually focused on product development and often overlook the costs and complexities of obtaining barcodes to sell their products. Barcodes are required to list products on major platforms such as Amazon, Ebay or Itunes. In recent years, there has been an influx of online sellers dumping illegitimate barcodes on the market. This has resulted in a number of sellers having their products unlisted and their accounts banned from several platforms. Fabricate Barcodes sell authentic barcodes that are guaranteed to work on all major platforms.

I was responsible for developing the backend for the project. My objectives were to develop a solution to receive payments and deliver the purchased barcodes via email. My solution needed to integrate with the storefront hosted on Squarespace.

My solutions was written in JavaScript using Node.js. I developed an application that listens for incoming transactions, verifies and processes those transaction and finally emails the purchased barcodes to the client. Available barcodes are stored in an Amazon S3 bucket and transaction data is stored in a MongoDB database hosted on mlabs.com. The project itself is hosted on Heroku. A diagram of the application is presented in the figure below.

![](/assets/markdown-img-paste-20180131122822338.png)

An overview of my work is detailed in the sections below.

I added PayPal express checkout buttons to the checkout page on the storefront. I configured PayPal to send an Instant Payment Notification (IPN) once a payment has been confirmed. The IPN contains details of the Transaction such as the buyer's name and e-mail address, the quantity of barcodes purchased and the payment status. My application listens for incoming IPN notifications and activates a series of operation.

The first operation verifies the authenticity of the request. Once the transaction is verified, the main function of the API is executed. Note that the main function is wrapped in a queue so that incoming transaction are processed one at a time. This insures that the previous transaction is completed and that sold barcodes are removed from the database before a new transaction begins. This section of code is presented in the figure below.

![](/assets/markdown-img-paste-20180130145551253.png)

Incoming transactions create an instance of a Transaction object and run through a series of checks before retrieving and sending out the purchased barcodes. A sample of this process is presented in the figure below.  

![](/assets/markdown-img-paste-20180131130652327.png)

When all the checks have completed, the purchased barcodes are retrieved and sent by email thanks to a module called Nodemailer. I was originally concerned about this step but the implementation turned out to be fairly straight forward.  

![](/assets/markdown-img-paste-20180130154131372.png)

The project was completed successfully and can be visited [here](https://www.fabricateinc.com/barcodes). Through this project, I gained considerable experience in backend development and asynchronous programing as well as integrating with third party API's and libraries such as Paypayl, AWS and Nodemailer. I also gained experience in planning completing, and delivering a project to according to specifications to ensure client satisfy.

In short, this project was a win and I look forward to the next :D

Thanks for reading,

Vernon
