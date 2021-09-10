import data from "./data.json";
import { Component } from "react";
import Opciones from './Opciones'
import Recordatorio from './Recordatorio'

const historial = []

export default class App extends Component {
  state = {
    pagina: "",
    opcionAnterior: "",
    objetoActual: {}
  }

  UNSAFE_componentWillMount = () => {
    this.setState({ pagina: 0, objetoActual: data[0] })

  }

  handleClick = (evento) => {
    const id = evento.target.id;
    if (this.state.pagina == 4) {
      alert("FIN");
    } else {
      this.setState({
        pagina: this.state.pagina + 1,
        objetoActual: data.filter(e => e.id === `${this.state.pagina + 2}${id}`)[0],
        opcionAnterior: id.toUpperCase()
      })
    }
  }

  componentDidUpdate = () => {
    historial.push(this.state.opcionAnterior)
  }

  render() {
    return (
      <div className="App" >
        <div className="layout">
          <h1 className="titulo">Elige tu propia aventura</h1>
          <h2 className="historia">{this.state.objetoActual.historia}</h2>
          <Opciones
            handleClick={this.handleClick}
            opcionA={this.state.objetoActual.opciones.a}
            opcionB={this.state.objetoActual.opciones.b}
          />
          <Recordatorio
            seleccionAnterior={this.state.opcionAnterior}
            historial={historial.map((opcion, i) =>
              (<li key={i}>{opcion}</li>)
            )}
          />
        </div>
      </div>
    );
  }
}

