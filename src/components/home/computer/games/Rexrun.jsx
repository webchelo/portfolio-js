import { useState, useEffect, useCallback } from 'react';
import './Rexrun.css';

export const Rexrun = () => {
  const [position, setPosition] = useState(0);
  const [obstacle, setObstacle] = useState(10);
  const [isJumping, setIsJumping] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const jump = useCallback(() => {
    if (!isJumping) {
      setIsJumping(true);
      setPosition(1);
      setTimeout(() => {
        setPosition(0);
        setIsJumping(false);
      }, 500);
    }
  }, [isJumping]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        jump();
        if (gameOver) {
          setGameOver(false);
          setObstacle(10);
        }
      }
    };

    const handleMouseClick = () => {
        jump();
        if (gameOver) {
          setGameOver(false);
          setObstacle(10);
        }
      };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleMouseClick);
    return () => {
        window.removeEventListener('keydown', handleKeyPress);
        window.removeEventListener('click', handleMouseClick);
    }
    
  }, [jump, gameOver]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      if (!gameOver) {
        setObstacle((prev) => {
          // Check for collision when obstacle is at player position
          if (prev === 1 && position === 0) {
            setGameOver(true);
            return prev;
          }
          
          // If obstacle passes player without collision
          if (prev === 0) {
            return 10;
          }
          
          return prev - 1;
        });
      }
    }, 200);

    return () => clearInterval(gameLoop);
  }, [position, gameOver]);

  return (
    <div className="terminal">
      <div className="game">
        <div className="player" style={{ bottom: `${position * 20}px` }}>■</div>
        <div className="obstacle-small" style={{ left: `${obstacle * 10}px` }}>▪</div>
      </div>
      {gameOver && <div className="game-over">Presioná "espacio" para reiniciar o "q" para salir</div>}
    </div>
  );
};