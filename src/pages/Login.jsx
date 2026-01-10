import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    console.log('Login attempt:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg relative overflow-hidden p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel w-full max-w-md p-8 rounded-2xl shadow-2xl relative z-10"
      >
        <Link to="/" className="inline-flex items-center text-sm text-muted hover:text-white mb-6 transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back to Home
        </Link>
        
        <h2 className="text-3xl font-bold text-white text-center mb-8">Welcome Back</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
              <input 
                type="text" 
                required
                className="w-full bg-surface border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
              <input 
                type="password" 
                required
                className="w-full bg-surface border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-400 cursor-pointer hover:text-gray-300">
              <input type="checkbox" className="mr-2 rounded border-gray-600 bg-surface text-primary focus:ring-primary" />
              Remember me
            </label>
            <a href="#" className="text-primary hover:text-green-400">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-primary-contrast font-bold py-3 rounded-lg hover:bg-green-400 transition-colors shadow-lg shadow-primary/20"
          >
            Log In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary font-semibold hover:text-green-400">
            Register
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
