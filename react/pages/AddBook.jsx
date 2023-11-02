import React from 'react';
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import instance from "../config/axios";

function AddBook() {

    const [title, setTitle] = useState("")
    const [realeaseDate, setRealeaseDate] = useState("")
    const [author, setAuthor] = useState("")

    const onAddBook =() => {
        
        let book = { title, realeaseDate, author}

        instance.post("libros", book)
        .then(res => {
            if (res.status == 200) {
                alert('Libro añadido exitosamente')
                window.location.href = '/libros';
            }
        }).catch(err => {
            alert(err.message)
        })
    }

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
                            <input type="text" name="title" id="title" required className="form-control" value={title} onInput={t => setTitle(t.target.value)} />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label htmlFor="author" className="form-label">Fecha de estreno</label>
                            <input type="date" name="realeaseDate" id="realeaseDate" required className="form-control" value={realeaseDate} onInput={t => setRealeaseDate(t.target.value)} />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label htmlFor="author" className="form-label">Autor</label>
                            <input type="text" name="author" id="author" required className="form-control" value={author} onInput={t => setAuthor(t.target.value)} />
                        </div>

                    </div>
                </div>
            </div>

            <div className="d-flex pb-3 pt-3  justify-content-end ">
                <a href="/" className="btn btn-hover">Cancelar</a>
                <button onClick={() => onAddBook()} className="btn" style={{ marginLeft: '10px', backgroundColor: "black", color: "white"}} >Guardar</button>
            </div>
        </form>
        </div>
    </div>
    );
}



export default AddBook;
