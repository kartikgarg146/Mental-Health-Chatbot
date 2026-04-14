import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import pickle

# Load dataset
df = pd.read_csv("mental_health.csv")

# Select important features
important_features = [
    "study_hours",
    "sleep_hours",
    "social_activity",
    "screen_time",
    "family_support",
    "physical_activity",
    "anxiety_level",
    "self_esteem",
    "peer_pressure",
    "academic_performance"
]

X = df[important_features]
y = df["stress_level"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train Random Forest model
model = RandomForestRegressor(n_estimators=200, max_depth=12, random_state=42)
model.fit(X_train, y_train)

# Save model + features inside dict ✅
with open("best_model.pkl", "wb") as f:
    pickle.dump({"model": model, "features": important_features}, f)

print("✅ Model trained and saved as best_model.pkl (with features)")
