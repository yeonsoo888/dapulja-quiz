import { Link } from "react-router-dom"

function Summary({ summary }) {
  return (
    <div>
      <div>정답: {summary.correct}개</div>
      <div>오답: {summary.incorrect}개</div>
    </div>
  )
}

function ShortAnswer() {
  return <div>주관식 영역</div>
}

function MultipleAnswer() {
  return (
    <>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </>
  )
}

function OmrRow(quiz) {
  return (
    <div key={quiz.seq}>
      <span>selected: {quiz.selected}</span>
      <span>value: {quiz.value}</span>
    </div>
  )
}

function Result({ resultSummary, resultSheet }) {
  const path = process.env.PUBLIC_URL;
  return (
    <div>
      <img src={`${path}/assets/Quiz-Complete.png`} alt='퀴즈완료' width={160} />
      <Summary summary={resultSummary} />
      {resultSheet.map((result) => OmrRow(result))}
      <Link to='/'>완료</Link>
    </div>
  )
}

export default Result

// TODO
// DOM 구조는 자유롭게 변경하셔도 됩니다.
// 화면 구현에 필요한 아이콘들은 public/assets 폴더에 있습니다.
// O 아이콘은 True.svg
// X 아이콘은 False.svg
