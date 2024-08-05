import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('SUA_CHAVE_PÚBLICA_DO_STRIPE');

const CheckoutForm = ({ cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      // Aqui você deve enviar a `paymentMethod.id` para o seu servidor para concluir o pagamento
      console.log('Payment Method Created!', paymentMethod);
      alert('Compra realizada com sucesso!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Finalize sua compra</h2>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pagar</button>
    </form>
  );
};

const Checkout = ({ cartItems }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm cartItems={cartItems} />
  </Elements>
);

export default Checkout;