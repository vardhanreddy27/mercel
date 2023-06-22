import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductsList() {
  const location = useLocation();
  const products = location.state && location.state.products ? location.state.products : [];

  return (
    <div className="pt-5 container">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;