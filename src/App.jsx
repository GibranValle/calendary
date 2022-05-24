import Container from './Subcomponents/Container';
import Filter from './Subcomponents/Filter';
import Card from './Subcomponents/Card';
import AnimatedMulti from './Subcomponents/ReactSelect';

import './App.css';
import './Subcomponents/Variables.css'

function App() {
  return (
    <div className="App">
      <h1>Gestor de Mantenimientos</h1>
      <Container title={'Filtro'} body={<Filter />} footer='Semana 26' />
      <Container title={'Mantenimientos'} footer='Preventivos'
        body={<Card />} />
      <Container title={'Personal'} footer='Disponible' />
      <AnimatedMulti />
    </div>
  );
}

export default App;
