import { Component } from "react";

export default class Recordatorio extends Component {
    
    render() {        
        return (
            <div className="recordatorio">
                <h4>Selección anterior: {this.props.seleccionAnterior}</h4>
                <h5>historial de opciones elegidas: {this.props.historial}</h5>
            </div>
        )
    }
}