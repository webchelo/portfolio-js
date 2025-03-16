import { useState } from "react";
import "./PresentationCard.css";
import perfil from "../../assets/perfil.jpg";
import dinoProfile from "../../assets/dino-profile.jpg";

export const PresentationCard = () => {
  const [currentImage, setCurrentImage] = useState(perfil);

  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === perfil ? dinoProfile : perfil));
  };

  return (
    <>
      <div className="presentation-container">
        <div className="presentation-profile">
          <h2>Marcelo Anavia</h2>
          <p>Programador web y Diseñador multimedial</p>
        </div>
        <div className="presentation-img">
          <img
            src={currentImage}
            alt="Imagen de perfil de Marcelo Anavia"
            onClick={toggleImage}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
};
