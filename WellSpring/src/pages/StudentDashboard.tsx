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
    <div className="p-8 bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        How are you feeling today?
      </h2>

      <div className="grid grid-cols-5 gap-4">
        {moods.map((mood, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            onClick={() => handleMoodSelect(mood.value)}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`flex flex-col items-center justify-center p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
              selectedMood === mood.value 
                ? "bg-gradient-to-br from-emerald-100 to-cyan-100 ring-2 ring-emerald-400 shadow-lg shadow-emerald-500/20" 
                : "bg-slate-50 hover:bg-slate-100 hover:shadow-md border border-white/50"
            }`}
          >
            <span className="text-4xl">{mood.emoji}</span>
            <p className={`mt-2 font-semibold text-sm ${mood.color}`}>{mood.label}</p>
          </motion.div>
        ))}
      </div>

      {selectedMood && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 p-5 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 font-semibold rounded-2xl shadow-md border border-emerald-200/50 text-center"
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
    <div className="p-8 bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">📊</span>
        <h2 className="text-2xl font-bold text-gray-800">Stress Prediction</h2>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.keys(inputs).map((key, i) => (
          <div key={i} className="flex flex-col space-y-2">
            <label className="font-semibold capitalize text-gray-700 text-sm">
              {key.replaceAll("_", " ")} <span className="text-xs text-gray-500">(0–10)</span>
            </label>
            <input
              type="number"
              name={key}
              value={inputs[key as keyof typeof inputs]}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-slate-50 transition-all"
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
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            🔍 Predict Stress
          </button>
        </div>
      </form>

      {stress !== null && (
        <div className="mt-6 p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-md border border-amber-200/50 text-center font-semibold text-gray-800">
          🎯 Predicted Stress Level: <span className="text-orange-600 text-lg font-bold">{stress}</span>/10
          <div className="mt-2 text-gray-600">Category: <span className="text-emerald-600">{category}</span></div>
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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                Welcome to Your <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">Wellness Journey</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl font-medium">
                Track your progress and let's improve your mental well-being together.
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50 overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-80 w-80 bg-cyan-300/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 bg-emerald-300/10 rounded-full blur-3xl" />
      </div>
      <StudentNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">{renderSection()}</main>
    </div>
  );
};

export default StudentDashboard;
