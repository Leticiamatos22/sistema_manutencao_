"use client";

import React, { useState } from 'react';
import { FaTimes, FaUpload } from 'react-icons/fa';

const Detalhes = ({ item, onClose }) => {
  const [status, setStatus] = useState("pendente"); // Estado para o status de manutenção
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar o popup

  // Função para salvar o status e exibir o popup
  const handleSave = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      onClose(); // Fechar o modal após salvar
    }, 2000); // Fechar o popup após 2 segundos
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl h-full max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-black">Detalhes da Máquina</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <FaTimes size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6 text-black">
          <div>
            <label className="block text-gray-700">Nome</label>
            <input 
              type="text" 
              value={item.equipamento} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-not-allowed bg-gray-100" 
              readOnly 
              tabIndex="-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Tipo</label>
            <input 
              type="text" 
              value={item.tipo} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-not-allowed bg-gray-100" 
              readOnly 
              tabIndex="-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Modelo</label>
            <input 
              type="text" 
              value={item.modelo} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-not-allowed bg-gray-100" 
              readOnly 
              tabIndex="-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Data de Fabricação</label>
            <input 
              type="date" 
              value={item.dataFabricacao} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-not-allowed bg-gray-100" 
              readOnly 
              tabIndex="-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Número de Série</label>
            <input 
              type="text" 
              value={item.numeroSerie} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-not-allowed bg-gray-100" 
              readOnly 
              tabIndex="-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Localização</label>
            <input 
              type="text" 
              value={item.localizacao} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-not-allowed bg-gray-100" 
              readOnly 
              tabIndex="-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Histórico de Manutenção</label>
            <textarea 
              value={item.historicoManutencao} 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm cursor-not-allowed bg-gray-100" 
              rows={4} 
              readOnly 
              tabIndex="-1"
            />
          </div>

          {/* Gerenciamento de Status da Manutenção */}
          <div>
            <label className="block text-gray-700">Status da Manutenção</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              <option value="pendente">Pendente</option>
              <option value="em_andamento">Em Andamento</option>
              <option value="concluida">Concluída</option>
              <option value="cancelada">Cancelada</option>
            </select>
          </div>

          {/* Comentários */}
          <div>
            <label className="block text-gray-700">Comentários</label>
            <textarea 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black" 
              rows={4} 
            />
          </div>

          {/* Upload de Imagens */}
          <div>
            <label className="block text-gray-700">Upload de Imagens</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center px-4 py-6 bg-white rounded-md border-2 border-gray-300 border-dashed cursor-pointer">
                <FaUpload size={24} className="text-gray-500 mb-2" />
                <span className="text-gray-500">Adicionar uma imagem</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Botão de Salvar */}
        <div className="flex justify-end mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Salvar
          </button>
        </div>

        {/* Popup de Confirmação */}
        {showPopup && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-black">Item salvo com sucesso!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detalhes;