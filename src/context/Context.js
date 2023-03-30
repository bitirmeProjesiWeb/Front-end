import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [pitches, setPitches] = useState([]);
  const [cities, setCities] = useState();
  const [reservations, setReservations] = useState();
  const [data, setData] = useState();

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
    const getData = () => {
      axios
        .get("http://localhost:3000/data.json")
        .then((data) => setData(data.data));
    };
    getData();
    if (data) {
      setPitches(data.pitches);
      setReservations(data.reservations);
    }
  }, [!data, pitches, reservations]);

  useEffect(() => {
    user
      ? localStorage.setItem("user", JSON.stringify(user))
      : localStorage.removeItem("user");
  }, [user]);

  const loginHandle = (user) => {
    if (data) {
      const u = data.users.find(
        (item) => (item.email === user.email || item.userName === user.email) && item.password === user.password
      );

      if (u) {
        setUser(u);
        return u;
      }
    }
  };

  const logoutHandle = () => {
    setUser();
  };
  const values = {
    pitches,
    setPitches,
    loginHandle,
    logoutHandle,
    user,
    cities,
    reservations,
    setReservations,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
export default Provider;
