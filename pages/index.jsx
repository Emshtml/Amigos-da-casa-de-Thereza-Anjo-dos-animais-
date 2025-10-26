import React from "react";

const baseURL =
  "https://raw.githubusercontent.com/Emshtml/casa-thereza-anjo-dos-animais/main/public/animais/";

const animals = [
  {
    id: 1,
    name: "frida",
    age: "2 anos",
    breed: "SRD",
    img: `${baseURL}frida.jpg`,
    story: "Resgatada em 2024, amorosa e brincalhona. Adora correr e receber carinho.",
  },
  {
    id: 2,
    name: "fiona1",
    age: "4 anos",
    breed: "Vira-lata",
    img: `${baseURL}fiona1.jpg`,
    story: "Adora passeios e carinho, muito dócil e sociável com outros cães.",
  },
  {
    id: 3,
    name: "mia2",
    age: "1 ano",
    breed: "Gata",
    img: `${baseURL}mia2.jpg`,
    story: "Carinhosa, independente e ótima com crianças. Adora janelas e mimos!",
  },
  {
    id: 4,
    name: "Thor",
    age: "3 anos",
    breed: "SRD",
    img: `${baseURL}thor.jpg`,
    story: "Forte e leal, mas com coração doce. Está pronto para um lar cheio de amor.",
  },
  {
    id: 5,
    name: "vesguinha1",
    age: "2 anos",
    breed: "Gata siamesa",
    img: `${baseURL}vesguinha1.jpg`,
    story: "Meiga e silenciosa. Foi resgatada ainda filhote e ama colo e tranquilidade.",
  },
];

export default function AmigosCasaThereza() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-rose-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16">
  <img
    src="/logo.png"
    alt="Casa da Thereza - Anjo dos Animais"
    className="w-full h-full object-contain rounded-full shadow-md bg-white p-1"
  />
</div>

            </div>
            <div>
              <h1 className="text-xl font-extrabold">Amigos da Casa</h1>
              <p className="text-sm text-gray-600">Thereza — Anjo dos Animais 🐾</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#animais" className="hover:text-rose-600">
              Animais
            </a>
            <a href="#como-ajudar" className="hover:text-rose-600">
              Como Ajudar
            </a>
            <a href="#contato" className="hover:text-rose-600">
              Contato
            </a>
            <a
              href="https://wa.me/5511976794749"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700"
            >
              Doe ❤️
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative flex items-center justify-center h-[70vh] bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('${baseURL}hero.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center max-w-2xl p-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Um lar de amor e esperança 💖
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-6">
            Cada animal aqui carrega uma história e espera um final feliz.  
            Junte-se a nós nessa missão!
          </p>
          <a
            href="#animais"
            className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 shadow-md"
          >
            Conheça nossos animais
          </a>
        </div>
      </section>

      {/* Galeria de animais */}
      <section id="animais" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-rose-700">
          🐕🐈 Animais para adoção
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((a) => (
            <article
              key={a.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <img
                src={a.img}
                alt={a.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold text-rose-700">{a.name}</h4>
                <p className="text-sm text-gray-500 mb-1">
                  {a.breed} — {a.age}
                </p>
                <p className="text-gray-700 text-sm mb-4">{a.story}</p>
                <a
                  href="https://wa.me/5511976794749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700"
                >
                  Quero Adotar ❤️
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Como ajudar */}
      <section
        id="como-ajudar"
        className="bg-rose-50 border-t border-rose-200 py-16 px-6 text-center"
      >
        <h3 className="text-3xl font-bold mb-8 text-rose-700">Como Ajudar 🐾</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold mb-3">Doações</h4>
            <p className="text-sm mb-4">
              Contribua com ração, medicamentos ou apoio financeiro.
            </p>
            <a
              href="https://wa.me/5511976794749"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
            >
              Doar Agora
            </a>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold mb-3">Voluntariado</h4>
            <p className="text-sm mb-4">
              Ajude com cuidados, passeios e carinhos aos nossos bichinhos.
            </p>
            <a
              href="https://wa.me/5511976794749"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 border border-rose-400 rounded hover:bg-rose-50"
            >
              Quero Ajudar
            </a>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="font-semibold mb-3">Adoção</h4>
            <p className="text-sm mb-4">
              Abra seu lar para um novo amigo. A adoção salva vidas ❤️
            </p>
            <a
              href="#animais"
              className="inline-block px-5 py-2 border border-rose-400 rounded hover:bg-rose-50"
            >
              Ver Animais
            </a>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black text-gray-100 py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Amigos da Casa — Thereza Anjo dos Animais
        </p>
        <div className="flex justify-center gap-6 mt-3">
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
            className="hover:text-pink-400"
          >
            WhatsApp
          </a>
        </div>
      </footer>

      {/* Botão WhatsApp flutuante */}
      <a
        href="https://wa.me/5511976794749"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        💬
      </a>
    </div>
  );
}

