import React from 'react';

class App extends React.Component{

  state = {
    nome : ''
  }

  modificar_nome = (event) => {
    
    let nome = event.target.value;
    this.setState({
      nome : nome
    });
  }

  criaComboBox = () => {
    
    const opcoes = [ "Vitu", "Ka", "Chong", "Chuli" ];

    const combo_box = opcoes.map( opcao => <option>{ opcao.toString() }</option> )
    
    return (
      <>
      <p></p>
      <select>
        {combo_box}
      </select>
      </>
    )

  }


  componentDidMount(){
//ao iniciar a página
  }

  componentWillMount(){
// ao sair da página
  }

  componentDidUpdate(){
    //alert(1);
  }

  render(){


    const MeuComboBox = () => {
      return this.criaComboBox();
    }

    return (
      <>
        <input type="text" onChange={ this.modificar_nome } />
        <h1>Hello {this.state.nome}</h1>
        < MeuComboBox />
      </>
    )
  }

}

export default App