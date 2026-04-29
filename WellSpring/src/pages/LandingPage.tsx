import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  BookOpen,
  Sparkles,
  Shield,
  Video,
  Mic,
  Lock,
  UserCheck,
  Target,
  Calendar,
  PenTool,
} from "lucide-react";

const LandingPage: React.FC = () => {
  const navigate = useNavigate(); // React Router v6 navigation

  const heroImage =
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#ecfdf5]">

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center shadow-2xl"
          >
            <Heart className="w-12 h-12 text-white fill-white" />
          </motion.div>
          <p className="text-lg md:text-xl text-gray-700 font-medium max-w-3xl leading-relaxed">
            "Time will heal everything, and you are tougher than you think."
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="z-10 text-center mt-8"
        >
          <h1
            className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800"
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1 }}
          >
            WellSpring
          </h1>
          <p
            className="mt-6 text-xl md:text-2xl italic text-gray-700 max-w-2xl mx-auto"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            "Peace begins with a smile, and every smile makes you stronger."
          </p>

          <div className="mt-10 flex gap-6 justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/student-auth")}
              className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-12 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
            >
              Student Portal
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/counsellor-auth")}
              className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-12 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
            >
              Counsellor Portal
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Reflection Section */}
      <section
        className="relative w-full h-screen bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-indigo-800/40 to-cyan-800/50 backdrop-blur-sm" />
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6 max-w-5xl bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6">
            A Moment of Reflection
          </h2>
          <p className="text-lg md:text-2xl text-white/95 leading-relaxed">
            Breathe, notice, and take one small step. Healing is a process — we walk with you.
          </p>
        </motion.div>
      </section>

      {/* Curated Resources Section */}
      <section className="py-24 min-h-screen bg-gradient-to-br from-[#fef3c7] via-[#f0f9ff] to-[#ecfdf5]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-5xl font-semibold text-gray-800 mb-16 text-center"
          >
            Curated Resources
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[ 
              { icon: <BookOpen className="w-12 h-12 text-emerald-500 mx-auto mb-4" />, title: "Books", desc: "Hand-picked reads to inspire growth and healing." },
              { icon: <Video className="w-12 h-12 text-sky-500 mx-auto mb-4" />, title: "TED Talks", desc: "Talks from experts to fuel positivity and resilience." },
              { icon: <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-4" />, title: "Daily Tips", desc: "Small steps and nudges to stay motivated every day." },
              { icon: <Mic className="w-12 h-12 text-purple-600 mx-auto mb-4" />, title: "Podcasts", desc: "Listen to inspiring voices that guide and motivate you." },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: i * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-white/50"
              >
                {c.icon}
                <h3 className="font-semibold text-xl mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Need a Friend Chatbot */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-10 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl flex items-center gap-8 hover:shadow-3xl transform transition-all duration-300 border border-white/60"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center shadow-lg">
                <Heart className="w-12 h-12 text-pink-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Need a Friend</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">A quick sentiment-aware chat assistant to help you feel heard.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                >
                  Open
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#fef3c7] to-[#ecfdf5]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-8 font-serif">
              Why Choose WellSpring
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're committed to providing a safe, secure, and supportive environment for your mental health journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[ 
              { icon: <Shield className="w-10 h-10 text-blue-600" />, title: "Privacy First", desc: "Your privacy is paramount.", bgColor: "bg-blue-100" },
              { icon: <Lock className="w-10 h-10 text-green-600" />, title: "Secure Conversations", desc: "Encrypted end-to-end.", bgColor: "bg-green-100" },
              { icon: <UserCheck className="w-10 h-10 text-purple-600" />, title: "Expert Support", desc: "Licensed professionals ready to help.", bgColor: "bg-purple-100" },
              { icon: <Sparkles className="w-10 h-10 text-orange-600" />, title: "Holistic Approach", desc: "Therapy + community + tools.", bgColor: "bg-orange-100" },
              { icon: <Lock className="w-10 h-10 text-red-600" />, title: "End-to-End Encryption", desc: "Military-grade secure.", bgColor: "bg-red-100" },
              { icon: <Target className="w-10 h-10 text-teal-600" />, title: "Our Mission", desc: "Accessible mental health support.", bgColor: "bg-teal-100" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
              >
                <div className={`w-20 h-20 mb-8 ${feature.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#ecfdf5] to-[#fef3c7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-8 font-serif">
              Join Our Community
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connect with others on similar journeys, participate in healing activities, and grow together in a supportive environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[ 
              { icon: <Users className="w-14 h-14 text-indigo-600" />, title: "Peer Support Groups", desc: "Share and connect with peers.", gradient: "from-blue-100 to-indigo-100" },
              { icon: <Calendar className="w-14 h-14 text-emerald-600" />, title: "Events & Workshops", desc: "Participate in wellness events.", gradient: "from-green-100 to-emerald-100" },
              { icon: <PenTool className="w-14 h-14 text-rose-600" />, title: "Guided Journals", desc: "Structured journaling prompts.", gradient: "from-pink-100 to-rose-100" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-white/50"
              >
                <div className={`w-24 h-24 mx-auto mb-8 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gradient-to-br from-[#f0f9ff] via-[#ecfdf5] to-[#fef3c7]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-lg"
            >
              <Heart className="w-6 h-6 text-white fill-white" />
            </motion.div>
            <h3 className="text-4xl font-bold font-serif text-gray-800">WellSpring</h3>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-10 mb-10"
          >
            {["About", "Privacy", "Help", "Contact", "Terms"].map((link, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-800 transition font-medium text-lg"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed mb-4"
          >
            WellSpring is committed to providing accessible mental health resources and support. If you're in crisis, please contact emergency services or a crisis helpline immediately.
          </motion.p>
          <p className="text-gray-400 text-sm">© 2026 WellSpring. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
