import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { reduxHandleSize } from "../../store/slices/orderSlice";

export const PizzaChangeSize = () => {
  const dispatch = useDispatch();

  const handleSize = (sizeIndex) => {
    dispatch(reduxHandleSize(sizeIndex));
  };

  const size = useSelector((state) => state.order.size);
  console.log(size);
  return (
    <>
      <div className={styles.size} onClick={() => handleSize(0)}>
        {size !== 0 ? (
          <Image src="/img/size.png" layout="fill" alt="small pizza" />
        ) : (
          <Image src="/img/size-active.png" layout="fill" alt="small pizza" />
        )}
        <span className={styles.number}>Small</span>
      </div>
      <div className={styles.size} onClick={() => handleSize(1)}>
        {size !== 1 ? (
          <Image src="/img/size.png" layout="fill" alt="medium pizza" />
        ) : (
          <Image src="/img/size-active.png" layout="fill" alt="small pizza" />
        )}
        <span className={styles.number}>Medium</span>
      </div>
      <div className={styles.size} onClick={() => handleSize(2)}>
        {size !== 2 ? (
          <Image src="/img/size.png" layout="fill" alt="large pizza" />
        ) : (
          <Image src="/img/size-active.png" layout="fill" alt="small pizza" />
        )}
        <span className={styles.number}>Large</span>
      </div>
    </>
  );
};
