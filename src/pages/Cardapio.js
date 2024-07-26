
import { CContainer } from "@coreui/react";
import cardapioimg from '../pages/Cardapio.png'

function cardapio() {
    return (

        <CContainer fluid className="cardapio-container" >

            <div className="image-container">
                <img src={cardapioimg} alt="cardapio" className="cardapio-image" />
            </div>

        </CContainer>
    );
}

export default cardapio;