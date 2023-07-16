import { useEffect, useState } from "react"
import Color from "../components/Color"
import '../assets/styles/color-project.css'

function ColorProject() {

    const [colors, setColors] = useState(Array<string>())

    useEffect(() => {
        let newColors = ['#ffffff', '#00ff00', '#ff0000', '#0ff000']

        setColors(newColors)
    }, [])


    return (
        <>
            <div className="page-holder">
                <div className="container">
                    <div className="input-color-holder">
                        <span>#000000</span>
                        <input type="color" />
                    </div>

                    <div className="colors-container">
                        {colors.map((color, index) => <Color key={index} colorValue={color} />)}
                    </div>
                </div>
            </div>


        </>
    )
}


export default ColorProject
