import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('test@domain.com');
  const [pwd, setPwd] = useState('5t73d$66t');
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  const data = {
    username: email,
    password: pwd
  };  

  useEffect(() => {
    axios.get(`https://paul.blueboxonline.com/api/v1/users/session`)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
  }, [user]);

  const signIn = (e) => {
    e.preventDefault();
    axios.post(`https://paul.blueboxonline.com/api/v1/users/login`, data)
      .then(res => {
        console.log(res);
        setUser(res.data.user);
        // getTable();
      }).catch(err => {
        console.log(err);
        handleShow();
      })
  }

  const getTable = () => {
    axios.get(`https://paul.blueboxonline.com/api/v1/app/tabledata`)
      .then(res => {
        console.log(res);
      })
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="mt-2 px-3">
      {user === null ?
      <>
        <h3>
          Sign In
        </h3>

        <div className='d-flex login-pad justify-content-center'>
          <Form onSubmit={signIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" value={pwd}
              onChange={(e) => setPwd(e.target.value)} />
            </Form.Group>

            <Button className='btn-bg' type='submit'>
              Sign In
            </Button>
          </Form>
        </div>
      </>
      :
      <>
        <h3>
          Home
        </h3>
      </>
      }      

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Error - Sign In Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className='text-center'>
            Incorrect email and/or password.
          </h5>
          
          <div className='d-flex mt-3'>
            <Button className='m-auto' variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
          </div>          
        </Modal.Body>
      </Modal>     
    </div>    
  )
}