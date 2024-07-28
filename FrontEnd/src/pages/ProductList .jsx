import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';
import { Center, Input } from '@chakra-ui/react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [search, rating, priceMin, priceMax, sortField, sortOrder]);

  const fetchProducts = async () => {
    let query = `?`;
    if (search) query += `search=${search}&`;
    if (rating) query += `rating=${rating}&`;
    if (priceMin) query += `priceMin=${priceMin}&`;
    if (priceMax) query += `priceMax=${priceMax}&`;
    if (sortField) query += `sortField=${sortField}&`;
    if (sortOrder) query += `sortOrder=${sortOrder}&`;

    const response = await fetch(`https://buy-now-be.onrender.com/products/products${query}`);
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div>
      {/* <h1>Product List</h1> */}

      {/* <Input  className = "searchAddress"  placeholder = "Search"  w = "650px" borderRadius={"20px"} */}

      <input
          type="text"
          placeholder="Search here by Brand Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{width:"50%" ,marginTop:"20px", textAlign:"center", marginLeft:"140px", borderRadius:"30px", height:"30px", border:"1px solid"}}
        />
      
      {/* value={search}
          onChange={(e) => setSearch(e.target.value)}
          pl={"300"}
ml={200}
mt={5}
      /> */}
      
      
   
      <div className="filters" style={{display:"flex", justifyContent:"space-between",  padding:"20px"}}>

      <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        
       
        <input
          type="number"
          placeholder="Min Price"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
        />
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
