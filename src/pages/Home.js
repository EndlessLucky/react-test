import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('here');

    axios.get(`https://paul.blueboxonline.com/api/v1/app/settings`)
      .then(res => {
        console.log(res);
      })
  }, []); 

  return(
    <div className="mt-2 px-3">
      <h3>
        Sign In
      </h3>

      <div className='d-flex login-pad justify-content-center'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button className='btn-bg' type="submit">
            Sign In
          </Button>
        </Form>
      </div>      
    </div>    
  )
}