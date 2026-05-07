from flask import Flask, jsonify, render_template, request
from google.cloud import datastore
import firebase_admin
from firebase_admin import auth, credentials

app = Flask(__name__)
datastore_client = datastore.Client()

try:
    cred = credentials.Certificate("serviceAccountKey.json")
    firebase_admin.initialize_app(cred)
except ValueError:
    pass
except FileNotFoundError:
    print("serviceAccountKey.json not found. Add it before verifying Firebase tokens.")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/verify", methods=["POST"])
def verify_user():
    data = request.get_json()
    id_token = data.get("idToken")

    if not id_token:
        return jsonify({"message": "ID token is required"}), 400

    try:
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token["uid"]
        email = decoded_token.get("email", "")

        key = datastore_client.key("VerifiedUser", uid)
        entity = datastore.Entity(key=key)
        entity.update({
            "uid": uid,
            "email": email
        })
        datastore_client.put(entity)

        return jsonify({"message": "User verified and stored", "uid": uid, "email": email})
    except Exception as error:
        return jsonify({"message": str(error)}), 401


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)
