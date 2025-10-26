'use client';

import React, { useState } from 'react';

export default function InstitutionalConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    idea: '',
    acceptMarketThirdParties: false,
    acceptMarketAffiliates: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.organization.trim()) newErrors.organization = 'Company/Organization is required';
    if (!formData.role.trim()) newErrors.role = 'Job Title is required';
    if (!formData.idea.trim()) newErrors.idea = 'This field is required';
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      email: '',
      organization: '',
      role: '',
      idea: '',
      acceptMarketThirdParties: false,
      acceptMarketAffiliates: false
    });
  };

  return (
    <div 
      className="relative py-[2rem] min-h-screen h-full"
      style={{
        background: 'linear-gradient(180deg, #F1F7FF 0%, rgba(255, 255, 255, 0) 100%)'
      }}
    >
      {/* Animated Grid Background */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="135" height="135" patternUnits="userSpaceOnUse">
            <path d="M 135 0 L 0 0 0 135" fill="none" stroke="#E5ECFF" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {[...Array(14)].map((_, i) => (
          <image
            key={i}
            x={i * 135 - 1.25}
            y="0"
            width="2.5"
            height="72.5"
            href="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/KhPZRISjp_EAAAAAQDAAAAgADlxJAQFr/original"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="5s"
              begin={`${Math.random() * 2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="0;1127.5"
              dur="5s"
              begin={`${Math.random() * 2}s`}
              repeatCount="indefinite"
            />
          </image>
        ))}
      </svg>

      {/* Main Content */}
      <div className="w-full max-w-[1160px] mx-auto py-[2rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-16 px-4">
        {/* Left Section */}
        <div className="self-stretch pt-12 flex flex-col gap-8 flex-1">
          <img
            className="w-[120px] h-[120px] rounded-xl"
            src="https://mdn.alipayobjects.com/huamei_rqgebe/afts/img/wvZ2SoOqMYYAAAAAYUAAAAgADlxJAQFr/original"
            alt="Request for Institutional Consultation"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-black text-[42px] font-medium leading-tight">
              Request for Institutional Consultation
            </h2>
            <p className="text-[#00040C] text-base opacity-60">
              Jovay is a high-performance, developer-friendly Layer 2 scaling solution that aims to break through the scalability bottleneck of blockchain through innovative technologies while maintaining compatibility with the Ethereum ecosystem.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-8 bg-white rounded-2xl shadow-lg w-full max-w-[540px]">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Please enter your name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Please enter your email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Organization Field */}
          <div className="mb-6">
            <label htmlFor="organization" className="block text-sm font-medium mb-2">
              Company/Organization <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Please enter your organization"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.organization ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.organization && <p className="text-red-500 text-xs mt-1">{errors.organization}</p>}
          </div>

          {/* Job Title Field */}
          <div className="mb-6">
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Please enter your job title"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.role ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
          </div>

          {/* Idea Field */}
          <div className="mb-6">
            <label htmlFor="idea" className="block text-sm font-medium mb-2">
              What are you hoping to build or learn about? <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="idea"
              name="idea"
              value={formData.idea}
              onChange={handleChange}
              placeholder="Please enter what you are hoping to build or learn about"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.idea ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.idea && <p className="text-red-500 text-xs mt-1">{errors.idea}</p>}
          </div>

          {/* Privacy Notice */}
          <div className="text-black/90 text-xs mb-3">
            By clicking Submit above, I acknowledge and agree to the collection, use, transfer, disclosure and processing of my personal data as set out in the
            <a className="mx-1 text-blue-600 hover:underline" href="https://docs.jovay.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>.
          </div>

          <div className="text-black/90 text-xs mb-3">
            Jovay Labs Company Limited would like to use your name and email address to send you marketing communications in relation to our Services as described in the
            <a className="mx-1 text-blue-600 hover:underline" href="https://docs.jovay.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>, but we cannot do so without your consent.
          </div>

          {/* Checkbox 1 */}
          <div className="mb-3">
            <label className="flex items-start gap-2 text-black/90 text-xs cursor-pointer">
              <input
                type="checkbox"
                name="acceptMarketThirdParties"
                checked={formData.acceptMarketThirdParties}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span>I would like to receive direct marketing communications from Jovay Labs Company Limited.</span>
            </label>
          </div>

          <div className="text-black/90 text-xs mb-3">
            We would also like to share (for gain) your name and email address with our affiliated companies or third party service providers selected by us so that we or they may send you marketing communications in relation to their products and services as described in the
            <a className="mx-1 text-blue-600 hover:underline" href="https://docs.jovay.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>, but we cannot do so without your consent.
          </div>

          {/* Checkbox 2 */}
          <div className="mb-3">
            <label className="flex items-start gap-2 text-black/90 text-xs cursor-pointer">
              <input
                type="checkbox"
                name="acceptMarketAffiliates"
                checked={formData.acceptMarketAffiliates}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span>I would like to receive direct marketing communications from Jovay's affiliated companies and/or third party service providers selected by Jovay.</span>
            </label>
          </div>

          <div className="text-black/45 text-xs mb-4">
            You may opt out of receiving marketing communications at any time by using the unsubscribe facility outlined in the marketing communication or by contacting us at
            <a className="mx-1 text-blue-600 hover:underline" href="mailto:privacy@jovay.io" target="_blank" rel="noopener noreferrer">
              privacy@jovay.io
            </a>.
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-base hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Submit
            <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
              <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}