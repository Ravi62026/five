'use client';

import { useState } from 'react';

export default function ContactUs({ onClose, isModal = false }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    phoneCode: '+965',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // API Base URL - use environment variable or fallback to development
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear message when user starts typing
    if (message.text) {
      setMessage({ type: '', text: '' });
    }
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setMessage({ type: 'error', text: 'First name is required' });
      return false;
    }
    if (!formData.lastName.trim()) {
      setMessage({ type: 'error', text: 'Last name is required' });
      return false;
    }
    if (!formData.phone.trim()) {
      setMessage({ type: 'error', text: 'Phone number is required' });
      return false;
    }
    if (!formData.message.trim()) {
      setMessage({ type: 'error', text: 'Message is required' });
      return false;
    }
    // Validate email format if provided
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    setMessage({ type: '', text: '' });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/users/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          phone: formData.phone.trim(),
          phoneCode: formData.phoneCode || '+965',
          email: formData.email.trim() || '',
          message: formData.message.trim()
        })
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ 
          type: 'success', 
          text: 'Thank you! Your message has been submitted successfully. We will get back to you soon.' 
        });
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          phoneCode: '+965',
          email: '',
          message: ''
        });

        // Auto-close modal after 3 seconds if it's a modal
        if (isModal && onClose) {
          setTimeout(() => {
            onClose();
          }, 3000);
        }
      } else {
        setMessage({ 
          type: 'error', 
          text: result.message || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setMessage({ 
        type: 'error', 
        text: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const containerClasses = isModal 
    ? "fixed inset-0 z-50 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8"
    : "w-full flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-screen";

  return (
    <div className={containerClasses}>
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6">
          <div className="flex-1">
            <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Contact Us!
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Have a question or need help? We&apos;re here for you.
            </p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer flex-shrink-0 ml-4"
              aria-label="Close"
            >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8 md:pb-10">
          {/* First Name and Last Name - Side by side on desktop, stacked on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
            <div className="flex-1">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-gray-100 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-800 placeholder:text-gray-400 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#FE7E39]/50 focus:bg-white transition-colors"
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-gray-100 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-800 placeholder:text-gray-400 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#FE7E39]/50 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Phone Number Section */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5 md:mb-6">
            {/* Country Code Selector */}
            <div className="flex-shrink-0">
              <div className="flex items-center px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 bg-gray-100 border border-gray-200 rounded-xl sm:rounded-2xl">
                {/* Kuwait Flag Icon */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 mr-2 sm:mr-3">
                  <svg
                    viewBox="0 0 24 16"
                    className="w-full h-full rounded"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Kuwait Flag */}
                    <rect width="24" height="5.33" fill="#007A3D" />
                    <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
                    <rect y="10.67" width="24" height="5.33" fill="#CE1126" />
                    <polygon points="0,0 8,0 0,16" fill="#000000" />
                  </svg>
                </div>
                <span className="text-gray-800 text-sm sm:text-base md:text-lg font-medium">+965</span>
              </div>
            </div>
            {/* Phone Number Input */}
            <div className="flex-1">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="88776644"
                required
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-gray-100 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-800 placeholder:text-gray-400 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#FE7E39]/50 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-4 sm:mb-5 md:mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-gray-100 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-800 placeholder:text-gray-400 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#FE7E39]/50 focus:bg-white transition-colors"
            />
          </div>

          {/* Message Box */}
          <div className="mb-4 sm:mb-5 md:mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              rows={4}
              required
              className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-gray-100 border border-gray-200 rounded-xl sm:rounded-2xl text-gray-800 placeholder:text-gray-400 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#FE7E39]/50 focus:bg-white transition-colors resize-none"
            />
          </div>

          {/* Success/Error Message */}
          {message.text && (
            <div className={`mb-4 sm:mb-5 md:mb-6 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg ${
              message.type === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-700' 
                : 'bg-red-50 border border-red-200 text-red-700'
            }`}>
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 sm:py-3.5 md:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold sm:font-semibold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            style={{
              background: loading 
                ? 'linear-gradient(90deg, #999999 0%, #777777 100%)'
                : 'linear-gradient(90deg, #FF722D 0%, #FFA436 100%)'
            }}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

