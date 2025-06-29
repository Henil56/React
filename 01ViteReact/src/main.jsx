import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>Custom APP !!</h1>
    </div>
  )
}
// const ReactElement={
//     type:"a",
//     props:{
//         href:"https://www.google.com",
//         target:"_blank"
//     },
//     children:"Click me to go to Google"
// }
const anotherReactElement=(
  <a href="https://www.google.com" target="_blank">Click me to go to Google</a>
)

const anotherUser = 'chai aur code';
const reactElement =React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click me to go to Google',
  anotherUser
)


createRoot(document.getElementById('root')).render(
  reactElement
)
