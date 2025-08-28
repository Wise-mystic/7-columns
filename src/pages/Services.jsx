
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building2, 
  Leaf, 
  Landmark, 
  HardHat, 
  FileText, 
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Architecture',
      description: 'Custom homes that reflect your lifestyle while embracing futuristic Ghanaian architectural elements and smart living solutions.',
      features: [
        'Custom home design',
        'Villa and estate planning',
        'Renovation and extensions',
        'Interior space planning',
        'Traditional-modern fusion'
      ],
      image: 'Modern residential house with traditional Ghanaian architectural elements and landscaping'
    },
    {
      icon: Building2,
      title: 'Commercial Architecture',
      description: 'Innovative office buildings, retail spaces, and mixed-use developments that drive future business success and adaptability.',
      features: [
        'Office building design',
        'Retail and shopping centers',
        'Mixed-use developments',
        'Industrial facilities',
        'Hospitality projects'
      ],
      image: 'Contemporary commercial building with glass facade and modern design in Accra'
    },
    {
      icon: Leaf,
      title: 'Sustainable Design',
      description: 'Eco-friendly architectural solutions optimized for Ghana\'s tropical climate, building a greener and more resilient future.',
      features: [
        'Green building certification',
        'Solar energy integration',
        'Natural ventilation systems',
        'Rainwater harvesting',
        'Local material usage'
      ],
      image: 'Eco-friendly building with solar panels, green roof, and natural ventilation systems'
    },
    {
      icon: Landmark,
      title: 'Cultural & Public Buildings',
      description: 'Iconic structures that serve communities while celebrating Ghanaian culture and heritage through a forward-looking lens.',
      features: [
        'Community centers',
        'Educational facilities',
        'Religious buildings',
        'Cultural institutions',
        'Government buildings'
      ],
      image: 'Modern cultural center with traditional Ghanaian design motifs and public spaces'
    },
    {
      icon: HardHat,
      title: 'Construction Management',
      description: 'Comprehensive project oversight ensuring quality, timeline, and budget adherence with an eye on future-proof methods.',
      features: [
        'Project planning and scheduling',
        'Quality control and assurance',
        'Budget management',
        'Contractor coordination',
        'Progress monitoring'
      ],
      image: 'Construction site with project managers overseeing building progress'
    },
    {
      icon: FileText,
      title: 'Planning & Regulatory',
      description: 'Expert guidance through Ghana\'s planning processes and regulatory requirements, anticipating future developments.',
      features: [
        'Planning permit applications',
        'Building code compliance',
        'Environmental assessments',
        'Zoning consultations',
        'Regulatory approvals'
      ],
      image: 'Architects reviewing building plans and regulatory documents in office'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your vision, requirements, and budget to understand your project goals, setting a futuristic roadmap.',
      icon: Users
    },
    {
      step: '02',
      title: 'Design Development',
      description: 'Our team creates detailed designs and 3D visualizations for your approval, pushing the boundaries of architectural possibilities.',
      icon: FileText
    },
    {
      step: '03',
      title: 'Planning & Permits',
      description: 'We handle all regulatory requirements and obtain necessary approvals, ensuring a smooth path to building the future.',
      icon: CheckCircle
    },
    {
      step: '04',
      title: 'Construction Phase',
      description: 'Professional project management ensures quality delivery on time and budget, with an emphasis on innovative construction methods.',
      icon: HardHat
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Award-Winning Innovation',
      description: 'Recognized excellence in architectural design and pioneering solutions for tomorrow.'
    },
    {
      icon: Clock,
      title: 'Efficient Delivery',
      description: 'Proven track record of completing projects on schedule with optimized processes.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Future',
      description: 'Environmentally responsible designs for a greener, more sustainable tomorrow.'
    },
    {
      icon: Users,
      title: 'Client-Focused Collaboration',
      description: 'Collaborative process ensuring your vision becomes a futuristic reality.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - 7 Colums | Futuristic Architectural Solutions</title>
        <meta name="description" content="Explore our comprehensive and futuristic architectural services including innovative residential design, advanced commercial architecture, sustainable building solutions, and cutting-edge construction management in Ghana." />
        <meta property="og:title" content="Services - 7 Colums | Futuristic Architectural Solutions" />
        <meta property="og:description" content="Explore our comprehensive and futuristic architectural services including innovative residential design, advanced commercial architecture, sustainable building solutions, and cutting-edge construction management in Ghana." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-900 to-amber-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <img  
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Architectural services and design process"
         src="https://images.unsplash.com/photo-1581093196867-ca3dba3c721b" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Our Futuristic Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive architectural solutions tailored to Ghana's unique landscape, culture, and climate, with a vision for tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Architectural Solutions for Tomorrow
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide end-to-end architectural services that bring your vision to life, future-proofing your investments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover" 
                    alt={service.title}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white"
                  >
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Future-Forward Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional, future-ready results from initial concept to final delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-amber-600">{step.step}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transform translate-x-4"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 7 Colums
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the difference that expertise, dedication, and innovation make in shaping the future of architecture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss how our comprehensive architectural services can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-amber-600 px-8 py-4 text-lg"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg"
              >
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
