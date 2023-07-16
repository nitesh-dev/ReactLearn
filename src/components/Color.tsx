import { useState } from 'react'
import '../assets/styles/color.css'

function Color(props: { colorValue: string }) {

    const [checked, setChecked] = useState(false)

    function onClick() {

        if(checked) return
        setChecked(true)
        setTimeout(function(){
            setChecked(false)
        }, 1500)

        // adding to clipboard
        navigator.clipboard.writeText(props.colorValue)
        
    }

    return (
        <>
            <div onClick={onClick} className="color">
                <div style={{ backgroundColor: props.colorValue }}>
                    <span className={checked?'clipboard':''}>Copied!</span>
                </div>
                <span>{props.colorValue}</span>
            </div>
        </>
    )
}


export default Color
