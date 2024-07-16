import React, { createContext, useState, ReactNode } from 'react';

export interface UserContextProps {
  username: string;
  setUsername: (username: string) => void;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string>('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};