from flask import Flask, send_from_directory, jsonify
from backend.api_routes import get_data
import os

# Configure Flask to serve from 'static' folder
app = Flask(__name__, static_folder='../static')

# Serve the main index.html file
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Serve static files (CSS, JS, images, modules)
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

# Serve files from the 'modules' subfolder explicitly
@app.route('/modules/<path:filename>')
def serve_modules(filename):
    modules_path = os.path.join(app.static_folder, 'modules')
    return send_from_directory(modules_path, filename)

# Example API route (for testing)
@app.route('/api/data')
def api_data():
    return jsonify(get_data())

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
