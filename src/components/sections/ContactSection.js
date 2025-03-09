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

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
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
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', formData);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
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
    <SectionLayout
      id="contact"
      title="Get in Touch"
      description="Request a quote or consultation for your painting project"
      background="dark"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl animate-fade-in">
          <form onSubmit={handleGetQuote} className="space-y-8">
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