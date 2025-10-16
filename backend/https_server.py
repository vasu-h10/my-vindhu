from flask import Flask, send_from_directory, jsonify
from api_routes import get_data
import os

app = Flask(__name__, static_folder='../')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/data')
def api_data():
    return jsonify(get_data())

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host='0.0.0.0', port=port)
