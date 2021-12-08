import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession, signOut } from "next-auth/react";

import styles from "./styles.module.scss";

export function SigninButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signinButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      {session.user.name}

      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      type="button"
      className={styles.signinButton}
    >
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
}
