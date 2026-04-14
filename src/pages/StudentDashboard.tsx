import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useWellbeing } from '../contexts/WellbeingContext';
import StudentNavbar from '../components/StudentNavbar';
import WellbeingTracker from '../components/WellbeingTracker';
import MotivationalQuotes from '../components/MotivationalQuotes';
import ChatbotAssistant from '../components/ChatbotAssistant';
import DailyReflection from '../components/DailyReflection';
import QuickActions from '../components/QuickActions';
import { motion } from 'framer-motion';

// ✅ Daily Mood Emoji Component
const DailyWellbeingEmojis: React.FC<{ onMoodSelect?: (mood: number) => void }> = ({ onMoodSelect }) => {
  const { addMoodEntry, getTodaysMood } = useWellbeing();
  const [selectedMood, setSelectedMood] = useState<number | null>(getTodaysMood());

  const moods = [
    { emoji: "😢", label: "Very Low", value: 1, color: "text-red-500" },
    { emoji: "😟", label: "Low", value: 2, color: "text-orange-500" },
    { emoji: "😐", label: "Okay", value: 3, color: "text-yellow-500" },
    { emoji: "😊", label: "Good", value: 4, color: "text-green-500" },
    { emoji: "🤩", label: "Excellent", value: 5, color: "text-blue-500" },
  ];

  const handleMoodSelect = (value: number) => {
    setSelectedMood(value);
    addMoodEntry(value, "Mood selected today");
    if (onMoodSelect) onMoodSelect(value);
  };

  const getMoodLabel = () => moods.find(m => m.value === selectedMood)?.label;

  return (
    <div className="p-6 bg-white rounded-3xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        How are you feeling today?
      </h2>

      <div className="grid grid-cols-5 gap-4">
        {moods.map((mood, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            onClick={() => handleMoodSelect(mood.value)}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer bg-gray-50 hover:shadow-lg ${
              selectedMood === mood.value ? "bg-pink-100 ring-2 ring-pink-400 shadow-2xl" : ""
            }`}
          >
            <span className="text-4xl">{mood.emoji}</span>
            <p className={`mt-2 font-semibold ${mood.color}`}>{mood.label}</p>
          </motion.div>
        ))}
      </div>

      {selectedMood && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 p-4 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 font-semibold rounded-xl shadow-md text-center"
        >
          ✅ You selected <span className="font-bold">{getMoodLabel()}</span> mood today!
        </motion.div>
      )}
    </div>
  );
};

// ✅ Stress Prediction Component
const StressPrediction: React.FC = () => {
  const [inputs, setInputs] = useState({
    study_hours: "",
    sleep_hours: "",
    social_activity: "",
    screen_time: "",
    family_support: "",
    physical_activity: "",
    anxiety_level: "",
    self_esteem: "",
    peer_pressure: "",
    academic_performance: "",
  });

  const [stress, setStress] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = Object.fromEntries(
        Object.entries(inputs).map(([k, v]) => [k, Number(v)])
      );

      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.error) {
        setStress(data.stress_level);
        setCategory(data.category);
      } else {
        console.error("Prediction error:", data.error);
      }
    } catch (err) {
      console.error("API call failed:", err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-3xl shadow-xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Stress Prediction</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.keys(inputs).map((key, i) => (
          <div key={i} className="flex flex-col space-y-2">
            <label className="font-semibold capitalize text-gray-700">
              {key.replaceAll("_", " ")} <span className="text-sm text-gray-500">(0–10)</span>
            </label>
            <input
              type="number"
              name={key}
              value={inputs[key as keyof typeof inputs]}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
              placeholder="Enter value between 0 and 10"
              min={0}
              max={10}
              required
            />
          </div>
        ))}

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            🔍 Predict Stress
          </button>
        </div>
      </form>

      {stress !== null && (
        <div className="mt-4 p-4 bg-yellow-50 rounded-xl shadow-md text-center font-semibold">
          🎯 Predicted Stress Level: <span className="text-red-500">{stress}</span>/10
          <div className="mt-1 text-gray-700">Category: {category}</div>
        </div>
      )}
    </div>
  );
};

// ✅ Main Student Dashboard
const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');

  if (!user || user.role !== 'student') {
    return <div>Access denied</div>;
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-12">
            {/* Welcome Section */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-xl mb-4">
                Welcome to Your Wellness Journey
              </h1>
              <p className="text-gray-700 text-lg md:text-xl italic tracking-wide animate-pulse">
                How are you feeling today? Let's track your progress together.
              </p>
            </motion.div>

            {/* Tracker + Reflection + Emojis + Stress */}
            <div className="grid lg:grid-cols-3 gap-10">
              <motion.div
                className="lg:col-span-2 space-y-10"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <WellbeingTracker />
                <DailyWellbeingEmojis />
                <StressPrediction />
                <DailyReflection />
              </motion.div>

              {/* Inspiration + Quick Actions */}
              <motion.div
                className="space-y-10"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <MotivationalQuotes />
                <QuickActions />
              </motion.div>
            </div>
          </div>
        );
      case 'chat':
        return <ChatbotAssistant />;
      case 'inspiration':
        return (
          <div className="space-y-8">
            <MotivationalQuotes />
            <QuickActions />
          </div>
        );
      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-500 opacity-95 overflow-x-hidden">
      <StudentNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-7xl mx-auto px-6 py-12">{renderSection()}</main>
    </div>
  );
};

export default StudentDashboard;
