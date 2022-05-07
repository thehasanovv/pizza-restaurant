import styles from "../../styles/AddQuantityBtns.module.css";
import { useSelector, useDispatch } from "react-redux";
import { reduxChangeQuantity } from "../../store/slices/orderSlice";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export const AddQuantityBtns = () => {
  const quantity = useSelector((state) => state.order.quantity);
  const dispatch = useDispatch();

  const handleChangeQuantity = (num) => {
    dispatch(reduxChangeQuantity(num));
  };

  return (
    <div className={styles.btnsWrapper}>
      <div
        className={styles.decrease}
        onClick={handleChangeQuantity.bind(null, -1)}
      >
        <RemoveIcon />
      </div>
      <div className={styles.quantity}>{quantity}</div>
      <div
        className={styles.increase}
        onClick={handleChangeQuantity.bind(null, 1)}
      >
        <AddIcon />
      </div>
    </div>
  );
};
