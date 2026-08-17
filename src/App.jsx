import React, { createContext, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Routing from "./Routing";

export const store = createContext();
function App() {
  const [token, setToken] = useState("");
  return (
    <store.Provider value={[token, setToken]}>
      <Routing />
    </store.Provider>
  )
}

export default App
