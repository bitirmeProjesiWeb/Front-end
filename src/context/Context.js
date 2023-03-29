import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [pitches, setPitches] = useState([]);
  const [user, setUser] = useState();
  const [cities, setCities] = useState();
  const [reservations, setReservations] = useState();
  const [data, setData] = useState();

  //************************************************** şehirler **************************************************
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
  }, [!data,pitches,reservations]);

  const values = {
    pitches,
    setPitches,
    user,
    setUser,
    cities,
    reservations,
    setReservations,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
export default Provider;
