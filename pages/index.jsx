import React from "react";

export default function Home() {
  const animais = [
    { nome: "Thor", imagem: "/animais/thor.jpg", descricao: "Um grandalhão dócil e brincalhão!" },
    { nome: "Frida", imagem: "/animais/frida.jpg", descricao: "Cheia de energia e muito amor pra dar 💕" },
    { nome: "Mia", imagem: "/animais/mia1.jpg", descricao: "A mais carinhosa da turma 😺" },
    { nome: "Mia (2)", imagem: "/animais/mia2.jpg", descricao: "Irmã da Mia, adora colo!" },
    { nome: "Fiona", imagem: "/animais/fiona1.jpg", descricao: "Uma princesa que ama brincar 🐕" },
  ];

  return (
    <div className="min-h-screen bg-black bg-opacity-70 text-white text-center flex flex-col items-center justify-center p-6 relative">
      {/* Cabeçalho */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-3">🐾 Amigos da Casa de Thereza 🐾</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Adote amor, mude uma vida. Conheça nossos animais disponíveis para adoção! 💖
        </p>
      </header>

      {/* Galeria de animais */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {animais.map((animal, i) => (
          <div
            key={i}
            className="bg-white bg-opacity-10 rounded-2xl p-4 backdrop-blur-md hover:scale-105 transform transition-all"
          >
            <img
              src={animal.imagem}
              alt={animal.nome}
              className="w-full h-64 object-cover rounded-xl mb-4 border-2 border-white/30"
            />
            <h2 className="text-2xl font-semibold">{animal.nome}</h2>
            <p className="text-sm text-gray-300">{animal.descricao}</p>
          </div>
        ))}
      </section>

      {/* Rodapé */}
      <footer className="mt-12 text-gray-300">
        <p>
          Siga-nos no{" "}
          <a
            href="https://www.instagram.com/casadatherezaong?igsh=aTgwOHVoZ2FyaGE3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            Instagram
          </

