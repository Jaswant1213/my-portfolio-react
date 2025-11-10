// src/components/ContactForm.jsx

import { useState } from 'react';

function ContactForm() {
  // Step 1: Har input field ke liye alag state banayein
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Step 2: Form submit hone par ye function chalega
  const handleSubmit = (e) => {
    // Ye form ko refresh hone se rokega (default behaviour)
    e.preventDefault(); 
    
    // Abhi ke liye, hum data ko sirf console par dikhayenge
    console.log("Form Submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Bonus: Form submit hone ke baad fields ko khali kar dein
    setName('');
    setEmail('');
    setMessage('');
  };

  // Step 3: JSX (HTML Form)
  return (
    <section id="contact">
      <h3>Contact Me</h3>
      <p>Have a question or want to work together? Send me a message!</p>
      
      {/* Step 4: Form ko 'onSubmit' event se jorein */}
      <form onSubmit={handleSubmit} className="contact-form">
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name"
            value={name} // 'value' ko state se jorein
            onChange={(e) => setName(e.target.value)} // Har type par state update karein
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;