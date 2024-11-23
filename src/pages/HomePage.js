// src/pages/HomePage.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import hatish from '../hatish.jpeg';
import './pages.css';
import carousel1 from '../WebDeveloper.png';
import skills from '../skills.png';
import Aboutme from '../Aboutme.png';


import Myprojects from './Myprojects';


function HomePage() {
  return(
    <div className='container-fluid'>
        {/* carousel */}
        <Carousel>
      <Carousel.Item>
        <Image src={carousel1} fluid></Image>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={skills} fluid></Image>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={Aboutme} fluid></Image>
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* another element */}
    <h1 className='text-center my-5' id='about-head'>ABOUT US</h1>
    <div className='row' id='about'>
        <div className='col-4 text-center my-3'>
            <img src={hatish}></img>
            <div className='my-4'>
            <strong>Hatishwar Singh</strong> <br></br>
            <small>(MERN Stack Developer)</small>
            </div>
        </div>
        <div className='col-8'>
            <p>
            From the solid structures of civil engineering to the dynamic world of IT, my journey has been nothing short of a phoenix rising from the ashes. Once entrenched in the precise world of construction, a series of health challenges forced me to reconsider my path. It was in this moment of upheaval that I discovered my true calling in the MERN stack—an intricate blend of MongoDB, Express.js, React, and Node.js that mirrors the resilience and adaptability I had to cultivate.
            </p>
            <p>
            Embracing the unknown with a heart full of hope, I transitioned from building bridges to building dreams. Each line of code I write is a testament to the strength I’ve found through adversity. Like the mythical phoenix, I’ve emerged from the trials of illness and uncertainty, transformed and revitalized. Now, with every project I undertake, I channel the same fiery passion that fuels my new career, committed to creating impactful solutions and innovative web applications.
            </p>
            <p>
            My story is one of reinvention and resilience—proof that even when life takes unexpected turns, it’s possible to rise again, stronger and more determined than before.
            </p>
        </div>
    </div>

    {/* My Skills */}
    <div className='my-5' id='skills'>
      {/* Hard skills */}
      <h1>My Skills</h1>
      <div className='row my-5'>
        <div className='col-12'>
          <h3>Hard Skills</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-2 offset-1 skill'>HTML</div>
        <div className='col-2 skill'>CSS</div>
        <div className='col-2 skill'>JavaScript</div>
        <div className='col-2 skill'>Bootstrap</div>
        <div className='col-2 skill'>MongoDB</div>
        
      </div>
      <div className='row'>
      <div className='col-2 offset-1 skill'>ReactJS</div>
        <div className='col-2 skill'>ExpressJS</div>
        <div className='col-2 skill'>NodeJS</div>
        <div className='col-2 skill'>Canva</div>
        <div className='col-2 skill'>Word</div>
        
      </div>

      <div className='row'>
      <div className='col-2 offset-1 skill'>Spreadsheet</div>
      <div className='col-2 skill'>Presentation</div>
      </div>

    {/* Soft skills */}
    <div className='row my-5'>
        <div className='col-12'>
          <h3>Soft Skills</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-3 offset-1 skill'>Communication</div>
        <div className='col-3 skill'>Self Learner</div>
        <div className='col-3 skill'>Time management</div>

      </div>

      <div className='row'>
        <div className='col-3 offset-1 skill'>Team Work</div>
        <div className='col-3 skill'>Leadership</div>
        <div className='col-3 skill'>Decipline</div>
      </div>
      
      <Button className='my-5' variant="outline-warning">Learn More</Button>

    </div>
    {/* Skills section ends */}


    <Myprojects></Myprojects>
    </div>
  )
}

export default HomePage;
