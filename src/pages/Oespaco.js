
import { CContainer } from "@coreui/react";
import oespacoimg from '../pages/Oespaco.png'

function oespaco() {
    return (

        <CContainer fluid className="oespaco-container" >

            <div className="image-container">
                <img src={oespacoimg} alt="oespaco" className="oespaco-image" />
            </div>

        </CContainer>
    );
}

export default oespaco;