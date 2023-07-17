import React, { useState } from 'react';
import './Form1.css'




// Import any additional modules or components as needed

const Form1 = ({ onNext }) => {
    const [firstname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);

  const handleForm1Click = () => {
    setShowForm2(true);
    setShowForm3(false);
  };

  const handleForm2Click = () => {
    setShowForm2(false);
    setShowForm3(true);
  };


  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,});
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setCheckboxes({ ...checkboxes, [name]: checked });
    };
    const handleNext = () => {
      // Perform validation or other logic here
      onNext();
    };
  
    


  return (
  
    <div className='form-container'>
        <div>
            <label>First Name :  </label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="FirstName" style={{marginRight: '20px'}}></input>
            <label>middle name:</label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="MiddleName" style={{marginRight: '20px'}}></input>
            <label>Last Name   :  </label>
            <input type="text" value={firstname} onChange={(e)=>setName(e.target.value)} placeholder="LastName"></input><br></br><br></br>
            <label>mobile   no        : </label>
            <input type="text" value={firstname} onChange={(e)=>setName(e.target.value)} placeholder="### ### ####"></input><br></br><br></br>
            <label> Email    add     : </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br></br><br></br>

        </div>
        <div className="container">
            <h1 className="centered"> parent/guardian details</h1><br></br><hr></hr>
            <br></br></div>
            <label>Father Name :  </label>
            
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="FirstName" style={{marginRight: '20px'}}></input>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="LastName" style={{marginRight: '20px'}}></input><br></br><br></br>
            <label>Mother Name :  </label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="FirstName" style={{marginRight: '20px'}}></input>
            
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="LastName" style={{marginRight: '20px'}}></input><br></br><br></br>
            <label>Father occupation :  </label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="occupation" style={{marginRight: '20px',width:'300px', height:'30px'}}></input><br></br><br></br>
            <label>Date Of Birth :  </label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="dd/mm/yyyy" style={{marginRight: '20px',width:'80px', height:'30px'}}></input><br></br><br></br>
            <label>father phone no :  </label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="### ### ####" style={{marginRight: '20px'}}></input><br></br><br></br>
            <label>mother phone no :  </label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="### ### ####" style={{marginRight: '20px'}}></input><br></br><br></br>
            <div>
              <label className='centered'>which domain you choose</label><br></br><br></br>
      <button onClick={handleForm1Click} className='padded'>technology</button>
      <button onClick={handleForm2Click} className='padded'>medicine</button>

      {showForm2 && (
        <form>
          <h2 className= 'centered'>Technology</h2><hr></hr>
          <div>
            <label className='centered'>which domain did you need</label>
          <br></br><br></br><label>
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        Computer science
      </label>
      <br></br><br></br>
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        Information Technology
      </label><br></br><br></br>
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        Artificial Intelligence
      </label><br></br><br></br>
      <label>mark scored in 10th :  </label>
            <input type="number" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="###.##" style={{marginRight: '20px',width:'50px', height:'20px'}}></input><br></br><br></br>
            <label>mark scored in 10th :  </label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="###.##" style={{marginRight: '20px',width:'50px', height:'20px'}}></input><br></br><br></br>
            <label>cutt off marks :  </label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="###.##" style={{marginRight: '20px',width:'50px', height:'20px'}}></input><br></br><br></br>
      </div>
          
        </form>
      )}
      <div>

      </div>

      {showForm3 && (
        <form>
          <h2 className="centered">Medicine</h2>
          <div>
            <label className='centered'>which domain did you need</label>
          <br></br><br></br><label>
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkboxes.checkbox1}
          onChange={handleCheckboxChange}
        />
        Nursing
      </label>
      <br></br><br></br>
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkboxes.checkbox2}
          onChange={handleCheckboxChange}
        />
        B.Pharm
      </label><br></br><br></br>
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkboxes.checkbox3}
          onChange={handleCheckboxChange}
        />
        D.Pharm
      </label><br></br><br></br>
      <label>mark scored in 10th :  </label>
            <input type="number" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="###.##" style={{marginRight: '20px',width:'50px', height:'20px'}}></input><br></br><br></br>
            <label>mark scored in 10th :  </label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="###.##" style={{marginRight: '20px',width:'50px', height:'20px'}}></input><br></br><br></br>
            <label>cutt off marks :  </label>
            <input type="text" value={firstname} onChange={(e)=> setName(e.target.value)} placeholder="###.##" style={{marginRight: '20px',width:'50px', height:'20px'}}></input><br></br><br></br>
      </div>
          
        </form>
    

      

        
      )}
      </div>
      <br></br><br></br>
      <label>Address  :</label>
      <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" style={{width:'400px', height:'50px'}} /><br></br><br></br>
      <div>
       
<form classNameName="form">

  <button type="button" onClick={handleNext} className="pad">Next</button>
</form>
</div>
                
        
    
   
    </div>
  );
};
export default Form1;