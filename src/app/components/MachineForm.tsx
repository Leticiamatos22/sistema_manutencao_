import React from 'react';
import { FaUpload } from 'react-icons/fa';

export default function MachineForm() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-6">Cadastro de Máquinas</h2>
      <form>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label className="block text-gray-700">Nome</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </div>
          <div>
            <label className="block text-gray-700">Tipo</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </div>
          <div>
            <label className="block text-gray-700">Modelo</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </div>
          <div>
            <label className="block text-gray-700">Data de Fabricação</label>
            <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </div>
          <div>
            <label className="block text-gray-700">Número de Série</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </div>
          <div>
            <label className="block text-gray-700">Localização</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
          </div>
          <div>
            <label className="block text-gray-700">Histórico de Manutenção</label>
            <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" rows={4}></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Upload de Imagens</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center px-4 py-6 bg-white rounded-md border-2 border-gray-300 border-dashed cursor-pointer">
                <FaUpload size={24} className="text-gray-500 mb-2" />
                <span className="text-gray-500">Selecione uma imagem</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}