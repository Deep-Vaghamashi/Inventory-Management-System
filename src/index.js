import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products';
import Item from './Pages/Item';
import AddProduct from './Pages/AddProduct';
import UpdateProduct from './Pages/UpdateProduct';
import Home from './Pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/product' element={<Products/>}/>
          <Route path='/product/:name' element={<Item/>}/>
          <Route path='/product/add' element={<AddProduct/>} />
          <Route path='/product/update/:name' element={<UpdateProduct/>} />
          <Route path='/product/delete/:name'/>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
);