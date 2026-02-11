import styles from "./Shop.module.css";
import { useLoaderData, useOutletContext } from "react-router-dom";
import getProductsList from "../products.js";
import ProductCard from "../ProductCard/ProductCard.jsx";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const products = await getProductsList({ query: q });
  return { products, q };
}

export default function Shop() {
  const { products, q } = useLoaderData();
  const { cart, addToCart, updateCartQuantity } = useOutletContext();

  return (
    <main className={styles.shop}>
      <h1>Our Products</h1>
      <div className={styles.shopGrid}>
        {products.map((p) => {
          const cartItem = cart.find((i) => i.productId === p.id);
          const quantity = cartItem?.quantity ?? 0;
          return (
            <ProductCard
              key={p.id}
              productId={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              quantity={quantity}
              addToCart={addToCart}
              updateCartQuantity={updateCartQuantity}
            />
          );
        })}
      </div>
    </main>
  );
}
