import { useEffect, useState } from "react"
import Color from "../components/Color"
import '../assets/styles/color-project.css'


interface HSL {
  hue: number,
  saturation: number,
  lightness: number
}

function hexToHSL(H: string) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length === 4) {
    r = parseInt("0x" + H[1] + H[1]);
    g = parseInt("0x" + H[2] + H[2]);
    b = parseInt("0x" + H[3] + H[3]);
  } else if (H.length === 7) {
    r = parseInt("0x" + H[1] + H[2]);
    g = parseInt("0x" + H[3] + H[4]);
    b = parseInt("0x" + H[5] + H[6]);
  }

  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0)
    h = 0;
  else if (cmax === r)
    h = ((g - b) / delta) % 6;
  else if (cmax === g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {
    hue: Math.round(h), saturation: Math.round(s), lightness: Math.round(l)
  }
}



const colorPickOffset = 20
const colorIndex = [{ x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: -1 }, { x: 0, y: 1 }]

function find8Colors(hex: string) {
  const hls = hexToHSL(hex)
  const colors = Array<HSL>()

  // finding colors
  colorIndex.forEach(index => {
    let x = index.x * colorPickOffset + hls.saturation
    let y = index.y * colorPickOffset + hls.lightness

    // filter out of range
    if (x < 0 || x > 100) x = index.x * colorPickOffset * -2 + hls.saturation
    if (y < 0 || y > 100) y = index.y * colorPickOffset * -2 + hls.lightness

    colors.push({
      hue: hls.hue,
      saturation: x,
      lightness: y
    })
  });

  return colors
  

}



function ColorProject() {

  const [selectedColor, setSelectedColor] = useState('#000000')
  const [colors, setColors] = useState(Array<HSL>())

  useEffect(() => {
    let newColors = find8Colors(selectedColor)

    setColors(newColors)
  }, [colors])

  function onSelectedColorChange(event: any) {
    setSelectedColor(event.target.value)
  }


  return (
    <>
      <div className="page-holder">
        <div className="container">
          <div className="input-color-holder">
            <span>{selectedColor}</span>
            <input value={selectedColor} onChange={onSelectedColorChange} type="color" />
            <div style={{ backgroundColor: selectedColor }}></div>
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
