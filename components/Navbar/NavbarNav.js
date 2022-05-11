import ScrollIntoView from "react-scroll-into-view";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { navbarNavLeft } from "../../data-dev/navbar";
import { useRouter } from "next/router";

const NavbarNav = ({ isScrolled, isOpen, setIsOpen }) => {
  const router = useRouter();

  const closeCartModalHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <nav className={styles.item}>
        <ul className={`${styles.list} ${!isOpen && styles.open}`}>
          {navbarNavLeft.map((nav) => (
            <li
              className={`${styles.listItem} ${!isOpen && styles.fade}`}
              onClick={closeCartModalHandler}
              key={nav.id}
            >
              {router.pathname === "/" ? (
                <ScrollIntoView selector={nav.selector}>
                  {nav.list}
                </ScrollIntoView>
              ) : (
                <Link href={`/${nav.selector}`} key={nav.id}>
                  <a>{nav.list}</a>
                </Link>
              )}
            </li>
          ))}
          <li
            // prettier-ignore
            className={`${styles.listItem} ${isScrolled && styles.navLogoCenter} ${styles.navLogoCenterHide}`}
            onClick={closeCartModalHandler}
          >
            <Link href="/">
              <a>
                <Image
                  src="/img/pizza-logo.png"
                  alt=""
                  width="160px"
                  height="149px"
                  className={styles.logo}
                />
              </a>
            </Link>
          </li>
          <li
            className={`${styles.listItem} ${!isOpen && styles.fade}`}
            onClick={closeCartModalHandler}
          >
            Events
          </li>
          <li
            className={`${styles.listItem} ${!isOpen && styles.fade}`}
            onClick={closeCartModalHandler}
          >
            Blog
          </li>
          <li
            className={`${styles.listItem} ${!isOpen && styles.fade}`}
            onClick={closeCartModalHandler}
          >
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarNav;
