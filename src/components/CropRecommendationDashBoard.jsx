import React, { useState } from 'react';
import { PredictingLoader } from './PredictingLoader';
import './styles.css'; // Make sure to import your CSS file

export function CropRecommendationDashBoard() {
    const [canShow, setShow] = useState(false);
    const [formData, setFormData] = useState({
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: ''
    });
    const [isLoading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [isVisible, setVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setVisible(true);
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setResult(data); // Set the result from the response
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
        setTimeout(() => {
            setLoading(false);
            setShow(true);
        }, 2000);
    };

    return (
        <>
            {!isVisible && (
                <div className="min-h-screen bg-green-100 flex p-8">
                    <div className="max-w-md bg-white p-6 rounded shadow-md flex-shrink-0">
                        <h1 className="text-4xl font-bold text-left text-gray-800 mb-8">
                            Crop Recommendation
                        </h1>

                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="temperature">
                                    Temperature (°C)
                                </label>
                                <input
                                    type="number"
                                    id="temperature"
                                    name="temperature"
                                    value={formData.temperature}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="humidity">
                                    Humidity (%)
                                </label>
                                <input
                                    type="number"
                                    id="humidity"
                                    name="humidity"
                                    value={formData.humidity}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ph">
                                    pH Level
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    id="ph"
                                    name="ph"
                                    value={formData.ph}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rainfall">
                                    Rainfall (mm)
                                </label>
                                <input
                                    type="number"
                                    id="rainfall"
                                    name="rainfall"
                                    value={formData.rainfall}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="flex-grow flex items-center justify-center pl-8">
                        <h2 className="text-3xl font-bold text-gray-800 animate-text">
                            We Predict Crops that best suit your land
                        </h2>
                    </div>
                </div>
            )}
            {isLoading && <PredictingLoader />}
            {canShow && result && (
                <div className="bg-white p-6 rounded shadow-md mt-6">
                    <h2 className="text-2xl font-bold mb-4">
                        Prediction Result
                    </h2>
                    <p className="text-lg">
                        Recommended Crop: <strong className="text-green-600">{result.prediction}</strong>
                    </p>
                    <div className="mt-2">
                        <p className="text-sm text-gray-600">
                            Thank you for using our Crop Recommendation system! We hope this helps you choose the best crop for your conditions.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
