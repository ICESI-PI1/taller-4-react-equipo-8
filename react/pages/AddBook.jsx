import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function AddBook() {
    return (
        <div className="pt-5">
        <div className="card container">
        <form action="/AddBook" method="post" className="p-4">
            <div className="space-y-3 ">
                <div className="border-bottom border-1 pb-3">
                    <h2 className="h2 font-weight-bold text-dark pt-3">Añadir libro</h2>
                    <p className="mt-1 text-muted">Ingresa los detalles del libro</p>

                    <div className="mt-4 row g-3 ">
                        <div className="col-12 col-sm-6">
                            <label htmlFor="title" className="form-label">Título</label>
                            <input type="text" name="title" id="title" required className="form-control" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label htmlFor="author" className="form-label">Autor</label>
                            <input type="text" name="author" id="author" required className="form-control" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label htmlFor="editorial" className="form-label">Editorial</label>
                            <input type="text" name="editorial" id="editorial" autoComplete="postal-code" className="form-control" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label htmlFor="price" className="form-label">Precio unitario</label>
                            <input type="number" name="price" id="price" autoComplete="postal-code" className="form-control" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label htmlFor="amount" className="form-label">Unidades disponibles</label>
                            <input type="number" name="amount" id="amount" autoComplete="postal-code" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex pb-3 pt-3  justify-content-end ">
                <a href="/" className="btn btn-hover">Cancelar</a>
                <button type="submit" className="btn" style={{ marginLeft: '10px', backgroundColor: "black", color: "white"}}>Guardar</button>
            </div>
        </form>
        </div>
    </div>
    );
}



export default AddBook;
