"use client"; // Adicione esta linha no início do arquivo

import React, { useState } from 'react';
import { Aside } from "../components/aside";
import { Footer } from "../components/footer";
import { FaTimes } from 'react-icons/fa';

const RelatoriosDesempenho = () => {
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [selectedMachine, setSelectedMachine] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [selectedMaintenanceType, setSelectedMaintenanceType] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');

  // Exemplo de dados das equipes
  const equipes = [
    { nome: "Equipe 1", tempoMedioResolucao: "2 horas", manutencoesRealizadas: 10, pecasUtilizadas: 5 },
    { nome: "Equipe 2", tempoMedioResolucao: "3 horas", manutencoesRealizadas: 8, pecasUtilizadas: 4 },
  ];

  const handleGenerateReport = () => {
    const reportDetails = `
      Máquina: ${selectedMachine || "Todas"},
      Período: ${selectedPeriod || "Todos"},
      Tipo de Manutenção: ${selectedMaintenanceType || "Todos"},
      Equipe: ${selectedTeam || "Todas"}
    `;
    setPopupContent(`Relatório gerado com os seguintes filtros: \n${reportDetails}`);
  };

  const handleClosePopup = () => {
    setPopupContent(null);
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.classList.contains('popup-overlay')) {
      handleClosePopup();
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex overflow-auto">
        <Aside />
        <main className="flex-1 flex flex-col overflow-auto p-6 bg-gray-100">
          <h2 className="text-2xl font-bold text-black mb-4">Relatórios de Desempenho</h2>

          {/* Filtros para Geração de Relatórios */}
          <div className="space-y-4 bg-white p-6 rounded-md shadow-md mb-6">
            <div>
              <label className="block text-gray-700">Selecione a Máquina</label>
              <select 
                value={selectedMachine} 
                onChange={(e) => setSelectedMachine(e.target.value)} 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 text-black"
              >
                <option value="">Todas as Máquinas</option>
                <option value="Máquina 1">Máquina 1</option>
                <option value="Máquina 2">Máquina 2</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Selecione o Período</label>
              <select 
                value={selectedPeriod} 
                onChange={(e) => setSelectedPeriod(e.target.value)} 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 text-black"
              >
                <option value="">Todos os Períodos</option>
                <option value="Última Semana">Última Semana</option>
                <option value="Último Mês">Último Mês</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Tipo de Manutenção</label>
              <select 
                value={selectedMaintenanceType} 
                onChange={(e) => setSelectedMaintenanceType(e.target.value)} 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 text-black"
              >
                <option value="">Todos os Tipos</option>
                <option value="Preventiva">Preventiva</option>
                <option value="Corretiva">Corretiva</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Selecione a Equipe</label>
              <select 
                value={selectedTeam} 
                onChange={(e) => setSelectedTeam(e.target.value)} 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 text-black"
              >
                <option value="">Todas as Equipes</option>
                {equipes.map((equipe, index) => (
                  <option key={index} value={equipe.nome}>{equipe.nome}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button 
                type="button" 
                onClick={handleGenerateReport}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
              >
                Gerar Relatório
              </button>
            </div>
          </div>

          {/* Cards das Equipes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipes.map((equipe, index) => (
              <div key={index} className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{equipe.nome}</h3>
                <p>Tempo Médio de Resolução: {equipe.tempoMedioResolucao}</p>
                <p>Manutenções Realizadas: {equipe.manutencoesRealizadas}</p>
                <p>Peças Utilizadas: {equipe.pecasUtilizadas}</p>
              </div>
            ))}
          </div>

          {/* Popup de Confirmação */}
          {popupContent && (
            <div 
              className="fixed inset-0 flex items-center justify-center popup-overlay bg-black bg-opacity-50 z-50"
              onClick={handleOutsideClick}
            >
              <div className="bg-white rounded-lg p-6 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={handleClosePopup}
                >
                  <FaTimes size={24} />
                </button>
                <p className="text-black whitespace-pre-wrap">{popupContent}</p>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RelatoriosDesempenho;