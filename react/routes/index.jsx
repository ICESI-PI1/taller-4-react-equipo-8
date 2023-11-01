import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ListBooks from '/pages/ListBooks';
import AddBookForm from '/pages/AddBook';
import ListAuthors from '/pages/ListAuthors';
import Login from '/pages/Login';
import Register from '/pages/Register';
import ProtectedRoute from '../pages/ProtectedRoute';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route exact path='/' element={<ListBooks />} />
      </Route>

      <Route path="/AddBook" element={<ProtectedRoute />}>
        <Route exact path='/AddBook' element={<AddBookForm />} />
      </Route>
      <Route path="/ListAuthors" element={<ProtectedRoute />}>
        <Route exact path='/ListAuthors' element={<ListAuthors />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Router 