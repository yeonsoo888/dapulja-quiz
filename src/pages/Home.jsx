import { Link } from "react-router-dom";
import Layout from "../components/layout";

function WorkbookView(workbook) {
  const linkStyle = {
    backgroundColor: "lightgray",
    display: "inline-block",
    margin: "0 2rem",
  }
  return (
    <li>
      <Link to='/quiz' key={workbook.seq} style={linkStyle}>
        <h2 style={{ fontSize: "20px" }}>{workbook.title}</h2>
      </Link>
    </li>
  )
}

function Home({ workbookList }) {
  return (
    <Layout name="main">
      <ul className="main__testList">{workbookList.map((workbook) => WorkbookView(workbook))}</ul>
    </Layout>
  )
  
}

export default Home

// TODO
// 첨부된 화면과 가장 유사하게 반응형으로 구현하시면 됩니다.
