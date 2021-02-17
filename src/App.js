import React from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends React.Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: "",
  };

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "start");
  };

  paginaAnterior = () => {
    let pagina = this.state.pagina;

    if (pagina === 1) {
      return null;
    }

    pagina--;

    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarApi();
      },
      this.scroll()
    );
  };

  paginaSiguiente = () => {
    let pagina = this.state.pagina;

    pagina++;

    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarApi();
      },
      this.scroll()
    );
  };

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=20309125-520a962794ad1d45991ac51b9&q=${termino}&per_page=30&page=${pagina}`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) =>
        this.setState({
          imagenes: resultado.hits,
        })
      );
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino: termino,
        pagina: 1,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="aap container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>

        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaSiguiente={this.paginaSiguiente}
            paginaAnterior={this.paginaAnterior}
          />
        </div>
      </div>
    );
  }
}

export default App;
