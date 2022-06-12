import { Link } from "react-router-dom"
import Layout from "../components/layout"
const path = process.env.PUBLIC_URL;

function Summary({ summary }) {
  return (
    <div className="summary">
      <div>
        <span>정답</span> {summary.correct}개
      </div>
      <div>
        <span>오답</span> {summary.incorrect}개
      </div>
    </div>
  )
}

function ShortAnswer() {
  return <div>주관식 영역</div>
}

function OmrRow(quiz) {
  

  const arrAnswer = ["1","2","3","4","5"];
  
  const correctStyle = {
    background: `url(${path}/assets/True.svg) no-repeat`
  }
  const inCorrectStyle = {
    background: `url(${path}/assets/False.svg) no-repeat`
  }

  return (
    <tr key={quiz.seq}>
      <td className={`${quiz.selected == quiz.value ? 'correct' : 'incorrect'}`}><span style={quiz.selected == quiz.value ? correctStyle : inCorrectStyle}>{quiz.seq}</span></td>
      <td>
        <div className="btnWrap">
          {
            arrAnswer.map((item,i) => {
              return(
                <p 
                  className={`
                    ${quiz.selected == item ? 'selected' : ""}
                    ${quiz.value == item ? 'value' : ""}
                  `}
                  key={i}
                >{item}</p>
              )
            })
          }
        </div>
      </td>
    </tr>
  )
}

function Result({ resultSummary, resultSheet }) {
  const path = process.env.PUBLIC_URL;
  return (
    <Layout name="result">
      <div className="resultInner">
        <img src={`${path}/assets/Quiz-Complete.png`} alt='퀴즈완료' width={160} />
        <div className="result__cnts">
          <Summary summary={resultSummary} />
          <div className="quiz__right">
            <div className="quiz__tableWrap">
              <table className='quiz__table'>
                <thead>
                  <tr>
                    <th>문번</th>
                    <th>답안</th>
                  </tr>
                </thead>
                <tbody>
                  {resultSheet.map((result) => OmrRow(result))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Link to='/' className="btnSubmit">완료</Link>
      </div>
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
    </Layout>
  )
}

export default Result

// TODO
// DOM 구조는 자유롭게 변경하셔도 됩니다.
// 화면 구현에 필요한 아이콘들은 public/assets 폴더에 있습니다.
// O 아이콘은 True.svg
// X 아이콘은 False.svg
