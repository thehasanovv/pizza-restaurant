import styles from "../../styles/Login.module.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SIGN IN</h1>
        <form className={styles.loginForm}>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>LOGIN</button>
          <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <Link href="/register">
            <a>CREATE A NEW ACCOUNT</a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
