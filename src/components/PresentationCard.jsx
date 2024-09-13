import './PresentationCard.css'

export const PresentationCard = () => {
  return (
    <div className="presentation-container">  
        <div className="presentation-profile">
            <h1>Marcelo Anavia</h1>
            <p>Diseñador multimedial y programador web</p>
        </div>
        <div className="presentation-img">
            <img src="../assets/perfil.jpg" alt="Imagen de perfil de Marcelo Anavia" />
        </div>
    </div>
  )
}
