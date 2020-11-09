import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function   tim() {
   
   const element = (
     
     <div class="clock">
       <h1 class="time">{ new Date().toLocaleTimeString() }</h1>
     </div>
     
   );
   
    
   ReactDOM.render(
     element,
     document.getElementById('root')
   );
   
 }
   setInterval(tim, 500);