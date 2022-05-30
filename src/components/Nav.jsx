import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav
      style={{ padding: "1rem", boxShadow: "10px 5px 5px rgb(191, 191, 191)" }}
    >
      <Link to='/'>다풀자</Link>
      <Link to='/'>기출문제</Link>
      <Link to='/quiz'>문제풀기</Link>
      {/* 아래 버튼은 태블릿, 모바일 화면에서만 보이는 햄버거 메뉴 버튼입니다. */}
      <button>
        <img
          src='/assets/Menu.svg'
          alt='메뉴 아이콘'
          width={24}
          className='menu-icon'
        />
      </button>
    </nav>
  )
}

export default Nav

// TODO
// 첨부파일에 제공된 형태로 반응형으로 구현
// 로고는 public/assets 에 있는 Dapulja-Logo.svg 파일을 사용
