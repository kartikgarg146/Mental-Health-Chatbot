# 🌿 WellSpring

> A student well-being platform with AI chat support, mood tracking, counsellor booking, and wellness resources — all in one place.

![WellSpring](https://img.shields.io/badge/WellSpring-Student%20Well--being-blue?style=for-the-badge&logo=heart)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)
![Deployed](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat-square&logo=netlify)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

🌐 **Live Demo:** [webswellspring.netlify.app](https://webswellspring.netlify.app)

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)

---

## 🌱 About

**WellSpring** is a student well-being platform designed to support mental health and personal growth. It provides students with tools to track their daily mood, reflect on their thoughts, chat anonymously with an AI companion, book sessions with professional counsellors, and access curated wellness resources.

> *"Every journey begins with a single step towards growth, healing, and discovering your inner strength."*

---

## ✨ Features

### 👨‍🎓 Student Portal
- 📊 **Daily Well-being Tracker** — Log your mood (Very Low → Excellent) and track Today, Weekly Avg, and Monthly Avg
- 🎯 **Activity Logger** — Log activities like Exercise, Meditation, Reading, Study, Sleep, Social Time, and more
- 💭 **Daily Reflection** — Write what you're grateful for and share your thoughts
- 💡 **Daily Inspiration** — Get rotating motivational quotes to start your day right

### 🤖 AI Chatbot — *"Need a Friend?"*
- Powered by **Google Gemini API**
- Anonymous, judgment-free AI chat support
- Always available for a conversation when you need it most

### 👩‍⚕️ Counsellor Portal
- 📅 **Book a Session** — Schedule anonymous one-on-one sessions with top professional counsellors
- 🔒 **Complete Privacy** — Connect with counsellors while maintaining full anonymity

### 📚 Books Hub
- Access a curated library of self-help and wellness books
- Browse resources for mental health, mindfulness, and personal growth

### 🎥 Videos & Broadcasts
- Watch motivational and wellness videos
- Join live broadcasts, events, and wellness workshops

### ⚡ Quick Actions Dashboard
- One-click access to Book Counsellor, Browse Books, Watch Videos, and Live Broadcasts

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS |
| AI Chatbot | Google Gemini API |
| Backend | Node.js / Python |
| Database | MongoDB / Firebase |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Git](https://git-scm.com/)
- A [Google Gemini API Key](https://aistudio.google.com/)

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/wellspring.git
   cd wellspring
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key
   REACT_APP_BACKEND_URL=your_backend_url
   ```

4. **Run the app**
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

---

## 📁 Project Structure

```
wellspring/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MoodTracker.jsx
│   │   ├── Chatbot.jsx
│   │   ├── CounsellorBooking.jsx
│   │   ├── BooksHub.jsx
│   │   └── DailyReflection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── StudentDashboard.jsx
│   │   └── CounsellorPortal.jsx
│   └── App.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

<p align="center">
  Made with ❤️ for student mental health & well-being 🌿
</p>
