# React + Vite
# MinhaAppReact - Visualizador do Censo Escolar PB 

Aplicação Web desenvolvida em ReactJS para exibir os destaques do Censo Escolar 2024 do estado da Paraíba. O projeto consome dados processados previamente e apresenta um ranking das instituições com mais matrículas.

## 🎯 Objetivo
Exibir de forma interativa e responsiva as **Top 3 Escolas** com maior número de matrículas na educação básica na Paraíba, utilizando cards.

## 🛠️ Arquitetura e Lógica

A aplicação segue uma arquitetura baseada em componentes, onde a lógica de negócio principal está no componente `Main.jsx`.

### 1. Fonte de Dados (`src/datasets`)
O projeto não consome uma API em tempo real. Ele lê o arquivo estático `dados_censo_pb.json`, que foi gerado por um script Python (`CensoEscolarDataApp`).

### 2. Processamento de Dados
Como o JSON contém todas as escolas do estado, o React realiza a filtragem final no navegador:
* **Ordenação (`.sort`):** Organiza o array de escolas de forma decrescente baseada no campo `qt_mat_bas` (Total de Matrículas).
* **Ranking (`.slice`):** Recorta apenas os 3 primeiros índices do array ordenado para exibição.

### 3. Gestão de Imagens (Dicionário + Fallback)
Como os microdados do governo não possuem imagens das escolas, foi implementada uma lógica de mapeamento:
* **Dicionário:** Um objeto `galeriaEscolas` mapeia o ID da escola (`co_entidade`) para uma URL de imagem específica.
* **Fallback (Curto-circuito):** Utiliza o operador lógico `||` para exibir uma imagem padrão caso a escola não tenha foto cadastrada no dicionário.

```javascript
// Exemplo da lógica visual
const imagemFinal = galeriaEscolas[escola.co_entidade] || imagemPadrao;
```



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
