import { useState } from 'react'
import '../assets/styles/color.css'

function toStringColor(hue: number,
    saturation: number,
    lightness: number) {

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

function Color(props: {
    colorValue: {
        hue: number,
        saturation: number,
        lightness: number
    }
}) {

    const [checked, setChecked] = useState(false)

    function onClick() {

        if (checked) return
        setChecked(true)
        setTimeout(function () {
            setChecked(false)
        }, 1500)

        // adding to clipboard
        navigator.clipboard.writeText(toStringColor(props.colorValue.hue, props.colorValue.saturation, props.colorValue.lightness))

    }

    return (
        <>
            <div onClick={onClick} className="color">
                <div style={{ backgroundColor: toStringColor(props.colorValue.hue, props.colorValue.saturation, props.colorValue.lightness) }}>
                    <span className={checked ? 'clipboard' : ''}>Copied!</span>
                </div>
                <span>{toStringColor(props.colorValue.hue, props.colorValue.saturation, props.colorValue.lightness)}</span>
            </div>
        </>
    )
}


export default Color
