import {createContext, useState, useEffect} from "react"
import { useMediaQuery } from 'react-responsive';

const ShowContext = createContext();

export function ShowProvider ({children}) {
    const isMobile = useMediaQuery({ query: `(max-width: 1140px)` });

    const [ showCarParks, setShowCarParks ] = useState(true);
    const [ showBikeStands, setShowBikeStands ] = useState(isMobile);
    const [ showBusAndTram, setShowBusAndTram ] = useState(isMobile);
    const [ showPois, setShowPois ] = useState(isMobile);

    useEffect(() => {
        setShowBikeStands(!isMobile);
        setShowBusAndTram(!isMobile);
        setShowPois(!isMobile)
    }, [isMobile])
        
    return (
        <ShowContext.Provider value = {{showCarParks, setShowCarParks, showBikeStands, setShowBikeStands,
                                        showBusAndTram, setShowBusAndTram, showPois, setShowPois, isMobile }}> 
            { children }
        </ShowContext.Provider>
    ); 
}

export default ShowContext; 