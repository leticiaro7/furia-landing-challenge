import React from "react";

interface PropsPartidaAoVivo {
  placar: { furia: number; adversario: number };
  tempo: string;
  fase: string;
}

const PartidaAoVivo: React.FC<PropsPartidaAoVivo> = ({
  
  placar,
  tempo,
  fase,
}) => {
 
  return (
    <div className="bg-black bg-opacity-90 border border-gray-700 rounded-xl p-5 shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
        🟣 PARTIDA AO VIVO
      </h3>

      <div className="flex justify-between items-center mb-3">
        <span className="text-white text-lg font-semibold">FURIA</span>
        <span className="text-3xl font-bold text-white">
          {placar.furia} - {placar.adversario}
        </span>
        <span className="text-white text-lg font-semibold">M80</span>
      </div>

      <div className="flex justify-between items-center text-sm mt-3">
        <span className="text-red-500 font-bold animate-pulse">● AO VIVO</span>
        <span className="text-gray-400">{tempo}</span>
        <span className="text-gray-400">{fase}</span>
      </div>
    </div>
  );
};

export default PartidaAoVivo;
