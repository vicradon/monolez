import React, { useContext, createContext } from "react";

interface Props {
  children: React.ReactNode;
}

type ContextProps = {};

const AuthContext = createContext<ContextProps>({});

function AuthProvider(props: Props) {
  const { children } = props;

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
