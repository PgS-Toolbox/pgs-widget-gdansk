import Button from "./Button"

function GuideButton ( props ) {
    
    const { latlong } = props

    function goToGoogle() {
        const url = "http://maps.google.com/maps?z=12&t=m&q=loc:" + latlong[1] + "+" + latlong[0]
        window.open(url, '_blank').focus();
    }

    return (
    <Button onClick={goToGoogle}>
        guide
    </Button>
    );
}

export default GuideButton;