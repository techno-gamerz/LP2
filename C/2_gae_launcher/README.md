# CC Assignment 2 - Use GAE Launcher

## Aim
Use Google App Engine Launcher to launch web applications.

## Procedure Using GAE Launcher

1. Install Google App Engine SDK.
2. Open Google App Engine Launcher.
3. Click File > Add Existing Application.
4. Select the application folder.
5. Select the project in launcher.
6. Click Run.
7. Open the local URL shown by launcher, usually:

```text
http://localhost:8080
```

8. Click Deploy to upload the application to Google App Engine.

## Procedure Using gcloud SDK

If GAE Launcher is not available, use Google Cloud SDK:

```bash
gcloud init
gcloud app create
gcloud app deploy
gcloud app browse
```

## Observation
The application runs locally first, then it can be deployed to Google App Engine.

## Conclusion
The web application was launched locally using GAE Launcher or Google Cloud SDK and prepared for deployment.
