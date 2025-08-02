import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
 //let counter = 0
 const addValue = () => {
  console.log('clicked',counter);
  counter += 1;
  setCounter(counter);
 }
 const decreaseValue = () => {
  console.log('clicked',counter);
  if(counter > 0) {
  counter -= 1;
  setCounter(counter);
  }else{
    console.log('counter cannot be less than 0');
  alert('counter cannot be less than 0');
  counter = 0;
  setCounter(counter);
  }
 }
  return (
    <>
      <h1>Hello , Henil</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value{counter}</button>
      <br />
      <button onClick={decreaseValue}>decrease value{counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}
export default App
