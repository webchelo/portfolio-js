import './PresentationCard.css'
import perfil from '../assets/perfil.jpg'

export const PresentationCard = () => {
  return (
    <div className="presentation-container">  
        <div className="presentation-profile">
            <h1>Marcelo Anavia</h1>
            <p>Programador web y diseñador multimedial</p>
        </div>
        <div className="presentation-img">
            <img src={perfil} alt="Imagen de perfil de Marcelo Anavia" />
        </div>
    </div>
  )
}
