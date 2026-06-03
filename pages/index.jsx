/*
|--------------------------------------------------------------------------
| Amigos da Casa de Thereza
|--------------------------------------------------------------------------
| Copyright (c) 2026 Emshtml
| Todos os direitos reservados.
|
| Este software é propriedade intelectual de Emshtml.
| A reprodução, distribuição ou revenda sem autorização é proibida.
|--------------------------------------------------------------------------
*/

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
  const copiarPix = () => {
    navigator.clipboard.writeText("casadathereza1@gmail.com")
    alert("Chave PIX copiada com sucesso!")
  }

  return (
    <>
      <Head>
        <title>
          Amigos da Casa de Thereza | Resgate e Proteção Animal
        </title>

        <meta
          name="description"
          content="Ajude a salvar cães e gatos abandonados. Faça uma doação, adote um pet ou torne-se voluntário."
        />

        <meta
          property="og:title"
          content="Amigos da Casa de Thereza"
        />

        <meta
          property="og:description"
          content="Transformando abandono em esperança."
        />

        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="bg-[#fffdf8] text-gray-800 overflow-hidden">

        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">

          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1600&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Animais Resgatados"
            />

            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm">
                🐾 ONG Amigos da Casa de Thereza
              </span>

              <h1 className="text-5xl md:text-7xl font-black text-white mt-6 leading-tight">
                Salve uma vida.
                <span className="block text-yellow-300">
                  Doe esperança.
                </span>
              </h1>

              <p className="text-white/90 text-lg mt-6 max-w-xl leading-relaxed">
                Todos os dias cães e gatos são abandonados nas ruas.
                Sua contribuição ajuda a fornecer alimento,
                abrigo, medicamentos e uma nova oportunidade
                para quem mais precisa.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="https://wa.me/5511954626174?text=Olá%20quero%20ajudar%20a%20ONG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl shadow-2xl transition"
                >
                  Fazer Doação
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
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop"
                className="rounded-3xl h-72 object-cover mt-10 shadow-2xl"
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=1200&auto=format&fit=crop"
                className="rounded-3xl h-72 object-cover -mt-6 shadow-2xl"
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop"
                className="rounded-3xl h-72 object-cover shadow-2xl"
                alt=""
              />

            </div>

          </div>

        </section>

        {/* ESTATÍSTICAS */}
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

                <p className="mt-3 text-gray-600 font-medium">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* ANTES E DEPOIS */}
        <section className="py-24 px-6 bg-[#fff4e8]">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <span className="text-orange-500 font-bold uppercase tracking-widest">
                Histórias Reais
              </span>

              <h2 className="text-5xl font-black mt-4">
                Antes e Depois do Resgate
              </h2>

              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Conheça transformações que só foram possíveis graças
                às doações e ao trabalho dos nossos voluntários.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-12">

              <div className="bg-white rounded-[40px] overflow-hidden shadow-xl">

                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200"
                  className="w-full h-80 object-cover"
                  alt="Antes do Resgate"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-black text-red-500">
                    Antes
                  </h3>

                  <p className="mt-4 text-gray-600">
                    Encontrado abandonado e sem assistência.
                  </p>

                </div>

              </div>

              <div className="bg-white rounded-[40px] overflow-hidden shadow-xl">

                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200"
                  className="w-full h-80 object-cover"
                  alt="Depois do Resgate"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-black text-green-600">
                    Depois
                  </h3>

                  <p className="mt-4 text-gray-600">
                    Recuperado, saudável e pronto para adoção.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>        {/* NOSSA MISSÃO */}
        <section className="py-24 px-6">

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1200&auto=format&fit=crop"
                className="rounded-[40px] shadow-2xl"
                alt="Missão da ONG"
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
                Atuamos diariamente no resgate de cães e gatos em situação de
                vulnerabilidade, oferecendo tratamento veterinário,
                alimentação adequada e oportunidades reais de adoção.
              </p>

              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                Nossa missão é garantir dignidade, segurança e amor para
                animais que sofreram abandono e maus-tratos.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <div className="bg-orange-100 px-6 py-4 rounded-2xl">
                  🐶 Resgate Animal
                </div>

                <div className="bg-yellow-100 px-6 py-4 rounded-2xl">
                  🏥 Atendimento Veterinário
                </div>

                <div className="bg-green-100 px-6 py-4 rounded-2xl">
                  ❤️ Adoção Responsável
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* IMPACTO */}
        <section className="py-24 px-6 bg-[#fff8f0]">

          <div className="max-w-7xl mx-auto">

            <div className="text-center">

              <span className="text-orange-500 font-bold uppercase tracking-widest">
                Nosso Impacto
              </span>

              <h2 className="text-5xl font-black mt-4">
                Cada Doação Gera Transformação
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">

              <div className="bg-white rounded-[32px] p-10 shadow-xl text-center">

                <div className="text-6xl">
                  🍖
                </div>

                <h3 className="text-3xl font-black mt-6">
                  Alimentação
                </h3>

                <p className="text-gray-600 mt-4">
                  Garantimos refeições diárias para animais resgatados.
                </p>

              </div>

              <div className="bg-white rounded-[32px] p-10 shadow-xl text-center">

                <div className="text-6xl">
                  💉
                </div>

                <h3 className="text-3xl font-black mt-6">
                  Tratamentos
                </h3>

                <p className="text-gray-600 mt-4">
                  Custeamos consultas, medicamentos e cirurgias.
                </p>

              </div>

              <div className="bg-white rounded-[32px] p-10 shadow-xl text-center">

                <div className="text-6xl">
                  🏠
                </div>

                <h3 className="text-3xl font-black mt-6">
                  Novos Lares
                </h3>

                <p className="text-gray-600 mt-4">
                  Encontramos famílias responsáveis para adoção.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ADOÇÃO */}
        <section
          id="adocao"
          className="py-24 px-6 bg-white"
        >

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">

              <span className="text-orange-500 font-bold uppercase tracking-widest">
                Adote Amor
              </span>

              <h2 className="text-5xl font-black mt-4">
                Animais Esperando por um Lar
              </h2>

              <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                Conheça alguns dos animais disponíveis para adoção responsável.
              </p>

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

                    <a
                      href={`https://wa.me/5511954626174?text=Olá,%20tenho%20interesse%20em%20adotar%20${animal.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full mt-6 bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-2xl transition"
                    >
                      Quero Adotar
                    </a>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* VOLUNTÁRIOS */}
        <section className="py-24 px-6 bg-[#fff8ec]">

          <div className="max-w-6xl mx-auto text-center">

            <span className="text-orange-500 font-bold uppercase tracking-widest">
              Faça Parte
            </span>

            <h2 className="text-5xl font-black mt-4">
              Torne-se um Voluntário
            </h2>

            <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
              Você pode ajudar em eventos, resgates, campanhas de arrecadação,
              transporte de animais e divulgação da nossa causa.
            </p>

            <a
              href="https://wa.me/5511954626174?text=Olá,%20quero%20ser%20voluntário"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-orange-500 hover:bg-orange-400 text-white font-black px-10 py-5 rounded-2xl transition"
            >
              Quero Ser Voluntário
            </a>

          </div>

        </section>        {/* DOAÇÃO */}
        <section id="doacao" className="py-24 px-6">

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
              Cada contribuição ajuda a financiar alimentação,
              medicamentos, vacinas, castrações e resgates emergenciais.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <a
                href="https://wa.me/5511954626174?text=Quero%20doar%20R$20"
                className="bg-white text-orange-500 font-black px-8 py-4 rounded-2xl hover:scale-105 transition"
              >
                Doar R$20
              </a>

              <a
                href="https://wa.me/5511954626174?text=Quero%20doar%20R$50"
                className="bg-white text-orange-500 font-black px-8 py-4 rounded-2xl hover:scale-105 transition"
              >
                Doar R$50
              </a>

              <a
                href="https://wa.me/5511954626174?text=Quero%20doar%20R$100"
                className="bg-white text-orange-500 font-black px-8 py-4 rounded-2xl hover:scale-105 transition"
              >
                Doar R$100
              </a>

            </div>

            <div className="mt-12 bg-white text-black inline-block px-10 py-8 rounded-3xl shadow-xl">

              <p className="font-bold text-lg">
                PIX PARA DOAÇÃO
              </p>

              <p className="text-2xl font-black mt-3 break-all">
                casadathereza1@gmail.com
              </p>

              <button
                onClick={copiarPix}
                className="mt-6 bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-bold transition"
              >
                Copiar PIX
              </button>

            </div>

          </div>

        </section>

        {/* TRANSPARÊNCIA */}
        <section className="py-24 px-6 bg-white">

          <div className="max-w-6xl mx-auto">

            <div className="text-center">

              <span className="text-orange-500 font-bold uppercase tracking-widest">
                Transparência
              </span>

              <h2 className="text-5xl font-black mt-4">
                Como Utilizamos as Doações
              </h2>

            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-16">

              <div className="bg-orange-50 rounded-3xl p-8 text-center">
                <div className="text-5xl">🍖</div>
                <h3 className="font-black text-xl mt-4">
                  Alimentação
                </h3>
              </div>

              <div className="bg-orange-50 rounded-3xl p-8 text-center">
                <div className="text-5xl">💉</div>
                <h3 className="font-black text-xl mt-4">
                  Vacinas
                </h3>
              </div>

              <div className="bg-orange-50 rounded-3xl p-8 text-center">
                <div className="text-5xl">🏥</div>
                <h3 className="font-black text-xl mt-4">
                  Tratamentos
                </h3>
              </div>

              <div className="bg-orange-50 rounded-3xl p-8 text-center">
                <div className="text-5xl">🚑</div>
                <h3 className="font-black text-xl mt-4">
                  Resgates
                </h3>
              </div>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-[#fff8ec]">

          <div className="max-w-4xl mx-auto">

            <div className="text-center mb-16">

              <span className="text-orange-500 font-bold uppercase tracking-widest">
                Perguntas Frequentes
              </span>

              <h2 className="text-5xl font-black mt-4">
                Dúvidas Comuns
              </h2>

            </div>

            <div className="space-y-6">

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="font-black text-xl">
                  Como posso ajudar?
                </h3>

                <p className="mt-3 text-gray-600">
                  Você pode doar, adotar, compartilhar nossa causa
                  ou se tornar voluntário.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="font-black text-xl">
                  Como funciona a adoção?
                </h3>

                <p className="mt-3 text-gray-600">
                  Entramos em contato para entrevista e avaliação
                  do novo lar.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="font-black text-xl">
                  Posso visitar os animais?
                </h3>

                <p className="mt-3 text-gray-600">
                  Sim. Agende uma visita pelo WhatsApp.
                </p>
              </div>

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
                Resgatando, tratando e encontrando novos lares para
                cães e gatos em situação de abandono.
              </p>

            </div>

            <div>

              <h4 className="font-bold text-xl">
                Contato
              </h4>

              <ul className="mt-4 space-y-3 text-gray-400">

                <li>
                  WhatsApp: (11) 95462-6174
                </li>

                <li>
                  Email: casadathereza1@gmail.com
                </li>

                <li>
                  São Paulo - SP
                </li>

              </ul>

            </div>

            <div>

              <h4 className="font-bold text-xl">
                Ajude Nossa Causa
              </h4>

              <p className="text-gray-400 mt-4 leading-relaxed">
                Sua contribuição ajuda diretamente animais resgatados.
              </p>

              <a
                href="#doacao"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-400 px-8 py-4 rounded-2xl font-bold transition"
              >
                Fazer Doação
              </a>

            </div>

          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">

            © 2026 Amigos da Casa de Thereza.
            Todos os direitos reservados.

            <br />

            Plataforma desenvolvida por Emshtml.

          </div>

        </footer>

      </main>

    </>

  )
}
