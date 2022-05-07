import styles from "../../styles/Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>CREATE AN ACCOUNT</h1>
        <form className={styles.registerForm}>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <span className={styles.agreement}>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
