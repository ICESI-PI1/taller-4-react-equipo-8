import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function AddBookForm() {
    return (
        <form action="/save-book" method="post" className="p-4 rounded-lg bg-white shadow ring-1 ring-inset ring-secondary">
            <div className="space-y-3">
                <div className="border-bottom border-3 pb-3">
                    <h2 className="h3 font-weight-bold text-dark">Añadir libro</h2>
                    <p className="mt-1 text-muted">Ingresa los detalles del libro</p>

                    <div className="mt-4 row g-3">
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

            <div className="mt-4 d-flex justify-content-end gap-3">
                <a href="/" className="text-dark">Cancelar</a>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
        </form>
    );
}

function AddBookPage() {
    return (
        <div className="py-5 px-4 bg-light">
            <h1 className="text-center">Agregar Libro</h1>
            <AddBookForm />
        </div>
    );
}

export default AddBookPage;
