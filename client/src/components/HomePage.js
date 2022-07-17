import React from "react";
import "../css/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="p-5 homepage-row row">
        <div className="home-heading col-md-6 col-sm">
          <h1 className="home-heading-title bold-poppins">As Suzud Perfume</h1>
          <p>
            আপনাকে সুবাসীত রাখতে সর্বদা আপনার সাথে। আমাদের As Suzud Perfume এ
            পেয়ে যাচ্ছেন বিভিন্ন ফ্লেভারের আতর সহ ইসলামিক আরো বিভিন্ন প্রোডাক্ট
            যেমনঃ টুপি, বই, তাসবীহ ইত্যাদী।
          </p>
          <button className="btn btn-outline-dark">কেনাকাটা করুণ</button>
        </div>
        <div className="col-md-6 col-sm">
          <img
            className="home-heading-img img-fluid shadow-lg"
            src="images/perfume-home.png"
            alt="perfume-home"
            width={350}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
