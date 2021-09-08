import { Component } from "react";

export default class Opciones extends Component {

    render() {
        return (
            <div className="opciones">
                <div className="opcion">
                    <button id="a" className="botones" onClick={this.props.handleClick}>A</button>
                    <h3>{this.props.opcionA}</h3>
                </div>
                <div className="opcion">
                    <button id="b" className="botones" onClick={this.props.handleClick}>B</button>
                    <h3>{this.props.opcionB}</h3>
                </div>
            </div>
        )
    }
}