# WAD Assignment 4b - AWS Deployment

## Aim
Deploy or host a web application on AWS Elastic Beanstalk.

## Sample Application
This folder contains a small Node.js web application suitable for Elastic Beanstalk deployment.

## Run Locally

```bash
npm install
npm start
```

Open:

```text
http://localhost:8080
```

## Elastic Beanstalk Deployment Steps

1. Login to AWS Console.
2. Open Elastic Beanstalk.
3. Click Create Application.
4. Enter application name.
5. Select Platform as Node.js.
6. Upload this project as a zip file.
7. Click Create Environment.
8. Wait until environment health becomes green.
9. Open the generated Elastic Beanstalk URL.

## EB CLI Commands

```bash
eb init
eb create wad-practical-env
eb open
eb deploy
eb terminate
```

## Conclusion
The web application can be hosted on AWS Elastic Beanstalk using the AWS Console or EB CLI.
