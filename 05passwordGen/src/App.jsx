import { useState ,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [password, setPassword] = useState('');
  
  const passRef=useRef(null)


  const passwordGenerater = useCallback(()=>{
    let pass=""
    let str="";
    if(number) str+= "0123456789";
    if(symbol) str+= "!@#$%^&*-=~`";
    if(uppercase) str+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lowercase) str+= "abcdefghijklmnopqrstuvwxyz";
    if (!uppercase && !lowercase && !number && !symbol) {
    str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-=~`";
  }

    
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,number,symbol,lowercase,uppercase,setPassword])

  const copyPassword=useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerater();
  },[length,number,symbol,lowercase,uppercase,passwordGenerater])


  
  return(
    <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg px-4 py-10 my-10 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-gray-700 text-white"
            placeholder="password"
            readOnly
            ref={passRef}
        />
        <button 
        className='bg-blue-600 hover:bg-blue-700 active:scale-95 
               text-white px-4 py-2 rounded-r-md transition duration-300 
               transform hover:scale-105 shadow-md hover:shadow-lg '
        onClick={copyPassword}
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={symbol}
              id="SymbolInput"
              onChange={() => {
                  setSymbol((prev) => !prev )
              }}
          />
          <label htmlFor="SymbolInput">Symbol</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={lowercase}
              id="lowercaseInput"
              onChange={() => {
                  setLowercase((prev) => !prev )
              }}
          />
          <label htmlFor="lowercaseInput">Lower-Case</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={uppercase}
              id="uppercaseInput"
              onChange={() => {
                  setUppercase((prev) => !prev )
              }}
          />
          <label htmlFor="uppercaseInput">Upper-Case</label>
      </div>
    </div>
    </div>
    </div>
  )
}

export default App