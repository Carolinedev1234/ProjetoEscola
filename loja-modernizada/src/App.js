import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
import Login from './Login';

const App = () => {
  const [category, setCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCartItems([]);
  };

  return (
    <div>
      <Header onCategoryChange={setCategory} />
      <main>
        {!loggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <ProductList category={category} addToCart={addToCart} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} onCheckout={() => setCategory('checkout')} />
            {category === 'checkout' && <Checkout cartItems={cartItems} />}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;