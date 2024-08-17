import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './data';
import Product from './Product';
import SearchResult from './searchResult';

const SearchItems = () => {
  const {term} = useParams()
  const [filterData,setFilterData] = useState([])
  console.log(filterData)

  useEffect(() => {
    const filteredData = () =>{
      const data = items.filter((e)=>e.title.toLowerCase().includes(term.toLowerCase()))
      setFilterData(data)
    }
    filteredData();
  }, [term])
  
  
  return (
    <div>
      <SearchResult filterData={filterData} term={term}/>
    </div>
  )
}

export default SearchItems