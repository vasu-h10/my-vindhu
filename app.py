from flask import Flask, send_from_directory

app = Flask(__name__, static_folder="public")

# Serve static files (JS, CSS, etc.)
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

# Serve index.html for root and any unmatched routes
@app.route('/')
@app.route('/<path:subpath>')
def serve_index(subpath=None):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
