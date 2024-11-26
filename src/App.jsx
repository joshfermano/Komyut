import React from 'react';
import Navbar from './components/Navbar';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import P2P from './pages/P2P';
import Book from './pages/Book';
import Faq from './pages/Faq';
import Support from './pages/Support';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="p2p" element={<P2P />} />
        <Route path="book" element={<Book />} />
        <Route path="faq" element={<Faq />} />
        <Route path="support" element={<Support />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
