import Container from './Container';
import Filter from './Filter';
import Card from './Card';

import './App.css';
import './Variables.css'

function App() {
  return (
    <div className="App">
      <h1>Gestor de Mantenimientos</h1>
      <Container title={'Filtro'} body={<Filter />} footer='Semana 26' />
      <Container title={'Mantenimientos'} footer='Preventivos'
        body={<Card />} />
      <Container title={'Personal'} footer='Disponible' />
    </div>
  );
}

export default App;
