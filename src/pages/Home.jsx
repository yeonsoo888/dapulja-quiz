import { Link } from "react-router-dom"

function WorkbookView(workbook) {
  const linkStyle = {
    backgroundColor: "lightgray",
    display: "inline-block",
    margin: "0 2rem",
  }
  return (
    <Link to='/quiz' key={workbook.seq} style={linkStyle}>
      <h2 style={{ fontSize: "20px" }}>{workbook.title}</h2>
    </Link>
  )
}

function Home({ workbookList }) {
  return <div>{workbookList.map((workbook) => WorkbookView(workbook))}</div>
}

export default Home

// TODO
// 첨부된 화면과 가장 유사하게 반응형으로 구현하시면 됩니다.
