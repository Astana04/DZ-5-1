import React from "react";
import "./Page.css";
import { Link, useHistory } from "react-router-dom";

const Page = () => {
    console.log("111");

    return (
        <div className="page">
            <div className="background-image">
                <Link to="/">
                    <img src="./Avengers" alt="Background" />
                </Link>
            </div>
            <div className="content">
                <div className="text-box">
                    <p>
                     Я люблю марвел но меня нравится тор.
                     Тор — бог грома, доблестный воин и сын великого Одина (властелина королевства Асгард). С самого 
                     детства он отличался смелостью и отвагой. Главные черты его характера — честность и открытость. 
                      Тор всегда с большим уважением относился к своему отцу и братьям (Бальдур и Локи).
                    </p>
                </div>
            </div>
        </div>
        
    );
};

export default Page;