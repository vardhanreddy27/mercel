import React from 'react';
import { useSelector } from 'react-redux';

function MyWishlist() {
  const wishlistItems = useSelector((state) => state.wishlist);

  return (
    <div>
      <h1>My Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <ul className="mt-5">
          {wishlistItems.map((product) => (
            <li key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.shop}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-5">Your wishlist is empty.</p>
      )}
    </div>
  );
}

export default MyWishlist;