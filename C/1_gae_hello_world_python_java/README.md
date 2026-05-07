# CC Assignment 1 - Google App Engine Hello World

## Aim
Install Google App Engine and create hello world and simple web applications using Python or Java.

## Python App

### Run Locally

```bash
cd python_app
pip install -r requirements.txt
python main.py
```

Open:

```text
http://localhost:8080
```

### Deploy

```bash
gcloud app deploy
gcloud app browse
```

## Java App

### Run Locally

```bash
cd java_app
mvn package
mvn appengine:run
```

Open:

```text
http://localhost:8080
```

### Deploy

```bash
mvn appengine:deploy
```

## Conclusion
A simple hello world web application was created for Google App Engine standard environment.
