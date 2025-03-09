import React, { useState } from 'react';
import Toast from '../ui/Toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    details: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const validateForm = () => {
    const errors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    // Project type validation
    if (!formData.projectType) {
      errors.projectType = 'Please select a project type';
    }

    // Details validation
    if (!formData.details.trim()) {
      errors.details = 'Please provide project details';
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleGetQuote = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', formData);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          projectType: '',
          details: ''
        });
        showToast('Quote request submitted successfully! We\'ll get back to you soon.', 'success');
      } catch (error) {
        console.error('Error submitting form:', error);
        showToast('Failed to submit quote request. Please try again.', 'error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setFormErrors(errors);
      showToast('Please fix the errors in the form.', 'error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Request a quote or consultation for your painting project
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl animate-fade-in">
            <form onSubmit={handleGetQuote} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className={`w-full px-5 py-4 bg-gray-800/50 rounded-xl text-white border
                             ${formErrors.name ? 'border-red-500' : 'border-gray-600'}
                             focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                             transition-all duration-300 placeholder-shown:border-gray-700 peer`}
                  />
                  <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300
                                  peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-primary-400
                                  peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm">
                    Your Name
                  </label>
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                  )}
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className={`w-full px-5 py-4 bg-gray-800/50 rounded-xl text-white border
                             ${formErrors.email ? 'border-red-500' : 'border-gray-600'}
                             focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                             transition-all duration-300 placeholder-shown:border-gray-700 peer`}
                  />
                  <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300
                                  peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-primary-400
                                  peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm">
                    Email Address
                  </label>
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="relative group">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-5 py-4 bg-gray-800/50 rounded-xl text-white border
                           ${formErrors.projectType ? 'border-red-500' : 'border-gray-600'}
                           focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                           transition-all duration-300 appearance-none cursor-pointer`}
                >
                  <option value="">Select Project Type</option>
                  <option value="interior">Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="specialty">Specialty Finishes</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {formErrors.projectType && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.projectType}</p>
                )}
              </div>

              <div className="relative group">
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder=" "
                  required
                  className={`w-full px-5 py-4 bg-gray-800/50 rounded-xl text-white border
                           ${formErrors.details ? 'border-red-500' : 'border-gray-600'}
                           focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20
                           transition-all duration-300 placeholder-shown:border-gray-700 peer resize-none`}
                ></textarea>
                <label className="absolute left-5 top-4 text-gray-400 transition-all duration-300
                                peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-primary-400
                                peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-sm">
                  Project Details
                </label>
                {formErrors.details && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.details}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-primary-600 text-white rounded-xl text-lg font-semibold
                         ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-700 hover:shadow-xl'}
                         transition-all duration-300
                         focus:outline-none focus:ring-4 focus:ring-primary-500/20
                         transform hover:scale-[1.02] active:scale-[0.98]
                         disabled:transform-none disabled:hover:scale-100`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Request Quote'}
              </button>
            </form>
          </div>
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default ContactSection; 