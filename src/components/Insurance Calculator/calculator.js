import React, { useState } from 'react'
import '../Dashboard/dashboard.css'

function Calculator() {
    var EstimateValue = 0;
    const [annualIncome, setAnnualIncome] = useState("");
    const [age, setAge] = useState("");
    const [familyMembers, setFamilyMembers] = useState("");
    function calculate() {
             

        if(annualIncome > 100000 && annualIncome <= 500000)		
			EstimateValue = (annualIncome * 15);			
		else if(annualIncome > 500000 && annualIncome <= 1000000) 			
			EstimateValue = (annualIncome * 18);						
		else if(annualIncome> 1000000) 			
			EstimateValue = annualIncome * 20;				
		if(EstimateValue==1)
			alert("You can't ");


		document.getElementById('newId').innerHTML = "Your final Estimated Value is" +" " + EstimateValue;
        }
    


  return (
    <div className='main'>
            <div className="container">
                <center><div className="title">Term Calculator</div></center>
                <div className="content">
                    <form className="was-validated">
                        <div className="user-details">
                            <div className="input-box">
                            <label className="form-label">Age</label>
                                <input  type="number" placeholder="Age" value={age} id='age' onChange={e=>setAge(e.target.value)} required />
                                {/* <div className="invalid-feedback" id='ageInvalid'></div> */}
                                <div className="invalid-feedback"  id='ageInvalid'>Please fill out this field.</div>
                            </div>
                            <div className="input-box">
                            <label  className="form-label">Annual Income</label>
                                <input  type="number" placeholder="Annual Income" value={annualIncome} id='annualIncome' onChange={e=>setAnnualIncome(e.target.value)} required/>
                                
                                <div className="invalid-feedback" id='incomeInvalid' >Please fill out this field.</div>
                            </div>
                        </div>
                        <div className="input-box">
                        <label className="form-label">Family Members</label>
                            <input  type="text" className='form-2' placeholder="Members" value={familyMembers} id='familyMembers' onChange={e=>setFamilyMembers(e.target.value)} required/>
                            
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        </form>

                        {/* ---------------------------------these are radio buttons------------------------------ */}
                        
                        <div>
                            <input type="radio" value="Male" name="gender" /> Male
                            <input type="radio" value="Female" name="gender" /> Female
                            <input type="radio" value="Other" name="gender" /> Other
                        </div>

                        <div className="button">
                            <input className='calculate-btn' type="button" value="Calculate" onClick={calculate} />
                        </div>
                        
                    <div className='new-one'>
                        <p  id='newId' ></p>
                    </div>
                </div>
              
            </div>
        </div>
  )
}

export default Calculator