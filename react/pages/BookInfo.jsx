import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/styles.css';

const BookInfo = ({book }) => {

  return (
    <div className="pt-5">
    <div className="card container">
      <div className="p-4 rounded bg-white shadow-sm">
      <div className="px-0">
        <div className="d-flex flex-row justify-content-between   pb-3 pt-3">
          <h2 className="h2 font-weight-bold text-dark pt-3">Información del libro</h2>
          <div className="d-flex pb-3 pt-3">
          <a href={`/deleteBook/${book.id}`} className="btn btn-hover" >Eliminar</a>
            <a href={`/editBook/${book.id}`} className="btn" style={{ marginLeft: '10px', backgroundColor: "black", color: "white"}}>Editar</a>
          </div>
        </div>
        <div className="border-top my-1"></div>
        </div>
        <div className="mt-4 border-t pt-3">
          <dl className="row">
            <div className="col-6">
              <dt className="font-weight-normal">AAAAAAAA</dt>
              <dd className="text-muted">{book.id}</dd>
            </div>
            <div className="col-6">
              <dt className="font-weight-normal">Nombre</dt>
              <dd className="text-muted">{book.name}</dd>
            </div>
            <div className="col-6">
              <dt className="">Editorial</dt>
              <dd className="text-muted">{book.editorial}</dd>
            </div>
            <div className="col-6">
              <dt className="font-weight-normal">Autor</dt>
              <dd className="text-muted">{book.author}</dd>
            </div>
            <div className="col-6">
              <dt className="font-weight-normal ">Precio</dt>
              <dd className="text-muted">{'$' + book.price}</dd>
            </div>
            <div className="col-6">
              <dt className="font-weight-normal">Unidades disponibles</dt>
              <dd className="text-muted">{book.amount}</dd>
            </div>
          </dl>
        </div>
        <div className="d-flex pb-3 pt-3 justify-content-end">
          <a href={`/`} className="btn" >Volver</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookInfo;
