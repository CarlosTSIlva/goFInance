import React, { createContext, ReactNode, useContext } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: '1',
    name: 'Amigo',
    email: 'carlos@hotmail.com',
    photo:
      'https://avatars2.githubusercontent.com/u/6392909?s=460&u=f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9&v=4',
  };
  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
