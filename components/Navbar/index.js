import Image from "next/image";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "../../styles/Navbar.module.css";
import useScroll from "../../features/scroll";
import NavbarNav from "./NavbarNav";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isScrolled = useScroll();
  const quantity = useSelector((state) => state.cart.quantity);

  const openCartModalHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`${styles.container} ${
        !isScrolled ? styles.unScrolledContainer : styles.scrolledContainer
      }`}
    >
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
        <Link href="/">
          <a
            className={`${styles.navLogoLeft} ${
              !isScrolled && styles.isScrolledNavLogoLeft
            }`}
          >
            <Image
              src="/img/pizza-logo.png"
              alt="logo"
              width="160px"
              height="149px"
            />
          </a>
        </Link>
      </div>
      <NavbarNav
        isScrolled={isScrolled}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className={styles.item}>
        <Link href="/login">
          <a>
            <div className={styles.login}>Login</div>
          </a>
        </Link>
        <Link href="/cart">
          <a>
            <div className={styles.cart}>
              <Badge
                badgeContent={quantity}
                color="primary"
                style={{ cursor: "pointer" }}
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </a>
        </Link>
        <div className={styles.hamburger} onClick={openCartModalHandler}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
