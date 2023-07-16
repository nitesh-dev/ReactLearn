import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount((old) => old + 1)
    return () => {
      setCount((old) => old - 1)
    }
  }, [])
  

  useEffect(() => {
    console.log(count)
  }, [count])
  return (
    <>
      <h1 onClick={() => setCount((old) => old + 1)}>{count}</h1>
    </>
  )
}


export default App
