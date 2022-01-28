import styles from "./styles.module.scss";

import { FaGoogle } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <FaGoogle color="#04d361" />
      Pedro Henrique
      <FiX color="#737380" className={styles.closedIcons} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGoogle color="#eba417" />
      SignIn with Google
    </button>
  );
}
