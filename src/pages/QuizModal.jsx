import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';


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

function QuizModal({ title, quizzes }) {
  const navigate = useNavigate();
  return (
    <>
      <AnimatePresence>
        <div>
          {/* 아래의 버튼을 누르면 모달이 보이는 페이지로 이동합니다. */}
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
          {/* 모바일 화면에서만 보이는 답안입력 버튼입니다. 해당 버튼을 누르면 정답 입력란이 화면에 보여져야 합니다. */}
          {/* <button>답안입력</button> */}
          <Link to='/result'>제출하기</Link>
        </div>

        {/* 아래 코드부터 모달 부분입니다. */}
        <motion.section
          initial={{ opacity: 0, }}
					animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
					exit={{ opacity: 0, }}
          className="modal"
          onClick={(e) => {
            if(e.target.tagName === "SECTION") {
              navigate('/quiz');
            }
          }}
        >
          <div className="inner">
            <h6>퀴즈를 종료하시겠습니까?</h6>
            <p>
              지금 종료하시면 문제 푼 기록이 저장되지 않습니다. <br />
              정말 퀘스트를 종료하시겠습니까?
            </p>
            <button onClick={() => {
              navigate('/quiz');
            }}>취소</button>
            <Link to='/'>종료하기</Link>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  )
}

export default QuizModal

// TODO
// 해당 파일을 활용하여 퀴즈 나가기 모달을 구현하시면 됩니다.
// DOM 구조는 자유롭게 변경하셔도 됩니다.
// 취소 버튼과 모달 이외의 영역을 누르면 모달이 닫히도록 구현하시면 됩니다.
