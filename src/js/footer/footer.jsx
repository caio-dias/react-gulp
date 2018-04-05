import React from 'react';

class Footer extends React.Component {
    //ciclo de vida util do componente, exemplo: relogio no footer
    //Os métodos prefixados com will são chamados logo antes de algo acontecer
    //Os métodos prefixados com did são chamados logo após algo acontecer
    //O construtor de um componente React é chamado antes de ser montado
    //Ao implementar o construtor para uma subclasse React.Component, você deve chamar super (props) antes de qualquer outra instrução. 
    //Caso contrário, this.props será indefinido no construtor, o que pode levar a erros.
    constructor(props){
        super(props);
        //seta estado de hora
        this.state = {hora: new Date()};
    }

    //quando componente é montado, chama a hora
    componentDidMount(){
        this.horaID = setInterval(
            ()=> this.atualizarSegundos(),
            1000
        );
    }

    atualizarSegundos(){
        this.setState({hora: new Date()});
    }

    //componente morre e da o clear
    componentWillUnMount(){
        clearInterval(this.horaID);
    }
    
    render(){
        return (
            <footer className="blue">
                <span>Copyright &copy; - </span>
                <span>{this.state.hora.toLocaleTimeString()}</span>
            </footer>
        );
    }
}

export default Footer;
