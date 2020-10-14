import React from 'react'

function skill() {
    return (
        <div className="mt-1">
        <h2 className="title title--h3">What I'm Doing</h2>
        <div className="row">
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item">
              <img
                className="case-item__icon"
                src="assets\icons\icon-design.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h4">Web Design</h3>
                <p className="case-item__caption">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </div>
          </div>
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item">
              <img
                className="case-item__icon"
                src="assets\icons\icon-dev.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h4">Web Development</h3>
                <p className="case-item__caption">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </div>
          </div>
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item">
              <img
                className="case-item__icon"
                src="assets\icons\icon-app.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h4">Mobile Apps</h3>
                <p className="case-item__caption">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </div>
          </div>
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item">
              <img
                className="case-item__icon"
                src="assets\icons\icon-photo.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h4">Photography</h3>
                <p className="case-item__caption">
                  I make high-quality photos of any category at a professional
                  level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default skill
