import React from "react";
import "../css/NewProductSection.css";

function NewProductSection() {
  return (
    <div className="newProductSection">
      <div className="container PopularSection my-5">
        <h1 className="bold-bangla text-light">নতুন জিনিস</h1>
        <img
          className="img-fluid mb-5"
          src="icons/border-btm-icon-wt.png"
          alt=""
          width={300}
        />
        <div className="row">
          {[...Array(8)].map((star, index) => {
            return (
              <div className="col-lg-3 col-md-4 mb-5 col-sm-6">
                <div className="new-card">
                  <img
                    className="popular-card-img"
                    src={
                      index % 2 === 0
                        ? "images/perfume-1.jpg"
                        : "images/perfume-3.jpg"
                    }
                    alt="perfume-img"
                    style={{
                      width: "100%",
                      height: "20vh",
                      objectFit: "cover",
                    }}
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
      </div>
    </div>
  );
}

export default NewProductSection;
