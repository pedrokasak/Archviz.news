import styles from "./styles.module.scss";

import { FaGoogle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import  { signIn, signOut, useSession } from 'next-auth/react';

export function SignInButton() {
  const { data: session } = useSession()

  console.log(session)

  return session ? (
    <button 
    type="button" 
    className={styles.signInButton}
    onClick={()=> signOut()}
    >
      <FaGoogle color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closedIcons} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}
      onClick={()=> signIn('google')}>
      <FaGoogle color="#eba417" />
      SignIn with Google
    </button>
  );
}
