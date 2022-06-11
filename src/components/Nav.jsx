import { useState,useEffect } from 'react';
import { NavLink } from "react-router-dom"

function Nav() {
  const path = process.env.PUBLIC_URL;
  const [isMenu,setIsMenu] = useState(false);

  const handleMenuOpen = (e) => {
    const hamburger = document.getElementById("nav-icon3");
    if(hamburger.classList.contains("open")) {
      hamburger.classList.remove("open");
      setIsMenu(false);
    } else {
      hamburger.classList.add("open");
      setIsMenu(true);
    }
  }

  return (
    <header className="header">
      <div className="headerInner inner">
        <h1 className="logo">
          <NavLink to='/' style={{background: `url(${path}/assets/Dapulja-Logo.svg) no-repeat`}}>다풀자퀴즈</NavLink>
        </h1>
        <nav className={`header__nav ${isMenu ? "active" : ""}`}>
          <div className="topInfo mobile">
            <h1 className="logo">
              <NavLink to='/' style={{background: `url(${path}/assets/Dapulja-Logo.svg) no-repeat`}}>다풀자퀴즈</NavLink>
            </h1>
            <div className='userInfo'>
              <div className='userInfo__imgWrap'>
                <img src={`${path}/assets/Daram.png`} alt="" />
              </div>
              <p>다풀자람이</p>
            </div>
          </div>
          <NavLink to='/'>기출문제</NavLink>
          <NavLink to='/quiz'>문제풀기</NavLink>
          <div className="authWrap">
            <NavLink to="/login">로그인</NavLink>
          </div>
        </nav>
        <div className="hamburger_wrap mobile" onClick={handleMenuOpen}>
          <div className="hamburger__inner">
            <div id="nav-icon3" className="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav

// TODO
// 첨부파일에 제공된 형태로 반응형으로 구현하시면 됩니다.
// 햄버거 메뉴 버튼을 누르면 메뉴가 보여져야 합니다.
// 로고는 public/assets 에 있는 Dapulja-Logo.svg 파일을 사용하시면 됩니다.
// 유저 프로필 이미지는 public/assets 에 있는 Daram.png 파일을 사용하시면 됩니다.
