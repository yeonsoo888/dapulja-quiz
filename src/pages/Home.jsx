import { Link } from "react-router-dom";
import Layout from "../components/layout";

function WorkbookView(workbook) {
  return (
    <li>
      <Link to='/quiz' key={workbook.seq}>
        <div>
          <h2>{workbook.title}</h2>
          <p>{workbook.subject}</p>
        </div>
      </Link>
    </li>
  )
}

function Home({ workbookList }) {
  return (
    <>
      <div className="mainVis"></div>
      <Layout name="main">
        <ul className="main__testList">{workbookList.map((workbook) => WorkbookView(workbook))}</ul>
      </Layout>
    </>
  )
  
}

export default Home

// TODO
// 첨부된 화면과 가장 유사하게 반응형으로 구현하시면 됩니다.
