import React from "react";

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>আমাদেরকে যে সকল সামাজিক যোগাযোগ মাধ্যমে পাচ্ছেন</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href="/" className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  As SUzud Perfume
                </h6>
                <p>
                  এখানে আপনি আপনার পছন্দের বিভিন্ন ধরনের আতর পেয়ে যাবেন। যা
                  আপনাকে সুভাসীত করবে।
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">প্রোডাক্টস</h6>
                <a href="/" className="text-reset">
                  আতর
                </a>
                <a href="/" className="text-reset">
                  টুপি
                </a>
                <a href="/" className="text-reset">
                  বই
                </a>
                <a href="/" className="text-reset">
                  তেল
                </a>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">প্রয়োজনীয়</h6>
                <a href="/" className="text-reset">
                  শপ
                </a>
                <a href="/" className="text-reset">
                  আমাদের সম্পর্কে
                </a>
                <a href="/" className="text-reset">
                  যোগাযোগ
                </a>

                <a href="/" className="text-reset">
                  অভিযোগ
                </a>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">যোগাযোগ</h6>
                <p>
                  <i className="fas fa-home me-3" /> দারুন্নাজাত মাদরাসা
                  সঙ্গলগ্ন, সালেহীয়া লাইব্রেরী, বক্সনগর, ডেমরা, ঢাকা
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  assuzud@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> +8801634495020
                </p>
                <p>
                  <i className="fas fa-print me-3" /> +8801323561257
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            RDev
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}

export default Footer;
