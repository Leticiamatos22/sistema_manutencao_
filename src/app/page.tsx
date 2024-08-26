"use client";

import React, { useState } from 'react';
import { AiOutlineEnvironment } from "react-icons/ai";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Footer } from './components/footer';
import { Aside } from "./components/aside";
import { Card } from "./components/Card";
import Table from "./components/Table";
import CadastroManutencao from './components/CadastroManutencao';
import CadastroPecas from './components/CadastroPecas';

const cards = [
  {color: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500", qty: "200", text: "Ambientes", icon: <AiOutlineEnvironment size={48} />},
  {color: "bg-gradient-to-r from-green-400 to-blue-500", qty: "200", text: "Equipamentos", icon: <HiOutlineWrenchScrewdriver size={48} />},
  {color: "bg-gradient-to-r from-yellow-300 to-orange-400", qty: "200", text: "Manutenção", icon: <CgNotes size={48} />},
  {color: "bg-gradient-to-r from-teal-400 to-lime-500", qty: "200", text: "Maquinas", icon: <FaRegCircleCheck size={48} />},
];

export default function Home() {
  const [showCadastroManutencao, setShowCadastroManutencao] = useState(false);
  const [showCadastroPecas, setShowCadastroPecas] = useState(false);

  const data = [
    { ambiente: 'Ambiente 1', equipamento: 'Equipamento 1', solicitacao: 'Solicitação 1', atendimento: 'Atendimento 1', acoes: 'Ação 1' },
    { ambiente: 'Ambiente 2', equipamento: 'Equipamento 2', solicitacao: 'Solicitação 2', atendimento: 'Atendimento 2', acoes: 'Ação 2' },
    { ambiente: 'Ambiente 3', equipamento: 'Equipamento 3', solicitacao: 'Solicitação 3', atendimento: 'Atendimento 3', acoes: 'Ação 3' },
    { ambiente: 'Ambiente 4', equipamento: 'Equipamento 4', solicitacao: 'Solicitação 4', atendimento: 'Atendimento 4', acoes: 'Ação 4' },
    { ambiente: 'Ambiente 5', equipamento: 'Equipamento 5', solicitacao: 'Solicitação 5', atendimento: 'Atendimento 5', acoes: 'Ação 5' },
    { ambiente: 'Ambiente 6', equipamento: 'Equipamento 6', solicitacao: 'Solicitação 6', atendimento: 'Atendimento 6', acoes: 'Ação 6' },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {showCadastroManutencao && (
        <CadastroManutencao onClose={() => setShowCadastroManutencao(false)} />
      )}
      {showCadastroPecas && (
        <CadastroPecas onClose={() => setShowCadastroPecas(false)} />
      )}
      <div className="flex-1 flex overflow-auto">
        <Aside className="bg-gray-800 text-black" />

        <main className="flex-1 flex flex-col overflow-auto p-4">
          <h1 className="text-4xl font-bold uppercase w-full bg-white shadow-md p-6 text-center text-gray-800 rounded-lg">
            Sistema de Manutenção
          </h1>

          <div className="p-6 flex space-x-4 justify-center">
            <button 
              className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700"
              onClick={() => setShowCadastroManutencao(true)}
            >
              Cadastrar Manutenção
            </button>
            <button 
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700"
              onClick={() => setShowCadastroPecas(true)}
            >
              Cadastro de Peças
            </button>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            {cards.map((props, index) => (
              <Card 
                key={index} 
                color={props.color} 
                qty={props.qty} 
                text={props.text} 
                icon={props.icon} 
                className="rounded-lg shadow-xl text-white p-4 flex items-center justify-between"
              />
            ))}
          </div>

          <Table data={data} className="bg-white rounded-lg shadow-lg p-4" />
        </main>
      </div>
      <Footer className="bg-gray-800 text-black p-4" />
    </div>
  );
}
