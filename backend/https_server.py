from flask import Flask, send_from_directory, jsonify
from backend.api_routes import get_data
import os

# Flask app pointing to project root for static files
app = Flask(__name__, static_folder='../')

# Serve the main index.html
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Serve all other static files (JS, CSS, images, etc.)
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

# API endpoint
@app.route('/api/data')
def api_data():
    return jsonify(get_data())

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host='0.0.0.0', port=port)
