import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "";

    if (number) str += "0123456789";
    if (symbol) str += "!@#$%^&*-=~`";
    if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) str += "abcdefghijklmnopqrstuvwxyz";

    if (!str) {
      str =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*-=~`";
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, symbol, lowercase, uppercase]);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerater();
  }, [passwordGenerater]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs scale-110"
        style={{ backgroundImage: "url('/background.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg px-4 py-10 bg-gray-800 text-orange-500">
          <h1 className="text-white text-center text-xl mb-4">
            Password Generator
          </h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-2 px-3 bg-gray-700 text-white"
              placeholder="password"
              readOnly
              ref={passRef}
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-4 py-2 transition"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>

          <div className="flex text-sm gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={number}
                onChange={() => setNumber((p) => !p)}
              />
              <label>Numbers</label>
            </div>

            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={symbol}
                onChange={() => setSymbol((p) => !p)}
              />
              <label>Symbols</label>
            </div>

            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={lowercase}
                onChange={() => setLowercase((p) => !p)}
              />
              <label>Lowercase</label>
            </div>

            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={uppercase}
                onChange={() => setUppercase((p) => !p)}
              />
              <label>Uppercase</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
