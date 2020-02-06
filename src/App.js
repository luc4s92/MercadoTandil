import React from 'react';
import { Container } from 'reactstrap';
import Title from './components/Title';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <div className="App">
        <Container>
          <Title />
          <CreateProduct/> 
        </Container>
                 
           
    </div>
  );
}

export default App;
