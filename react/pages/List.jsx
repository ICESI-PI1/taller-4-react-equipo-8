import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ListBooks from '/pages/ListBooks';
import ListAuthors from '/pages/ListAuthors';


function List() {
  return (
      <div>
          <ListBooks libros={[]}/>
          <ListAuthors autores={[]}/>
      </div>
  );
}

export default List;