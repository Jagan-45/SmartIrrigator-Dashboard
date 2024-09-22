import React from 'react';

export function PredictingLoader() {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-green-50 to-green-100">
            <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-green-200 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-green-500 border-t-transparent border-dashed rounded-full animate-spin"></div>
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-green-700">Predicting...</h2>
                    <p className="text-gray-600 mt-2">Running the model, please wait.</p>
                </div>
            </div>
        </div>
    );
}