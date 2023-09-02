import { createContext } from "react";
import { User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  googleLogin: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
