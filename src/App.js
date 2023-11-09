import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {useThemeHook} from "./GlobalComponents/ThemeProvider"
import Header from './Components/Header';

function App() {

  const [theme] = useThemeHook();
  return (
    <main className={theme? "bg-black": "bg-light-2"} style={{height: "100vh", overflowY: "auto"}}>
      <Header/>
    </main>
  )
}

export default App;
