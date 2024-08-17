import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import SearchItems from './components/SearchItems'
import Cart from './components/Cart'
import { items } from './components/data'


const App = () => {
  const [filterCatogary,setFilterCatogary]=useState("")
  const [filterCost,setFilterCost] = useState("")
  return (
    <BrowserRouter>
      <Navbar setFilterCatogary={setFilterCatogary} filterCatogary={filterCatogary} filterCost={filterCost} setFilterCost={setFilterCost}/>
      <Routes>
        <Route path='/' element={<Product filterCatogary={filterCatogary} />} />
        <Route path='/product/:id' element={<ProductDetails/> } />
        <Route path='/search/:term' element={<SearchItems />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App