import styles from "./Cart.module.css";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cart, updateCartQuantity, removeFromCart } = useOutletContext();
  return (
    <>
      <h1>This is the cart</h1>
      {cart.map((i) => (
        <h4>JSON.stringify(i, null, 2)</h4>
      ))}
    </>
  );
}

export default Cart;
