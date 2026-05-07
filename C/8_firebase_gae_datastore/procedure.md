# Procedure

## Firebase Setup
1. Open Firebase Console.
2. Create a project.
3. Go to Authentication.
4. Enable Email/Password sign-in method.
5. Register a test user.
6. Generate Firebase ID token from client application.

## Google App Engine Setup
1. Open Google Cloud Console.
2. Create or select project.
3. Enable App Engine.
4. Enable Datastore or Firestore in Datastore mode.
5. Install Google Cloud SDK.
6. Run `gcloud init`.

## Backend Setup
1. Download Firebase Admin SDK service account key.
2. Rename it to `serviceAccountKey.json`.
3. Place it in this folder.
4. Run the Flask application.
5. Send Firebase ID token to `/verify`.

## Datastore Storage
Kind:

```text
VerifiedUser
```

Stored fields:
- uid
- email

## Result
Verified Firebase users are stored in Google Cloud Datastore.
