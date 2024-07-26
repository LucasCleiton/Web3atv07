import { CContainer } from "@coreui/react";
import React from "react";
import logo from '../pages/logo.png'
import insta from '../pages/insta.png'
import tw from '../pages/tw.png'
import face from '../pages/face.png'

import { Link } from "react-router-dom";

function Home() {
    return (
        <CContainer fluid className="home-container">

            <div className="image-container">
                <img src={logo} alt="logo" className="logo-image" />
            </div>

            <div className="menu">

                <div className="menu-option">

                    <div className="option"> <Link to="/Cardapio">Cardápio</Link></div>
                    <div className="option"> <Link to="/Pratodaestacao">Pratos da estação</Link></div>
                    <div className="option"> <Link to="/Oespaco" >O espaço</Link></div>
                    <div className="option"> <Link to="/Faq" >FAQ de delivery</Link></div>
                    <div className="option"> <Link to="/Sobrenos" >Sobre nós</Link></div>


                </div>

                <div className="images">
                    <img src={face} alt="Imagem 1" className="menu-image" />
                    <img src={insta} alt="Imagem 2" className="menu-image" />
                    <img src={tw} alt="Imagem 3" className="menu-image" />
                </div>
            </div>

        </CContainer>

    );
}

export default Home;