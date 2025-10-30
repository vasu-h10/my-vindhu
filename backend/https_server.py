from flask import Flask, send_from_directory
from backend.api_routes import api
import os

app = Flask(__name__, static_folder="../static")

# Register API routes
app.register_blueprint(api)

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/static/<path:path>")
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
