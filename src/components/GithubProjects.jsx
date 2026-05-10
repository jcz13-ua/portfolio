import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitBranch, ExternalLink, Code } from 'lucide-react';
import './GithubProjects.css';

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/jcz13-ua/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        // Filter out forks if desired, or just show top repos
        const sortedData = data.filter(repo => !repo.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
        setProjects(sortedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  if (loading) return <div className="projects-loading">Loading projects...</div>;
  if (error) return <div className="projects-error">Error loading projects: {error}</div>;

  return (
    <motion.div 
      className="projects-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {projects.map(project => (
        <motion.a 
          href={project.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-card"
          variants={itemVariants}
          key={project.id}
        >
          <div className="project-header">
            <Code className="project-icon" size={24} />
            <div className="project-links">
              <ExternalLink size={18} />
            </div>
          </div>
          
          <h3 className="project-title">{project.name}</h3>
          
          <p className="project-description">
            {project.description || 'No description provided.'}
          </p>
          
          <div className="project-footer">
            <div className="project-language">
              <span className="language-dot" style={{ backgroundColor: getLanguageColor(project.language) }}></span>
              {project.language || 'Markdown'}
            </div>
            
            <div className="project-stats">
              <span className="stat"><Star size={14} /> {project.stargazers_count}</span>
              <span className="stat"><GitBranch size={14} /> {project.forks_count}</span>
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

// Helper for some language colors
function getLanguageColor(language) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    'C++': '#f34b7d',
    'C#': '#178600',
    Go: '#00ADD8',
    Rust: '#dea584'
  };
  return colors[language] || '#8b8b8b';
}

export default GithubProjects;
