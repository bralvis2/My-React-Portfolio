import React from 'react';
// style sheet
import './Contact.css'


export default function Contact() {
  return (
    <div className='contactContainer'>
      <div className='contactInfo'>
        <h1>Contact Me</h1>
        <ul className='contactList'>
          <li>📧: bralvis2@gmail.com </li>
          {/* <li>📱: (123)456-7890 </li> */}
          <li>
            <a href='https://github.com/bralvis2' target="_blank" className='github'> 👩🏽‍💻: Github</a>
          </li>
        </ul>
        <p className='contactMe'>
          If you are intested in collaborating or if you have any questions, please email me. 
        </p>
      </div>
      {/* <div className='contactForm'>
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="👤" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="📧" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="submitBtn">Submit</button>
        </form>
      </div> */}
    </div>
  );
}
