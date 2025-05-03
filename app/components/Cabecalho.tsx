import React from "react";
import Image from "next/image";

const Cabecalho: React.FC = () => {
  return (
    <header
      className="bg-black bg-opacity-90 px-6 py-4 
                 flex justify-between items-center 
                 border-b border-gray-800 shadow-md"
    >
      <div className="flex items-center gap-3">
        <Image
          src="/logo-furia-CS.png"
          alt="Logo FURIA"
          width={80}
          height={80}
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>

      <nav className="space-x-8">
        <a
          href="/sobre"
          className="text-gray-300 hover:text-white font-semibold text-lg transition-colors duration-200"
          aria-label="Sobre a FURIA"
        >
          Sobre
        </a>
        <a
          href="https://www.furia.gg/"
          className="text-gray-300 hover:text-white font-semibold text-lg transition-colors duration-200"
          aria-label="Garanta seu Manto da FURIA"
        >
          Garanta seu Manto
        </a>
        <a
          href="#chat"
          className="text-gray-300 hover:text-white font-semibold text-lg transition-colors duration-200"
          aria-label="Interaja com o Chat da FURIA"
        >
          Interaja com o Chat
        </a>
      </nav>
    </header>
  );
};

export default Cabecalho;
