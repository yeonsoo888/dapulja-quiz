import { Link } from "react-router-dom"

import QuizSession from "./QuizSession"

function QuizModal({ title, quizzes }) {
  return (
    <>
      <QuizSession title={title} quizzes={quizzes} />
      <div>
        <h6>퀴즈를 종료하시겠습니까?</h6>
        <p>
          지금 종료하시면 문제 푼 기록이 저장되지 않습니다. <br />
          정말 퀘스트를 종료하시겠습니까?
        </p>
        <button>취소</button>
        <Link to='/'>종료하기</Link>
      </div>
    </>
  )
}

export default QuizModal
