import Head from "next/head";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";

export default function Home({ pizzaList, saladList, drinkList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList
        pizzaList={pizzaList}
        saladList={saladList}
        drinkList={drinkList}
      />
    </div>
  );
}

export const getStaticProps = async () => {
  const products = await axios.get("http://localhost:3000/api/products");
  const salads = await axios.get("http://localhost:3000/api/salads");
  const drinks = await axios.get("http://localhost:3000/api/drinks");

  return {
    props: {
      pizzaList: products.data,
      saladList: salads.data,
      drinkList: drinks.data,
    },
  };
};
