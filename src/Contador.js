import React from "react";
import PropTypes from "prop-types";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: this.props.valor
    };
  }

  sumarUno() {
    this.setState({ valor: this.state.valor + 1 });
  }

  restarUno() {
    this.setState({ valor: this.state.valor - 1 });
  }

  reset() {
    this.setState({ valor: 0 });
  }

  componentDidMount() {
    console.log("El componente se renderizo");
  }
  render() {
    return (
      <div>
        <h2>Contador Nuevo</h2>
        <h3>Valor: {this.state.valor}</h3>
        <button onClick={() => this.sumarUno()}>+1</button>
        <button onClick={() => this.reset()}>reset</button>
        <button onClick={() => this.restarUno()}>-1</button>
      </div>
    );
  }
}

Contador.propTypes = {
  valor: PropTypes.number
};

export default Contador;
