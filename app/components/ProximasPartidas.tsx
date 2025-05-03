import React from "react";

const ProximasPartidas: React.FC = () => {
  return (
    <div
      id="partidas"
      className="border border-gray-700 bg-black bg-opacity-90 p-5 rounded-xl h-auto flex flex-col justify-between shadow-lg w-full max-w-md mx-auto"
    >
      <h3 className="text-xl font-bold mb-2 text-white p-2">
        PRÓXIMAS PARTIDAS
      </h3>
      <div className="space-y-2 text-gray-300 flex-1">
        <div className="grid grid-cols-3 text-center">
          <span>05/05/2025</span>
          <span className="font-bold text-white">VS</span>
          <span>FaZe Clan</span>
        </div>
        <div className="grid grid-cols-3 text-center">
          <span>25/05/2025</span>
          <span className="font-bold text-white">VS</span>
          <span>Team Vitality</span>
        </div>
        <div className="grid grid-cols-3 text-center">
          <span>01/06/2025</span>
          <span className="font-bold text-white">VS</span>
          <span>G2 Esports</span>
        </div>
      </div>
    </div>
  );
};

export default ProximasPartidas;
