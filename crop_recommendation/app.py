from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

with open('crop_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('label_encoder.pkl', 'rb') as le_file:
    label_encoder = pickle.load(le_file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    temperature = data['temperature']
    humidity = data['humidity']
    ph = data['ph']
    rainfall = data['rainfall']

    features = np.array([[temperature, humidity, ph, rainfall]])
 
    prediction_probabilities = model.predict_proba(features)[0]  
    predicted_indices = prediction_probabilities.argsort()[::-1][:5] 

    recommended_crops = [{
        'crop': label_encoder.inverse_transform([idx])[0],
        'probability': round(prediction_probabilities[idx] * 100, 2)
    } for idx in predicted_indices]

    return jsonify(recommended_crops)

if __name__ == '__main__':
    app.run(debug=True)
