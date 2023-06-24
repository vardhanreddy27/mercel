import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";

function ProductsList() {
  const location = useLocation();
  const products = location.state && location.state.products ? location.state.products : [];
  const heartRefs = useRef([]);

  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

  useEffect(() => {
    const handleClick = (index) => {
      const button = heartRefs.current[index];
      button.classList.toggle('animate');
      button.classList.toggle('active');
      button.classList.toggle('inactive');
    };
  
    heartRefs.current.forEach((link, index) => {
      link.addEventListener('click', () => handleClick(index));
    });
  
    return () => {
      heartRefs.current.forEach((link, index) => {
        if (link) {
          link.removeEventListener('click', () => handleClick(index));
        }
      });
    };
  }, [wishlist]); // Empty dependency array to trigger cleanup on component unmount

  return (
    <div className="pt-5 fluid-container">
      <br />
      <div className="row p-2">
      {products.map((product, index) => {
          const originalPrice = Math.floor((product.price * 100) / (100 - product.discount));

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
                <h3 className="d-inline">{product.name} </h3>
                <div className="var1 d-inline">
                <a
                    ref={(ref) => (heartRefs.current[index] = ref)}
                    className={`button one mobile button--secondary ${wishlist.includes(product._id) ? 'active' : 'inactive'}`}
                    onClick={() => toggleWishlist(product._id)}
                  >
                      <div className="btn__effect">
                      <svg className="heart-stroke icon-svg icon-svg--size-4 icon-svg--color-silver" viewBox="20 18 29 28" aria-hidden="true" focusable="false">
                        <path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path>
                      </svg>
                      <svg className="heart-full icon-svg icon-svg--size-4 icon-svg--color-blue" viewBox="0 0 19.2 18.5" aria-hidden="true" focusable="false">
                        <path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path>
                      </svg>
                      <svg className="broken-heart" xmlns="http://www.w3.org/2000/svg" width="48" height="16" viewBox="5.707 17 48 16">
                        <g fill="#0090E3">
                          <path className="broken-heart--left" d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z"/>
                          <path className="broken-heart--right" d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z"/>
                        </g>
                        <path className="broken-heart--crack" fill="none" stroke="#FFF" strokeMiterlimit="10" d="M29.865 18.205v14.573"/>
                      </svg>
                      <div className="effect-group">
                        <span className="effect"></span>
                        <span className="effect"></span>
                        <span className="effect"></span>
                        <span className="effect"></span>
                        <span className="effect"></span>
                      </div>
                    </div>
                    </a>
                </div>
                <p className="nomargin"><AiOutlineShop /> {product.shop}</p>
                <p className='text-success nomargin'><MdOutlineDiscount /> {product.discount} % OFF</p>
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