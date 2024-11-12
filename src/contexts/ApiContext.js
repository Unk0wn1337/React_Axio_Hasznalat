import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);
  const [kategoriaLista, setKategoriaLista] = useState([]);


  const getAdat = async (vegpont,fv) => {
    try {
      const response = await myAxios.get(vegpont); // Adatok lekérése
      fv(response.data);
    } catch (err) {
      console.log("Hiba történt az adatok lekérésekor.");
    }
  };

  const postAdat = async (vegpont, adat) => {
    try {
      const response = await myAxios.post(vegpont, adat); // Adatok küldése
      console.log(response);
    } catch (err) {
      console.log("Hiba történt az adatok küldésekor.");
    }
  };

  useEffect(() => {
    getAdat("/products",setTermekLista);
    getAdat("/products/categories",setKategoriaLista)
  }, []);

  return (
    <ApiContext.Provider value={{ termekLista, postAdat, getAdat, kategoriaLista }}>
      {children}
    </ApiContext.Provider>
  );
};
