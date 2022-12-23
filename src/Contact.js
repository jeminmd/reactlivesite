import React, { useState } from 'react';



function Contact() {


  const [data, setData] = useState({
    fname: "",
    lname: "",
    phoneno: "",
    address: "",
    city: "",    
  });


  const inputEvent = (event) =>{
      const {name, value} = event.target;
      setData((preVal)=>{
        return {
          ...preVal,
          [name] : value,
      }
      })
  }

  const  htmlFormSubmit =  (e)=>{
    e.preventDefault();
        alert(
          `My First Name is  ${data.fname}, My Last Name is  ${data.lname}, my Address is : ${data.address}, Myb City is  ${data.city}`
        )
  }
  return (
    <>

      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-xl-8">
            <form className="row g-3" onSubmit={htmlFormSubmit}>
              <div className="col-md-6">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text"
                 className="form-control"
                 placeholder='Enter First Name'
                name="fname"
                 value={data.fname}
                 onChange={inputEvent}
                  />
              </div>
              <div className="col-md-6">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text"
                 className="form-control"
                 placeholder='Enter Last Name'
                 name="lname"
                 value={data.lname}
                 onChange={inputEvent}
                  />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="text"
                 className="form-control"
                 placeholder='Enter Phone Number'
                 name="phoneno"
                 value={data.phoneno}
                 onChange={inputEvent}
                  />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label h-34">Address</label>
                <textarea type="text"
                 className="form-control"
                  placeholder="ENter Address"
                  rows="3"
                 name="address"
                 value={data.address}
                 onChange={inputEvent}
                  />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text"
                 className="form-control"
                 placeholder='Enter City'
                 name="city"
                 value={data.city}
                 onChange={inputEvent}
                  />
              </div>            
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit htmlForm</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default Contact;
