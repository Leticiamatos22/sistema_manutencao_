"use client";

import React, { useState } from 'react';
import { FaUpload, FaTimes } from 'react-icons/fa';

const CadastroManutencao = ({ onClose }) => {
  const [equipe, setEquipe] = useState('');
  const [colaboradores, setColaboradores] = useState([]);

  const handleEquipeChange = (e) => {
    const selectedEquipe = e.target.value;
    setEquipe(selectedEquipe);

    // Atualizando os colaboradores disponíveis conforme a equipe selecionada
    if (selectedEquipe === 'Equipe 1') {
      setColaboradores([
        { nome: 'Colaborador 1', disponivel: true },
        { nome: 'Colaborador 1.2', disponivel: true },
        { nome: 'Colaborador 1.3', disponivel: false }, // Indisponível
      ]);
    } else if (selectedEquipe === 'Equipe 2') {
      setColaboradores([
        { nome: 'Colaborador 2', disponivel: true },
        { nome: 'Colaborador 2.2', disponivel: true },
        { nome: 'Colaborador 2.3', disponivel: false }, // Indisponível
      ]);
    } else {
      setColaboradores([]);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-md relative">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-bold text-black mb-4">Cadastro de Manutenção</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Descrição do Problema</label>
            <textarea 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black" 
              rows={4} 
            />
          </div>
          <div>
            <label className="block text-gray-700">Data da Solicitação</label>
            <input 
              type="date" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black" 
            />
          </div>
          <div>
            <label className="block text-gray-700">Prioridade</label>
            <select 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black"
            >
              <option>Baixa</option>
              <option>Média</option>
              <option>Alta</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Equipe Responsável</label>
            <select 
              value={equipe}
              onChange={handleEquipeChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black"
            >
              <option value="">Selecione uma equipe</option>
              <option value="Equipe 1">Equipe 1</option>
              <option value="Equipe 2">Equipe 2</option>
            </select>
          </div>

          {equipe && (
            <div>
              <label className="block text-gray-700">Colaboradores Disponíveis</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black">
                {colaboradores.map((colaborador, index) => (
                  <option 
                    key={index} 
                    value={colaborador.nome} 
                    disabled={!colaborador.disponivel}
                    className={!colaborador.disponivel ? 'text-gray-400' : ''}
                  >
                    {colaborador.nome}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-gray-700">Status da Manutenção</label>
            <select 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black"
            >
              <option>Aberta</option>
              <option>Em Andamento</option>
              <option>Concluída</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Upload de Arquivos</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center px-4 py-6 bg-white rounded-md border-2 border-gray-300 border-dashed cursor-pointer">
                <FaUpload size={24} className="text-gray-500 mb-2" />
                <span className="text-gray-500">Adicionar Arquivo</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Comentários</label>
            <textarea 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black" 
              rows={4} 
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroManutencao;