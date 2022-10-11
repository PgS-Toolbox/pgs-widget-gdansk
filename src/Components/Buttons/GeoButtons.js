import PanButton from "./PanButton";
import GuideButton from "./GuideButton";

export default function GeoButtons(props) {
    return (
        <span style={{display: "inline-flex"}}>
            <PanButton latlong={props.latlong}/>
            <GuideButton latlong={props.latlong}/>
        </span>
    )
}