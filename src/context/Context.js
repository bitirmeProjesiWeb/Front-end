import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [cities, setCities] = useState();

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser !== null ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const getirData = async () => {
      const result = await axios.get(
        "https://raw.githubusercontent.com/f6c5/world/master/turkiye-il-ilce.json"
      );
      setCities(result.data.states);
    };
    getirData();
  }, [!cities]);

  useEffect(() => {
    user
      ? localStorage.setItem("user", JSON.stringify(user))
      : localStorage.removeItem("user");
  }, [user]);

  const values = {
    setUser,
    user,
    cities,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
export default Provider;
