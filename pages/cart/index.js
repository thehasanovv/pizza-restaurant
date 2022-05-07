import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import ButtonWrapper from "../../features/paypal";
import OrderDetail from "../../components/OrderDetail";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const currency = "USD";
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.table}>
          <ul className={styles.orderName}>
            <li>Product</li>
            <li>Name</li>
            <li className={styles.extrasLi}>Extras</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </ul>
          {cart.products.map((product) => (
            <ul className={styles.orderList} key={product._id}>
              <li>
                <div className={styles.imgContainer}>
                  <Image
                    src={product.item.img}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </li>
              <li>
                <span className={styles.name}>{product.item.title}</span>
              </li>
              <li className={styles.extrasLi}>
                <span className={styles.extras}>
                  <span className={styles.extras}>
                    {product.extras[0] ? (
                      product.extras.map((extra) => (
                        <span key={extra._id}>{extra.text}, </span>
                      ))
                    ) : (
                      <p>No extras</p>
                    )}
                  </span>
                </span>
              </li>
              <li>
                <span className={styles.price}>{product.price}</span>
              </li>
              <li>
                <span className={styles.quantity}>{product.quantity}</span>
              </li>
              <li>
                <span className={styles.total}>
                  ${product.price * product.quantity}
                </span>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button className={styles.button} onClick={() => setOpen(true)}>
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetail total={cart.total} />}
    </div>
  );
};

export default Cart;
