import React from 'react';

const Cart = ({ cartItems, removeFromCart, onCheckout }) => {
  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - R${item.price.toFixed(2)}
              <button onClick={() => removeFromCart(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onCheckout} disabled={cartItems.length === 0}>Finalizar Compra</button>
    </div>
  );
};

export default Cart;