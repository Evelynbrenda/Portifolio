import { motion } from "framer-motion";

const projects = [
  { title: "Cashi Hive System", img: "./assets/cashive.jpeg" },
  { title: "Conteúdo TikTok", img: "/imgs/campanha2.jpg" },
  { title: "Branding Social", img: "/imgs/campanha3.jpg" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 text-center">
      <h2 className="text-5xl font-bold mb-16 text-gray-900">Meus projetos</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="w-80 bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover"/>
            <h3 className="p-6 font-bold text-xl text-gray-800">{p.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
