import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const [user, setUser] = useState();

  useEffect(() => {

    const getirData = async () => {
      const result = await axios("/data.json");
      setItems(result.data.pitches);
    };
    getirData();
  }, []);

  const values = {
    items,
    setItems,
    user,
    setUser,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
export default Provider;
