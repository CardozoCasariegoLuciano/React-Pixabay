import React, { Component } from "react";
import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

class Resultado extends Component {


  mostrarImagenes = () => {
    const imagenes = this.props.imagenes;

    if (imagenes.length === 0) {
      return null;
    }

    console.log(imagenes)

    return (
      <>
        <div className="col-12 p-5 row">
          {imagenes.map((img) => (
            <Imagen key={img.id} imagen={img} />
          ))}
        </div>
        <Paginacion
            paginaSiguiente = {this.props.paginaSiguiente}
            paginaAnterior = {this.props.paginaAnterior}
        />
      </>
    );
  };

  render() {
    return <>{this.mostrarImagenes()}</>;
  }
}

export default Resultado;
