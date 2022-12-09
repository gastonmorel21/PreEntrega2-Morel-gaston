import React from 'react';
import './CartWidget.css'


const CartWidget = () => {
  return (
    <div className='carrito' >
      <a href='#'>
        <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png" />
        <span>2</span>
      </a>
    </div>

  );
};

export default CartWidget;