import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    username: '', 
    password: '', 
    confirmPassword: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg relative overflow-hidden p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel w-full max-w-md p-8 rounded-2xl shadow-2xl relative z-10"
      >
        <Link to="/" className="inline-flex items-center text-sm text-muted hover:text-white mb-6 transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back to Home
        </Link>
        
        <h2 className="text-3xl font-bold text-white text-center mb-8">Create Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
            <input 
              type="text" 
              required
              className="w-full bg-surface border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
            <input 
              type="email" 
              required
              className="w-full bg-surface border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
            <input 
              type="text" 
              required
              className="w-full bg-surface border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
            <input 
              type="password" 
              required
              className="w-full bg-surface border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <div className="relative">
            <CheckCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={18} />
            <input 
              type="password" 
              required
              className="w-full bg-surface border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-primary-contrast font-bold py-3 rounded-lg hover:bg-green-400 transition-colors shadow-lg shadow-primary/20 mt-4"
          >
            Register
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold hover:text-green-400">
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
