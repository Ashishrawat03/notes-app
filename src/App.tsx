import Nav from './Components.tsx/Nav.tsx';
import Footer from './Components.tsx/Footer.tsx';
import './App.css';
import MainApp from './Components.tsx/MainApp.tsx';
import { useState } from 'react';
function App() {
   
  return (
    <>
      <Nav />
      <MainApp />
      <Footer />
    </>
  )
}
export default App;