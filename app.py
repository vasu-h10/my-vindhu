from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder="public")

# ✅ Serve static files correctly (JS, CSS, images, etc.)
@app.route('/<path:filename>')
def serve_static(filename):
    file_path = os.path.join(app.static_folder, filename)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, filename)
    return send_from_directory(app.static_folder, 'index.html')

# ✅ Root route
@app.route('/')
def root():
    return send_from_directory(app.static_folder, 'index.html')

# ✅ Example API endpoint
@app.route('/api/test')
def api_test():
    return jsonify({"status": "✅ Flask backend active!", "message": "API working fine"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
