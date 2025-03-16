import { Computer } from "../components/home/computer/Computer";

export const EasterEgg = () => {
    return (
      <div style={{ marginTop: '2rem' }}>
        <h1 style={{ color: 'white', marginBottom: '2rem', textAlign: 'center' }}>¡Encontraste un Easter Egg!</h1>
        <Computer />
      </div>
    );
  };