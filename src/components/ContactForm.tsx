
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Check, SendIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create a form to submit to Google Apps Script - this avoids CORS issues
      const hiddenForm = document.createElement('form');
      hiddenForm.method = 'POST';
      hiddenForm.action = 'https://script.google.com/macros/s/AKfycbzAd-1Xi0ot_g6zKjTXr2R7aOULbe5p194Sy4KFeMZyaDnHnPZ0OBKcZ4-i3Rijwqaq/exec';
      hiddenForm.target = '_blank'; // Open response in a new tab or handle silently
      
      // Create hidden fields for each piece of data
      const nameField = document.createElement('input');
      nameField.type = 'hidden';
      nameField.name = 'Name';
      nameField.value = formData.name;
      hiddenForm.appendChild(nameField);
      
      const emailField = document.createElement('input');
      emailField.type = 'hidden';
      emailField.name = 'Email';
      emailField.value = formData.email;
      hiddenForm.appendChild(emailField);
      
      const phoneField = document.createElement('input');
      phoneField.type = 'hidden';
      phoneField.name = 'Mobile';
      phoneField.value = formData.phone;
      hiddenForm.appendChild(phoneField);
      
      const messageField = document.createElement('input');
      messageField.type = 'hidden';
      messageField.name = 'Message';
      messageField.value = formData.message;
      hiddenForm.appendChild(messageField);
      
      // Add form to body and submit it
      document.body.appendChild(hiddenForm);
      hiddenForm.submit();
      document.body.removeChild(hiddenForm);
      
      // Show success message
      setIsSuccess(true);
      toast.success('Message sent successfully!', {
        description: "We'll get back to you soon."
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setIsSuccess(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error:', error);
      toast.error('Form submission error', {
        description: 'An error occurred while sending your message.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 glass-card rounded-xl">
      <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
      <p className="mb-6 text-gray-600">
        Have questions or need more information? Fill out the form below and we'll get back to you shortly.
      </p>
      
      <form 
        onSubmit={handleSubmit} 
        className="space-y-5"
        id="contactForm"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-loanai-500 focus:ring-loanai-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-loanai-500 focus:ring-loanai-500"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-loanai-500 focus:ring-loanai-500"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-loanai-500 focus:ring-loanai-500"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting || isSuccess}
          className="w-full bg-loanai-600 hover:bg-loanai-700 py-2 px-4 rounded-md"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
              Sending...
            </span>
          ) : isSuccess ? (
            <span className="flex items-center justify-center">
              <Check className="mr-2 h-4 w-4" />
              Sent!
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <SendIcon className="mr-2 h-4 w-4" />
              Send Message
            </span>
          )}
        </Button>
      </form>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          You can also reach us directly:
        </p>
        <p className="mt-2 text-loanai-600 font-medium">Phone: +91 8660367292</p>
      </div>
    </div>
  );
};

export default ContactForm;
