
import { CContainer } from "@coreui/react";
import pratodaestacaoimg from '../pages/Pratos.png'

function pratodaestacao() {
    return (

        <CContainer fluid className="oespaco-container" >

            <div className="image-container">
                <img src={pratodaestacaoimg} alt="pratodaestaca" className="pratodaestaca-image" />
            </div>

        </CContainer>
    );
}

export default pratodaestacao;