import React from "react";
import "../Css/WideProductCards.css";

const WideProductCards = () => {
  return (
    <>
      <div class="Wide-product-card-container">
        <div class="Wide-product-card dark">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="Wide-product-card-img"
            alt="..."
          />
          <div class="Wide-product-card-body">
            <div class="Wide-product-card-text-section">
              <h5 class="Wide-product-card-title">Card title</h5>
              <p class="Wide-product-card-text">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="Wide-product-card-cta-section">
              <div>$129.00</div>
              <a href="_" class="btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* <div class="card bg-light-subtle mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div>$129.00</div>
              <a href="_" class="btn btn-dark">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="card bg-danger-subtle mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div>$129.00</div>
              <a href="_" class="btn btn-dark">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="card bg-primary-subtle mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div>$129.00</div>
              <a href="#" class="btn btn-dark">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="card bg-success-subtle mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div>$129.00</div>
              <a href="#" class="btn btn-dark">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="card bg-warning-subtle mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div>$129.00</div>
              <a href="#" class="btn btn-dark">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="card bg-info-subtle mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div>$129.00</div>
              <a href="#" class="btn btn-dark">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="card bg-dark mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold text-white">Card title</h5>
              <p class="card-text text-white">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div class="text-white">$129.00</div>
              <a href="#" class="btn btn-light">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="card bg-warning mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div>$129.00</div>
              <a href="#" class="btn btn-dark">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="card bg-info mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold text-white">Card title</h5>
              <p class="card-text text-white">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div class="text-white">$129.00</div>
              <a href="_" class="btn btn-light">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="card bg-dark-subtle mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div>$129.00</div>
              <a href="_" class="btn btn-dark">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div class="card bg-success mt-4">
          <img
            src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="text-section">
              <h5 class="card-title fw-bold text-white">Card title</h5>
              <p class="card-text text-white">
                Some quick example text to build on the card's content.
              </p>
            </div>
            <div class="cta-section">
              <div class="text-white">$129.00</div>
              <a href="#" class="btn btn-light">
                Buy Now
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default WideProductCards;
