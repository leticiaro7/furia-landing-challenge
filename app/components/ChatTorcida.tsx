import React, { useRef } from "react";

interface Mensagem {
  usuario: string;
  texto: string;
  especial: boolean;
}

interface PropsChatTorcida {
  mensagens: Mensagem[];
  onEnviarMensagem: (text: string) => void;
}

const ChatTorcida: React.FC<PropsChatTorcida> = ({
  mensagens,
  onEnviarMensagem,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnviarClique = () => {
    if (inputRef.current) {
      const texto = inputRef.current.value.trim();
      if (texto) {
        onEnviarMensagem(texto);
        inputRef.current.value = "";
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnviarMensagem(e.currentTarget.value.trim());
      e.currentTarget.value = "";
    }
  };

  return (
    <div id="chat" className="bg-black bg-opacity-90 border border-gray-700 rounded-xl p-5 shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-white mb-4">🎉 CHAT DA TORCIDA</h3>

      <div className="space-y-2 h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent pr-2">
        {mensagens.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.especial
                ? "bg-yellow-300 text-black font-bold"
                : "bg-gray-800 text-white"
            }`}
          >
            <span className="font-bold">{msg.usuario}: </span>
            {msg.texto}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          className="flex-1 p-2 bg-gray-900 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
        <button
          onClick={handleEnviarClique}
          className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatTorcida;
