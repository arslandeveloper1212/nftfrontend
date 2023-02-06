import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Style.css';
import { useNavigate } from "react-router-dom";

const Model = () => {

    const [model, SetModel] = useState({
            name: "",
            email: "",
            phone: "",
            text: ""

    });



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useNavigate();

const HandleModel = (e) =>{
    const name = e.target.name
    const value = e.target.value

    console.log(name,value);

    SetModel({...model, [name]: value});
}

const HandleModelHit = async (e) =>{
 e.preventDefault();

 const {name,email,phone, text} = model;

   
            const fetchapihit = await fetch("/registerdata",{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body:JSON.stringify({
                    name,email,phone,text
                })
            });
            const dataperfect = await fetchapihit.json();
            if(dataperfect.status === 422 || !dataperfect){
                console.log("not registered");
                window.alert("not registered");
            }else{
                console.log("registered successfully");
                history("/");
                window.alert("registered successfully")

            }
    

}



    return (
        <div>

            <Button className="custom_join" onClick={handleShow}>
                Join Discord
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Collect CryptoCurrency</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='container'>
                        <div className='row'>
                            <div className=' col-12'>
                                <form method="POST">

                                    <div class="mb-3">
                                        <label for='name'>Name</label>
                                        <input type="text" name='name' value={model.name} onChange={HandleModel} class="form-control" />
                                    </div>

                                    <div class="mb-3">
                                        <label for='email'>Email</label>
                                        <input type="text" name='email' value={model.email} onChange={HandleModel} class="form-control" />
                                    </div>

                                   
                                    <div class="mb-3">
                                    <label for='phone'>Phone</label>
                                    <input type="phone" name='phone' value={model.phone} onChange={HandleModel} class="form-control" />
                                </div>

                                <div className="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea className="form-control" name='text' value={model.text} onChange={HandleModel} id="exampleFormControlTextarea1" rows="6"></textarea>
                              </div>




                                </form>

                            </div>
                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button className='custom_join' onClick={handleClose}>
                        Close
                    </Button>
                    <Button  onClick={HandleModelHit} className='custom_join'>Submit</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Model
