"use client";

import React, { useState } from 'react';
import { Aside } from "../components/aside";
import { Footer } from "../components/footer";

const ControleCustos = () => {
  const [pecas, setPecas] = useState<{ descricao: string; quantidade: number; fornecedor: string; custo: number }[]>([]);
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState(0);
  const [fornecedor, setFornecedor] = useState('');
  const [custo, setCusto] = useState(0);
  const [maoDeObra, setMaoDeObra] = useState(0);
  const [servicos, setServicos] = useState(0);

  const handleAddPeca = () => {
    if (descricao && quantidade > 0 && fornecedor && custo > 0) {
      setPecas([...pecas, { descricao, quantidade, fornecedor, custo }]);
      setDescricao('');
      setQuantidade(0);
      setFornecedor('');
      setCusto(0);
    }
  };

  const calcularTotal = () => {
    const totalPecas = pecas.reduce((sum, peca) => sum + peca.custo, 0);
    return totalPecas + maoDeObra + servicos;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 flex overflow-hidden">
        <Aside />
        <main className="flex-1 flex flex-col p-6 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Controle de Custos</h2>

          <form className="space-y-4 bg-white p-6 rounded-md shadow-lg">
            <div>
              <label className="block text-gray-700">Descrição da Peça</label>
              <input 
                type="text" 
                value={descricao} 
                onChange={(e) => setDescricao(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-gray-900" 
              />
            </div>
            <div>
              <label className="block text-gray-700">Quantidade</label>
              <input 
                type="number" 
                value={quantidade} 
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-gray-900" 
              />
            </div>
            <div>
              <label className="block text-gray-700">Fornecedor</label>
              <input 
                type="text" 
                value={fornecedor} 
                onChange={(e) => setFornecedor(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-gray-900" 
              />
            </div>
            <div>
              <label className="block text-gray-700">Custo</label>
              <input 
                type="number" 
                value={custo} 
                onChange={(e) => setCusto(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-gray-900" 
              />
            </div>
            <div className="flex justify-end">
              <button 
                type="button" 
                onClick={handleAddPeca}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Adicionar Peça
              </button>
            </div>
          </form>

          <section className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Peças e Materiais Registrados</h3>
            {pecas.length === 0 ? (
              <p className="text-gray-600">Nenhuma peça registrada ainda.</p>
            ) : (
              <ul className="space-y-4">
                {pecas.map((peca, index) => (
                  <li key={index} className="bg-white p-4 rounded-md shadow-md border border-gray-200">
                    <p className="text-gray-800"><strong>Descrição:</strong> {peca.descricao}</p>
                    <p className="text-gray-800"><strong>Quantidade:</strong> {peca.quantidade}</p>
                    <p className="text-gray-800"><strong>Fornecedor:</strong> {peca.fornecedor}</p>
                    <p className="text-gray-800"><strong>Custo:</strong> R${peca.custo.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custos Adicionais</h3>
            <form className="space-y-4 bg-white p-6 rounded-md shadow-lg">
              <div>
                <label className="block text-gray-700">Mão de Obra</label>
                <input 
                  type="number" 
                  value={maoDeObra} 
                  onChange={(e) => setMaoDeObra(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-gray-900" 
                />
              </div>
              <div>
                <label className="block text-gray-700">Serviços</label>
                <input 
                  type="number" 
                  value={servicos} 
                  onChange={(e) => setServicos(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50 text-gray-900" 
                />
              </div>
              <div className="flex justify-end">
                <button 
                  type="button" 
                  className="px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Salvar Custos
                </button>
              </div>
            </form>

            <div className="mt-6 bg-white p-6 rounded-md shadow-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Total de Custos</h4>
              <p className="text-gray-800"><strong>Total Peças:</strong> R${pecas.reduce((sum, peca) => sum + peca.custo, 0).toFixed(2)}</p>
              <p className="text-gray-800"><strong>Mão de Obra:</strong> R${maoDeObra.toFixed(2)}</p>
              <p className="text-gray-800"><strong>Serviços:</strong> R${servicos.toFixed(2)}</p>
              <p className="text-gray-900 font-bold"><strong>Total Geral:</strong> R${calcularTotal().toFixed(2)}</p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ControleCustos;
