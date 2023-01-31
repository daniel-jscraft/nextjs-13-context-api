'use client'
import { useThemeContext } from './Context/theme'
import Link from 'next/link'

export default function Main() {
  const { color, setColor} = useThemeContext();

  return (<>
    <h1 style={{'color': color}}>Main page </h1>
    <p>Current color: {color}</p>
    <button onClick={()=> setColor('blue')}>Set color to blue</button>
    <p><Link href="second">Goto second page</Link></p>
  </>)
}
