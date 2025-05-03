"use client";

import Image from "next/image";
import Rodape from "../components/Rodape";

const jogadores = [
  {
    nome: "YEKINDAR",
    funcao: "Entry / Rifler",
    imagem: "/jogadores/YEKINDAR.webp",
    detalhes:
      "Versátil e estratégico, o letal letão é o novo Entry da FURIA com alto impacto em rounds decisivos.",
  },
  {
    nome: "yuurih",
    funcao: "Rifler",
    imagem: "/jogadores/yuurih.webp",
    detalhes:
      "Na FURIA desde 2017, peça fundamental na consistência da equipe.",
  },
  {
    nome: "KSCERATO",
    funcao: "Rifler",
    imagem: "/jogadores/KSCERATO.webp",
    detalhes:
      "Destaque internacional, presente no top 20 mundial por 4 anos consecutivos.",
  },
  {
    nome: "FalleN",
    funcao: "Capitão / AWPer",
    imagem: "/jogadores/FalleN.webp",
    detalhes:
      "Lenda do CS brasileiro, liderando a FURIA com sua vasta experiência.",
  },
  {
    nome: "molodoy",
    funcao: "AWPer",
    imagem: "/jogadores/molodoy.png",
    detalhes:
      "Novo talento russo, substituto direto de arT, traz precisão, calma e juventude à equipe.",
  },
];

const comissaoTecnica = [
  {
    nome: 'Sidnei "sidde" Macedo',
    cargo: "Treinador Principal",
    imagem: "/comissao/sidde.webp",
  },
  {
    nome: 'Aidyn "KrizzeN" Tūrlybekov',
    cargo: "Assistente Técnico",
    imagem: "/comissao/Krizzen.png",
  },
];

export default function Sobre() {
  return (
    <div className="relative min-h-screen text-white px-4 md:px-6 py-12 bg-black">
      <div className="absolute inset-0 bg-[url('/Fundo-Rasgos.png')] bg-contain bg-center bg-repeat opacity-70 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto space-y-16 bg-black/80 backdrop-blur-md p-6 rounded-xl shadow-2xl">
        <a href="/" className="flex items-center gap-3 w-[17dvh]">
          <Image
            src="/logo-furia-CS.png"
            alt="Logo FURIA"
            width={80}
            height={80}
            className="hover:scale-105 transition-transform duration-300"
          />
        </a>
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white drop-shadow-[0_2px_6px_rgba(255,255,255,0.15)]">
          Nosso Time de CS2 da FURIA!
        </h1>

        {/* Quem Somos */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">
            🔥 Quem Somos
          </h2>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg drop-shadow">
            A nação FURIA vibra com o roster atual de Counter-Strike 2! A
            line-up é liderada por <strong>FalleN</strong>, IGL e AWPer
            lendário, com os riflers <strong>KSCERATO</strong> e{" "}
            <strong>yuurih</strong> trazendo consistência e agressividade. O
            internacional <strong>YEKINDAR</strong> adiciona entradas explosivas
            e versatilidade, enquanto o jovem AWPer <strong>molodoy</strong>,
            substituto direto de arT, traz precisão e calma. No comando,{" "}
            <strong>sidde</strong> (head coach) e <strong>KrizzeN</strong>{" "}
            (assistant coach, ex-Monte), estrategista cazaque de 25 anos,
            fortalecem a tática e integração CIS. Com analistas globais, a FURIA
            mira o topo em ESL Pro League e Majors! Join Us. Be FURIA!
          </p>
        </section>

        {/* Line-up Atual */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">
            🎮 Line-up Atual
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jogadores.map((jogador, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-700 max-w-xs w-full mx-auto"
              >
                <Image
                  src={jogador.imagem}
                  alt={`Foto de ${jogador.nome}`}
                  width={150}
                  height={150}
                  className="w-full h-[72] object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-bold text-white drop-shadow">
                  {jogador.nome}
                </h3>
                <p className="text-gray-200 text-sm">{jogador.funcao}</p>
                <p className="text-gray-300 text-sm mt-2">{jogador.detalhes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comissão Técnica */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">
            🧠 Comissão Técnica
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {comissaoTecnica.map((membro, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-700 max-w-xs w-full mx-auto"
              >
                <Image
                  src={membro.imagem}
                  alt={`Foto de ${membro.nome}`}
                  width={150}
                  height={150}
                  className="w-full h-[72] object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-bold text-white drop-shadow">
                  {membro.nome}
                </h3>
                <p className="text-gray-200 text-sm">{membro.cargo}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Estatísticas */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">
            📊 Estatísticas
          </h2>
          <ul className="list-disc pl-6 text-gray-300 text-base md:text-lg space-y-1 drop-shadow">
            <li>
              <strong>yuurih:</strong> 77 abates em 4 mapas contra 100 Thieves,
              ADR de 93.3.
            </li>
            <li>
              <strong>KSCERATO:</strong> Top 20 mundial por 4 anos consecutivos.
            </li>
            <li>
              <strong>FalleN:</strong> Liderança estratégica com mais de 10 anos
              de experiência.
            </li>
            <li>
              <strong>YEKINDAR:</strong> 2.5 entry kills por mapa, 1.12 de
              rating.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow">
            📈 Rankings
          </h2>
          <ul className="list-disc pl-6 text-gray-300 text-base md:text-lg space-y-1 drop-shadow">
            <li>
              <strong>FURIA:</strong> 4ª posição no ranking mundial de CS2.
            </li>
            <li>
              <strong>FalleN:</strong> É dono da segunda maior marca de kills
              por round usando uma AWP.
            </li>
            <li>
              <strong>KSCERATO:</strong> 4º lugar no ranking de Rifler do mundo.
            </li>
          </ul>

          <p className="text-gray-300 text-base md:text-lg drop-shadow">
            Com FalleN, KSCERATO, yuurih, YEKINDAR e molodoy na line-up, e sidde
            e KrizzeN na liderança tática, a FURIA segue firme na busca pelo
            topo global. Vamos torcer com tudo nos próximos torneios, como o PGL
            Bucharest 2025, que começa dia 07/04/2025! Join Us. Be FURIA!
          </p>
        </section>

        {/* Botão final */}
        <div className="text-center pt-10">
          <a
            href="/"
            className="border border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-md"
          >
            Junte-se à Torcida!
          </a>
        </div>
        <Rodape />
      </div>
    </div>
  );
}
