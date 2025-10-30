from flask import Blueprint, jsonify, request
from backend.utils import load_data

api = Blueprint("api", __name__)

@api.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from backend!"})

@api.route("/api/data")
def data():
    data = load_data()
    return jsonify(data)
