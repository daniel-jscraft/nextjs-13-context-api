'use client'
import { useThemeContext } from '../Context/theme'
import Link from 'next/link'

export default function Second() {
  const { color, setColor} = useThemeContext();

  return (<>
    <h1 style={{'color': color}}>Second page </h1>
    <p>Current color: {color}</p>
    <button onClick={()=> setColor('green')}>Set color to green</button>
    <p><Link href="/">Goto main page</Link></p>
  </>)
}
