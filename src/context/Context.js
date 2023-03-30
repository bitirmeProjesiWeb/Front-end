import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  //aLineChart datası için
  const [aLineData, setALineData] = useState();
  //aCapacityBox'taki pie chart datası için
  const [aCapacityData, setACapacityData] = useState();
  //Yaklaşan Randevu datası için
  const [aUpComingR, setAUpComingR] = useState();
  //Randevular sayfası için
  const [aReservations, setAReservations] = useState();

  const [user, setUser] = useState();

  useEffect(() => {
    const getirData = async () => {
      const result = await axios("/data.json");
      setItems(result.data.pitches);
      setALineData(result.data.aLineChartData);
      setACapacityData(result.data.aCapacityChartData);
      setAUpComingR(result.data.aUpComingReservations);
      setAReservations(result.data.aReservations);
    };
    getirData();
  }, [setALineData]);


 // Verileri tarih sırasına göre sırala
 const sortedReservations = aUpComingR && aUpComingR.sort((a, b) => {
  return new Date(a.date) - new Date(b.date);
});

  const values = {
    items,
    setItems,
    user,
    setUser,
    aLineData,
    setALineData,
    aCapacityData,
    setACapacityData,
    aUpComingR,
    setAUpComingR,
    sortedReservations,
    aReservations,
    setAReservations
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
export default Provider;
