import React from 'react';

class NavMenu extends React.Component {

    //construtor com as propriedades do componente
    constructor (props) {
        super(props);
        //valor default do componente
        this.state = { menuAtivo: "Home" };
        //registrando o metodo para que seja possivel mandar o pamametro por jsx
        this.alteraActive = this.alteraActive.bind(this);
    }

    //metodo que altera state do titulo dinamicamente
    alteraActive(titulo, self) {
        self.setState({menuAtivo: titulo});
    }

    render(){
        //variavel para que seja possivel acessar a referencia de this dentro do .map
        let self = this;

        //quando quiser setar um valor na mao se usa assim
        //this.setState({menuAtivo: 'Contato'});


        //recebe o menu como propriedade, e usa o .map para popular o array lista
        //colocando cada item do array menu dentro de uma li para retornar um jsx
        let lista = this.props.menu.map(function(value){
            return (
                //onclick = alterando o valor do state por click
                //o primeiro parametro é o evento
                //o segundo parametro é o valor a ser alterado
                //o terceiro parametro é a referencia do metodo, this que é o self
                //retorna lis com as propriedades recebidas do .map
                //quando se usa lista, o react necessita de uma key, para controle interno, precisa ser um valor unico
                <li key={value.titulo} onClick={self.alteraActive.bind(null, value.titulo, self)} className={self.state.menuAtivo == value.titulo ? 'active' : ''}><a href={value.link}>{value.titulo}</a></li>
            );
        });

        return (
            <ul id="nav-mobile" className="right">
                {lista}
            </ul>
        );
    }
}

export default NavMenu;
