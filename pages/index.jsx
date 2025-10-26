import Image from "next/image";

export default function AmigosCasaThereza() {
  const animais = [
    { nome: "Thor", imagem: "/animais/thor.jpg" },
    { nome: "Frida", imagem: "/animais/frida.jpg" },
    { nome: "Mia", imagem: "/animais/mia1.jpg" },
    { nome: "Mia", imagem: "/animais/mia2.jpg" },
    { nome: "Fiona", imagem: "/animais/fiona1.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-100 text-gray-800 font-sans">
      {/* ===== HEADER ===== */}
      <header className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Logo Casa da Thereza Anjo dos Animais"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-rose-600">
            Casa da Thereza 🐾
          </h1>
        </div>
        <a
          href="https://www.instagram.com/casadatherezaong"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-500 font-semibold hover:underline"
        >
          Instagram
        </a>
      </header>

      {/* ===== SEÇÃO PRINCIPAL ===== */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-6 text-rose-700">
          🐶 Nossos Amigos para Adoção 🐱
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {animais.map((animal, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center"
            >
              <div className="relative w-56 h-56 flex items-center justify-center overflow-hidden rounded-xl mb-3">
                <Image
                  src={animal.imagem}
                  alt={animal.nome}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-rose-700">
                {animal.nome}
              </h3>
              <a
                href="https://wa.me/5511976794749"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 bg-rose-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition"
              >
                Adotar {animal.nome}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RODAPÉ ===== */}
      <footer className="bg-white text-center py-6 mt-12 shadow-inner">
        <p className="text-gray-600">
          💌 Contato:{" "}
          <a
            href="mailto:casadatherezaong@gmail.com"
            className="text-rose-600 font-semibold hover:underline"
          >
            casadatherezaong@gmail.com
          </a>
        </p>
        <p className="text-gray-500 text-sm mt-2">
          © 2025 Casa da Thereza Anjo dos Animais — Todos os direitos reservados
        </p>
      </footer>

      {/* ===== BOTÃO FLUTUANTE WHATSAPP ===== */}
      <a
        href="https://wa.me/5511976794749"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </div>
  );
}

