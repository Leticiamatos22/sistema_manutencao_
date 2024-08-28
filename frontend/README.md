# Comando de criação

npx create-next-app@latest frontend


# Executar
npm run dev


# Icones
https://lucide.dev/
https://react-icons.github.io/react-icons/
npm install react-icons --save


# PRD - Product Requirements Document (Template)

# Introdução & Objetivo

Imagine uma grande empresa industrial que fabrica peças automotivas. Seus funcionários enfrentam desafios diários, como falta de organização, comunicação ineficiente e perda de tempo. Agora, visualize um sistema que transforma essa realidade. 

Apresentamos o **Sistema de Gerenciamento de Manutenção**, uma aplicação web projetada para otimizar a gestão das atividades de manutenção. Nosso objetivo é solucionar problemas críticos que afetam a produtividade da equipe, proporcionando controle e visibilidade sobre as operações de manutenção. 

O que nos diferencia dos concorrentes? Nossa interface é amigável e intuitiva, permitindo que os usuários naveguem facilmente. Além disso, oferecemos funcionalidades robustas que abrangem o gerenciamento de máquinas, manutenções, estoque de peças e equipes, tudo integrado em um ambiente seguro. Com este sistema, sua equipe poderá se concentrar no que realmente importa: aumentar a eficiência e a produtividade da empresa.

# Por que implementar isto?
A necessidade de inovação em um setor que enfrenta desafios constantes em eficiência e segurança. A visão é criar uma solução que não apenas resolva problemas imediatos, mas também posicione a empresa na vanguarda da transformação digital, elevando seus padrões operacionais e competitividade.

Implementar o Sistema de Gerenciamento de Manutenção é essencial para:

- *Motivação Pessoal e Visão:* Melhorar a eficiência operacional e garantir a segurança dos colaboradores, minimizando interrupções na produção.
- *Evidências de Sucesso Inicial:* Empresas que adotam sistemas automatizados de gerenciamento de manutenção relatam aumento de produtividade e redução de custos operacionais.
- *Oportunidades de Mercado:* A indústria automotiva é altamente competitiva e precisa de soluções que garantam a continuidade dos processos produtivos.
- *Oportunidades de Monetização:* A solução pode ser licenciada para outras empresas do setor, expandindo o alcance e gerando receitas adicionais.

---

# **Público alvo**

O público-alvo principal são empresas industriais, especialmente aquelas que operam na fabricação de peças automotivas, que buscam otimizar seus processos de manutenção. 

*[Priorizar Usuários:* Os usuários mais críticos para o sucesso inicial do produto são os gerentes de manutenção e as equipes técnicas, pois eles são diretamente responsáveis pela implementação e uso do sistema. ]

| Perfil de usuário | Descrição, necessidades e interesses. |
| --- | --- |
| Gerentes de manutenção | Necessitam de ferramentas para gerenciar, monitorar e relatar o status das manutenções de forma eficiente. |
| Técnicos de manutenção | Precisam de acesso rápido e fácil às informações sobre máquinas e manutenções, além de comunicar o progresso das tarefas. |
| Administradores do sistema | Requerem funcionalidades para configurar e gerenciar acessos e permissões de usuários no sistema. |

# Personas

1. *José Silva:* Gerente de manutenção com 10 anos de experiência, precisa de relatórios detalhados para tomar decisões informadas e otimizar os custos de manutenção.
2. *Maria Fernandes:* Técnica de manutenção, busca um sistema fácil de usar que permita registrar rapidamente os detalhes das tarefas e acessar o histórico das máquinas.
3. *Carlos Pereira:* Administrador de TI, responsável por garantir que o sistema seja seguro e funcione corretamente, além de gerenciar os acessos dos usuários.

---

# Requisitos Funcionais

### User Stories

1. **User Story 1: Gerenciamento de Máquinas**
   - **Como um** administrador,
   - **Quero** cadastrar máquinas com informações detalhadas, incluindo histórico de manutenção,
   - **Para que** eu possa monitorar o estado e a performance de cada máquina.
   - **Critérios de Aceitação**:
     - O usuário pode adicionar, visualizar e editar informações sobre máquinas.
     - O sistema gera relatórios do histórico de manutenção para cada máquina.

2. **User Story 2: Gerenciamento de Manutenções**
   - **Como um** técnico de manutenção,
   - **Quero** registrar e acompanhar solicitações de manutenção,
   - **Para que** eu possa gerenciar o status e a atribuição das tarefas de forma eficiente.
   - **Critérios de Aceitação**:
     - O usuário pode criar, atualizar e monitorar solicitações de manutenção.
     - O sistema notifica as equipes designadas sobre novas solicitações e atualizações.

3. **User Story 3: Controle de Estoque de Peças**
   - **Como um** responsável pelo estoque,
   - **Quero** registrar e acompanhar o estoque de peças de reposição,
   - **Para que** eu possa garantir que sempre haja peças disponíveis para manutenção.
   - **Critérios de Aceitação**:
     - O usuário pode registrar entradas e saídas de peças no estoque.
     - O sistema gera alertas quando o estoque de peças estiver baixo.

### Mapeamento de User Stories

| **User Story**                   | **Prioridade** |
|----------------------------------|-----------------|
| Gerenciamento de Máquinas        | P1              |
| Gerenciamento de Manutenções     | P1              |
| Controle de Estoque de Peças     | P2              |

### Casos de Uso

- **Caso de Uso 1: Geração de Relatórios de Manutenção**
  - **Ator**: Gerente de Manutenção
  - **Descrição**: O gerente de manutenção utiliza o sistema para gerar relatórios semanais de manutenção, otimizando o planejamento de recursos e identificando áreas que necessitam de atenção.

- **Caso de Uso 2: Atualização de Status em Tempo Real**
  - **Ator**: Técnicos de Manutenção
  - **Descrição**: Técnicos acessam o sistema via dispositivos móveis para atualizar o status das manutenções em tempo real, melhorando a comunicação e a eficiência na execução das tarefas.

- **Caso de Uso 3: Configuração de Usuários**
  - **Ator**: Administradores
  - **Descrição**: Administradores configuram novos usuários e ajustam permissões de acesso conforme as necessidades da equipe, garantindo que cada membro tenha as informações e ferramentas necessárias para seu trabalho.

---

# Requisitos Não Funcionais

1. *NF1: Interface amigável e intuitiva:* A interface deve ser fácil de usar para todos os níveis de usuários, com navegação intuitiva. *P1*
2. *NF2: Responsividade:* Aplicação deve ser completamente funcional em computadores, tablets e smartphones. *P1*
3. *NF3: Segurança:* Implementar criptografia de dados e controles de acesso para garantir a proteção dos dados. *P2*

### 📊 Métricas

| Medida | Estado atual | Esperado | Resultados |
| --- | --- | --- | --- |
| Tempo médio de resposta | 3 segundos | 1 segundo | Melhorar experiência do usuário |
| Taxa de retenção de usuários | 50% | 75% | Aumentar a adoção do sistema |
| Incidentes de segurança | 2 por mês | 0 por mês | Garantir proteção de dados |

---