# CC Assignment 8 - Firebase Authentication, GAE and Datastore

## Aim
Design an assignment to retrieve, verify and store user credentials using Firebase Authentication, Google App Engine standard environment and Google Cloud Datastore.

## Flow
1. User logs in using Firebase Authentication.
2. Firebase returns an ID token.
3. Client sends ID token to Google App Engine backend.
4. Backend verifies token using Firebase Admin SDK.
5. Backend stores verified user information in Google Cloud Datastore.

## Run Locally

```bash
pip install -r requirements.txt
python main.py
```

Open:

```text
http://localhost:8080
```

## Deploy

```bash
gcloud app deploy
gcloud app browse
```

## Required Setup

1. Create Firebase project.
2. Enable Email/Password Authentication.
3. Create Google App Engine application.
4. Enable Cloud Datastore/Firestore in Datastore mode.
5. Download Firebase service account key as `serviceAccountKey.json`.
6. Keep the key private and do not commit it to GitHub.

## API

| Method | URL | Description |
|---|---|---|
| POST | /verify | Verify Firebase token and store user |

## Conclusion
Firebase Authentication was integrated with Google App Engine and Cloud Datastore to verify and store user credentials.
