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

  devolverObjeto = (idBuscado) => {
    let objeto = null
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === idBuscado) {
        objeto = data[i]
      }
    }
    return objeto
  }

  handleClick = (evento) => {
    const id = evento.target.id;
    this.setState({ objetoActual: this.devolverObjeto(`${this.state.pagina + 2}${id}`), opcionAnterior: id.toUpperCase() })
    
    if (this.state.pagina < 4) {
      this.setState({ pagina: this.state.pagina + 1 })
    }
  }

  componentDidUpdate = () => {
    historial.push(this.state.opcionAnterior)
  }

  render() {
    if (this.state.objetoActual != null) {
      return (
        <div className="App">
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
    } else {
      alert("FIN");
    }

  }

}

