import React from "react";

const Paginacion = (porps) => {
  return (
    <div className="py-3">
      <button type="button" className="btn btn-info mr-1" onClick={porps.paginaAnterior}>
        {" "}
        Anterior &larr;
        
      </button>

      <button type="button" className="btn btn-info" onClick={porps.paginaSiguiente}>
        {" "}
        Siguiente &rarr;
      </button>
    </div>
  );
};

export default Paginacion;
