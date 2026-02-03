import styles from "./Shop.module.css";
import { useLoaderData
} from 'react-router-dom';
import getProductsList from '../products.js';
import ProductCard from '../ProductCard/ProductCard.jsx';

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const products = await getProductsList({query : q});
  return { products, q };
}


export default function Shop(){
    const { products, q } = useLoaderData();

    return (
    <main className={styles.shop}>
        <h1>Our Products</h1>
        <div className={styles.shopGrid}>
            {products.map(
                p => 
                    <ProductCard 
                        key = {p.id}
                        title = {p.title}
                        price = {p.price}
                        image = {p.image}
                    />)}
        </div>
    </main>
    )
}
