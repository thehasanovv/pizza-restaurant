import styles from "../styles/PizzaList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ pizzaList, saladList, drinkList }) => {
  return (
    <>
      <div className={styles.container} id="pizza" name="pizza">
        <h1 className={styles.title}>Pizzas</h1>
        <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            <ProductCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
      </div>
      <div className={styles.container} id="salad" name="pizza">
        <h1 className={styles.title}>Salads</h1>
        <div className={styles.wrapper}>
          {saladList.map((pizza) => (
            <ProductCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
      </div>
      <div className={styles.container} id="drink" name="pizza">
        <h1 className={styles.title}>Drinks</h1>
        <div className={styles.wrapper}>
          {drinkList.map((pizza) => (
            <ProductCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
