"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function LoginPage() {
  const signIn = async () => {
    console.log("LOGIN CLICKED");
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("LOGIN SUCCESS");
    } catch (err) {
      console.error("LOGIN ERROR", err);
    }
  };

  return (
    <button onClick={signIn}>
      Sign in with Google
    </button>
  );
}
