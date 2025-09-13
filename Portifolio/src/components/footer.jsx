import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 py-8 mt-20 text-gray-900 font-bold text-center">
      © {new Date().getFullYear()} Brenda Evelyn. Todos os direitos reservados.
    </footer>
  );
};

export default Footer;