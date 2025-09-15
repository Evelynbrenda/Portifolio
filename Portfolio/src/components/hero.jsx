import { motion } from "framer-motion";
import minhaFoto from "/assets/foto.jpeg"; 

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#B8C1CF] via-[#59809E] to-[#A2BBD5] min-h-screen flex items-center">
      <div className="w-full max-w-6xl mx-auto px-3 flex flex-col md:flex-row gap-4 justify-center items-center text-center md:text-left">
        {/* Foto redonda */}
        <motion.img
          src={minhaFoto}
          alt="Brenda Evelyn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-white mb-6 md:mb-0 md:mr-12"
        />

        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
         className="flex flex-col items-center md:items-start gap-3 max-w-lg"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Brenda Evelyn
          </h1>
          <p className="text-lg md:text-xl text-white max-w-md drop-shadow-md">
            Gestão | Desenvolvimento web | React | Tailwind CSS | Pyhton | UX/UI | Marketing | Designer | Comunicação | Manutenção e suporte de redes de computadores
          </p>
          {/* Botão para baixar currículo */}
          <a
            href="/assets/curriculo.csv"
            download
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition"
          >
            Baixar Currículo (CSV)
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;