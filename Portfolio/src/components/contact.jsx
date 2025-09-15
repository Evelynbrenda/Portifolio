import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-5xl font-bold mb-12 text-gray-900">Contato</h2>
      <div className="flex justify-center gap-10 text-3xl">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=evelynbrenda011@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <Mail size={38} /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/evelynbrenda/"
          target="_blank"
          className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
        >
          <Linkedin size={38} /> LinkedIn
        </a>
        <a
          href="https://github.com/Evelynbrenda"
          target="_blank"
          className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition-colors"
        >
          <Github size={38} /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;