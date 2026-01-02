import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Menu, X, Mail, Phone, MessageSquare, ExternalLink, Code, 
  Database, Cpu, Bot, Brain, ChevronRight, Download, Sparkles, 
  Rocket, Target, Zap, BarChart, Settings, Server, 
  Terminal, GitBranch, LineChart 
} from "lucide-react";
import CV from "./CV.pdf";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    { 
      title: "LLM Classification", 
      description: "An experimental study evaluating prompt engineering techniques for text classification and demonstrating how Retrieval-Augmented Generation (RAG) can significantly improve low-accuracy prompts without model fine-tuning.",
      link: "https://github.com/MohamedMohy0/LLMs-Prompt-Project",
      icon: <Bot className="w-6 h-6" />,
      tags: ["AI", "Prompt", "LLM", "RAG"]
    },
    { 
      title: "DoctBot", 
      description: "Medical chatbot using FastAPI and Ollama LLM for Arabic medical queries with symptom analysis and diagnoses.",
      link: "https://github.com/MohamedMohy0/MedicalChatBot",
      icon: <Bot className="w-6 h-6" />,
      tags: ["AI", "FastAPI", "LLM", "Medical"]
    },
    { 
      title: "Math Solver AI", 
      description: "Llama 3.2 with RAG to solve math problems with step-by-step solutions via Streamlit interface.",
      link: "https://github.com/MohamedMohy0/Chat_Math",
      icon: <Brain className="w-6 h-6" />,
      tags: ["RAG", "Math", "Streamlit", "AI"]
    },
    { 
      title: "Time of Death Predictor", 
      description: "ANN model using Newton's Law of Cooling to estimate time of death from temperature data.",
      link: "#",
      icon: <Cpu className="w-6 h-6" />,
      tags: ["ANN", "Python", "Data Science"]
    },
    { 
      title: "Furniture Classifier", 
      description: "Deep learning model to classify furniture images using convolutional neural networks.",
      link: "https://github.com/MohamedMohy0/Image-classfication",
      icon: <Database className="w-6 h-6" />,
      tags: ["CNN", "Deep Learning", "Computer Vision"]
    },
  ];
const skills = [
  { name: "Python", icon: <Terminal className="w-6 h-6" /> },
  { name: "Machine Learning", icon: <Brain className="w-6 h-6" /> },
  { name: "Data Analysis", icon: <BarChart className="w-6 h-6" /> },
  { name: "AI Models", icon: <Cpu className="w-6 h-6" /> },
  { name: "R Programming", icon: <Database className="w-6 h-6" /> },
  { name: "Power BI", icon: <LineChart className="w-6 h-6" /> },
  { name: "Automation", icon: <Settings className="w-6 h-6" /> },
  { name: "Git & GitHub", icon: <GitBranch className="w-6 h-6" /> },
];

  const contactInfo = {
    email: "mohmmadmohy52@gmail.com",
    phone: "+201110037173",
    whatsapp: "+201110037173"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Mouse Trailer */}
      <div
        className="fixed w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl pointer-events-none z-0 transition-transform duration-100"
        style={{
          transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`,
        }}
      />

      {/* Navbar */}
      <nav className="fixed w-full px-6 py-4 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mohamed Mohy
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                >
                  {item}
                </a>
              </li>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-all"
            >
              Get In Touch
            </motion.a>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 p-4 rounded-xl bg-gray-800/90 backdrop-blur-lg border border-gray-700"
          >
            <ul className="flex flex-col gap-4">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="flex items-center justify-between text-gray-300 hover:text-white py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{item}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1"
          >
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hi, I'm Mohamed
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Data Scientist & AI Engineer crafting intelligent solutions through 
              <span className="text-blue-400 font-semibold"> machine learning</span> and 
              <span className="text-purple-400 font-semibold"> data-driven innovation</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(96,165,250,0.6)] transition-all"
            >
              <Code className="w-5 h-5" />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border-2 border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all"
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Key Strengths */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Problem Solver</h3>
              <p className="text-sm text-gray-400">Transforming complex challenges into actionable AI solutions</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Fast Learner</h3>
              <p className="text-sm text-gray-400">Quick to adapt and master new technologies and methodologies</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Innovative Mindset</h3>
              <p className="text-sm text-gray-400">Pioneering cutting-edge approaches in AI and data science</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Detail-oriented Data Scientist with expertise in data analysis, machine learning, 
                and AI model development. I specialize in transforming complex data into actionable 
                insights and building intelligent automation solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My passion lies in applying cutting-edge AI techniques to solve real-world problems, 
                from medical chatbots to predictive models. I thrive on continuous learning and 
                hands-on implementation of innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-gray-300">Available for Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-gray-300">Open to Collaboration</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">My Focus</h3>
                <ul className="space-y-3">
                  {[
                    "AI & Machine Learning Solutions",
                    "Data Analysis & Visualization",
                    "Automation & Bot Development",
                    "Predictive Modeling",
                    "Real-time Data Processing",
                    "Cloud & Deployment"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Technologies and methodologies I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                      <div className="text-blue-400">
                        {skill.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-300 mb-1">{skill.name}</h3>
                      <p className="text-sm text-gray-400">Practical experience in real-world applications</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn",
                  "FastAPI", "Streamlit", "Git & GitHub", "Power BI", "React", "N8N"
                ].map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              
              {/* Expertise Areas with Icons */}
{/* Expertise Areas with Icons */}
<div className="mt-8 pt-6 border-t border-gray-700/50">
  <h4 className="text-xl font-semibold text-white mb-4">Areas of Expertise</h4>
  <div className="grid grid-cols-2 gap-4">
    {[
      { icon: <Brain className="w-5 h-5" />, label: "AI Development" },
      { icon: <BarChart className="w-5 h-5" />, label: "Data Analysis" },
      { icon: <Settings className="w-5 h-5" />, label: "Automation" },
      { icon: <Server className="w-5 h-5" />, label: "Web APIs" },
    ].map((area, idx) => (
      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all">
        <div className="text-blue-400">
          {area.icon}
        </div>
        <span className="text-gray-300">{area.label}</span>
      </div>
    ))}
  </div>
</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Showcasing my latest work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <span className="text-sm text-gray-400">{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 bg-gray-800/50 text-blue-400 rounded-full text-xs border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 group/link"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                value: contactInfo.email,
                href: `mailto:${contactInfo.email}`,
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone",
                value: contactInfo.phone,
                href: `tel:${contactInfo.phone}`,
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "WhatsApp",
                value: contactInfo.whatsapp,
                href: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`,
                color: "from-green-500 to-emerald-500"
              }
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.href}
                target={contact.title === "WhatsApp" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${contact.color} text-white text-center hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all`}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  {contact.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                <p className="text-sm opacity-90">{contact.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6">
              I'm currently available for freelance work and full-time opportunities.
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-[0_0_30px_rgba(96,165,250,0.6)] transition-all"
              >
                Send Message
              </motion.a>
              <motion.a
                href={CV}
                download="Mohamed_Mohy_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border-2 border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all"
              >
                <Download className="inline w-4 h-4 mr-2" />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800/50 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mohamed Mohy
              </span>
            </div>
            <div className="flex gap-6">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mohamed Mohy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;