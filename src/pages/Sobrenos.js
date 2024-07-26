
import { CContainer } from "@coreui/react";
import sobreimg from '../pages/Sobre.png'

function sobrenos() {
    return (

        <CContainer fluid className="sobrenos-container" >

            <div className="image-container">
                <img src={sobreimg} alt="sobre" className="sobre-image" />
            </div>

        </CContainer>
    );
}

export default sobrenos;