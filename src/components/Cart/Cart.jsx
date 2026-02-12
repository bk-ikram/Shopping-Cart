import styles from "./Cart.module.css";
import { useOutletContext } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";

function CartItem({
  image,
  title,
  price,
  productId,
  quantity,
  updateCartQuantity,
  removeFromCart,
}) {
  return (
    <div className={styles.cartProductCard}>
      <div className={styles.productInfo}>
        <div className={styles.imgContainer}>
          <img className={styles.productImage} src={image} alt={title} />
        </div>
        <h2 className={styles.productTitle}>
          {title} ${price}
        </h2>
      </div>
      <div className={styles.details}>
        <div className={styles.actions}>
          <button
            className={styles.decrease}
            onClick={() => updateCartQuantity(productId, quantity - 1)}
          >
            -
          </button>
          <input
            className={styles.quantity}
            value={quantity}
            onChange={(e) =>
              updateCartQuantity(productId, Number(e.target.value))
            }
          />
          <button
            className={styles.increase}
            onClick={() => updateCartQuantity(productId, quantity + 1)}
          >
            +
          </button>
          <button
            className={styles.removeFromCart}
            onClick={() => removeFromCart(productId)}
          >
            <div className={styles.iconContainer}>
              <Icon path={mdiTrashCan} size={1} />
            </div>
          </button>
        </div>
        <h3 className={styles.productPrice}>${price * quantity}</h3>
      </div>
    </div>
  );
}

function Cart() {
  const { cart, updateCartQuantity, removeFromCart } = useOutletContext();
  const totalPrice = cart.reduce(
    (accum, v) => accum + v.quantity * v.product.price,
    0
  );
  return (
    <div className={styles.cartMain}>
      <h1>This is the cart</h1>
      <div className={styles.cartContent}>
        {cart.map((i) => {
          const p = i.product;
          return (
            <CartItem
              key={p.productId}
              productId={p.productId}
              title={p.title}
              price={p.price}
              image={p.image}
              quantity={i.quantity}
              removeFromCart={removeFromCart}
              updateCartQuantity={updateCartQuantity}
            />
          );
        })}
        <hr />
        <h4 className={styles.total}>Total: ${totalPrice}</h4>
      </div>
    </div>
  );
}

export default Cart;
