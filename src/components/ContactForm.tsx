
import React, { useState, useRef, useEffect } from 'react';
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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Convert form field names to state property names
    const stateKey = name === 'Name' ? 'name' : 
                     name === 'Email' ? 'email' : 
                     name === 'Mobile' ? 'phone' : 
                     name === 'Message' ? 'message' : name;
    
    setFormData(prev => ({ ...prev, [stateKey]: value }));
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleIframeLoad = () => {
      // Skip the initial iframe load, only process when form is submitting
      if (isSubmitting) {
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
          setIsSubmitting(false);
        }, 2000);
      }
    };

    iframe.addEventListener('load', handleIframeLoad);
    return () => iframe.removeEventListener('load', handleIframeLoad);
  }, [isSubmitting]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    setIsSubmitting(true);
    
    // Submit the form to the iframe target
    formRef.current.submit();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 glass-card rounded-xl">
      <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
      <p className="mb-6 text-gray-600">
        Have questions or need more information? Fill out the form below and we'll get back to you shortly.
      </p>
      
      {/* Hidden iframe to capture form submission response */}
      <iframe 
        ref={iframeRef}
        name="hidden_iframe" 
        id="hidden_iframe"
        title="Hidden iframe for form submission"
        style={{ display: 'none' }} 
      />
      
      <form 
        ref={formRef}
        onSubmit={handleSubmit} 
        className="space-y-5"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbzAd-1Xi0ot_g6zKjTXr2R7aOULbe5p194Sy4KFeMZyaDnHnPZ0OBKcZ4-i3Rijwqaq/exec"
        target="hidden_iframe"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input
            id="name"
            name="Name"
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
            name="Email"
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
            name="Mobile"
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
            name="Message"
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
