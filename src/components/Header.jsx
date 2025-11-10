// src/components/Header.jsx

// Ab 'handleToggle' ki zaroorat nahi kyunki button Navbar mein chala gaya
function Header() {
  return (
    <header>
      <img
        src="/Images/JaswantPic.jpg"
        alt="Jaswant Kumar"
        width="180"
        height="180" /* Height ko width ke barabar rakhein */
      />
      <h1>Jaswant Kumar</h1>
      <h2>Computer Science Student | Front-End Developer (in progress)</h2>
      <p>Naokot, Sindh, Pakistan</p>
      {/* Dark Mode Toggle Button yahan se hata diya hai */}
    </header>
  );
}

export default Header;