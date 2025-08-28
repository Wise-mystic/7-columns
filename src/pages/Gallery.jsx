
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { X, MapPin, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Villa in East Legon',
      category: 'residential',
      location: 'East Legon, Accra',
      year: '2023',
      description: 'A stunning contemporary villa that seamlessly blends modern luxury with traditional Ghanaian architectural elements, hinting at future living.',
      image: 'Modern luxury villa with traditional Ghanaian architectural elements and landscaping',
      details: 'This 5-bedroom villa features sustainable design elements including solar panels, rainwater harvesting, and natural ventilation systems perfectly adapted to Ghana\'s tropical climate, showcasing a futuristic approach to residential comfort.'
    },
    {
      id: 2,
      title: 'Accra Business Center',
      category: 'commercial',
      location: 'Airport City, Accra',
      year: '2023',
      description: 'A state-of-the-art commercial complex designed to meet international business standards, built for the next generation of commerce.',
      image: 'Contemporary glass office building with modern facade in Accra business district',
      details: 'This 12-story business center incorporates green building technologies and provides flexible office spaces for modern enterprises, reflecting futuristic workspace trends.'
    },
    {
      id: 3,
      title: 'Sustainable Community Center',
      category: 'cultural',
      location: 'Kumasi, Ashanti Region',
      year: '2022',
      description: 'An eco-friendly community center that serves as a model for sustainable public architecture, embodying the future of community spaces.',
      image: 'Eco-friendly community center with solar panels and traditional design elements',
      details: 'Built using locally sourced materials and renewable energy systems, this center demonstrates our commitment to sustainable architecture and forward-thinking community development.'
    },
    {
      id: 4,
      title: 'Heritage Hotel Resort',
      category: 'commercial',
      location: 'Cape Coast, Central Region',
      year: '2022',
      description: 'A boutique hotel that celebrates Ghana\'s coastal heritage while providing modern luxury, designed for the discerning traveler of tomorrow.',
      image: 'Boutique hotel with traditional coastal architecture and modern amenities',
      details: 'This resort combines traditional coastal architecture with contemporary hospitality design, creating a unique cultural experience that bridges past and future.'
    },
    {
      id: 5,
      title: 'Contemporary Family Home',
      category: 'residential',
      location: 'Tema, Greater Accra',
      year: '2023',
      description: 'A modern family residence designed for multi-generational living, anticipating future family dynamics.',
      image: 'Contemporary family house with open spaces and traditional courtyards',
      details: 'Designed for a large family, this home features traditional courtyards reimagined for modern living with emphasis on natural light and ventilation, and future expandability.'
    },
    {
      id: 6,
      title: 'Cultural Arts Center',
      category: 'cultural',
      location: 'Tamale, Northern Region',
      year: '2021',
      description: 'A cultural center that showcases Northern Ghana\'s rich artistic heritage, designed to inspire future generations.',
      image: 'Cultural arts center with traditional Northern Ghanaian architectural motifs',
      details: 'This center features exhibition spaces, performance halls, and workshops designed to preserve and promote Northern Ghana\'s cultural traditions, while embracing modern interpretations.'
    },
    {
      id: 7,
      title: 'Green Office Complex',
      category: 'commercial',
      location: 'Spintex, Accra',
      year: '2023',
      description: 'An environmentally conscious office building with LEED certification, representing the future of corporate spaces.',
      image: 'Green office building with vertical gardens and sustainable design features',
      details: 'This LEED Gold certified building features vertical gardens, energy-efficient systems, and innovative waste management solutions, embodying a truly futuristic workspace.'
    },
    {
      id: 8,
      title: 'Luxury Residential Estate',
      category: 'residential',
      location: 'Trasacco Valley, Accra',
      year: '2022',
      description: 'An exclusive residential development with premium amenities, setting new standards for luxury living.',
      image: 'Luxury residential estate with modern villas and landscaped gardens',
      details: 'This gated community features 20 luxury villas with shared amenities including a clubhouse, swimming pool, and recreational facilities, designed with an eye towards future-proof luxury.'
    },
    {
      id: 9,
      title: 'University Library',
      category: 'cultural',
      location: 'Legon, Accra',
      year: '2021',
      description: 'A modern academic library designed for 21st-century learning, preparing students for tomorrow\'s challenges.',
      image: 'Modern university library with study spaces and natural lighting',
      details: 'This library combines traditional reading spaces with modern technology hubs, featuring sustainable design and flexible learning environments, embracing the future of education.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'cultural', label: 'Cultural & Public' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Gallery - 7 Colums | Portfolio of Futuristic Architectural Projects</title>
        <meta name="description" content="Explore our portfolio of innovative and futuristic architectural projects across Ghana. From cutting-edge residential villas to advanced commercial complexes and culturally inspired future-proof buildings." />
        <meta property="og:title" content="Gallery - 7 Colums | Portfolio of Futuristic Architectural Projects" />
        <meta property="og:description" content="Explore our portfolio of innovative and futuristic architectural projects across Ghana. From cutting-edge residential villas to advanced commercial complexes and culturally inspired future-proof buildings." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-900 to-amber-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <img  
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Architectural portfolio showcase"
         src="https://images.unsplash.com/photo-1678315318542-0219e978baae" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Our Future-Forward Portfolio
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover our collection of exceptional architectural projects that showcase innovation, sustainability, and cultural sensitivity while looking towards tomorrow's designs across Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img  
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      alt={project.title}
                     src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 text-white text-sm mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                        <span>•</span>
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.category === 'residential' 
                          ? 'bg-blue-100 text-blue-800'
                          : project.category === 'commercial'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                      <Building2 className="h-5 w-5 text-amber-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img  
                  className="w-full h-64 md:h-96 object-cover" 
                  alt={selectedProject.title}
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProject.category === 'residential' 
                      ? 'bg-blue-100 text-blue-800'
                      : selectedProject.category === 'commercial'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                  </span>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{selectedProject.year}</span>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{selectedProject.description}</p>
                <p className="text-gray-700 leading-relaxed">{selectedProject.details}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '12+', label: 'Years of Innovation' },
              { number: '8', label: 'Regions Covered' },
              { number: '25+', label: 'Awards Won' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
              Inspired by Our Work?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's create something extraordinary and future-forward together. Start your architectural journey with Ghana's leading futuristic design firm.
            </p>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-amber-600 px-8 py-4 text-lg"
            >
              <a href="/contact">Start Your Project</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
