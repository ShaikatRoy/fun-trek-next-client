import React, { useEffect, useState, ReactNode } from "react";

import firebase from "@/firebase/firebase.config";
import "firebase/compat/auth";
import AuthContext from "@/contexts/AuthContext";

type UserInfo = {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
};

type User = Partial<{
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
  providerData: UserInfo[];
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: firebase.auth.UserMetadata;
  refreshToken: string;
}>;

interface AuthContextType {
  user: User | null;
  loading: boolean;
  googleLogin: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = async () => {
    setLoading(true);
    try {
      const result = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
      if (result.user) {
        const { displayName, email, phoneNumber, photoURL, providerId, uid, providerData } = result.user;
        setUser({
          displayName,
          email,
          phoneNumber,
          photoURL,
          providerId,
          uid,
          providerData: providerData.map(data => ({
            displayName: data?.displayName || null,
            email: data?.email || null,
            phoneNumber: data?.phoneNumber || null,
            photoURL: data?.photoURL || null,
            providerId: data?.providerId || "",
            uid: data?.uid || ""
          }))
        });
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      console.error("Sign-Out Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        const { displayName, email, phoneNumber, photoURL, providerId, uid, providerData } = firebaseUser;
        setUser({
          displayName,
          email,
          phoneNumber,
          photoURL,
          providerId,
          uid,
          providerData: providerData.map(data => ({
            displayName: data?.displayName || null,
            email: data?.email || null,
            phoneNumber: data?.phoneNumber || null,
            photoURL: data?.photoURL || null,
            providerId: data?.providerId || "",
            uid: data?.uid || ""
          }))
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
