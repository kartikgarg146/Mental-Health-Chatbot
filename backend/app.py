from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import hashlib
import json

app = Flask(__name__)

# More permissive CORS
CORS(app, 
     resources={r"/*": {"origins": "*"}},
     methods=["GET", "POST", "OPTIONS"],
     allow_headers=["Content-Type", "Authorization"])

# In-memory user database (for demo)
users_db = {}
auth_tokens = {}

# Chat responses
chat_responses = [
    "I understand. That sounds challenging. How are you feeling about it?",
    "Thank you for sharing. Remember, you're not alone in this journey.",
    "I'm here to listen. What would help you feel better?",
    "That's important to acknowledge. What support do you need right now?",
    "I appreciate you opening up. Take your time and let me know what's on your mind.",
    "It's okay to feel this way. Have you considered talking to someone about this?",
    "You're doing great by seeking support. What's troubling you?",
]

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def generate_token(email):
    token = hashlib.sha256((email + str(random.random())).encode()).hexdigest()
    auth_tokens[token] = email
    return token

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok"}), 200

@app.route('/api/register', methods=['POST', 'OPTIONS'])
def register():
    try:
        data = request.get_json(silent=True) or {}
        email = data.get("email", "").strip()
        password = data.get("password", "").strip()
        name = data.get("name", "").strip()
        role = data.get("role", "student")
        
        if not email or not password or not name:
            return jsonify({"success": False, "message": "Email, password, and name are required"}), 400
        
        if email in users_db:
            return jsonify({"success": False, "message": "User already exists"}), 409
        
        if len(password) < 6:
            return jsonify({"success": False, "message": "Password must be at least 6 characters"}), 400
        
        users_db[email] = {
            "password": hash_password(password),
            "name": name,
            "role": role
        }
        
        token = generate_token(email)
        
        return jsonify({
            "success": True,
            "message": "Registration successful",
            "token": token,
            "user": {
                "email": email,
                "name": name,
                "role": role
            }
        }), 201
        
    except Exception as e:
        print(f"Registration error: {str(e)}")
        return jsonify({"success": False, "message": "Registration failed"}), 500

@app.route('/api/login', methods=['POST', 'OPTIONS'])
def login():
    try:
        data = request.get_json(silent=True) or {}
        email = data.get("email", "").strip()
        password = data.get("password", "").strip()
        
        if not email or not password:
            return jsonify({"success": False, "message": "Email and password are required"}), 400
        
        if email not in users_db:
            return jsonify({"success": False, "message": "Invalid email or password"}), 401
        
        user_data = users_db[email]
        if user_data["password"] != hash_password(password):
            return jsonify({"success": False, "message": "Invalid email or password"}), 401
        
        token = generate_token(email)
        
        return jsonify({
            "success": True,
            "message": "Login successful",
            "token": token,
            "user": {
                "email": email,
                "name": user_data["name"],
                "role": user_data["role"]
            }
        }), 200
        
    except Exception as e:
        print(f"Login error: {str(e)}")
        return jsonify({"success": False, "message": "Login failed"}), 500

@app.route('/api/chat', methods=['POST', 'OPTIONS'])
def chat():
    try:
        # Check authentication
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if not token or token not in auth_tokens:
            return jsonify({"success": False, "answer": "Unauthorized"}), 401
        
        data = request.get_json(silent=True) or {}
        message = data.get("message", "").strip() if data else ""
        
        print(f"Chat from {auth_tokens.get(token)}: {message}")
        
        if not message:
            return jsonify({"success": False, "answer": "Please provide a message."}), 400
        
        answer = random.choice(chat_responses)
        print(f"Sending answer: {answer}")
        
        return jsonify({
            "success": True,
            "answer": answer
        }), 200
        
    except Exception as e:
        print(f"Chat error: {str(e)}")
        return jsonify({"success": False, "answer": "Server error"}), 500

if __name__ == '__main__':
    print("Starting Flask server on http://0.0.0.0:5000")
    app.run(debug=False, host='0.0.0.0', port=5000, threaded=True)
