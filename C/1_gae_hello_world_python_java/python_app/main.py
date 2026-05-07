from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return """
    <h1>Hello World from Google App Engine</h1>
    <p>This is a simple Python Flask web application.</p>
    """


@app.route("/about")
def about():
    return "<h2>About</h2><p>Cloud Computing practical using Google App Engine.</p>"


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)
