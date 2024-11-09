import { createContext, useContext, useState } from "react";
import { ApiContext } from "./ApiContext";

export const kosarContext = createContext("");


export const KosarProvider = ({ children }) => {


    const [kosarLista, setKosarLista] = useState([])
    

    function kosarbaKattintas(props) {
       const segedKosar = [...kosarLista]
       segedKosar.push(props)
       setKosarLista(segedKosar)

    }

    return <kosarContext.Provider value={{ kosarLista, kosarbaKattintas }}>
        {children}
    </kosarContext.Provider>
}




