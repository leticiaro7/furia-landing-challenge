"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Cabecalho from "./components/Cabecalho";
import PartidaAoVivo from "./components/PartidaAoVivo";
import ChatTorcida from "./components/ChatTorcida";
import ProximasPartidas from "./components/ProximasPartidas";
import Rodape from "./components/Rodape";

interface Mensagem {
  usuario: string;
  texto: string;
  especial: boolean;
}

interface Placar {
  furia: number;
  adversario: number;
}

const App: React.FC = () => {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [placar, setPlacar] = useState<Placar>({ furia: 2, adversario: 0 });
  const [tempo, setTempo] = useState<string>("1:50");
  const [fase, setFase] = useState<string>("MD3 - MAPA 1");

  // Contagem dos Rounds em Segundos
  useEffect(() => {
    let totalSeconds = 110;
    const intervalo = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(intervalo);
        return;
      }
      totalSeconds--;
      const min = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
      const sec = String(totalSeconds % 60).padStart(2, "0");
      setTempo(`${min}:${sec}`);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [placar]);

  // Adiciona Mensagens de Torcedores a cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      const torcedores = [
        "TorcedorPantera",
        "CSMestre",
        "FuriaEterna",
        "ReiDoHeadshot",
      ];
      const comentariosPartida = [
        "KSCERATO pegou 2 na AWP, monstro!",
        "yuurih tá voando, 3k no bombsite A!",
        "Cuidado com o lurk no meio, FURIA!",
        "chelo tá chamando uma tática, vamos!",
        "FURIA tá dominando o mapa, GG!",
        "Que clutch do FalleN, inacreditável!",
        "Drop com 2 kills no bombsite B!",
      ];
      const novaMensagem: Mensagem = {
        usuario: torcedores[Math.floor(Math.random() * torcedores.length)],
        texto:
          comentariosPartida[
            Math.floor(Math.random() * comentariosPartida.length)
          ],
        especial: false,
      };
      setMensagens((anterior) => [...anterior, novaMensagem].slice(-5));
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  // Atualiza o placar a cada 30 segundos e verifica se alguém ganhou, se sim, exibe mensagem de vitória
  useEffect(() => {
    const intervaloPlacar = setInterval(() => {
      setPlacar((anterior) => {
        if (anterior.furia >= 12 || anterior.adversario >= 12) return anterior;

        const furiaGanha = Math.random() > 0.5;
        const novoPlacar = furiaGanha
          ? { ...anterior, furia: anterior.furia + 1 }
          : { ...anterior, adversario: anterior.adversario + 1 };

        if (novoPlacar.furia === 12 || novoPlacar.adversario === 12) {
          setFase(
            novoPlacar.furia === 12 ? "Vitória da FURIA!" : "Vitória da M80!"
          );
          setMensagens((anteriorMsgs) =>
            [
              ...anteriorMsgs,
              {
                usuario: "Sistema",
                texto:
                  novoPlacar.furia === 12
                    ? "A FURIA venceu a partida! GG!"
                    : "A M80 venceu a partida. Vamos pra próxima!",
                especial: true,
              },
            ].slice(-5)
          );
          setTempo("00:00");
        }

        return novoPlacar;
      });
    }, 30000);

    return () => clearInterval(intervaloPlacar);
  }, []);

  // Envia mensagem quando o usuário clica no botão de enviar
  const enviarMensagem = (texto: string) => {
    if (texto.trim()) {
      setMensagens((anterior) =>
        [...anterior, { usuario: "Você", texto, especial: false }].slice(-5)
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans scroll-smooth relative bg-[url('/Fundo-Rasgos.png')] bg-contain bg-center bg-no-repeat ">
      <Cabecalho />

      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 gap-10 ">
        <div className="md:w-1/2 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-1 text-shadow-lg">
            A BATALHA COMEÇOU.
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-shadow-lg ">
            Sinta a Fúria. Solte o grito.
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow-lg ">
            Vista o Manto e Torça Com a Alma.
          </h2>
          <p className="text-lg mb-6 text-gray-300 text-shadow-lg">
            A torcida mais insana dos esports te espera.
          </p>
          <a
            href="#chat"
            className="inline-block bg-white hover:bg-gray-900 text-black hover:text-white px-6 py-3 rounded-full font-semibold transition mt-4"
          >
            Entrar na Torcida
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            src="/Panterinha.png"
            alt="Panterinha"
            className="max-w-8/12 h-auto"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
      </section>

      <main className="flex-1 p-6 mt-20" id="conteudo">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start justify-center">
            <div className="w-full h-[400px] bg-black bg-opacity-70 mb-4 flex items-center justify-center">
              <iframe
                className="w-full h-full aspect-video"
                src="https://www.youtube.com/embed/0NluG5rZlWo?autoplay=1"
                title="Live da FURIA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white text-shadow-lg">
              Acompanhe a FURIA ao vivo! FURIA x M80 #ESLProLeague 21
            </h2>
            <p className="text-lg text-gray-300 mb-4 text-shadow-lg">
              Acompanhe a FURIA em sua jornada na ESL Pro League 21. A Pantera
              está pronta para mostrar sua garra e conquistar a vitória!
            </p>
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4 text-white text-shadow-lg">
                Jogadores da FURIA
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  { nome: "KSCERATO", img: "/jogadores/KSCERATO.webp" },
                  { nome: "yuurih", img: "/jogadores/yuurih.webp" },
                  { nome: "FalleN", img: "/jogadores/FalleN.webp" },
                  { nome: "molodoy", img: "/jogadores/molodoy.png" },
                  { nome: "Yekindar", img: "/jogadores/YEKINDAR.webp" },
                ].map((jogador, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800 rounded-xl p-4 flex flex-col items-center hover:bg-zinc-700 transition"
                  >
                    <Image
                      src={jogador.img}
                      alt={jogador.nome}
                      width={100}
                      height={100}
                      className="rounded-full w-24 h-24 object-cover mb-2"
                    />
                    <p className="text-white text-lg font-semibold">
                      {jogador.nome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <PartidaAoVivo placar={placar} tempo={tempo} fase={fase} />
            <ChatTorcida
              mensagens={mensagens}
              onEnviarMensagem={enviarMensagem}
            />
            <ProximasPartidas />
          </div>
        </div>
      </main>

      <Rodape />
    </div>
  );
};

export default App;
