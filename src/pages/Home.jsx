
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  Building2, 
  Leaf, 
  Award, 
  Clock, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: 'Residential Design',
      description: 'Custom homes that reflect your lifestyle while embracing futuristic Ghanaian architectural elements.',
      link: '/services'
    },
    {
      icon: Leaf,
      title: 'Sustainable Solutions',
      description: 'Eco-friendly architectural designs optimized for Ghana\'s tropical climate and future sustainability.',
      link: '/services'
    },
    {
      icon: Award,
      title: 'Award-Winning Innovation',
      description: 'Recognized excellence in architectural design, pushing the boundaries of what\'s possible.',
      link: '/gallery'
    }
  ];

  const achievements = [
    { number: '150+', label: 'Projects Completed' },
    { number: '12+', label: 'Years of Innovation' },
    { number: '8', label: 'Regions Covered' },
    { number: '25+', label: 'Awards Won' }
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Designing Tomorrow, Today
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Transforming architectural visions into future-forward realities across Ghana. Innovative design meets cultural sensitivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-7columns-gold hover:bg-7columns-gold-light text-white px-8 py-4 text-lg"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-7columns-gold px-8 py-4 text-lg"
              >
                <Link to="/gallery">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-7columns-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-7columns-black-text mb-4">
              Our Architectural Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative architectural services that blend cutting-edge design with Ghana's rich cultural heritage, creating spaces that inspire and endure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-7columns-gold to-7columns-gold-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-7columns-black-text mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button 
                  asChild
                  variant="outline"
                  className="border-7columns-gold text-7columns-gold hover:bg-7columns-gold/10"
                >
                  <Link to={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-7columns-gold to-7columns-gold-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our Journey in Numbers
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A testament to our commitment to architectural excellence and innovation in Ghana.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/20 rounded-xl p-6"
                >
                  <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-white/80">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-7columns-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-7columns-black-text">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss how our comprehensive architectural services can transform your ideas into extraordinary spaces that stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-7columns-gold hover:bg-7columns-gold-light text-white px-8 py-4 text-lg"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-7columns-gold text-7columns-gold hover:bg-7columns-gold/10 px-8 py-4 text-lg"
              >
                <Link to="/gallery">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
