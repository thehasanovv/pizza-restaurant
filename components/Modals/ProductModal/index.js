import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "../../../styles/ProductModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reduxSetOpen, reduxReset } from "../../../store/slices/orderSlice";
import { addProduct } from "../../../store/slices/cartSlice";
import { AddQuantityBtns } from "../../../components/Products/AddQuantityBtns";
import { PizzaChangeSize } from "../../../components/Products/PizzaChangeSize";
import { AddExtrasBtns } from "../../../components/Products/AddExtrasBtns";
import { Toast } from "../../../features/toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductModal = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.order);

  const handleOpen = () => dispatch(reduxSetOpen(true));
  const handleClose = () => dispatch(reduxSetOpen(false));

  const handleClick = () => {
    const { price, quantity, extras } = product;
    dispatch(addProduct({ ...product, extras, price, quantity }));
    dispatch(reduxReset());
    Toast.fire({
      icon: "success",
      title: "Product added to basket",
    });

    dispatch(reduxSetOpen(false));
  };

  return (
    <div>
      <Modal
        open={product.isOpenModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.container}>
            {/* <div className={styles.imgContainer}>
              <img src={product.item?.img} alt="" />
            </div> */}
            <div className={styles.body}>
              <h1 className={styles.title}>{product.item?.title}</h1>
              <span className={styles.price}>${product.price}</span>
              <p className={styles.desc}>{product.item?.desc}</p>
              {product.item?.product === "pizza" && (
                <>
                  <h3 className={styles.choose}>Choose the size</h3>
                  <div className={styles.sizes}>
                    <PizzaChangeSize />
                  </div>
                  <h3 className={styles.choose}>
                    Choose additional ingredients
                  </h3>
                  <div className={styles.ingredients}>
                    <AddExtrasBtns product={product.item} />
                  </div>
                </>
              )}
              <div className={styles.add}>
                <AddQuantityBtns />
                <button className={styles["btn-grad"]} onClick={handleClick}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductModal;
