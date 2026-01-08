import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {
  const [amount,setAmount]=useState(1)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState("0")

  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="absolute inset-0 overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover blur-sm pointer-events-none"
  >
    <source src="/background.mp4" type="video/mp4" />
  </video>
</div>


        
        <div className="relative w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h1 className="text-3xl font-bold text-center text-white drop-shadow-md mb-6">
            Currency Converter
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onAmountChange={(amount)=>setAmount(amount)}
                onCurrencyChanage={(currency)=>setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
                 border-white bg-blue-600 text-white px-2 py-0.5
                 rounded-lg hover:bg-blue-700 active:scale-95 rounded-r-xl 
                 transition duration-300 transform hover:scale-105 
                 shadow-md hover:shadow-lg"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChanage={(currency)=>setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 rounded-lg 
              hover:bg-blue-700 active:scale-95 
              text-white px-4 py-2 rounded-r-xl transition duration-300 
              transform hover:scale-105 shadow-md hover:shadow-lg ">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );

}

export default App
