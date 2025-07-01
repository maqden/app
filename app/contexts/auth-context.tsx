import React, {createContext, useContext, useState} from 'react';
import type {User} from "~/services/auth-service";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({authenticated, children}: { authenticated: User|null, children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(authenticated ?? null);

  // const login = (authenticated: User) => setUser(authenticated);
  // const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{user, setUser, isAuthenticated: !!user}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}