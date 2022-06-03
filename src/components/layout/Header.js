import { Link } from "react-router-dom";

const Header = () => {
  // Create array for navlinks of pages
  const navLinks = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Quran",
      path: "/quran",
    },
  ];
  return (
    <div className="page-header">
      <div className="container">
        <header>
          <div className="logo">
            <p>Islamic study</p>
          </div>
          <div className="nav-links">
            <ul>
              {navLinks.map((link) => (
                <li key={link.text}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
