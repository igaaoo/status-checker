import { useState } from 'react';
import Servico from './components/Servico';
import { dadosServico } from './services/servicosData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-primary flex justify-center px-12 ">
        <header className="bg-primary  w-full md:w-[70vw]  py-8">
          <div className="flex md:justify-between sm:justify-center  mb-3 items-center align-middle">
            <h1 className="text-white text-4xl font-semibold hidden md:block">
              Status de Serviços
            </h1>
            <img
              src="/logo.png"
              alt="Logo Newland"
              className="w-80 brightness-0 items-center  invert mb-3 object-contain"
            />
          </div>
          <div>
            <div>
              <button
                className="flex items-center justify-between rounded w-full py-3 shadow px-4 bg-secondary text-yellow-50 focus:outline-none"
                onClick={toggleAccordion}
              >
                <span className="text-xl font-medium text-white">
                  Sobre o funcionamento do sistema
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="p-4 bg-secondary">
                  <p className="text-yellow-50 text-lg">
                    O sistema realiza a verificação do status dos sites registrados quando
                    a página é carregada. Por meio de requisições{' '}
                    <span className="text-green-400">GET</span> , o sistema faz uma
                    solicitação às aplicações registradas para confirmar se estão
                    funcionando corretamente. <br /> <br />A importância de abrir um
                    chamado quando um site é detectado como offline é fundamental. Ao
                    identificar que um site está indisponível, é crucial informar a equipe
                    de suporte técnico imediatamente.
                  </p>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
      <section className="flex justify-center  px-12">
        <div className=" w-full md:w-[70vw]">
          {dadosServico.map(grupo => (
            <div key={grupo.titulo}>
              <h2 className="text-xl font-bold border-b mb-2 mt-6 border-gray-600">
                {grupo.titulo}
              </h2>
              {grupo.dados.map(servico => (
                <Servico key={servico.nome} nome={servico.nome} link={servico.link} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

