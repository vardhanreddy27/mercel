import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from the API endpoint
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://mercel.vercel.app/api/searchSuggestions");
        const data = await response.json();
        const suggestionData = JSON.stringify(data.suggestions);
        setSuggestions(JSON.parse(suggestionData));
      } catch (error) {
        console.error("Failed to fetch search suggestions:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      {Products.map((Product) => (
        <div key={Product.id}>
          <h3>{Product.name}</h3>
          <p>{Product.description}</p>
          <img src={Product.image} alt={Product.name} />
        </div>
      ))}
    </div>
  );
}

export default Products;