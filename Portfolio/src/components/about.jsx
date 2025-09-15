import { motion } from "framer-motion";
import minhaFoto from "/assets/bg.png";
import { Sparkles, Target, Palette, Zap,  } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center px-8 min-h-screen overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={minhaFoto}
          alt="Brenda Evelyn"
          className="w-full h-full object-top object-cover"
        />
        {/* Camada azulada */}
        <div className="absolute inset-0 bg-black/60 "></div>
      </div>

      {/* Conteúdo */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Título lateral */}
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white tracking-wide"
        >
          Sobre mim
        </motion.h2>

        {/* Texto com ícones */}
        <motion.div
          className="text-center md:text-left space-y-6 text-white max-w-2xl"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg md:text-xl leading-relaxed">
            Apaixonada por criar experiências digitais que unem{" "}
            <span className="text-blue-300 font-semibold">Tecnologia</span> , <span className="text-blue-300 font-semibold">Comunicação</span> e {" "}
            <span className="text-blue-300 font-semibold">Estratégia</span>.
            Transformo ideias em projetos criativos que conectam pessoas e inovação
            de forma única, buscando melhorar o meu profissionalismo e o meu protagonismo na área da Tecnologia.
          </p>

          {/* Lista com ícones */}
          <ul className="space-y-4">
           <li className="flex items-center gap-3">
              <Sparkles className="text-blue-300" size={24} />
              <span>Gestão e estratégia digital com foco em resultados</span>
            </li>

            <li className="flex items-center gap-3">
              <Target className="text-blue-300" size={24} />
              <span>Desenvolvimento Web moderno: React, Tailwind CSS e Python</span>
            </li>

            <li className="flex items-center gap-3">
              <Palette className="text-blue-300" size={24} />
              <span>UX/UI e Design que conectam marcas ao público</span>
            </li>

            <li className="flex items-center gap-3">
              <Zap className="text-blue-300" size={24} />
              <span>Marketing criativo e comunicação eficiente</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
