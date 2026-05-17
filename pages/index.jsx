import Head from "next/head"

const animals = [
  {
    name: "Luna",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
    description:
      "Resgatada das ruas e hoje pronta para encontrar uma família amorosa.",
  },
  {
    name: "Thor",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sobreviveu ao abandono e agora busca um novo lar cheio de carinho.",
  },
  {
    name: "Mimi",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
    description:
      "Recebeu tratamento veterinário e está saudável novamente.",
  },
  {
    name: "Bob",
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Chegou muito debilitado, mas hoje espalha alegria para todos.",
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Amigos da Casa de Thereza</title>
        <meta
          name="description"
          content="ONG de proteção animal dedicada ao resgate, cuidado e adoção responsável."
        />
      </Head>

      <main className="bg-[#fffdf8] text-gray-800 overflow-hidden">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1600&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Animais resgatados"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm">
                ONG Amigos da Casa de Thereza
              </span>

              <h1 className="text-5xl md:text-7xl font-black text-white mt-6 leading-tight">
                Salvando vidas.
                <span className="block text-yellow-300">
                  Espalhando amor.
                </span>
              </h1>

              <p className="text-white/90 text-lg mt-6 max-w-xl leading-relaxed">
                Cada resgate é uma nova chance de felicidade. Ajude nossa ONG a
                transformar a vida de cães e gatos abandonados.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://wa.me/5511954626174"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl shadow-2xl transition"
                >
                  Quero Ajudar
                </a>

                <a
                  href="#adocao"
                  className="bg-white/10 border border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-2xl backdrop-blur-md transition"
                >
                  Adotar um Pet
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop"
                className="rounded-3xl h-72 object-cover shadow-2xl"
              />

              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop"
                className="rounded-3xl h-72 object-cover mt-10 shadow-2xl"
              />

              <img
                src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=1200&auto=format&fit=crop"
                className="rounded-3xl h-72 object-cover -mt-6 shadow-2xl"
              />

              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop"
                className="rounded-3xl h-72 object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
            {[
              ["+1.200", "Animais Resgatados"],
              ["+850", "Adoções Realizadas"],
              ["+300", "Animais em Tratamento"],
              ["+120", "Voluntários Ativos"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="bg-[#fff8ec] rounded-3xl p-10 shadow-lg"
              >
                <h3 className="text-5xl font-black text-orange-500">
                  {number}
                </h3>

                <p className="mt-3 text-gray-600 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1200&auto=format&fit=crop"
                className="rounded-[40px] shadow-2xl"
              />
            </div>

            <div>
              <span className="text-orange-500 font-bold uppercase tracking-widest">
                Nossa Missão
              </span>

              <h2 className="text-5xl font-black mt-4 leading-tight">
                Transformar abandono em esperança.
              </h2>

              <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                A ONG Amigos da Casa de Thereza atua no resgate, tratamento e
                adoção responsável de cães e gatos em situação de risco.
              </p>

              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                Cada doação ajuda com alimentação, medicamentos, castrações e
                cuidados veterinários para salvar vidas todos os dias.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-orange-100 px-6 py-4 rounded-2xl">
                  🐶 Resgate Animal
                </div>

                <div className="bg-yellow-100 px-6 py-4 rounded-2xl">
                  🏥 Tratamento Veterinário
                </div>

                <div className="bg-green-100 px-6 py-4 rounded-2xl">
                  ❤️ Adoção Responsável
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PETS */}
        <section id="adocao" className="py-24 px-6 bg-[#fff8f0]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-bold uppercase tracking-widest">
                Adote Amor
              </span>

              <h2 className="text-5xl font-black mt-4">
                Animais esperando por uma família
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {animals.map((animal) => (
                <div
                  key={animal.name}
                  className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
                >
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="h-72 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-black">
                      {animal.name}
                    </h3>

                    <p className="text-gray-600 mt-3 leading-relaxed">
                      {animal.description}
                    </p>

                    <button className="w-full mt-6 bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-2xl transition">
                      Quero Adotar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DONATION */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-orange-500 to-yellow-400 rounded-[40px] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -left-10 text-9xl opacity-10">
              🐾
            </div>

            <div className="absolute bottom-0 right-10 text-9xl opacity-10">
              ❤️
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Sua ajuda salva vidas.
            </h2>

            <p className="mt-6 text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              Doe qualquer valor via PIX e ajude nossa ONG a continuar
              resgatando cães e gatos abandonados.
            </p>

            <div className="mt-10 bg-white text-black inline-block px-10 py-6 rounded-3xl shadow-xl">
              <p className="font-bold text-lg">PIX</p>

              <p className="text-2xl font-black mt-2">
                doacao@amigosdathereza.org
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/5511954626174"
                className="bg-white text-orange-500 font-black px-10 py-5 rounded-2xl inline-block hover:scale-105 transition"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#1e1e1e] text-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-3xl font-black">
                Amigos da Casa de Thereza
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Resgatando, cuidando e encontrando novos lares para animais em
                situação de abandono.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl">Contato</h4>

              <ul className="mt-4 space-y-3 text-gray-400">
                <li>WhatsApp: (11) 954626174</li>
                <li>Email:casadathereza1@gmail.com</li>
                <li>São Paulo - SP</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl">Ajude</h4>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Compartilhe nossa causa e ajude a salvar mais vidas.
              </p>

              <button className="mt-6 bg-orange-500 hover:bg-orange-400 px-8 py-4 rounded-2xl font-bold transition">
                Fazer Doação
              </button>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
