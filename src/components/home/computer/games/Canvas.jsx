import { useRef, useEffect } from 'react';
import './Canvas.css'

export const Canvas = () => {
  const canvasRef = useRef(null);
  let dibujando = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Pintar fondo verde
    // ctx.fillStyle = '#121d12';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Mouse events
    canvas.addEventListener('mousedown', empezarDibujo);
    canvas.addEventListener('mousemove', dibujar);
    canvas.addEventListener('mouseup', pararDibujo);
    
    function empezarDibujo(e) {
      dibujando = true;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
    
    function dibujar(e) {
      if (!dibujando) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.strokeStyle = '#0f0';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
    }
    
    function pararDibujo() {
      dibujando = false;
    }
    
    // Cleanup
    return () => {
      canvas.removeEventListener('mousedown', empezarDibujo);
      canvas.removeEventListener('mousemove', dibujar);
      canvas.removeEventListener('mouseup', pararDibujo);
    };
  }, []);

  return (
    <div className='canvas-container'>
      <canvas
        ref={canvasRef}
        width={400}
        height={320}
      />
    </div>
  );
};