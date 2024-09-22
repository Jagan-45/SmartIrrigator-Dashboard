from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  

with open('crop_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('label_encoder.pkl', 'rb') as le_file:
    label_encoder = pickle.load(le_file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

   
    required_features = ['temperature', 'humidity', 'ph', 'rainfall']
    if not all(feature in data for feature in required_features):
        return jsonify({"error": "Missing features in the input data."}), 400

 
    features = np.array([[data['temperature'], data['humidity'], data['ph'], data['rainfall']]])


    try:
        prediction = model.predict(features)
        prediction_label = label_encoder.inverse_transform(prediction)

        return jsonify({"prediction": prediction_label[0]})

    except ValueError as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)