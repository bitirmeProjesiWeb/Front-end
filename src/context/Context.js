import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const [user, setUser] = useState();

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
