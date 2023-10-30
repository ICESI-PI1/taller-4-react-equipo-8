import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import ListBooks from '/pages/ListBooks';
import AddBookForm from '/pages/AddBook';
import ListAuthors from '/pages/ListAuthors';

const  Router = () => (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListBooks />} />
          <Route path="/AddBook" element={<AddBookForm />} />
          <Route path="/ListAuthors" element={<ListAuthors />} />
        </Routes>
    </BrowserRouter>
)

export default Router