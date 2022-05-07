import axios from "axios";
import Image from "next/image";
import styles from "../../styles/Admin.module.css";
import AddButton from "../../components/AddProductBtn";
import AddProductModal from "../../components/Modals/AddProductModal";
import { useState } from "react";

const Salads = ({ products }) => {
  const [salad, setSaladList] = useState(products);
  const [close, setClose] = useState(true);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/salads/${id}`);
      setSaladList(salad.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AddButton setClose={setClose} />
      {!close && <AddProductModal setClose={setClose} />}
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Products</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Image</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>
            {salad.map((product) => (
              <tbody key={product._id}>
                <tr className={styles.trTitle}>
                  <td>
                    <Image
                      src={product.img}
                      width={50}
                      height={50}
                      objectFit="cover"
                      alt=""
                    />
                  </td>
                  <td>{product._id}</td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>
                    <button className={styles.button}>Edit</button>
                    <button
                      className={styles.button}
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const productRes = await axios.get("http://localhost:3000/api/salads");

  return {
    props: {
      products: productRes.data,
    },
  };
};

export default Salads;
