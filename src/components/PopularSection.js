import React from "react";
import "../css/PopularSection.css";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

function PopularSection() {
  return (
    <div className="container PopularSection my-5">
      <h1 className="bold-bangla ">সবচেয়ে সেরা</h1>
      <img
        className="img-fluid mb-5"
        src="icons/border-btm-icon.png"
        alt=""
        width={300}
      />
      <div className="row g-4">
        {[...Array(8)].map((star, index) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="popular-card">
                <img
                  className="popular-card-img"
                  src={`images/perfume-${index + 1}.jpg`}
                  alt="perfume-img"
                  style={{ width: "100%", height: "20vh", objectFit: "cover" }}
                />
                <h4 className="mt-3 perfume-name bold-bangla">আমির আল উদ</h4>
                <h4 className="perfume-price normal-bangla">২৮০ থেকে শুরু</h4>
                <button className="btn btn-outline-dark mb-3">
                  ব্যাগ এ রাখুন
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn btn-outline-dark mt-5">সব আতর দেখুন...</button>
    </div>
  );
}

export default PopularSection;
