import { Link } from "react-router-dom"

function ShortAnswer() {
  return <input placeholder='정답을 입력해주세요.' />
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
      <span>{quiz.seq}: </span>
      {quiz.dtype === "선다형" ? <MultipleAnswer /> : <ShortAnswer />}
    </div>
  )
}

function QuizSession({ title, quizzes }) {
  return (
    <div>
      {/* 아래의 버튼을 누르면 모달이 보이는 페이지로 이동합니다.. */}
      <Link to='/quiz/modal'>퀴즈 나가기</Link>
      <h1>{title}</h1>
      <div style={{ display: "flex" }}>
        <div style={{ borderRadius: "8px", border: "1px solid gray" }}>
          문제 이미지가 보이는 영역
          {/* 해당 영역에서 문제 이미지가 보여져야 합니다.(src='/assets/QuizImage.png') */}
        </div>
        <div style={{ borderRadius: "8px", border: "1px solid gray" }}>
          <div>{quizzes.map((quiz) => OmrRow(quiz))}</div>
        </div>
      </div>
      {/* 모바일 화면에서만 보이는 답안입력 버튼, 해당 버튼을 누르면 정답 입력란이 화면에 보여져야 합니다. */}
      {/* <button>답안입력</button> */}
      <Link to='/result'>제출하기</Link>
    </div>
  )
}

export default QuizSession

// TODO
// DOM 구조는 자유롭게 변경하셔도 됩니다.
// 모바일 화면에서 보이는 정답 입력란은 [입력완료] 버튼을 눌러야 닫히도록 구현해야 합니다.
// 화면 구현에 필요한 아이콘들은 public/assets 폴더에 있습니다.
// 닫기 아이콘은 'Close.svg'
// 뒤로가기 아이콘은 'Back.svg'
