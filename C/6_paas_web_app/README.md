# CC Assignment 6 - Design and Deploy Web Application in PaaS

## Aim
Design and deploy a web application in a Platform as a Service environment.

## Application
A simple student information web application using Node.js and Express.

## Run Locally

```bash
npm install
npm start
```

Open:

```text
http://localhost:8080
```

## Deploy on PaaS

Possible PaaS platforms:
- Google App Engine
- AWS Elastic Beanstalk
- Render
- Heroku-like platforms

## Google App Engine Deploy

```bash
gcloud app deploy
gcloud app browse
```

## Elastic Beanstalk Deploy

```bash
eb init
eb create cc-paas-env
eb open
```

## Conclusion
A web application was designed and prepared for deployment on a PaaS platform.
