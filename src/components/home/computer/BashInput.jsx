import { useState } from "react"
import './BashInput.css'

export const BashInput = ({ handleSubmitCommand }) => {
    
    const [newValue, setNewValue] = useState({
        id: Date.now(),
        command: '',
    })

    const handleOnChange = ( event ) => {
        setNewValue({
            ...newValue,
            command: event.target.value.toLowerCase(),
        })
    }

    const handleOnSubmit = ( event ) => {
        event.preventDefault()
        if ( newValue.command.trim() === "" ) return

        handleSubmitCommand( newValue )
        setNewValue({
            id: Date.now(),
            command: '',
        })
    }

    return (
        <form onSubmit={ handleOnSubmit }>
            <span>$</span>
            <input
                type="text"
                value={ newValue.command }
                onChange={ handleOnChange }
            />
        </form>
    )
}