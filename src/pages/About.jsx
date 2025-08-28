import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Award, Users, Target, Heart, Building2, Lightbulb, Shield, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.'
    },
    {
      icon: Heart,
      title: 'Cultural Respect',
      description: 'Honoring Ghanaian heritage while embracing modern architectural innovations.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Creating environmentally responsible designs for a better future.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and reliable service.'
    }
  ];

  const milestones = [
    { year: '2012', event: 'Founded 7 Colums' },
    { year: '2015', event: 'Completed first major commercial project' },
    { year: '2018', event: 'Won Ghana Architecture Award' },
    { year: '2020', event: 'Expanded to sustainable design focus' },
    { year: '2022', event: 'Reached 150+ completed projects' },
    { year: '2024', event: 'Pioneering Ghana\'s architectural future' }
  ];

  const team = [
    {
      name: 'George Nii Adu',
      role: 'Founding Principal Architect',
      education: 'B.Sc, University of Ghana',
      image: '' 
    },
    {
      name: 'Akosua Mensah',
      role: 'Senior Design Director',
      education: 'M.Arch, KNUST',
      image: '' 
    },
    {
      name: 'Kofi Osu-Adu',
      role: 'Sustainability Specialist',
      education: 'M.Sc Environmental Design',
      image: '' 
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - 7 Colums | Ghana's Futuristic Architecture Firm</title>
        <meta name="description" content="Learn about 7 Colums' journey, values, and team. Over 12 years of architectural innovation in Ghana, combining local expertise with futuristic design principles." />
        <meta property="og:title" content="About Us - 7 Colums | Ghana's Futuristic Architecture Firm" />
        <meta property="og:description" content="Learn about 7 Colums' journey, values, and team. Over 12 years of architectural innovation in Ghana, combining local expertise with futuristic design principles." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-900 to-amber-900">
        <div className="absolute inset-0 bg-black/70"></div>
        <img  
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
          alt="7 Colums team in modern office"
         src="https://images.unsplash.com/photo-1681600911921-9389e819f49a" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow">
              About Our Story
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto text-shadow">
              Discover the passion, expertise, and vision that drives Ghana's futuristic architectural firm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
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
                Our Journey of
                <span className="gradient-text"> Architectural Innovation</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2012 with a vision to transform Ghana's architectural landscape, 7 Colums began as a small team of passionate architects committed to a futuristic outlook. We recognized the need for a firm that could bridge the gap between traditional Ghanaian architectural heritage and groundbreaking contemporary design demands.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Over the years, we are growing into a leading architectural firm in Ghana, completing over 150 projects across residential, commercial, and cultural sectors. Our work spans from Accra to Kumasi, Cape Coast to Tamale, koforidua to Bolgatanga, always maintaining our commitment to quality, sustainability, and cultural sensitivity while pushing design boundaries.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be recognized as innovators in sustainable design, having pioneered eco-friendly architectural solutions perfectly adapted to Ghana's tropical climate. Our team combines local expertise with international foresight, ensuring every project meets world-class standards while respecting our rich cultural heritage and shaping tomorrow's built environment.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img  
                    className="w-full h-48 object-cover rounded-lg shadow-lg" 
                    alt="Traditional Ghanaian architecture"
                   src="https://images.unsplash.com/flagged/photo-1585596358477-af166de128e5" />
                  <img  
                    className="w-full h-32 object-cover rounded-lg shadow-lg" 
                    alt="Modern building design"
                   src="https://images.unsplash.com/photo-1678315318542-0219e978baae" />
                </div>
                <div className="space-y-4 pt-8">
                  <img  
                    className="w-full h-32 object-cover rounded-lg shadow-lg" 
                    alt="Sustainable architecture"
                   src="https://images.unsplash.com/photo-1544500867-07701a7b1a92" />
                  <img  
                    className="w-full h-48 object-cover rounded-lg shadow-lg" 
                    alt="Award ceremony"
                   src="https://images.unsplash.com/photo-1698502809147-a44fea22cda4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To create exceptional architectural spaces that honor Ghana's rich cultural heritage while embracing innovative and future-forward design solutions. We are committed to delivering sustainable, functional, and aesthetically groundbreaking buildings that enhance communities and inspire future generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be West Africa's most innovative architectural firm, recognized for our futuristic designs, sustainable practices, and commitment to shaping the built environment of tomorrow. We envision a future where Ghanaian architecture sets global benchmarks while preserving our unique cultural identity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey Through Time
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                      <div className="text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to architectural innovation and shaping the future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover bg-gray-200" 
                    alt={member.name}
                   src={member.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.education}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '12+', label: 'Years of Innovation' },
              { number: '200+', label: 'Satisfied Clients' },
              { number: '25+', label: 'Awards & Recognition' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;