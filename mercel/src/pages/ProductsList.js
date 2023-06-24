import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Heart from "react-animated-heart";


function ProductsList() {
  const location = useLocation();
  const products = location.state && location.state.products ? location.state.products : [];
  const [isClick, setClick] = useState(false);
  return (
    <div className="pt-5 fluid-container">
      <br />
      <div className="row p-2">
        {products.map((product) => {
          const originalPrice = (product.price * 100) / (100 - product.discount);

          return (
            <div key={product._id} className="grid border ">
              <div className='col-4 pimgh'>
                <img
                  src={product.picture}
                  style={{ width: '100%', height: '150px', objectFit: 'contain' }}
                  alt={product.name}
                />
              </div>
              <div className='col-8 p-3'>
                <h3 className="d-inline">{product.name}
                <Heart className="d-inline" isClick={isClick} onClick={() => setClick(!isClick)} /></h3>
                <p className="nomargin">{product.shop}</p>
                <p className='text-success nomargin'>{product.discount} % OFF</p>
                <p className="original-price d-inline text-secondary">₹{originalPrice}</p>
                <p className='d-inline'> ₹{product.price}</p>
              </div>
            </div>
          );
        })}
        <p className='text-center text-secondary p-4'>end of results</p>
      </div>
    </div>
  );
}

export default ProductsList;