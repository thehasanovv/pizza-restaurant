import React from "react";
import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { useDispatch } from "react-redux";
import { reduxSelectedProduct, reduxReset } from "../store/slices/orderSlice";

const ProductCard = ({ pizza }) => {
  const dispatch = useDispatch();
  const openModal = (product) => {
    dispatch(reduxSelectedProduct(product));
  };

  return (
    <div className={styles.container}>
      <div className={styles.cartImage}>
        <Zoom zoomMargin={150}>
          <Image src={pizza.img} alt="" width="300px" height="300px" />
        </Zoom>
      </div>
      {pizza.product === "pizza" && (
        <>
          <span>
            <h1 className={styles.title}>{pizza.title}</h1>
            <p className={styles.desc}>{pizza.desc}</p>
          </span>
          <span className={styles.price}>$ {pizza.prices[0]}</span>
          {/* <Link href={`/product/${pizza._id}`} passHref>
            <a className={styles.addToCartBtn}>
              <span onClick={() => openModal(pizza)}>ADD</span>
            </a>
          </Link> */}
          <button
            className={styles.addToCartBtn}
            onClick={() => openModal(pizza)}
          >
            ADD
          </button>
        </>
      )}
      {pizza.product === "salad" && (
        <>
          <span>
            <h1 className={styles.title}>{pizza.title}</h1>
            <p className={styles.desc}>{pizza.desc}</p>
          </span>
          <span className={styles.price}>$ {pizza.price}</span>
          {/* <Link href={`/salads/${pizza._id}`} passHref>
            <a className={styles.addToCartBtn}>
              <span>ADD</span>
            </a>
          </Link> */}
          <button
            className={styles.addToCartBtn}
            onClick={() => openModal(pizza)}
          >
            ADD
          </button>
        </>
      )}
      {pizza.product === "drink" && (
        <>
          <span>
            <h1 className={styles.title}>{pizza.title}</h1>
          </span>
          <span className={styles.price}>$ {pizza.price}</span>
          {/* <Link href={`/drinks/${pizza._id}`} passHref>
            <a className={styles.addToCartBtn}>
              <span>ADD</span>
            </a>
          </Link> */}
          <button
            className={styles.addToCartBtn}
            onClick={() => openModal(pizza)}
          >
            ADD
          </button>
        </>
      )}
    </div>
  );
};

export default ProductCard;
