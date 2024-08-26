"use client";

import React, { useState } from 'react';
import { FaUpload, FaTimes } from 'react-icons/fa';

const CadastroPeca = ({ onClose }) => {
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleImageUpload = (e) => {
    setImagem(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
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
        <h2 className="text-2xl font-bold text-black mb-4">Cadastro de Peça</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nome</label>
            <input 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Código</label>
            <input 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Fornecedor</label>
            <input 
              type="text" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black"
              value={fornecedor}
              onChange={(e) => setFornecedor(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Quantidade em Estoque</label>
            <input 
              type="number" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Valor Unitário</label>
            <input 
              type="number" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-black"
              value={valorUnitario}
              onChange={(e) => setValorUnitario(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Upload de Imagens</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center px-4 py-6 bg-white rounded-md border-2 border-gray-300 border-dashed cursor-pointer">
                <FaUpload size={24} className="text-gray-500 mb-2" />
                <span className="text-gray-500">Adicionar Imagem</span>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleImageUpload}
                />
              </label>
            </div>
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

export default CadastroPeca;