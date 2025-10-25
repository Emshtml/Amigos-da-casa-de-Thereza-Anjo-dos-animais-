import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const animals = [
    { src: "/animais/cachorro.jpg", name: "thor" },
    { src: "/animais/cachorra.jpg", name: "frida" },
    { src: "/animais/gatoa1.jpg", name: "mia1" },
    { src: "/animais/gata2.jpg", name: "mia2" },
    { src: "/animais/cachorra1.jpg", name: "fiona1" },
    { src: "/animais/gata.jpg", name: "vesguinha1" },
  ];

  const [current, setCurrent] = useState(0);
  const galleryRef = useRef(null);

  // Slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % animals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Função para rolar até a galeria
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
            <li><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-pink-400">Início</button></li>
            <li><button onClick={scrollToGallery} className="hover:text-pink-400">Adote</button></li>
            <li><button onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-pink-400">Contato</button></li>
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

        <button
          onClick={scrollToGallery}
          className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all shadow-lg"
        >
          🌟 Quero Adotar
        </button>
      </section>

      {/* Slider de animais */}
      <section ref={galleryRef} className="relative w-full max-w-3xl mx-auto h-72 md:h-96 overflow-hidden rounded-2xl shadow-lg mb-10">
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
        <p className="text-lg font-medium">📍 São Paulo - SP | 💌 casadathereza1@gmail.com</p>
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
