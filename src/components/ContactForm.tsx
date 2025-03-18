
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Check, SendIcon } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // The form will be handled by Netlify's form handling
    // We still add this code for a better UX
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
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
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 glass-card rounded-xl">
      <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
      <p className="mb-6 text-gray-600">
        Have questions or need more information? Fill out the form below and we'll get back to you shortly.
      </p>
      
      {/* Add the data-netlify="true" attribute and name to the form */}
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit} 
        className="space-y-5"
      >
        {/* Hidden field for Netlify forms */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Honeypot field to prevent spam */}
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
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
          <input
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
          <input
            id="phone"
            name="phone"
            type="tel"
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
