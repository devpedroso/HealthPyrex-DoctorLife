import "core-js/stable/atob";
import { useState, createContext } from "react";

import { User } from "../services/models/user";
import { SignInCredentials } from "../services/models/authService";

import { auth } from "../../src/services/auth/authService";
import { Role } from "../../src/services/enum/userEnum";

import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthData = {
  user: User;
  signIn: (user: SignInCredentials) => Promise<void>;
  setKeepConnected: (any) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  onLeave: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthData);

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>({} as User);

  async function signIn({ email, password, role }: SignInCredentials) {
    try {
      const { data } = (await auth({ email, password, role })) as any;

      const profile = role === Role.patient ? data[0].patient : data[0].doctor;

      if (profile?.isActive) {
        setUser(profile);
        setIsLoggedIn(true);
      } else {
        throw new Error("Usuário não está ativo");
      }
    } catch (error) {
      throw new Error("Usuário ou senha incorretos");
    }
  }

  function setKeepConnected() {
    setUser({ ...user });
  }

  async function onLeave() {
    await setIsLoggedIn(false), setUser({} as User);
    await AsyncStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        setKeepConnected,
        isLoggedIn,
        setIsLoggedIn,
        onLeave,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
