import styles from "../../styles/Add.module.css";

const AddProductBtn = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Add New Pizza
    </div>
  );
};

export default AddProductBtn;
