import { useState } from "react";
import './MainApp.css';
function mainApp() {
    const [inputValue, setInputValue] = useState('');
    return(
        <>
         <div className='header'>
     <h1>All Your Notes Gonna Appear Here</h1>
      </div>
      <div className="app">
          
          
        
      </div>
      </>
    );
}

export default mainApp;