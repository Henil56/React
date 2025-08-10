import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Henil",
    age: 19,
    city: "Surat"
  }
  let myArr = [1, 2, 3, 4, 5];
  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Henil Kukadiya" />
      <Card username="Henil" btnText="visit me"/>
    </>
  )
}

export default App
