import {createContext, useState} from "react"

const GeoDataContext = createContext();

export function GeoDataProvider ({children}) {
    const [carParks, setCarParks] = useState(null)
    const [bikeStands, setBikeStands] = useState(null)
    const [busAndTram, setBusAndTram] = useState(null)
    const [pois, setPois] = useState(null)

    return (
        <GeoDataContext.Provider value = {{carParks, setCarParks, bikeStands, setBikeStands, busAndTram, setBusAndTram, pois, setPois}}> 
            { children }
        </GeoDataContext.Provider>
    ); 
}

export default GeoDataContext; 