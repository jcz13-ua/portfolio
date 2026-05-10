import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }
  },
};

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="greeting">
              Hello, I am a creative developer.
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="title">
              Crafting digital <br/>
              <span className="text-muted">experiences</span> with <br/>
              minimalist design.
            </motion.h1>

            <motion.div variants={itemVariants} className="cta-container">
              <a href="#work" className="btn-primary">
                View My Work
                <ArrowRight size={18} className="btn-icon" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>
          </motion.div>
        </div>
      </section>

      {/* Placeholder for Work Section */}
      <section id="work" className="section work-section">
        <div className="container">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">More content coming soon...</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
