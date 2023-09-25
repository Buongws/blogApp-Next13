"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  // Introduce a new state to track redirection
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
      setHasRedirected(true); // Set state after attempting redirection
    } else {
      setHasRedirected(true); // Set state if not authenticated
    }
  }, [status, router]);

  // If it's loading, unknown or has not redirected, show loading
  if (status === "loading" || status === "unknown" || !hasRedirected) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
