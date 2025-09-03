import Nav from './Components.tsx/Nav.tsx';
import Footer from './Components.tsx/Footer.tsx';
import './App.css';
import { useState } from 'react';
function App() {
   const [inputValue, setInputValue] = useState('');
  return (
    <>
      <Nav />
      <div className='header'>
     <h1>All Your Notes Gonna Appear Here</h1>
      </div>
      <div className="app">
          <input type="text" placeholder='Type your note here...' />
          <button className='btn' onClick={()=>{ 
            let input = (document.querySelector('input') as HTMLInputElement).value;
            setInputValue(input);

          }}>Add Note</button>
          <p>{inputValue}</p>
          
        
      </div>
      <Footer />
    </>
  )
}
export default App;