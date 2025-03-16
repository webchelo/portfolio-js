import { useState, useEffect } from "react";
import './DinoClicker.css'

export const DinoClicker = () => {
    const [counter, setCounter] = useState(0);
    const [clickPower, setClickPower] = useState(1);
    const [cps, setCps] = useState(0);
    const [cpsPower, setCpsPower] = useState(1);
    const [keyPressed, setKeyPressed] = useState({}); 
    
    useEffect(() => {
        if (cps > 0) {
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + cpsPower);
            }, 1000);

            return () => clearInterval(interval); 
        }
    }, [cps, cpsPower]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!keyPressed[event.key]) {
                setKeyPressed((prev) => ({ ...prev, [event.key]: true }));
                switch (event.key) {
                    case "c": 
                    case " ": 
                        handleAdd();
                        break;
                    case "u":
                        handleUpgradeClickPower();
                        break;
                    case "a": 
                        handleActivateCps();
                        break;
                    case "s": 
                        handleUpgradeCpsPower();
                        break;
                    default:
                        break;
                }
            }
        };

        const handleKeyUp = (event) => {
            setKeyPressed((prev) => ({ ...prev, [event.key]: false })); 
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [counter, clickPower, cps, cpsPower, keyPressed]);

    const handleAdd = () => {
        setCounter(counter + clickPower);
    };

    const handleUpgradeClickPower = () => {
        if (counter >= 10) {
            setClickPower(clickPower + 1);
            setCounter(counter - 10);
        }
    };

    const handleActivateCps = () => {
        if (counter >= 20) {
            setCps(cps + 1);
            setCounter(counter - 20);
        }
    };

    const handleUpgradeCpsPower = () => {
        if (counter >= 50) {
            setCpsPower(cpsPower + 1);
            setCounter(counter - 50);
        }
    };

    return (
        <>
            <h2 className="title-clicker">=DinoClicker=</h2>
            <p className="counter">Dino Coins: ${counter}</p>

            <div className="stats">
                <p>Poder de Click: {clickPower}</p>
                <p>Clicks p/s: {cps} (Poder: {cpsPower})</p>
            </div>

            <button className="button-clicker" onClick={handleAdd}>
                <span className="span-clicker">(Espacio)</span>¡Click!
            </button>
            <button className="button-clicker"  onClick={handleUpgradeClickPower} disabled={counter < 10}>
                <span className="span-clicker">(U)</span>  Mejorar Poder de Click (Costo: $10)
            </button>
            <button className="button-clicker"  onClick={handleActivateCps} disabled={counter < 20}>
                <span className="span-clicker">(A)</span> Activar Dino Coins p/s  (Costo: $20)
            </button>
            <button className="button-clicker"  onClick={handleUpgradeCpsPower} disabled={counter < 50}>
                <span className="span-clicker">(S)</span>Mejorar Dino Coins p/s  (Costo: $50)
            </button>
            <p className="quit"><span className="span-clicker">(Q)</span> Salir</p>
        </>
    );
};