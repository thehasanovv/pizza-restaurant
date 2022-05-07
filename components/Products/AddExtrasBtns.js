import styles from "../../styles/Product.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reduxHandleChange } from "../../store/slices/orderSlice";

export const AddExtrasBtns = ({ product }) => {
  //   const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      dispatch(reduxHandleChange({ price: option.price, extras: option }));
    } else {
      dispatch(reduxHandleChange({ price: -option.price, extras: option }));
    }
  };

  return (
    <>
      {product.extraOptions.map((option) => (
        <div className={styles.option} key={option.text}>
          <input
            type="checkbox"
            id={option.text}
            name={option.text}
            className={styles.checkbox}
            onChange={(e) => handleChange(e, option)}
          />
          <label htmlFor="double">{option.text}</label>
        </div>
      ))}
    </>
  );
};
