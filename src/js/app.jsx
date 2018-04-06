import ReactDOM from 'react-dom';
import React from 'react';
//tudo o que NAO comecar com ./ o sistema irá procurar dentro de node_modules
// ./ entra em um diretorio do mesmo nivel, ../ volta um diretorio
import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import ListaCartao from './cartao/lista-cartao';
import Footer from './footer/footer';

let App = (
  <div>
    {/* enviando propriedades para o componente */}
    <Navbar titulo="React JS" cor="blue" />
    <div className="container">
      <Titulo />
      <ListaCartao qtdPorLinha="4" tamanhoCard="3"/>
    </div>
    <Footer />
  </div>
);

// renderizando o conteudo na div #app
ReactDOM.render(App, document.getElementById('app'));