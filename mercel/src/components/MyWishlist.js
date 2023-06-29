import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineShop } from 'react-icons/ai';
import { MdOutlineDiscount } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

function MyWishlist() {
  const wishlistItems = useSelector((state) => state.wishlist);

  return (
    <div>
      <h1>My Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div className="pt-5 fluid-container">
          {wishlistItems.map((product) => {
          const originalPrice = Math.floor((product.price * 100) / (100 - product.discount));

            return (
              <div className="grid border" key={product._id}>
                <div className="row">
                  <div className="col-4">
                    <img className="wishlisttocart" src={product.picture} alt={product.name} />
                  </div>
                  <div className="col-6">
                    <h3>{product.name}</h3>
                    <p className="nomargin">
                      <AiOutlineShop /> {product.shop}
                    </p>
                    <p className="text-success nomargin">
                      <MdOutlineDiscount /> {product.discount} % OFF
                    </p>
                    <p className="original-price d-inline text-secondary">₹{originalPrice}</p>
                    <p className="d-inline"> ₹{product.price}</p>
                    <button type="button" className="btn selected mt-1">Add to Cart</button>
                  </div>
                  <div className="col-2"><div className="mygrid">
                    <IoClose className='red'/>
              </div></div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="mt-5">Your wishlist is empty.</p>
      )}
    </div>
  );
}

export default MyWishlist;