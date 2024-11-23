// src/pages/ContactPage.js
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './pages.css';

function ContactPage() {
  return(
    <div>
      <div className='row my-5' id='contact'>
      {/* contact section */}
      <div className='col-12'>
          <h1>Contact Me</h1>
          <ul>
            <li><strong>Name:</strong> Hatishwar Singh </li>
            <li><strong>Current City: </strong> Jammu City</li>
            <li><strong>Email:</strong> hatishrandhwal0907@gmail.com </li>
            <li><strong>Phone:</strong> --- </li>
          </ul>
      </div>
    </div>

    {/* Connect with me section */}
    <div className='row my-5' id='connect'>
      <div className='col-12'>
        <h1>Connect with Me</h1>
        <ul>
          <li>linkedin</li>
          <li>Github</li>
        </ul>
      </div>
    </div>

    {/* Contact form */}
    <div className='row'>
      <div className='col-6'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d214793.54086698825!2d74.8486656!3d32.735232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727341638886!5m2!1sen!2sin" width="100%" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='col-4 offset-1'>
        

        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder='Enter your message'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

      <div className="d-grid gap-2">
      <Button variant="outline-primary" size="lg">
        Submit
      </Button>
    </div>
      </Form.Group>
    </Form>
      </div>
    </div>
    </div>
  );
}

export default ContactPage;
