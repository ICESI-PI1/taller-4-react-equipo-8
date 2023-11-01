import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ListBooks from '/pages/ListBooks';
import AddBookForm from '/pages/AddBook';
import ListAuthors from '/pages/ListAuthors';
import Login from '/pages/Login';
import Register from '/pages/Register';
import ProtectedRoute from '../pages/ProtectedRoute';

const routes = [
  {
    "path": "/",
    "element": (<List />)
  },
  {
    "path": "/AddBook",
    "element": (<AddBook />)
  },
  {
    "path": "/AddAuthor",
    "element": (<AddAuthor />)
  },
  {
    "path": "/EditBook",
    "element": (<EditBook />)
  },
  {
    "path": "/EditAuthor",
    "element": (<EditAuthor />)
  },
  {
    "path": "/BookInfo",
    "element": (<BookInfo />)
  },
  {
    "path": "/AuthorInfo",
    "element": (<AuthorInfo />)
  }
]

const Router = () => (
  < BrowserRouter >
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      routes.map((r) {
        (<Route path={r.path} element={<ProtectedRoute />}>
          <Route exact path={r.path} element={r.element} />
        </Route>)
      })
    </Routes>
  </BrowserRouter >
)

export default Router 