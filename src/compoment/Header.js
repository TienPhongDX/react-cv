import React from 'react'

function Header() {
    return (
        <header className="header box">
            <div className="header__left">
              <div className="header__photo">
                <img
                  className="header__photo-img"
                  src="assets/img/84860090_2583871168499593_8890216199707688960_o.jpg"
                  alt="Avatar"
                />
              </div>
              <div className="header__base-info">
                <h4 className="title titl--h4">Nguyen Tien Phong</h4>
                <div className="status">Frontend Developer</div>
                <ul className="header__social">
                  <li>
                    <a href="https://www.facebook.com/tienphong.nguyen.562/" >
                      <i className="font-icon icon-facebook1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/TienPhongDX" >
                      <i className="font-icon icon-github1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/tienphong_06/">
                      <i className="font-icon icon-instagram1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__right">
              <ul className="header__contact">
                <li>
                  <span className="overhead">Email</span>ntphongdx62@gmail.com
                </li>
                <li>
                  <span className="overhead">Phone</span>0888006144
                </li>
              </ul>
              <ul className="header__contact">
                <li>
                  <span className="overhead">Birthday</span>16 June, 2000
                </li>
                <li>
                  <span className="overhead">Location</span>La Hai, Dong Xuan,
                  Phu Yen 
                </li>
              </ul>
            </div>
          </header>
    )
}

export default Header
