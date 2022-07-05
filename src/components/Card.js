import React from "react";
import { Modal, Button , Toast } from 'react-bootstrap'
import {useState} from "react"
import { Link, NavLink } from 'react-router-dom';

function Card({bookObj}){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div>
            <div className='container '>
      <div className='card border-0 rounded bg-light' >
        <div className='mx-auto'>
          <img className='img-responsive w-100' src={bookObj.image} alt="" /></div>
        <div className='card-footer' style={{ color: "" }}>
          <NavLink style={{ textDecoration: "None", color: "Black" }}  onClick={handleShow} > <h6 style={{ fontSize: "1.5vw" }}>{bookObj.authour}</h6></NavLink>
          {/* <NavLink style={{ textDecoration: "None", color: "Black" }} to=""> <h5 style={{ fontSize: "1.5vw" }} >{productObj.price}</h5> </NavLink> */}


          <Modal show={show} onHide={handleClose} className="bg-danger" >
            <Modal.Header closeButton>
              <Modal.Title>{bookObj.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='container'>
                <div className='row'>
                  <div className='col text-center'>
                    <img className='how mb-2 img' style={{ height: "15rem" }} src={bookObj.image} alt="Image Couldn't be load" />
                    <div className='text-center'>
                      <h4 >${bookObj.price}</h4>
                      <h4 >${bookObj.pages}</h4>
                    </div>
                  </div>
                  <div className='col'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt nobis recusandae, exercitationem quis harum, repellat hic fugit architecto vel sit tempora nisi at, veniam numquam neque consequatur dolore illum.</p>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
            {/* onClick={() => handle(productObj) } */}
              <Button variant="success" >
                Add to Cart 
              </Button>
              </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
        </div>

    );
}
export default Card;
