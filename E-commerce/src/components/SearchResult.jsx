import React from 'react'
import Card from './Card'
import './SearchResult.css'
const SearchResult = ({filterData,term}) => {
    const name = term.charAt(0).toUpperCase() + term.slice(1);
  return (
    <div className='search-result'>
    <h1>{name}'s Product</h1>
        <div className="search-result-container">
        
        {filterData.map((product) => {
                  return (
                    
                      <Card
                        key={product.id}
                        category={product.category}
                        imgSrc={product.imgSrc}
                        price={product.price}
                        title={product.title}
                        description={product.description}
                      />
                    
                  );
                })
                
              }
        </div>
    </div>
  )
}

export default SearchResult