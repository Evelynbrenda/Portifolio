import { motion } from "framer-motion";
import projects from "../data/Project";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 text-center">
      <h2 className="text-5xl font-bold mb-16 text-gray-900">Meus projetos</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="w-80 bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer flex flex-col"
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <img src={p.image} alt={p.title} className="w-full h-56 object-cover"/>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-xl text-gray-800 mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{p.description}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {p.tags.map(tag => (
                  <span key={tag} className="bg-gray-200 px-2 py-1 rounded text-xs">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">GitHub</a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 underline font-medium">Demo</a>
                )}
                {p.social && (
                  <a href={p.social} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">Instagram</a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
