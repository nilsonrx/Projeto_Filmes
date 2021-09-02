import React from 'react';
import ReactDOM from 'react-dom';
import './cadastro.css';
import Cadastro from './cadastro';

export default function Project(){
  return <h1>Meu Projeto em React</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <Cadastro />
    </React.StrictMode>,
  document.getElementById('root')
);