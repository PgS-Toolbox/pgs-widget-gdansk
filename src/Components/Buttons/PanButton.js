import {useContext} from "react"
import Button from "./Button"

import ActivePositionContext from '../../Contexts/ActivePositionContext';

function PanButton ( latlong ) {
    
    const { setPanTo } = useContext(ActivePositionContext);

    function goToPoint() {
        setPanTo(latlong)
        window.scrollTo(0,0)
    }

    return (<Button onClick={goToPoint}>
        show
    </Button>)
}

export default PanButton;