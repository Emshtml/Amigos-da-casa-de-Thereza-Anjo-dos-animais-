import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function Home() {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    // Base das imagens
    const baseURL = "https://raw.githubusercontent.com/Emshtml/casa-thereza-anjo-dos-animais/main/public/animais/";
    const lista = [
      { nome: "Thor", imagem: "thor.jpg", descricao: "Carinhoso e protetor ❤️" },
      { nome: "Frida", imagem: "frida.jpg", descricao: "Doce e muito esperta 🐕" },
      { nome: "Mia", imagem: "mia1.jpg", descricao: "Curiosa e brincalhona 😺" },
      { nome: "Mia 2", imagem: "mia2.jpg", descricao: "Companheira e dócil 💕" },
      { nome: "Fiona", imagem: "fiona1.jpg", descricao: "Cheia de energia e amor 🐾" },
    ];
    setAnimais(lista);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <header className="w-full py-6 bg-white/80 backdrop-blur-md shadow-md rounded-b-3xl">
        <h1 className="text-4xl font-bold text-pink-700">
          Amigos da Casa de Thereza 🐶🐱
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Adote, ajude e compartilhe amor 💕
        </p>
      </header>

      <main className="w-full max-w-6xl mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {animais.map((animal, index) => (
          <div
            key={index}
            className="bg-white/90 shadow-lg rounded-3xl overflow-hidden transform hover:scale-105 transition duration-500"
          >
            <img
              src={`https://raw.githubusercontent.com/Emshtml/casa-thereza-anjo-dos-animais/main/public/animais/${animal.imagem}`}
              alt={animal.nome}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-pink-800">{animal.nome}</h2>
              <p className="text-gray-700 mt-2">{animal.descricao}</p>
              <a
                href="https://wa.me/5511976794749?text=Olá!%20Tenho%20interesse%20em%20adotar%20um%20animal%20da%20Casa%20da%20Thereza!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-full transition"
              >
                Adotar ❤️
              </a>
            </div>
          </div>
        ))}
      </main>

      <footer className="mt-12 text-gray-800 bg-white/70 backdrop-blur-md py-6 rounded-t-3xl w-full">
        <p>
          💌 Siga-nos no{" "}
          <a
            href="https://www.instagram.com/casadatherezaong?igsh=aTgwOHVoZ2FyaGE3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-700 font-semibold hover:underline"
          >
            Instagram
          </a>
        </p>
        <p className="mt-2 text-sm text-gray-600">
          © {new Date().getFullYear()} Casa da Thereza Anjo dos Animais
        </p>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5511976794749?text=Olá!%20Quero%20ajudar%20a%20Casa%20da%20Thereza!%20🐾"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 transition-transform hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
}

