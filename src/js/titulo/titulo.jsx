import React from 'react';

class Titulo extends React.Component {
    //metodo de renderizar o componente na view, retorna um jsx (html)
    render(){
        return <h1 className="titulo">Curso de React com Gulp!</h1>; 
    }
}

//seta o que sera exportado quando fizer o import (toda a classe)
export default Titulo;