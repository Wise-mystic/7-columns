
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Award, Users, Building, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Building },
    { number: '12+', label: 'Years of Innovation', icon: Award },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '25+', label: 'Awards Won', icon: CheckCircle },
  ];

  const features = [
    {
      title: 'Local Expertise',
      description: 'Deep understanding of Ghanaian culture, climate, and future building regulations.',
    },
    {
      title: 'Futuristic Standards',
      description: 'World-class design principles and cutting-edge construction methodologies.',
    },
    {
      title: 'Sustainable Design',
      description: 'Eco-friendly solutions optimized for tropical climate conditions and future resilience.',
    },
    {
      title: 'Full-Service Approach',
      description: 'From concept to completion, we handle every aspect of your project with a forward-looking perspective.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Home - 7 Colums | Futuristic Architecture Firm in Ghana</title>
        <meta name="description" content="Transform your vision into reality with Ghana's futuristic architecture firm. Specializing in innovative residential, commercial, and sustainable design with local expertise and future-forward standards." />
        <meta property="og:title" content="Home - 7 Colums | Futuristic Architecture Firm in Ghana" />
        <meta property="og:description" content="Transform your vision into reality with Ghana's futuristic architecture firm. Specializing in innovative residential, commercial, and sustainable design with local expertise and future-forward standards." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-7columns-black via-7columns-black to-7columns-gold">
          <img  
            className="w-full h-full object-cover opacity-30" 
            alt="Modern architectural building in Ghana"
           src="https://images.unsplash.com/photo-1678315318542-0219e978baae" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Designing Ghana's
              <span className="block gradient-text">Architectural Future</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Where traditional craftsmanship meets groundbreaking innovation. We create exceptional spaces that honor Ghana's heritage while embracing tomorrow's possibilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 text-lg"
              >
                <Link to="/gallery">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-amber-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Building Dreams with
                <span className="gradient-text"> Futuristic Ghanaian Design</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                For over a decade, 7 Colums has been at the forefront of Ghana's architectural innovation. We blend time-honored local traditions with cutting-edge design principles to create spaces that are both culturally authentic and globally competitive, shaping the built environment of tomorrow.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={feature.title} className="space-y-2">
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img  
                  className="w-full h-96 object-cover" 
                  alt="Architectural team working on building plans"
                 src="https://images.unsplash.com/photo-1581093196867-ca3dba3c721b" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Award Winning</div>
                    <div className="text-sm text-gray-600">Futuristic Design Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
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
              Comprehensive Architectural Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From residential homes to commercial complexes, we deliver innovative design solutions tailored to Ghana's unique landscape and cultural future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Design',
                description: 'Custom homes that reflect your lifestyle and embrace futuristic Ghanaian architectural elements.',
                image: 'Modern residential house with traditional Ghanaian architectural elements'
              },
              {
                title: 'Commercial Architecture',
                description: 'Innovative office buildings and retail spaces that drive future business success.',
                image: 'Contemporary commercial building with glass facade in Accra'
              },
              {
                title: 'Sustainable Design',
                description: 'Eco-friendly solutions optimized for Ghana\'s tropical climate, building a greener tomorrow.',
                image: 'Green building with solar panels and natural ventilation systems'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    alt={service.title}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
              Let's discuss how we can bring your architectural vision to life with our expertise and passion for exceptional, futuristic design.
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
                <Link to="/gallery">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
