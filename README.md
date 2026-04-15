# 🌿 WellSpring

> AI-powered health tracker with a built-in chatbot to monitor vitals, log symptoms, and get personalized wellness insights.

![WellSpring Banner](https://img.shields.io/badge/WellSpring-Health%20Tracker-green?style=for-the-badge&logo=heart)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌱 About

**WellSpring** is a personal health tracking application powered by AI. It allows users to log and monitor their health metrics — such as vitals, symptoms, and wellness data — and interact with an intelligent chatbot that provides personalized health insights and guidance.

Whether you're tracking your daily heart rate, managing a chronic condition, or simply staying on top of your wellness journey, WellSpring makes it simple, smart, and accessible.

---

## ✨ Features

- 🤖 **AI Chatbot** — Get instant answers to health-related queries powered by AI
- 📊 **Health Dashboard** — Visualize your vitals and health trends over time
- 💓 **Vitals Tracker** — Monitor heart rate, blood pressure, sugar levels, and more
- 🔔 **Smart Reminders** — Get reminders for medications and health checkups
- 🔒 **Secure & Private** — Your health data stays safe and encrypted
- 📱 **Responsive Design** — Works seamlessly on desktop and mobile

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS

**Backend:**
- Python (FastAPI / Flask)
- REST API

**AI / Chatbot:**
- Google Gemini API / OpenAI API

**Database:**
- MongoDB / PostgreSQL

**Tools:**
- VS Code + Gemini Code Assist
- Git & GitHub

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [Python](https://www.python.org/) (v3.9+)
- [Git](https://git-scm.com/)

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/wellspring.git
   cd wellspring
   ```

2. **Set up the backend**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Set up the frontend**
   ```bash
   cd frontend
   npm install
   ```

4. **Configure environment variables**

   Create a `.env` file in the backend directory:
   ```env
   API_KEY=your_ai_api_key
   DATABASE_URL=your_database_url
   SECRET_KEY=your_secret_key
   ```

5. **Run the backend**
   ```bash
   cd backend
   python app.py
   ```

6. **Run the frontend**
   ```bash
   cd frontend
   npm start
   ```

7. Open your browser and visit `http://localhost:3000`

---

## 💻 Usage

1. **Sign up / Log in** to your WellSpring account
2. **Set up your health profile** — age, weight, existing conditions
3. **Log your vitals** daily using the dashboard
4. **Chat with the AI assistant** for health guidance
5. **View reports & trends** on your health over time

---

## 📁 Project Structure

```
wellspring/
├── backend/
│   ├── app.py
│   ├── routes/
│   ├── models/
│   ├── services/
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 💬 Contact

Have questions or suggestions? Feel free to open an issue or reach out!

---

<p align="center">Made with ❤️ and a passion for better health</p>
