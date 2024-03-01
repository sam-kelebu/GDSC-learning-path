import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import Myimage from './Component/myimage.jsx'
import Categories from './Component/catagories.jsx'
import Ourlatest from './Component/ourlatest.jsx'
import Product from './Component/product.jsx'
import ShopCatagories from './Component/shopecatagorie.jsx'
import DetailPage from './Component/detailpage.jsx'
import Cartfinal from './Component/cartfinal.jsx'
import Cartpage from './Component/cartpage.jsx'
import Main from './Component/main.jsx'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  

     <BrowserRouter>
                      <Routes>
                          
                          <Route path='/' element={<App/>} >
                              <Route index element={<Main/>} />
                              <Route path='/detail' element={<DetailPage/>} />
                              <Route path='/cart' element={<Cartpage />} />
                              <Route path='/shop' element={<ShopCatagories/>} />
                              <Route path='/items' element={<Cartfinal/>} />
                          </Route>
                        
                    </Routes>
  
    </BrowserRouter>


  </React.StrictMode>
 

)


