// App.jsx
import { useState, useEffect } from 'react';
import "font-awesome/css/font-awesome.min.css";
import MeImg from './pictures/me.jpeg'
import pro1 from './pictures/pt.png'
import pro2 from './pictures/asia48.png'
import pro3 from './pictures/ui.png'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiGraphql } from 'react-icons/si';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Pomodoro Timer",
      category: "React App",
      image: pro1 , 
      link: "https://evolve-pomodoro-timer.vercel.app/"
    },
    {
      title: "Asia 48",
      category: "Web Development",
      image: pro2,
      link: "https://iamahens.github.io/Asia48/"
    },
    {
      title: "Twitter UI Clone",
      category: "UI/UX",
      image: pro3,
      link: "https://clone-x-ui.netlify.app/"
    },

  ];
  
  const ProjectCard = ({ title, category, image, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
      </div>
    </a>
  );
  

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




const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-3xl" /> },
  { name: 'GraphQL', icon: <SiGraphql className="text-pink-500 text-3xl" /> },
];

const SkillCard = ({ skill, icon }) => (
  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition">
    <div className="mb-4">{icon}</div>
    <h4 className="text-lg font-semibold text-center">{skill}</h4>
  </div>
);

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
              
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 mr-4 rounded-full hover:bg-gray-800 transition-colors"
            >
             
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
                href="https://github.com/AnushkaaaaaaShar" 
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
                I'm a passionate Full Stack Developer with 2+ years of experience building 
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
              href="/resume.pdf" 
              download 
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
          {projects.map((project, index) => (
  <ProjectCard 
    key={index}
    title={project.title}
    category={project.category}
    image={project.image}
    link={project.link}
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
          {skills.map((skill) => (
  <SkillCard key={skill.name} skill={skill.name} icon={skill.icon} />
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
                <ContactInfo icon="fas fa-map-marker-alt" text="Uttam Nagar West, New Delhi, India" />
                <ContactInfo icon="fas fa-envelope" text="anushka.81sharma@gmail.com" />
                <ContactInfo icon="fas fa-phone" text="+91 8130353576" />
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
            © {new Date().getFullYear()} Anushka Sharma. All rights reserved.
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
