import React, { useState } from 'react'
import './Style.css'

const FAQ = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    text: ""
  });


  const HandleInput = (e) =>{
    const name = e.target.name
    const value = e.target.value

    console.log(name,value);

    setData({...data, [name]: value});
  }

  const HandleSubmit = async (e) =>{
      e.preventDefault();
      
      const {name,email,phone,text}= data;
      const res = await fetch("/registerdata",{
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body:JSON.stringify({
          name,email,phone,text
        })
      });

      const datahit = await res.json();
      if(datahit.status=== 422 || !datahit){
        console.log("not registered");
        alert("Invalid credentials");
      }else{
        console.log("registered successfully");
        alert("Registration Successfully");
      }
  }


 

  return (
    <div className='contact_all'>
      <div className='contact_detail text-center text-white'>Contact Us</div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106389.82365151618!2d72.94810802770924!3d33.56163792705267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1675549735298!5m2!1sen!2s"
      
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
       >
      
      </iframe>

      <div className='container'>
        <div className='row d-flex justify-content-center mt-5'>
          <div className='col-md-6 col-lg-6 col-12'>
            <form action='POST' onClick={HandleSubmit}>
            <div className="mb-3">
              <label for="name" className="form-label text-white">Name</label>
              <input type="text" name='name' value={data.name} onChange={HandleInput} className="form-control" placeholder="Your Name" />
            </div>

            <div className="mb-3">
              <label for="email" className="form-label text-white">Email </label>
              <input type="email" name='email' value={data.email} onChange={HandleInput} className="form-control" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
              <label for="phone" className="form-label text-white">Phone</label>
              <input type="phone" name='phone' value={data.phone} onChange={HandleInput} className="form-control" placeholder="Your Name" />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label text-white">Message</label>
              <textarea className="form-control" name='text' value={data.text} onChange={HandleInput} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div className='mb-3 pt-3'>
              <button type="button" className="btn_outline">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
