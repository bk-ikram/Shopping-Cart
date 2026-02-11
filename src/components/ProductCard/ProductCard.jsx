import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  image,
  title,
  price,
  productId,
  quantity,
  addToCart,
  updateCartQuantity,
}) {
  const { quantityValue, setQuantityValue } = useState(quantity);
  const isInCart = quantity > 0;
  const quantityClass = [styles.quantityControl, !isInCart && styles.hidden]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.productCard}>
      <div className={styles.imgContainer}>
        <img className={styles.productImage} src={image} alt={title} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.productTitle}>{title}</h2>
        <h3 className={styles.productPrice}>${price}</h3>
        <div className={styles.actions}>
          <div className={quantityClass}>
            <button
              className={styles.decrease}
              onClick={() => setQuantityValue((prev) => prev - 1)}
            >
              -
            </button>
            <input
              className={styles.quantity}
              value={quantityValue}
              onChange={() => setQuantityValue(e.target.value)}
            />
            <button
              className={styles.increase}
              onClick={() => setQuantityValue((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          {isInCart ? (
            <button
              className={styles.addToCartBtn}
              onClick={() => updateCartQuantity(productId, quantityValue)}
            >
              Update Cart
            </button>
          ) : (
            <button
              className={styles.addToCartBtn}
              onClick={() =>
                addToCart({ title, productId, image }, quantityValue)
              }
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
