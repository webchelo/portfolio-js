import { JurassicBash } from './JurassicBash'
import './Computer.css'

export const Computer = () => {
  return (
    <div className='container-computer'>
    <div className="computer">
    <div className="monitor">
      <div className="screen">
        <JurassicBash />
        <div className="scanline"></div>
        <div className="terminal-text">
        </div>
      </div>
    </div>
    <div className="base"><div className='light'></div></div>
    <div className="keyboard">
      <div className="keys">
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
        <div className="key"></div>
      </div>
    </div>
  </div>
    </div>
  )
}
