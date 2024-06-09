import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx';

const Product = () => {
   const {allProducts} = useContext(ShopContext);
   const {productId} = useParams(); 
   const product = allProducts.find((item) => item.id === Number(productId)); 
                                                                              
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <RelatedProducts />
    </div>
   
  )
};

export default Product;
