import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = ["Home", "How it works", "Features", "Pricing"];
    return (
        <header className={`navbar-wrapper ${menuOpen ? "menu-open" : ""}`}>
            <nav className="navbar">
     {/* Logo */}
     <div className="logo">
       Logo
      </div>

      {/* Hamburger - Tablet/Mobile */}
     {!menuOpen && (
<button
     className="hamburger"
onClick={() => setMenuOpen(true)}
         aria-label="Open menu"
                    >
<span></span>
<span></span>
<span></span>
       </button>
     )}

     {/* Menu */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>

        {/* Close Button */}
        {menuOpen && (
<button
       className="close-btn"
onClick={() => setMenuOpen(false)}
       aria-label="Close menu"
          >
×
     </button>
          )}
                    <div className="nav-links">
           {menuItems.map((item) => (
<a href="#" key={item}>
{item}
</a>
))}
     </div>

      {/* Create Account */}
      <button className="account-btn">
        Create Account
    </button>
      </div>
     </nav>
        </header>
    );
}

export default Navbar;