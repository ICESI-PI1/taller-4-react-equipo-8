import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function EditAutor({author}) {
    
    return (
        <div className="pt-5">
            <div className="card container">
                <form action="/EditAuthor" method="post" className="p-4">
                    <div className="space-y-3">
                        <div className="border-bottom border-1 pb-3">
                            <h2 className="h2 font-weight-bold text-dark pt-3">Editar Autor</h2>
                            <p className="mt-1 text-muted">Edita los detalles del autor</p>

                            <div className="mt-4 row g-3">
                                <div className="col-12 col-sm-6">
                                    <label htmlFor="title" className="form-label">Nombre</label>
                                    <input type="text" value={author.name} name="title" id="title" required className="form-control" />
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label htmlFor="author" className="form-label">Nacionalidad</label>
                                    <input type="text" value={author.nacionalidad} name="author" id="author" required className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex pb-3 pt-3 justify-content-end">
                        <a href="/" className="btn btn-hover">Cancelar</a>
                        <button type="submit" className="btn" style={{ marginLeft: '10px', backgroundColor: "black", color: "white" }}>Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default EditAutor;
