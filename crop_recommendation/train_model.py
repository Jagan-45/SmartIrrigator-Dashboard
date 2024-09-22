import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
import pickle

df = pd.read_csv('crop_recommendation.csv')

le = LabelEncoder()
df['label'] = le.fit_transform(df['label'])

X = df.drop('label', axis=1) 
y = df['label']               

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

rf = RandomForestClassifier(n_estimators=100, random_state=42)

rf.fit(X_train, y_train)

with open('crop_model.pkl', 'wb') as model_file:
    pickle.dump(rf, model_file)

with open('label_encoder.pkl', 'wb') as le_file:
    pickle.dump(le, le_file)
