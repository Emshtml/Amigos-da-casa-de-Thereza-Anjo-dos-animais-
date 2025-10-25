import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const animals = [
    { src: "/animais/cachorro1.jpg", name: "thor" },
    { src: "/animais/cachorra.jpg", name: "frida" },
    { src: "/animais/gata1.jpg", name: "Mia1" },
    { src: "/animais/gata2.jpg", name: "mia2" },
    { src: "/animais/cachorros.jpg", name: "camelos" },
    { src: "/animais/cachorra.jpg", name: "fiona1" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % animals.length);
    }, 3000); // muda a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-animals text-gray-900 relative">
      {/* Cabeçalho fixo */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md shadow-md z-50">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full"/>
            <span className="text-white font-bold text-xl">Amigos da Casa 🐾</span>
          </div>
          <ul className="flex space-x-6 text-gray-100">
            <li><a href="#home" className="hover:text-pink-400">Início</a></li>
            <li><a href="#adote" className="hover:text-pink-400">Adote</a></li>
            <li><a href="#contato" className="hover:text-pink-400">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Seção principal */}
      <section id="home" className="pt-32 pb-20 text-center flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Bem-vindo à Casa de Thereza Anjo dos Animais 💖
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
          Um lar de amor, esperança e cuidado para cães e gatos resgatados.
        </p>

        {/* Slider de animais */}
        <div
          id="adote"
          className="relative w-full max-w-3xl h-72 md:h-96 overflow-hidden rounded-2xl shadow-lg mb-10"
        >
          {animals.map((animal, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={animal.src}
                alt={animal.name}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <span className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-sm">
                {animal.name}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#adote"
          className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all shadow-lg"
        >
          🌟 Quero Adotar
        </a>
      </section>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5511976794749"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      >
        WhatsApp
      </a>

      {/* Contato / Rodapé */}
      <footer id="contato" className="bg-black/60 text-gray-100 py-8 mt-20 text-center">
        <p className="text-lg font-medium">📍 São Paulo - SP | 💌 contato@casa-thereza.org</p>
        <div className="flex justify-center gap-4 mt-3">
          <a
            href="https://www.instagram.com/casadatherezaong?igsh=aTgwOHVoZ2FyaGE3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5511976794749"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-2">© 2025 Amigos da Casa de Thereza Anjo dos Animais</p>
      </footer>
    </main>
  );
}
