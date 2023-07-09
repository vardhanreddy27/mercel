import React from "react";
import Slider from "react-slick";
import { AiOutlineShop } from 'react-icons/ai';
import { MdOutlineDiscount } from 'react-icons/md';
const MultipleItems = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <></>, // Empty JSX element to remove the left navigation button
    nextArrow: <></>, 
  };
  const recommendedProducts = [
    {
      name: 'Oneplus Buds Z2',
      shopName: 'sono vision',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDKsJJ_jaPHyresQH8304B1LR0OpYsP_hFA&usqp=CAU',
      discount: 7,
      price: 4599,
    },
    {
      name: 'Canon ESO M50',
      shopName: 'Reliance digital',
      picture: 'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70',
      discount: 7,
      price: 98599,
    },
    {
      name: 'HP color printer',
      shopName: 'Reliance digital',
      picture: 'https://rukminim2.flixcart.com/image/400/400/xif0q/printer/4/u/q/g2770-canon-original-imagnrjy6v3zgh5u.jpeg?q=70',
      discount: 13,
      price: 12599,
    },   {
      name: 'Oneplus Buds Z2',
      shopName: 'sono vision',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDKsJJ_jaPHyresQH8304B1LR0OpYsP_hFA&usqp=CAU',
      discount: 7,
      price: 4599,
    },   {
      name: 'Roadeo Cycle',
      shopName: 'Khan mart',
      picture: 'https://rukminim2.flixcart.com/image/400/400/xif0q/cycle/l/q/9/georgia-20t-kids-cycle-5-to-8-years-dual-shade-20-14-east-coast-original-imagmsbzzfng4kew.jpeg?q=70',
      discount: 10,
      price: 9599,
    },
  ];

  return (
    <div className="p-3">
      <h3>Recommended products</h3>
      <Slider {...settings}>
      {recommendedProducts.map((product, index) => (
        <div key={index} className="card text-center">
          <img src={product.picture} alt={product.name}
          style={{ width: '85%', height: '150px', objectFit: 'contain' }}
                         />
          <h5>{product.name}</h5>
          <p className="nomargin">
            <AiOutlineShop /> {product.shopName}
          </p>
          <p className='text-success nomargin'>
            <MdOutlineDiscount /> {product.discount} % OFF
          </p>
          <p className="original-price d-inline text-secondary">₹{product.price}</p>
          <p className='d-inline'> ₹{product.price}</p>
          <br />  <br />
        </div>
      ))}
             </Slider>
           
    </div>
  );
};

export default MultipleItems;