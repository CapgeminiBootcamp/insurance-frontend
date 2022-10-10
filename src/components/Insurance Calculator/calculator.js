import React from 'react'

function calculator() {
  return (
    <div className='main'>
            <div className="container">
                <div className="title">Term Calculator</div>
                <div className="content">
                    <form>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Age</span>
                                <input  type="number" placeholder="Age" />
                            </div>
                            <div className="input-box">
                                <span className="details">Annual Income</span>
                                <input  type="number" placeholder="Annual Income" />
                            </div>
                        </div>
                        <div className="input-box">
                            <span className="details" >Family members</span>
                            <input  type="text" className='form-2' placeholder="Members" />
                        </div>
                        <div className="input-box">
                            <span className="details">Gender</span>
                            <input type="text" className='form-2' placeholder="gender" />
                        </div>
                        <div className="button">
                            <input type="Calculate" value="Calculate" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default calculator