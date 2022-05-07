import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { reduxCloseModal } from "../../../store/slices/modalSlice";

import styles from "../../../styles/OrderDetail.module.css";
import { useRouter } from "next/router";
import { createOrder } from "../../../store/actions/createOrder";
import { resetId } from "../../../store/slices/cartSlice";
import { useEffect, useState } from "react";

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

const CashOnDelivery = () => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const id = useSelector((state) => state.cart._id);
  const total = useSelector((state) => state.cart.total);

  const handleClick = () => {
    dispatch(createOrder({ customer, address, total, method: 0 }));
    dispatch(reduxCloseModal());
  };

  useEffect(() => {
    if (id) {
      router.push(`orders/${id}`);
      dispatch(resetId());
    }
  }, [id]);

  const open = useSelector((state) => state.modal.isOpen);
  const handleClose = () => dispatch(reduxCloseModal());

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.container}>
            <h1 className={styles.title}>You will pay $12 after delivery.</h1>
            <div className={styles.item}>
              <label className={styles.label}>Name Surname</label>
              <input
                placeholder="John Doe"
                type="text"
                className={styles.input}
                onChange={(e) => setCustomer(e.target.value)}
              />
            </div>
            <div className={styles.item}>
              <label className={styles.label}>Phone Number</label>
              <input
                type="text"
                placeholder="+1 234 567 89"
                className={styles.input}
              />
            </div>
            <div className={styles.item}>
              <label className={styles.label}>Address</label>
              <textarea
                rows={5}
                placeholder="Elton St. 505 NY"
                type="text"
                className={styles.textarea}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button className={styles.button} onClick={handleClick}>
              Order
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CashOnDelivery;
