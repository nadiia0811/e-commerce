import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {

  const [allproducts, setAllproducts] = useState([]);  
  
  const fetchInfo = async () => {
     await fetch('http://localhost:4000/allproducts')
                .then(res => res.json())
                .then(data => setAllproducts(data));
  }

 const removeProduct = async (id) => {
  await fetch('http://localhost:4000/removeproduct', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':'application/json',
    },
    body: JSON.stringify({id:id})
  });
   await fetchInfo();
 }

  useEffect(() => {
    fetchInfo();
  }, []);


  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
         <hr />
         {allproducts.map((product, index) => {
          let id = product.id;
          return <>
                    <div className="listproduct-format-main listproduct-format" key={index}>
                        <img src={product.image} alt="" className="listproduct-product-icon" />
                        <p className='format-p'>{product.name}</p>
                        <p className='format-p'>${product.old_price}</p>
                        <p className='format-p-last'>${product.new_price}</p>
                        <p className='format-p-last'>{product.category}</p>
                        <img src={cross_icon} alt=""
                             className='listproduct-remove-icon'    
                             onClick={() => removeProduct(id)}/>
                    </div>
                    <hr />
                 </>
         })}
         
      </div>
    </div>
  )
}

export default ListProduct;