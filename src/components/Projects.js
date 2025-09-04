import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "DoctBot", description: "Developed a retrieval-augmented medical chatbot using FastAPI and Ollama LLM to answer Arabic medical queries with symptom summaries, possible diagnoses, and initial advice.", link: "https://github.com/MohamedMohy0/MedicalChatBot" },
  { title: "Math Solver AI Bot", description: "Llama 3.2 3B with RAG method to solve Math Questions. Integrated a custom knowledge base with a simple Streamlit interface, enabling users to input queries and receive accurate, step-by-step solutions in real time.", link: "https://github.com/MohamedMohy0/Chat_Math" },
  { title: "Time of Death", description: "ODE Equation with ANN to find the time of death for a body with Temperature of room and body Developed an Artificial Neural Network model to estimate the time of death based on body temperature and ambient room temperature using Newton’s Law of Cooling", link: "#" },
  { title: "Furniture Classification", description: "A Deep Learning model to classify images of interior designs Built a deep learning model to classify furniture images into categories (e.g., modern, classic, Asian) using convolutional neural networks ", link: "https://github.com/MohamedMohy0/Image-classfication" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#5586F7] via-[#7BA8FF] to-[#5586F7] drop-shadow-[0_0_20px_rgba(85,134,247,0.7)]">
        Projects
      </h2>
      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="p-6 bg-gray-800 rounded-2xl shadow-[0_0_15px_rgba(85,134,247,0.5)] hover:scale-105 hover:shadow-[0_0_30px_rgba(85,134,247,0.9)] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">{p.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{p.description}</p>
            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block text-[#5586F7] hover:underline hover:drop-shadow-[0_0_10px_rgba(85,134,247,0.8)] transition-all duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
