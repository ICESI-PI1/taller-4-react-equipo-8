import React, { useState } from 'react';
import { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ListBooks from '/pages/ListBooks';
import ListAuthors from '/pages/ListAuthors';
import instance from "../config/axios";


function List() {

  const [libros,setLibros] = useState([])
  const [autores,setAutores] = useState([])


  const hola = instance.post("libros", {"id": 1, "title":"Hola", "Autor":{"id":1,"name":"Gabriel","nationality":"Colombiano"}})
  console.log(hola)
  /*const getLibros = async () => {
    try {
      const response = await instance.get("libros")
      setLibros(response.data)
    }catch (e) {
      console.log(e)
    }
  }

  useEffect(()=> {getLibros()},[])

  const getAutores = async () => {
    try {
      const response = await instance.get("autores")
      setAutores(response.data)
    }catch (e) {
      console.log(e)
    }
  }

  useEffect(()=> {getAutores()},[])*/

  return (
      <div>
          <ListBooks libros = {libros}/>
          <ListAuthors autores = {autores}/>
      </div>
  );
}

export default List;