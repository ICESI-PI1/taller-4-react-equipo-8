import {Route, Routes, BrowserRouter  } from  'react-router-dom';
import List from '/pages/List';
import AddBook from '/pages/AddBook';
import AddAuthor from '/pages/AddAuthor';
import BookInfo from '/pages/BookInfo';
import AuthorInfo from '/pages/AuthorInfo';
import EditBook from '/pages/EditBook';
import EditAuthor from '/pages/EditAuthor';

const  Router = () => (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/AddBook" element={<AddBook />} />
          <Route path="/AddAuthor" element={<AddAuthor />} />
          <Route path="/EditBook" element={<EditBook />} />
          <Route path="/EditAuthor" element={<EditAuthor />} />
          <Route path="/BookInfo" element={<BookInfo />} />
          <Route path="/AuthorInfo" element={<AuthorInfo />} />
        </Routes>
    </BrowserRouter>
)

export default Router