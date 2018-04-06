import React from 'react';

class Busca extends React.Component {
    constructor(props){
        super(props);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    atualizaBusca(evento){
        //ligando o metodo desse componente com o metodo do componente lista cartao
        this.props.atualizaBusca(evento);
    }

    onSubmit(evento) {
        this.props.onSubmit(evento);
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <div className="input-field">
                    {/* no on change, manda os dados do valor digitado para o metodo em lista cartao */}
                    <input onChange={this.atualizaBusca} type="text" placeholder="Busca" value={this.props.busca}/>
                </div>
            </form>
        );
    }
}

export default Busca;