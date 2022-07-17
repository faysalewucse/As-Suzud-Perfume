import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="shadow navbar navbar-expand-lg navbar-light bg-light">
        <div className="container p-3 container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="icons/site-icon.png"
              alt="site-icon"
              width="100%"
              height="50PX"
              class="d-inline-block align-text-top"
            />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  হোম
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  শপ
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ক্যাটাগরী
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      আতর
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      টুপি
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      বই
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  আমাদের সম্পর্কে
                </a>
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
                aria-expanded="false"
                width={35}
                height={35}
              />
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
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
