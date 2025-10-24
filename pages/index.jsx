import React from "react";

// Imagens reais hospedadas no GitHub
const baseURL = "https://raw.githubusercontent.com/Emshtml/casa-thereza-anjo-dos-animais/main/public/animais/";

const animals = [
  { id: 1, name: "thor.jpg", age: "2 anos", breed: "SRD", img: `${baseURL}thor.jpg`, story: "Resgatada em 2024, amorosa e brincalhona." },
  { id: 2, name: "frida.jpg", age: "4 anos", breed: "Vira-lata", img: `${baseURL}frida.jpg`, story: "Adora passeios e carinho." },
  { id: 3, name: "mia1.jpg", age: "1 ano", breed: "Gata", img: `${baseURL}mia1.jpg`, story: "Carinhosa e ótima com crianças." },
  { id: 4, name: "mia2.jpg", age: "3 anos", breed: "Vira-lata", img: `${baseURL}mia2.jpg`, story: "Muito brincalhão e amigo dos outros cães." },
  { id: 5, name: "fiona1.jpg", age: "2 anos", breed: "SRD", img: `${baseURL}fiona1.jpg`, story: "Doce e tranquila, adora carinho." }
];

export default function AmigosCasaThereza() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 font-sans text-gray-800">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-rose-300 flex items-center justify-center text-white font-bold">CT</div>
          <div>
            <h1 className="text-2xl font-extrabold">Amigos da Casa</h1>
            <p className="text-sm text-gray-600">Thereza — Anjo dos Animais 🐾</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#animais" className="hover:underline">Animais</a>
          <a href="#como-ajudar" className="hover:underline">Como ajudar</a>
          <a href="#contato" className="px-4 py-2 bg-rose-600 text-white rounded-full">Doe</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Bem-vindo aos Amigos da Casa</h2>
            <p className="mb-6 text-gray-700">Somos um lar de acolhimento e cuidado para animais resgatados. Nossa missão é dar amor, recuperação e encontrar lares para cada um deles.</p>
            <div className="flex gap-3">
              <a href="#animais" className="px-5 py-3 bg-rose-600 text-white rounded-lg font-semibold">Conheça os animais</a>
              <a href="#como-ajudar" className="px-5 py-3 border border-rose-300 rounded-lg">Quero ajudar</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={`${baseURL}hero.jpg`} alt="Casa Thereza" className="w-full h-80 object-cover" />
          </div>
        </section>

        <section id="sobre" className="py-8">
          <h3 className="text-2xl font-bold mb-3">Sobre a Casa</h3>
          <p className="text-gray-700">A Casa da Thereza é um espaço dedicado ao resgate e recuperação de animais em situação de risco. Trabalhamos com acolhimento, tratamento veterinário e adoção responsável.</p>
        </section>

        <section id="animais" className="py-8">
          <h3 className="text-2xl font-bold mb-6">Animais disponíveis para adoção</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {animals.map(a => (
              <article key={a.id} className="bg-white rounded-xl shadow p-4">
                <div className="h-44 rounded-md overflow-hidden mb-3">
                  <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg">{a.name} <span className="text-sm text-gray-500">- {a.age}</span></h4>
                <p className="text-sm text-gray-600 mb-2">{a.breed}</p>
                <p className="text-gray-700 text-sm mb-3">{a.story}</p>
                <div className="flex gap-2">
                  <a href="#contato" className="flex-1 text-center py-2 border border-rose-300 rounded-lg">Quero adotar</a>
                  <button className="px-3 py-2 bg-rose-600 text-white rounded-lg">Salvar</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="como-ajudar" className="py-8">
          <h3 className="text-2xl font-bold mb-3">Como ajudar</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Doações</h4>
              <p className="text-sm text-gray-600 mb-3">Contribua com alimentos, medicamentos ou suporte financeiro.</p>
              <a className="inline-block px-4 py-2 bg-rose-600 text-white rounded">Doar agora</a>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Voluntariado</h4>
              <p className="text-sm text-gray-600 mb-3">Ajude com passeios, limpeza e cuidados diários.</p>
              <a className="inline-block px-4 py-2 border rounded">Quero ser voluntário</a>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h4 className="font-semibold mb-2">Adoção</h4>
              <p className="text-sm text-gray-600 mb-3">Abra seu lar para um amigo de quatro patas.</p>
              <a className="inline-block px-4 py-2 border rounded">Ver processo de adoção</a>
            </div>
          </div>
        </section>

        <section id="contato" className="py-8">
          <h3 className="text-2xl font-bold mb-3">Contato</h3>
          <p className="text-gray-700 mb-4">Endereço: Rua Exemplo, 123 — São Paulo, SP</p>
          <form className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <input className="p-3 rounded border" placeholder="Seu nome" />
            <input className="p-3 rounded border" placeholder="Email" />
            <textarea className="p-3 rounded border col-span-2" placeholder="Mensagem" rows={4}></textarea>
            <button className="col-span-2 px-4 py-3 bg-rose-600 text-white rounded">Enviar mensagem</button>
          </form>
        </section>
      </main>

      <footer className="mt-12 bg-white border-t py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Amigos da Casa — Thereza Anjo dos Animais</p>
          <div className="flex gap-3">
            <a className="text-sm">Instagram</a>
            <a className="text-sm">Facebook</a>
            <a className="text-sm">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
