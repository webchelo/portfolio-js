import { useEffect, useState } from "react"
import { BashInput } from "./BashInput"
import './JurassicBash.css'
import { Rexrun } from "./games/Rexrun"
import { DinoClicker } from "./games/DinoClicker"

export const JurassicBash = () => {

    const [output, setOutput] = useState([{id: 1, message: 'DinoShell iniciada, podés comenzar con el comando "help"...', command: ''}])
    const [currentDirectory, setCurrentDirectory] = useState(2)

    const [isRexrunMounted, setIsRexrunMounted] = useState(false)
    const [isDinoClickerMounted, setIsDinoClickerMounted] = useState(false)

    const directories = ['home', 'dino', 'portfolio', 'juegos']

    const portfolio = ['welcome.txt', 'historia.txt']

    const juegos = ['rexrun.exe', 'dinoclicker.exe']    

    const handleSubmitCommand = ({ id, command }) => {
        const commandTrim = command.trim();
        let cd = "";
        if (commandTrim.substring(0, 2) === "cd") {
            cd = commandTrim.substring(3);
        }
        let cat = "";
        if (commandTrim.substring(0, 3) === "cat") {
            cat = commandTrim.substring(4);
        }
        let position = directories[currentDirectory];
        let path = '';

        switch (true) {
            case commandTrim === 'help':
                return setOutput([{ id, command: commandTrim, message: 'Comandos: ls (listar), cd [dirección] (cambiar de directorio), pwd (ver directorio actual), cat [archivo] (leer), archivo.exe (ejecutar), clear (limpiar terminal)' }]);
            case commandTrim === 'ls':
                if (currentDirectory === 0) return setOutput([ { id, command: commandTrim, message: `/${directories[currentDirectory + 1]}` }]);
                if (currentDirectory === 1) return setOutput([ { id, command: commandTrim, message: `/${directories[currentDirectory + 1]}` }]);
                if (currentDirectory === 2) return setOutput([ { id, command: commandTrim, message: `/${directories[currentDirectory + 1]} ${portfolio.map((archive) => archive)}` }]);
                if (currentDirectory === 3) return setOutput([ { id, command: commandTrim, message: `${juegos.map((juego) => juego)}` }]);
                break 
            case commandTrim.startsWith('cd'):
                if (cd === "juegos" || cd === "/juegos") {
                    if (position === "portfolio") {
                        setCurrentDirectory(3);
                        return setOutput([{ id, command: commandTrim, message: `` }]);
                    }
                }
                if (cd === "portfolio" || cd === "/portfolio") {
                    if (position === "dino") {
                        setCurrentDirectory(2);
                        return setOutput([{ id, command: commandTrim, message: `` }]);
                    }
                }
                if (cd === "dino" || cd === "/dino") {
                    if (position === "home") {
                        setCurrentDirectory(1);
                        return setOutput([{ id, command: commandTrim, message: `` }]);
                    }
                }
                if (cd === "..") {
                    if (position === "juegos") {
                        setCurrentDirectory(2);
                        return setOutput([{ id, command: commandTrim, message: `` }]);
                    }
                    if (position === "portfolio") {
                        setCurrentDirectory(1);
                        return setOutput([{ id, command: commandTrim, message: `` }]);
                    }
                    if (position === "dino") {
                        setCurrentDirectory(0);
                        return setOutput([{ id, command: commandTrim, message: `` }]);
                    }
                    if (position === "home") {
                        return setOutput([{ id, command: commandTrim, message: `Ya estás en el directorio raíz.` }]);
                    }
                }
                break;
                case commandTrim.startsWith('cat'):
                    if (cat === "welcome" || cat === "welcome.txt") {
                        if (position === "portfolio") {
                            return setOutput([{ id, command: commandTrim, message: `¡Bienvenido al emulador de terminal DinoShell, funcionando en JurassicBash! Entrá a la carpeta juegos y a divertirse...` }]);
                        }
                    }
                    if (cat === "historia" || cat === "historia.txt") {
                        if (position === "portfolio") {
                            return setOutput([{ id, command: commandTrim, message: `Siempre me gustó el diseño, aunque siempre trabajé de barista. En la escuela de diseño ví algo de programación y mientras trabajaba mi mente decía: "programar... aprender... javascript...". Entonces decidí darle un giro a mi vida y dedicarme tiempo completo a hacer lo que me apasiona :P ...` }]);
                        }
                    }
                    break;
                case commandTrim === 'pwd':
                    for (let i = 0; i <= currentDirectory; i++) {
                        path += `/${directories[i]}`;
                    }
                    return setOutput([{ id, command: commandTrim, message: path }]);
                case commandTrim === 'rexrun.exe':
                    setOutput([]);
                    setIsRexrunMounted(true)
                    return
                case commandTrim === 'dinoclicker.exe':
                    setOutput([]);
                    setIsDinoClickerMounted(true)
                    return
                case commandTrim === 'clear':
                    return setOutput([]);
            default:
                return setOutput([{ id, command: commandTrim, message: `Comando no reconocido: ${commandTrim}` }]);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'q') {
            setIsRexrunMounted(false);
            setIsDinoClickerMounted(false);
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        
        };
      }, []);
    

      return (
        <div className="computer-screen">
            {output.map(({ id, command, message }) => (
                <p key={id}>
                    <span>${command}</span> <br />{message}
                </p>
            ))}
            {!isRexrunMounted && !isDinoClickerMounted && (
                <BashInput handleSubmitCommand={handleSubmitCommand} />
            )}
            {isRexrunMounted && <Rexrun />}
            {isDinoClickerMounted && <DinoClicker />}
        </div>
    );
}