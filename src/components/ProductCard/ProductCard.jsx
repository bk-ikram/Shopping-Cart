import { useState } from 'react';
import styles from "./ProductCard.module.css";

export default function ProductCard(props){

    return (
        <div className={styles.productCard}>
            <div className={styles.imgContainer}>
                <img className={styles.productImage} src={props.image} alt={props.title} />
            </div>
            <div className={styles.details}>
                <h2 className={styles.productTitle}>{props.title}</h2>
                <h3 className={styles.productPrice}>${props.price}</h3>
                <div className={styles.cardActions}>
                    <div className={styles.quantityControl}>
                        <button className={styles.decrease}>-</button>
                        <input className={styles.quantity} value = {1}/>
                        <button className={styles.increase}>+</button>
                    </div>
                <button className={styles.addToCartBtn}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}