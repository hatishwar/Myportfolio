// src/pages/AboutPage.js
import React from 'react';
import mypic from '../me.jpeg';

function AboutPage() {
  return(
    <div className='container-fluid' id='aboutpage'>
      {/* About Me sections */}
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-center my-5 text-uppercase'>About Me</h1>
        </div>
      </div>
      <div className='row' id='aboutpage_data'>
        <div className='col-6'>
          <p>From the solid structures of civil engineering to the dynamic realm of IT, my journey has been nothing short of a phoenix rising from the ashes. Initially rooted in the precision and rigor of construction, life took an unexpected turn when health challenges compelled me to reconsider my path. In that period of upheaval, I discovered my true passion: the MERN stack—a dynamic combination of MongoDB, Express.js, React, and Node.js. This technology suite not only captivated my mind but also mirrored the resilience and adaptability I had to foster within myself.</p>
          <p>
          Embracing the unknown with hope, I transitioned from building physical bridges to crafting digital solutions. Every line of code I write symbolizes the strength and perseverance I’ve cultivated through adversity. Much like the mythical phoenix, I emerged from the trials of illness and uncertainty, transformed and revitalized. With each project, I bring the same fiery passion, creating innovative web applications and impactful solutions.
          </p>
          <p>Beyond coding, my life is rich with interests that keep me balanced and energized. Whether I'm playing cricket, following MotoGP, or immersing myself in the rhythms of Hindi and Punjabi music, I find joy and relaxation in my hobbies. I also maintain a habit of reading, constantly seeking to expand my knowledge and perspectives.</p>
          <p>My journey from civil engineering to becoming a MERN stack developer reflects a diverse skill set. From mastering the intricacies of structural design to excelling in word processors, spreadsheet and presentation software, and creative tools like Canva, I’ve embraced continual learning. My story is one of reinvention and resilience—proof that when life takes unexpected turns, it’s always possible to rise stronger, more determined, and ready for the next challenge.</p>
        </div>
        <div className='col-6'>
          <img src={mypic}></img>
        </div>
      </div>


      {/* Education sections */}
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-center my-5 text-uppercase'>Education</h1>
        </div>
      </div>
    <div className='row'>
    <div className='col-6 offset-3'>
      <h3>Edureka Certification</h3>
      <p>I earned my certification in MERN Stack Development from Edureka, a leading online learning platform. This program equipped me with comprehensive knowledge and hands-on experience in MongoDB, Express.js, React, and Node.js. Through practical projects and in-depth modules. The certification solidified my foundation in the MERN stack, preparing me to tackle real-world projects with confidence and expertise.</p>
      <p><strong>Skills learned:</strong></p>
      <ul>
        <li>HTML, CSS and JavaScript</li>
        <li>Bootstrap and React Bootstrap</li>
        <li>MongoDB, ExpressJS, ReactJS and NodeJS</li>
      </ul>
    </div>
    </div>

    <div className='row'>
    <div className='col-6 offset-3'>
      <h3>Vaishno College of Enginnering</h3>
      <p>I hold a BTech in Civil Engineering, where I gained a solid foundation in structural design, construction methods, and project management. My academic background equipped me with problem-solving skills and a keen attention to detail, which have been valuable as I transitioned into the world of technology. The discipline and analytical mindset from my civil engineering studies continue to support my approach to software development.</p>
      <p><strong>Skills learned:</strong></p>
      <ul>
        <li>Rivit, Stad pro</li>
        <li>3dMax</li>
        <li>AutoCAD</li>
      </ul>
    </div>
    </div>

    

    {/* My Skills */}
    <div className='my-5' id=''>
      {/* Hard skills */}
      <h1 className='text-center my-5 text-uppercase'>My Skills</h1>
      <div className='row my-5'>
        <div className='col-12'>
          <h3 className='text-center'>Hard Skills</h3>
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
          <h3 className='text-center'>Soft Skills</h3>
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
      

    </div>
    {/* Skills section ends */}


{/* Education sections */}
<div className='row'>
        <div className='col-12'>
          <h1 className='text-center my-5 text-uppercase'>Hobbies</h1>
        </div>
      </div>
    <div className='row'>
    <div className='col-6 offset-3'>
     <ol>
      <li>Playing Cricket</li>
      <li>Watching MotoGP</li>
      <li>Reading</li>
      <li>Music</li>
     </ol>
     
    </div>
    </div>


    {/* Education sections */}
<div className='row'>
        <div className='col-12'>
          <h1 className='text-center my-5 text-uppercase'>Personal Details</h1>
        </div>
      </div>
    <div className='row'>
    <div className='col-6 offset-3'>
     <ul>
      <li>DOB: 09-07-1994 </li>
      <li>Parentage: Charanjeet singh </li>
      <li>Current City: Jammu </li>
      <li>Phone: 9622116769</li>
      <li>Email: hatishrandhwal0907@gmail.com</li>
      <li><a href='https://www.linkedin.com/' target='_blank'>LinkedIn</a></li>
      <li><a href='https://github.com' target='_blank'>Github</a></li>
     </ul>
     
    </div>
    </div>



    </div>
  );
}

export default AboutPage;
