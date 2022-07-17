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
      <div className="row">
        {[...Array(8)].map((star, index) => {
          return (
            <div className="col-lg-3 col-md-4 mb-5 col-sm-6">
              <div className="popular-card">
                <img
                  className="popular-card-img"
                  src={
                    index % 2 === 0
                      ? "images/perfume-1.jpg"
                      : "images/perfume-3.jpg"
                  }
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
      {/* <div className="owlCarousel">
        <OwlCarousel
          className="owl-theme"
          loop
          nav
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 4,
            },
          }}
          margin={10}
        >
          <div class="item">
            <div className="popular-card">
              <img
                className="popular-card-img"
                src="images/perfume-1.jpg"
                alt="perfume-img"
                style={{ width: "100%", height: "20vh", objectFit: "cover" }}
              />
              <h4 className="mt-3 perfume-name bold-bangla">আমির আল উদ</h4>
              <h4 className="perfume-price normal-bangla">২৮০ টাকা</h4>
              <button className="btn btn-outline-dark mb-3">Add to Cart</button>
            </div>
          </div>
        </OwlCarousel>
      </div> */}
    </div>
  );
}

export default PopularSection;
