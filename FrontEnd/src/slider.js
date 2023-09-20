import React from "react";
import img from "./components/img/hyundai-motor-group-P45K3ewrATs-unsplash.jpg";
export default function Slider() {
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="Review | even-columns opposite-columns d-block w-80">
              <div className="img"></div>
              <p className="Pr">
                <span>
                  "I had the most amazing experience with Swift Rentals! From
                  start to finish, their service was top-notch. The website was
                  incredibly user-friendly, making it a breeze to find the
                  perfect rental for my needs." - Emily S
                </span>
              </p>
              <div className="ReviewPerson">
                <h4>Rating</h4>
                <p>5.0</p>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="Review | even-columns opposite-columns d-block w-100">
              <div className="img"></div>
              <p className="Pr">
                <span>
                  "I had the most amazing experience with Swift Rentals! From
                  start to finish, their service was top-notch. The website was
                  incredibly user-friendly, making it a breeze to find the
                  perfect rental for my needs." - Emily S
                </span>
              </p>
              <div className="ReviewPerson">
                <h4>Rating</h4>
                <p>5.0</p>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img} class="d-block w-80" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
