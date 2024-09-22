import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import pickle

# Load the dataset
df = pd.read_csv('crop_recommendation.csv')

# Encode the labels
le = LabelEncoder()
df['label'] = le.fit_transform(df['label'])

# Select only the relevant features (excluding the index)
X = df[['temperature', 'humidity', 'ph', 'rainfall']]  # Select specific columns
y = df['label']

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the RandomForestClassifier
rf = RandomForestClassifier(n_estimators=100, random_state=42)

# Fit the model
rf.fit(X_train, y_train)

# Save the trained model
with open('crop_model.pkl', 'wb') as model_file:
    pickle.dump(rf, model_file)

# Save the label encoder
with open('label_encoder.pkl', 'wb') as le_file:
    pickle.dump(le, le_file)

print("Model training complete and files saved.")
