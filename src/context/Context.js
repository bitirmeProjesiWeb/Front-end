import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser);
    } else {
      return undefined;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);
  const [items, setItems] = useState([]);

  //aCapacityBox'taki pie chart datası için
  const [aCapacityData, setACapacityData] = useState();
  //Yaklaşan Randevu datası için
  const [aUpComingR, setAUpComingR] = useState();
  //Randevular sayfası için
  const [aReservations, setAReservations] = useState();

  //Sorular
  const [aQuestions, setAquestions] = useState();

  //Yorumlar
  const [aComments, setAComments] = useState();

  //Saha Listesi
  const [pitchList, setPitchList] = useState();

  useEffect(() => {
    const getirData = async () => {
      const result = await axios("/data.json");
      setItems(result.data.pitches);
      setACapacityData(result.data.aCapacityChartData);
      setAUpComingR(result.data.aUpComingReservations);
      setAReservations(result.data.aReservations);
      setAquestions(result.data.aQuestions);
      setAComments(result.data.aComments);
      setPitchList(result.data.pitchList);
    };
    getirData();
  }, [aCapacityData]);

  // Verileri tarih sırasına göre sırala
  const sortedReservations =
    aUpComingR &&
    aUpComingR.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });

  const values = {
    setUser,
    user,
    aCapacityData,
    setACapacityData,
    aUpComingR,
    setAUpComingR,
    sortedReservations,
    aReservations,
    setAReservations,
    aQuestions,
    setAquestions,
    aComments,
    setAComments,
    pitchList,
    setPitchList,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
export default Provider;
