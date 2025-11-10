// src/components/Home.jsx

// Is file mein Projects component ko import karne ki zaroorat nahi hai

function Home() {
  return (
    // Ye <>...</> (Fragment) zaroori hai taake sab sections ek group mein rahen
    <>
      <section className="About">
        <h3>About Me</h3>
        <p>
          Hi! I’m <strong>Jaswant Kumar</strong>, a passionate
          <strong>Computer Science student</strong> who loves exploring
          technology and turning ideas into reality through code. I’m currently
          pursuing the
          <strong>Meta Front-End Developer Professional Certificate</strong> on
          Coursera. So far, I’ve completed courses on
          <strong>HTML, CSS, JavaScript</strong>, and web technologies, and I’m
          now learning <strong>React</strong>.
        </p>
        <p>
          My goal is to strengthen my practical skills by building real-world
          projects step by step.
        </p>
      </section>

      {/* Projects component yahan nahi aayega, wo App.jsx mein hai */}

      <section>
        <h3>My Goals</h3>
        <p>
          My dream is to become a <strong>skilled software engineer</strong> and
          create meaningful digital solutions. I was inspired to develop a
          <strong> Blood Donation App</strong> after my femur bone accident,
          where I lost a lot of blood this experience motivates me to help
          others.
        </p>
      </section>

      <section>
        <h3>Interest & Hobbies</h3>
        <ul>
          <li>🌐 Web Development</li>
          <li>📸 Photography</li>
          <li>💻 Learning new technologies</li>
          <li>🎨 Designing clean and simple UI layouts</li>
          <li>🤝 Helping others and sharing knowledge</li>
        </ul>
      </section>

      <section>
        <h3>Current Learning</h3>
        <ul>
          <li>Meta Front-End Developer Course (Coursera)</li>
          <li>HTML, CSS, and JavaScript fundamentals</li>
          <li>React.js (Components, State Management, Hooks)</li>
          <li>Responsive Design and Accessibility</li>
        </ul>
      </section>

      <section>
        <h3>Future Plans</h3>
        <ul>
          <li>Build real-world projects using React</li>
          <li>Learn Backend (Node.js + Express)</li>
          <li>Create my dream Blood Donation App</li>
          <li>Contribute to open-source projects</li>
          <li>Become a professional full-stack developer</li>
        </ul>
      </section>

      <section>
        <h3>Personal Philosophy</h3>
        <p>
          I believe in simplicity, hard work, and continuous learning. I don’t
          smoke or drink — I prefer to stay healthy and focused on my goals. I
          may be an introvert, but I express myself through my work, creativity,
          and photography.
        </p>
      </section>
    </>
  );
}

// Ye line lazmi hai taake App.jsx is component ko import kar sake
export default Home;