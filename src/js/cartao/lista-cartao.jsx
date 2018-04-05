import React from 'react';
import Cartao from './cartao';

class ListaCartao extends React.Component {
    render(){

        //cards do site
        let cards = [
            { titulo: 'Titulo 1', descricao: 'Descricao 1', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#'},
            { titulo: 'Titulo 2', descricao: 'Descricao 2', detalhe: 'Detalhe 2', imagem: 'http://materializecss.com/images/office.jpg', link: '#'},
            { titulo: 'Titulo 3', descricao: 'Descricao 3', detalhe: 'Detalhe 3', imagem: 'http://materializecss.com/images/office.jpg', link: '#'},
            { titulo: 'Titulo 4', descricao: 'Descricao 4', detalhe: 'Detalhe 4', imagem: 'http://materializecss.com/images/office.jpg', link: '#'},
            { titulo: 'Titulo 5', descricao: 'Descricao 5', detalhe: 'Detalhe 5', imagem: 'http://materializecss.com/images/office.jpg', link: '#'},
            { titulo: 'Titulo 6', descricao: 'Descricao 6', detalhe: 'Detalhe 6', imagem: 'http://materializecss.com/images/office.jpg', link: '#'},
            { titulo: 'Titulo 7', descricao: 'Descricao 7', detalhe: 'Detalhe 7', imagem: 'http://materializecss.com/images/office.jpg', link: '#'},
        ];

        //lista auxiliar para ajudar a separar cards
        let aux = [];
        //lista separada de 4 em 4 e ultima posicao com o resto menor que 4
        let novaLista = [];
        
        for (let i = 0; i < cards.length; i++) {
            //coloca cards em aux
            aux.push(cards[i]);
            //separa de 4 em 4, e joga em um array em novaLista
            if (aux.length == this.props.qtdPorLinha) {
                novaLista.push(aux);
                aux = [];
            }
            //apos separar de 4 em 4 em diversos arrays, manda o resto que for menor que 4 para um novo array em ultima posicao
            if (i == cards.length - 1) {
                novaLista.push(aux);
            }
        }

        let tamanhoCol = "col m"+this.props.tamanhoCard;
        //funcao que recebe o grupo de cards e retorna cada cartao formatado
        let listaDeCartoes = function(grupo) {
            //funcao retorna cada cartao
            return grupo.map(function(item, index) {
                return (
                    <div key={index} className={tamanhoCol}>
                        {/* enviando propriedades como obj */}
                        <Cartao dados={item}/>
                    </div>
                );
            })
        };

        //formatando a linha, passando cada item de novaLista para o array grupo
        //para passar como parametro para funcao que devolve cada cartao
        let linha = novaLista.map(function(grupo, index) {
            return (
                <div key={index} className="row">
                    {listaDeCartoes(grupo)}
                </div>
            );
        })

        return (
            <div>
                {linha}
            </div>
        );
    }
}

export default ListaCartao;