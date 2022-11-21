import React from "react";
import "../css/ShopPage.css";

function ShopPage() {
  return (
    <div className="p-5 container">
      <div className="row">
        <div className="col-lg-3">
          <h6 className="all-categories bold-bangla bg-dark text-light p-3">
            সকল ক্যাটাগরী
          </h6>
        </div>
        <div className="col-lg-9 col-sm-12">
          <div className="row">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Name..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
          <div className="row">
            <div className="text-center">
              <ul className="bold-bangla list-inline d-flex flex-gap secondary-nav">
                <li className="nav2-item">আতর</li>
                <li className="nav2-item">টুপি</li>
                <li className="nav2-item">বই</li>
                <li className="nav2-item">অন্যান্য</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
