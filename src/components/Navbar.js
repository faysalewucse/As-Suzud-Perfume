import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="shadow navbar navbar-expand-lg navbar-light bg-light">
        <div className="container p-3 container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="icons/site-icon.png"
              alt="site-icon"
              width="100%"
              height="50PX"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="ms-auto navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  হোম
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  শপ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ক্যাটাগরী
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      আতর
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      টুপি
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      বই
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  আমাদের সম্পর্কে
                </Link>
              </li>
            </ul>
            <i className="ms-5 fa badge fa-lg" value={6}>
              <img
                className="cart-icon"
                src="icons/cart-icon.png"
                alt="cart-icon"
                width={25}
              />
            </i>
            <div className="dropstart">
              <img
                src="images/profile-pic.webp"
                alt="cart-icon"
                className="dropdown-toggle rounded-circle shadow"
                data-bs-toggle="dropdown"
                width={35}
                height={35}
              />
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
