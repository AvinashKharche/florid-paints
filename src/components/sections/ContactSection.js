import React, { useState } from 'react';
import Toast from '../ui/Toast';
import FormInput from '../ui/FormInput';
import FormSelect from '../ui/FormSelect';
import FormTextArea from '../ui/FormTextArea';
import Button from '../ui/Button';
import SectionLayout from '../layout/SectionLayout';

const PROJECT_TYPES = [
  { value: 'interior', label: 'Interior Painting' },
  { value: 'exterior', label: 'Exterior Painting' },
  { value: 'commercial', label: 'Commercial Painting' },
  { value: 'specialty', label: 'Specialty Finishes' }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    details: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

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
    
    // Validate form fields
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    } else if (!formData.email.trim()) {
      toast.error('Please enter your email');
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    } else if (!formData.phone.trim()) {
      toast.error('Please enter your phone number');
      return;
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/.test(formData.phone)) {
      toast.error('Please enter a valid phone number');
      return;
    } else if (!formData.projectType) {
      toast.error('Please select a project type');
      return;
    } else if (!formData.details.trim()) {
      toast.error('Please provide project details');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object for Netlify
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact');
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString()
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        details: ''
      });

      toast.success('Thank you! We will contact you soon.');
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionLayout
      id="contact"
      title="Get in Touch"
      description="Request a quote or consultation for your painting project"
      background="dark"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl animate-fade-in">
          <form 
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleGetQuote} 
            className="space-y-8"
          >
            {/* Netlify Form Requirements */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <input name="bot-field" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormInput
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                label="Your Name"
                error={formErrors.name}
                required
              />
              <FormInput
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                label="Phone Number"
                error={formErrors.phone}
                required
              />
            </div>

            <FormInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              label="Email Address"
              error={formErrors.email}
              required
            />

            <FormSelect
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              label="Project Type (Optional)"
              options={PROJECT_TYPES}
              error={formErrors.projectType}
            />

            <FormTextArea
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              label="Project Details"
              error={formErrors.details}
              required
            />

            <Button
              type="submit"
              isLoading={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? 'Submitting...' : 'Request Quote'}
            </Button>
          </form>
        </div>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </SectionLayout>
  );
};

export default ContactSection; 