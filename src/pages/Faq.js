
import { CContainer } from "@coreui/react";
import faqimg from '../pages/Faq.png'

function faq() {
    return (

        <CContainer fluid className="cardapio-container" >

            <div className="image-container">
                <img src={faqimg} alt="cardapio" className="cardapio-image" />
            </div>

        </CContainer>
    );
}

export default faq;