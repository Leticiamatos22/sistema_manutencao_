"use client";

import React, { useState } from 'react';
import { FaEdit, FaTrash, FaInfoCircle } from 'react-icons/fa';
import Detalhes from './Detalhes';

const Table = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [estoque, setEstoque] = useState([
    { nome: 'Peça A', quantidade: 10, fornecedor: 'Fornecedor X' },
    { nome: 'Peça B', quantidade: 5, fornecedor: 'Fornecedor Y' },
  ]);
  const [novaEntrada, setNovaEntrada] = useState('');
  const [novaQuantidade, setNovaQuantidade] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [showReport, setShowReport] = useState(false);
  const [reportType, setReportType] = useState('peça');

  const handleDetailClick = (item) => {
    const preSelectedItem = {
      equipamento: item.equipamento,
      tipo: "Tipo Exemplo",
      modelo: "Modelo Exemplo",
      dataFabricacao: "2022-01-01",
      numeroSerie: "123456",
      localizacao: "Localização Exemplo",
      historicoManutencao: "Histórico de manutenção exemplo.",
    };
    setSelectedItem(preSelectedItem);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const handleAddEstoque = () => {
    const novaPeca = {
      nome: novaEntrada,
      quantidade: parseInt(novaQuantidade),
      fornecedor: fornecedor,
    };
    setEstoque([...estoque, novaPeca]);
    setNovaEntrada('');
    setNovaQuantidade('');
    setFornecedor('');
  };

  const handleUpdateEstoque = (index, quantidade) => {
    const novoEstoque = [...estoque];
    novoEstoque[index].quantidade += quantidade;
    setEstoque(novoEstoque);
  };

  const handleGenerateReport = () => {
    setShowReport(true);
  };

  const closeReportPopup = () => {
    setShowReport(false);
  };

  const filteredEstoque = () => {
    switch (reportType) {
      case 'peça':
        return estoque.filter((item) => item.nome.toLowerCase().includes(novaEntrada.toLowerCase()));
      case 'fornecedor':
        return estoque.filter((item) => item.fornecedor.toLowerCase().includes(fornecedor.toLowerCase()));
      case 'período':
        // Implementar lógica de filtro por período se necessário.
        return estoque.filter(() => true); 
      default:
        return estoque;
    }
  };

  return (
    <div className="p-6">
      {/* Gerar Relatório */}
      <div className="flex space-x-4 mb-4">
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="px-4 py-2 border rounded-md text-black bg-white"
        >
          <option value="peça">Por Peça</option>
          <option value="fornecedor">Por Fornecedor</option>
          <option value="período">Por Período</option>
        </select>
        <button
          onClick={handleGenerateReport}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
        >
          Gerar Relatório
        </button>
      </div>

      {/* Tabela de Manutenções */}
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-4 text-left border-b text-black">Ambiente</th>
            <th className="py-3 px-4 text-left border-b text-black">Equipamento</th>
            <th className="py-3 px-4 text-left border-b text-black">Solicitação</th>
            <th className="py-3 px-4 text-left border-b text-black">Atendimento</th>
            <th className="py-3 px-4 text-left border-b text-black">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-black">{item.ambiente}</td>
              <td className="py-2 px-4 border-b text-black">{item.equipamento}</td>
              <td className="py-2 px-4 border-b text-black">{item.solicitacao}</td>
              <td className="py-2 px-4 border-b text-black">{item.atendimento}</td>
              <td className="py-2 px-4 border-b text-black">
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:underline flex items-center">
                    <FaEdit className="mr-1" /> 
                  </button>
                  <button
                    className="text-green-500 hover:underline flex items-center"
                    onClick={() => handleDetailClick(item)}
                  >
                    <FaInfoCircle className="mr-1" /> 
                  </button>
                  <button className="text-red-500 hover:underline flex items-center">
                    <FaTrash className="mr-1" /> 
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup de Detalhes */}
      {selectedItem && <Detalhes item={selectedItem} onClose={closePopup} />}

      {/* Popup de Relatório */}
      {showReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md relative w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Relatório de Estoque por {reportType}</h2>
            <ul className="text-black">
              {filteredEstoque().map((item, index) => (
                <li key={index}>{item.nome} - Quantidade: {item.quantidade} - Fornecedor: {item.fornecedor}</li>
              ))}
            </ul>
            <button
              onClick={closeReportPopup}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
