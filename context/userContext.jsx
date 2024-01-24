import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { authHeader } from '../src/services/auth-header';

export const userContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Get the current logged in user information. If there is no token, it will
  // return null, and we can update the login status accordingly.
  useEffect(() => {
    if (!user) {
      getLoggedInUser();
    }
  }, [user]);

  async function getLoggedInUser() {
    try {
      let response = await axios.get("/user", { headers: authHeader() });
      setUser(response.data.data);
      setIsLoggedIn(true);
    } catch (err) {
      // If there is an error or no user is found, set isLoggedIn to false.
      console.error(`Error getting logged in user ${err}`);
      setIsLoggedIn(false);
    }
  }

  // Add a function to handle login status
  const handleLoginStatus = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <userContext.Provider value={{ user, setUser, isLoggedIn, handleLoginStatus }}>
      {children}
    </userContext.Provider>
  );
}
