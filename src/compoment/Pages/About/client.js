import React from 'react'

function client() {
    return (
      <div className="mt-4">
      <h2 className="title title--h3">Clients</h2>
      <div className="swiper-container js-carousel-clients">
        <div className="swiper-wrapper">
          {/* Item client */}
          <div className="swiper-slide">
            <a href="assets\img\logo-1.svg">
              <img src="assets\img\logo-1.svg" alt="Logo" />
            </a>
          </div>
          {/* Item client */}
          <div className="swiper-slide">
            <a href="assets\img\logo-1.svg">
              <img src="assets\img\logo-2.svg" alt="Logo" />
            </a>
          </div>
          {/* Item client */}
          <div className="swiper-slide">
            <a href="assets\img\logo-1.svg">
              <img src="assets\img\logo-3.svg" alt="Logo" />
            </a>
          </div>
          {/* Item client */}
          <div className="swiper-slide">
            <a href="assets\img\logo-1.svg">
              <img src="assets\img\logo-4.svg" alt="Logo" />
            </a>
          </div>
          {/* Item client */}
          <div className="swiper-slide">
            <a href="assets\img\logo-1.svg">
              <img src="assets\img\logo-1.svg" alt="Logo" />
            </a>
          </div>
          {/* Item client */}
          <div className="swiper-slide">
            <a href="assets\img\logo-1.svg">
              <img src="assets\img\logo-2.svg" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
    )
}

export default client
