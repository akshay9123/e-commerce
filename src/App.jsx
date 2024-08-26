import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import SearchItems from './components/SearchItems'
import Cart from './components/Cart'
import { items } from './components/data'



const App = () => {

  const [count,setCount] = useState(0);

  const [filterCatogary,setFilterCatogary]=useState("")
  const [filterCost,setFilterCost] = useState("") 

  const [carts,setCart] = useState([])
  
  
  return (
    <BrowserRouter>
      <Navbar setFilterCatogary={setFilterCatogary} filterCatogary={filterCatogary} filterCost={filterCost} setFilterCost={setFilterCost} count={count} />
      <Routes>
        <Route path='/' element={<Product filterCatogary={filterCatogary} />} />
        <Route path='/product/:id' element={<ProductDetails carts={carts} setCart={setCart} count={count} setCount={setCount} />} />
        <Route path='/search/:term' element={<SearchItems />} />
        <Route path='/cart' element={<Cart carts={carts} setCart={setCart} setCount={setCount} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App