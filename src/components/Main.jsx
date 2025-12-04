import { Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import dadosCenso from '../datasets/dados_censo_pb.json';
import Carrossel from './Carrossel.jsx';
import './Main.css';
import InstituicoesRankingCard from './InstituicoesRankingCard.jsx';


const Main = () => {

  // realiza a cópia dos dados do arquivo json, ordena pela qntd matricula e pega os 3 primeiros
  let top3Escolas = [...dadosCenso].sort((a, b) => b.qt_mat_bas - a.qt_mat_bas).slice(0, 3);

  // 2. CRIANDO O ESTADO
  // Sintaxe: const [nomeDaVariavel, funcaoParaMudarOValor] = useState(valorInicial);
  const [incremento, setIncremento] = useState(0);

  let incrementarHandleClick = () => {
    // 3. USANDO A FUNÇÃO SET
    // usando a função especial para avisar o React
    setIncremento(incremento + 1);
    console.log('clicou no botão!' + incremento);

  };

  return (
    <main className="mt-4"> {/* margin-top de 1.5rem */}
      
      <Carrossel/>
      <InstituicoesRankingCard instituicoesEnsino={top3Escolas}/>

      <Container className="text-center my-4">
          <h3>Contador: {incremento}</h3>
          <Button onClick={incrementarHandleClick}>Incrementar</Button>
      </Container>
    </main>
  )
}


export default Main
