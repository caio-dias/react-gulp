import React from 'react';
import Cartao from './cartao';
import Busca from '../busca/busca';

class ListaCartao extends React.Component {

    constructor(props){
        super(props);
        //setando estados do componente
        this.state = {cliques: 0, busca: '', dados: [], servidor: []};
        //registrando metodos
        //bind é necessário para fazer this funcionar no retorno de chamada
        this.addClique = this.addClique.bind(this);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addClique() {
        //duas formas de modificar o estado do componente, a segunda forma é a indicada
        //o prevState tem o valor mais correto do estado a modificar
        //this.setState({cliques: this.state.cliques + 1});
        this.setState((prevState)=>({
            cliques: prevState.cliques + 1
        }));
    }
    
    //atualizar busca
    atualizaBusca(evento) {
        //capturando e atualizando o valor do campo de busca
        this.setState({busca: evento.target.value});
        if (evento.target.value == "") {
            this.setState({ dados: this.state.servidor });
        }
    }

    onSubmit(evento) {
        let busca = this.state.busca;
        let dados = this.state.servidor;
        //Filter retorna os elementos de uma matriz que atendem à condição especificada em uma função de retorno de chamada.
        let valorBusca = dados.filter(function(item) {
            //O método indexOf() retorna o índice da primeira ocorrência do valor especificado, retorna -1 se o valor não for encontrado.
            //comparando titulo da base, com valor da busca
            if (item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > - 1) {
                return item;
            }
            if (item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > - 1) {
                return item;
            }
            if (item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > - 1) {
                return item;
            }
        });
        //passa valor da busca para os dados
        this.setState({dados: valorBusca});
        evento.preventDefault();
    }

    //quando o componente é montado, colocamos os cards do site para utilizar na busca
    componentDidMount() {
        this.setState({
            dados: [
                { titulo: 'Titulo 1', descricao: 'Descricao 1', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 2', descricao: 'Descricao 2', detalhe: 'Detalhe 2', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 3', descricao: 'Descricao 3', detalhe: 'Detalhe 3', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 4', descricao: 'Descricao 4', detalhe: 'Detalhe 4', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 5', descricao: 'Descricao 5', detalhe: 'Detalhe 5', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 6', descricao: 'Descricao 6', detalhe: 'Detalhe 6', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 7', descricao: 'Descricao 7', detalhe: 'Detalhe 7', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            ],
            servidor: [
                { titulo: 'Titulo 1', descricao: 'Descricao 1', detalhe: 'Detalhe 1', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 2', descricao: 'Descricao 2', detalhe: 'Detalhe 2', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 3', descricao: 'Descricao 3', detalhe: 'Detalhe 3', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 4', descricao: 'Descricao 4', detalhe: 'Detalhe 4', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 5', descricao: 'Descricao 5', detalhe: 'Detalhe 5', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 6', descricao: 'Descricao 6', detalhe: 'Detalhe 6', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
                { titulo: 'Titulo 7', descricao: 'Descricao 7', detalhe: 'Detalhe 7', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            ]
        });
    }

    render(){
        //json com cards do sites, recuperados do estado
        let cards = this.state.dados;

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
        //recebendo this como referencia
        let listaDeCartoes = function(grupo,self) {
            //funcao retorna cada cartao
            return grupo.map(function(item,index) {
                return (
                    <div key={index} className={tamanhoCol}>
                        {/* enviando propriedades como obj */}
                        {/* enviando o metodo addClique via propriedade */}
                        {/* utilizando o self que é o this passado por parametro */}
                        <Cartao dados={item} addClique={self.addCLique} />
                    </div>
                );
            })
        };

        //mandando this como referencia
        let self = this;
        //formatando a linha, passando cada item de novaLista para o array grupo
        //para passar como parametro para funcao que devolve cada cartao
        let linha = novaLista.map(function(grupo,index) {
            return (
                <div key={index} className="row">
                    {/* mandando this como referencia para usar no cartao na contagem de cliques */}
                    {listaDeCartoes(grupo,self)}
                </div>
            );
        })

        return (
            <div>
                {/* campo de busca, enviando metodo de atualizar busca e o estado da busca */}
                <div className="row">
                    <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca}/>
                </div>
                {/* adicionando quantidade de cliques */}
                {/* <span>Qtd de cliques: {this.state.cliques}</span> */}
                {linha}
            </div>
        );
    }
}

export default ListaCartao;