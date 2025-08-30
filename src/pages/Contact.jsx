import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        'Boabab Street',
        'Ashongman Estate, Dome-Kwabenya',
        'GE-066-0000',
        'Greater Accra Region, Ghana'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+233 530 853 779',
        'WhatsApp: +233 530 853 779'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@7colums.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 3:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const projectTypes = [
    'Residential Design',
    'Commercial Architecture',
    'Sustainable Design',
    'Cultural & Public Buildings',
    'Construction Management',
    'Planning & Regulatory',
    'Other'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - 7 Colums | Get Your Free Consultation</title>
        <meta name="description" content="Contact Ghana's futuristic architecture firm for your next project. Get a free consultation and discover how we can bring your architectural vision to life with innovative design." />
        <meta property="og:title" content="Contact Us - 7 Colums | Get Your Free Consultation" />
        <meta property="og:description" content="Contact Ghana's futuristic architecture firm for your next project. Get a free consultation and discover how we can bring your architectural vision to life with innovative design." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-7columns-black to-7columns-gold">
        <div className="absolute inset-0 bg-black/40"></div>
        <img  
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Contact 7 Colums office"
         src="https://images.unsplash.com/photo-1691090300410-c63128ba88ec" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Let's Build Together
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to transform your vision into reality? Get in touch with Ghana's futuristic architectural firm for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-7columns-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-center min-h-0"
              style={{ height: "fit-content" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-7columns-black-text mb-4 md:mb-6">
                Get Your Free Consultation
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                Tell us about your project and we'll provide expert guidance tailored to your needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-7columns-black-text mb-1">
                      Full Name <span className="font-bold text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-7columns-gold rounded-lg focus:ring-2 focus:ring-7columns-gold focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-7columns-black-text mb-1">
                      Email Address <span className="font-bold text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-7columns-gold rounded-lg focus:ring-2 focus:ring-7columns-gold focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-7columns-black-text mb-1">
                    Phone Number <span className="font-bold text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-7columns-gold rounded-lg focus:ring-2 focus:ring-7columns-gold focus:border-transparent transition-colors"
                      placeholder="+233 24 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-7columns-black-text mb-1">
                      Project Type <span className="font-bold text-red-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-7columns-gold rounded-lg focus:ring-2 focus:ring-7columns-gold focus:border-transparent transition-colors"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-7columns-black-text mb-1">
                    Project Description <span className="font-bold text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={7}
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-7columns-gold rounded-lg focus:ring-2 focus:ring-7columns-gold focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe your project, including location, size, budget range, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-7columns-gold to-7columns-gold-light hover:from-7columns-gold-light hover:to-7columns-gold text-white py-3 md:py-4 text-base md:text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6 flex flex-col justify-center min-h-0"
              style={{ height: "fit-content" }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-7columns-black-text mb-4 md:mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  We're here to help bring your architectural vision to life. Whether you're planning a new home, commercial building, or renovation project, our team is ready to provide expert guidance and exceptional service.
                </p>
              </div>

              <div className="grid gap-4 md:gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-4 md:p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-7columns-gold to-7columns-gold-light rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-7columns-black-text mb-1 md:mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 text-sm md:text-base">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-r from-7columns-gold to-7columns-gold-light p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {[
                    'Free initial consultation and project assessment',
                    '12+ years of architectural innovation in Ghana',
                    'Award-winning futuristic designs and sustainable solutions',
                    'Full-service approach from concept to completion',
                    'Local expertise with future-forward standards'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-7columns-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-7columns-black-text mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located at Ashongman Estate, Dome-Kwabenya, our modern office is designed to inspire creativity and collaboration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
          >
            <img  
              className="w-full h-full object-cover" 
              alt="7 Colums office location map"
             src="https://images.unsplash.com/photo-1683022929127-d97c5c34db19" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">7 Colums</h3>
              <p className="text-sm">Boabab Street, Ashongman Estate, Dome-Kwabenya, Greater Accra Region, Ghana</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;