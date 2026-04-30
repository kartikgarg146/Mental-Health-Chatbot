import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Heart, Mail, Lock, User, ArrowLeft } from 'lucide-react';

const StudentAuth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password, 'student');
      } else {
        await register(email, password, name, 'student');
      }
      navigate('/student-dashboard');
    } catch (error: any) {
      alert(error.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.2),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.18),_transparent_26%),linear-gradient(180deg,#020617_0%,#09142c_40%,#0c1f3d_100%)] flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      </div>
      <div className="relative w-full max-w-md z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-slate-200 hover:text-cyan-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="relative bg-slate-950/85 border border-white/10 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-cyan-500/10 p-8">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-semibold text-white mb-2">
              {isLogin ? 'Welcome Back' : 'Join Our Community'}
            </h2>
            <p className="text-slate-300">
              {isLogin ? 'Continue your wellness journey' : 'Start your path to wellbeing'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-3xl font-semibold transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-20px_rgba(14,165,233,0.8)] disabled:bg-slate-600 disabled:cursor-not-allowed"
            >
              {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-cyan-300 hover:text-cyan-100 font-medium transition-colors duration-200"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAuth;
