

import React, { useState,useRef } from 'react';
import './Form1.css'; 
 
const Form2 = () => {
  const [isRepresented, setIsRepresented] = useState(false);

  const handleButtonClick = () => {
    setIsRepresented(true);
  };
 
 

  const canvasRef = useRef(null);

  const handleMouseDown = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    canvas.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseMove = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    context.stroke();
  };

  const handleMouseUp = () => {
    const canvas = canvasRef.current;
    canvas.removeEventListener('mousemove', handleMouseMove);
  };

  return (
    <div classNames="form-container">
      <label className="centered"><h1><strong>Signature of student  :  </strong></h1></label>
      <canvas
        ref={canvasRef}
        classNameName="signature-canvas"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></canvas>
       <div>
       <form className="form">
      {isRepresented ? (
        <div>
         
          <h1 className="centered">your admission was confirmed</h1>
          {/* Your representation component or content here */}
        </div>
      ) : (
        <button onClick={handleButtonClick} className="pad">submit</button>
      )}
    </form></div>
    </div>
  )}

    
  
  export default Form2;