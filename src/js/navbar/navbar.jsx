import React from 'react';

import NavMenu from './nav-menu';

class Navbar extends React.Component {
  render(){
    //cria array com os dados do menu
    let menu = [
      {titulo:"Home", link:"#home"},
      {titulo:"Sobre", link:"#sobre"},
      {titulo:"Contato", link:"#contato"}
    ];
    let corNav = "nav-wrapper "+ this.props.cor;
    return (
      <nav>
        {/* usando propriedade de cor e classe do nav */}
        <div className={corNav}>
          <div className="container">
            {/* usando a propriedade enviada na chamada do componente */}
            <a href="#" className="brand-logo">{this.props.titulo}</a>
            {/* envia como propriedade o array menu para montar a lista do menu */}
            <NavMenu menu={menu} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
