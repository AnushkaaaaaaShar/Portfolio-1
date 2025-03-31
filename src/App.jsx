// App.jsx
import { useState, useEffect } from 'react';
import "font-awesome/css/font-awesome.min.css";
import MeImg from './pictures/me.jpeg'


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-opacity-70 backdrop-blur-md py-4 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            <span className="text-indigo-500">Port</span>folio
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks activeSection={activeSection} darkMode={darkMode} />
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <i className="fas fa-sun text-yellow-300"></i>
              ) : (
                <i className="fas fa-moon text-indigo-500"></i>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 mr-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <i className="fas fa-sun text-yellow-300"></i>
              ) : (
                <i className="fas fa-moon text-indigo-500"></i>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl focus:outline-none"
            >
              {isMenuOpen ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-gray-800 rounded-lg absolute w-full left-0 right-0 shadow-lg">
            <div className="flex flex-col space-y-4">
              <NavLinks 
                activeSection={activeSection} 
                darkMode={darkMode} 
                mobile={true} 
                closeMenu={() => setIsMenuOpen(false)} 
              />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-indigo-500 font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Anushka Sharma</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-400">
              Full Stack Developer
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              I create beautiful, responsive websites and applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors font-medium"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-indigo-600 text-indigo-500 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors font-medium"
              >
                View Work
              </a>
            </div>
            <div className="mt-8 flex space-x-4">
              <SocialIcon icon="fab fa-github" link="https://github.com/AnushkaaaaaaShar" />
              <SocialIcon icon="fab fa-linkedin " link='https://www.linkedin.com/in/anushka-sharma-2597381bb/'/>
              <SocialIcon icon="fab fa-instagram" />
              <SocialIcon icon="fab fa-x" />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute inset-4 bg-gray-800 rounded-full overflow-hidden">
                {/* Replace with your image */}
                <img 
                  src={MeImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 bg-opacity-30">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle>About Me</SectionTitle>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src={MeImg}
                alt="About Me" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-400 mb-6">
                I'm a passionate Full Stack Developer with 5+ years of experience building 
                beautiful, functional, and user-friendly websites and applications. I specialize in 
                React, Node.js, and modern web technologies.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-semibold">Name:</p>
                  <p className="text-gray-400">Anushka Sharma</p>
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-gray-400">anushka.81sharma@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">From:</p>
                  <p className="text-gray-400">Delhi, India</p>
                </div>
                <div>
                  <p className="font-semibold">Freelance:</p>
                  <p className="text-indigo-500">Available</p>
                </div>
              </div>
              <a 
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors font-medium inline-block"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle>My Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ProjectCard 
                key={item}
                title={`Project ${item}`}
                category="Web Development"
                image={`/api/placeholder/600/400?text=Project${item}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800 bg-opacity-30">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle>My Skills</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'GraphQL'].map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Let's Talk About Your Project</h3>
              <p className="text-gray-400 mb-8">
                I'm interested in freelance opportunities – especially ambitious or large projects. 
                However, if you have other request or question, don't hesitate to contact me.
              </p>
              <div className="space-y-6">
                <ContactInfo icon="fas fa-map-marker-alt" text="Your Address, City, Country" />
                <ContactInfo icon="fas fa-envelope" text="your.email@example.com" />
                <ContactInfo icon="fas fa-phone" text="+1 234 567 890" />
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea 
                  placeholder="Message" 
                  rows="6" 
                  className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 bg-opacity-70">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <SocialIcon icon="fab fa-github" />
            <SocialIcon icon="fab fa-linkedin" />
            <SocialIcon icon="fab fa-twitter" />
            <SocialIcon icon="fab fa-dribbble" />
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Components
function NavLinks({ activeSection, darkMode, mobile = false, closeMenu }) {
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return links.map((link) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      className={`
        ${activeSection === link.id ? 'text-indigo-500' : 'text-gray-300 hover:text-white'} 
        ${darkMode ? '' : activeSection === link.id ? 'text-indigo-700' : 'text-gray-700 hover:text-gray-900'}
        font-medium transition-colors
        ${mobile ? 'block py-2' : ''}
      `}
      onClick={() => mobile && closeMenu && closeMenu()}
    >
      {link.name}
    </a>
  ));
}

function SocialIcon({ icon, link = "#" }) {
  return (
    <a 
      href={link} 
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
    >
      <i className={`${icon}`}></i>
    </a>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
        {children}
        <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-indigo-500 transform -translate-x-1/2 translate-y-4"></span>
      </h2>
    </div>
  );
}

function ProjectCard({ title, category, image }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-indigo-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center">
            <a href="#" className="w-12 h-12 rounded-full bg-white text-indigo-600 flex items-center justify-center mb-3 mx-auto">
              <i className="fas fa-link"></i>
            </a>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-200">{category}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400">{category}</p>
      </div>
    </div>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-indigo-600 transition-colors">
      <div className="text-4xl mb-3">
        <i className="fab fa-react"></i>
      </div>
      <h3 className="text-lg font-bold">{skill}</h3>
    </div>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
        <i className={icon}></i>
      </div>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}

export default App;
