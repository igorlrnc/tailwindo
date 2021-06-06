import Head from "next/head";
import { FaRegHeart } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>definir o nome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="p-4 flex items-center justify-center">
          <div className="flex px-24 py-2 items-center justify-around rounded gap-x-16 shadow-sm bg-gradient-to-tl from-white to-brand-papaya">
            <div className="flex items-end gap-x-4">
              <FaRegHeart size={20} className="text-brand-blue-dark" />

              <a className="text-brand-blue-dark font-brand text-lg leading-none">
                Estamos na versão BETA. Comece a usar agora e ganhe desconto.
              </a>
            </div>
            <a className="bg-gradient-to-t from-brand-blue-dark to-brand-blue-light px-3 py-2 rounded-full font-semibold text-white text-sm cursor-pointer shadow-md">
              REGISTRE-SE — 90% OFF
            </a>
          </div>
        </section>
        <section
          id="home"
          className="bg-gradient-to-b from-white to-brand-papaya"
        >
          <div className="flex flex-row h-90">
            <div className="w-1/2 z-20 flex items-center">
              <div className="-mr-24 px-16 flex items-start flex-col gap-y-2">
                <h1 className="text-brand-blue-dark text-6xl font-bold font-brand">
                  O sucesso do seu time é o seu sucesso
                </h1>
                <h2 className="font-medium text-brand-blue-dark text-lg text-justify">
                  Uma solução completa para cuidar do seu time, estreitar
                  relações com seus colaboradores e promover um bem-estar real
                  na sua empresa.
                </h2>
                <a className="mt-4 bg-yellow-500 py-3 px-12 rounded-full font-semibold text-white text-lg cursor-pointer shadow-md hover:bg-brand-yellow">
                  QUERO COMEÇAR AGORA!
                </a>
              </div>
            </div>
            <div className="w-1/2 z-10 pl-20 pr-4">
              <img src="/images/landing/team.svg" className="object-cover" />
            </div>
          </div>
        </section>
        <img src="images/landing/base-section-1.svg"></img>

        <section
          id="employee-success"
          className="-mt-72 z-20 px-16 -pb-44 pt-10"
        >
          <h1 className="text-brand-blue-dark text-4xl font-bold font-brand">
            A importância da experiência do colaborador
          </h1>
          <div className="flex flex-row items-stretch gap-x-8 mt-8">
            <div className="w-1/2 h-100 p-5 rounded shadow-xl bg-gradient-to-tl from-brand-papaya to-white">
              <h1 className="text-2xl font-bold font-brand text-brand-blue-dark">
                Melhora das relações interpessoais
              </h1>
              <p className="mt-2 text-brand-blue-dark">
                Se sentindo confortáveis com o ambiente de trabalho, os
                colaboradores tendem a fortalecer os valores da empresa, aplicar
                boas práticas e desenvolver uma melhor relação com os colegas.
              </p>
            </div>
            <div className="w-1/2 h-100 p-5 rounded shadow-xl bg-gradient-to-tl from-brand-papaya to-white">
              <h1 className="text-2xl font-bold font-brand text-brand-blue-dark">
                Desenvolvimento da marca
              </h1>
              <p className="mt-2 text-brand-blue-dark">
                Sendo um melhor lugar para trabalhar, a empresa se torna mais
                competitiva, pois atrai os melhores talentos do mercado e retém
                os que já estão engajados com a marca.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between gap-x-8 mt-8">
            <div className="w-1/2 p-5 rounded shadow-xl bg-gradient-to-tl from-brand-papaya to-white">
              <h1 className="text-2xl font-bold font-brand text-brand-blue-dark">
                Redução de evasão e de custos
              </h1>
              <p className="mt-2 text-brand-blue-dark">
                Com uma cultura de cuidado bem implementada, a saída de
                colaboradores é reduzida, resultando em economia com custos de
                contratação e treinamentos de novos funcionários.
              </p>
            </div>
            <img src="images/landing/success.svg" className="w-5/12 z-20" />
          </div>
        </section>
        <section className="-mt-96 z-10">
          <img src="images/landing/base-section-2.svg" className="z-10"></img>
          <div className="bg-gradient-to-b from-brand-blue-dark via-brand-blue-dark  to-brand-blue-dark px-16">
            <h1 className="text-white text-4xl font-bold font-brand -mt-8">
              Por que a (nome)?
            </h1>
            <div className="flex mt-20 pb-16 gap-x-8 items-stretch">
              <div className="h-64 w-1/3 overflow-hidden">
                <img src="images/landing/tool.svg" className="object-cover" />
              </div>
              <div className="w-1/3">
                <p className="text-lg text-white font-semibold">
                  Por meio de uma ferramenta simples e fácil de usar, a (nome)
                  ajuda sua empresa a garantir que o sentimento que seus
                  colaboradores têm ao trabalhar na sua empresa se alinha com os
                  valores que você prometeu entregar a eles, sempre visando o
                  sucesso da sua marca e a felicidade de seus colaboradores.
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-lg text-white font-semibold">
                  Fornecemos a melhor opção para a garantia de uma ótima
                  experiência para seus colaboradores, desde um feedback geral
                  sobre a empresa, com um mecanismo que permite aos
                  colaboradores darem opiniões sinceras e construtivas sobre sua
                  marca, até o gerenciamento de reuniões 1:1, que merecem uma
                  atenção e cuidado individual, faremos de tudo para ajudar você
                  e seu time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
