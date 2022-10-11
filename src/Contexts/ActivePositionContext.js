import {createContext, useState} from "react"
import L from "leaflet"


const ActivePositionContext = createContext({});

export function ActivePositionProvider ({children}) {
    const [activePosition, setActivePosition] = useState(L.latLng(process.env.REACT_APP_START_LAT, process.env.REACT_APP_START_LNG));
    const [activeAddress, setActiveAddress] = useState("")

    const [userPosition, setUserPosition] = useState(null);
    const [panTo, setPanTo] = useState(null);

    return (
            <ActivePositionContext.Provider value = {{activePosition, setActivePosition, userPosition, setUserPosition, panTo, setPanTo, activeAddress, setActiveAddress}}> 
                { children }
            </ActivePositionContext.Provider>
        ); 
}

export default ActivePositionContext; 