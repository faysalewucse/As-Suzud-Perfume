import React from "react";
import "../css/HomePage.css";
import NewProductSection from "./NewProductSection";
import PopularSection from "./PopularSection";
import QuoteSection from "./QuoteSection";
import VideoCaptionSection from "./VideoCaptionSection";

function HomePage() {
  return (
    <div>
      <div className="home-page">
        <div className="p-5 homepage-row row">
          <div className="home-heading col-md-6 col-sm">
            <h1 className="home-heading-title bold-poppins">
              As Suzud Perfume
            </h1>
            <p className="normal-bangla">
              আপনাকে সুবাসীত রাখতে সর্বদা আপনার সাথে। আমাদের As Suzud Perfume এ
              পেয়ে যাচ্ছেন বিভিন্ন ফ্লেভারের আতর সহ ইসলামিক আরো বিভিন্ন
              প্রোডাক্ট যেমনঃ টুপি, বই, তাসবীহ ইত্যাদী।
            </p>
            <a
              style={{ color: "white" }}
              href="/shop"
              className="normal-bangla shop-btn"
            >
              কেনাকাটা করুণ
            </a>
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
      <PopularSection />
      <QuoteSection />
      <NewProductSection />
      <VideoCaptionSection />
    </div>
  );
}

export default HomePage;
