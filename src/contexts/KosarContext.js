import { createContext, useState } from "react";

export const kosarContext = createContext("");  
export const KosarProvider = ({ children }) => {

    const[kosar, setKosar] = useState([])
    
    function kosarba(termek){
        const segedKosar = [...kosar];
        segedKosar.push(termek)
    }


}




return(
    <kosarContext.Provider value={kosar}>
        {children}
    </kosarContext.Provider>
)