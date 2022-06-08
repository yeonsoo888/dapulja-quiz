import { useRef } from 'react';
import { Link , useNavigate } from "react-router-dom"
import QuizModal from "./QuizModal"
import Layout from '../components/layout';
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
  const modal = useRef(null);
  const navigate = useNavigate();
  const path = process.env.PUBLIC_URL;

  return (
    <>
    
      <Layout>
        <div>
          {/* 아래의 버튼을 누르면 모달이 보이는 페이지로 이동합니다.. */}
          <button onClick={() => {
            modal.current.open();
          }}>퀴즈 나가기</button>
          <h1>{title}</h1>
          <div style={{ display: "flex" }}>
            <div style={{ borderRadius: "8px", border: "1px solid gray" }}>
              {/* 문제 이미지가 보이는 영역 */}
              {/* 해당 영역에서 문제 이미지가 보여져야 합니다.(src='/assets/QuizImage.png') */}
              <img src={`${path}/assets/QuizImage.png`} alt="문제이미지" />
            </div>
            <div style={{ borderRadius: "8px", border: "1px solid gray" }}>
              <div>{quizzes.map((quiz) => OmrRow(quiz))}</div>
            </div>
          </div>
          {/* 모바일 화면에서만 보이는 답안입력 버튼, 해당 버튼을 누르면 정답 입력란이 화면에 보여져야 합니다. */}
          <button className='mobile'>답안입력</button>
          <Link to='/result'>제출하기</Link>
        </div>
      </Layout>
      {/* modal init */}
      <QuizModal name="quizModal" ref={modal}>
        <h6>퀴즈를 종료하시겠습니까?</h6>
        <p>
          지금 종료하시면 문제 푼 기록이 저장되지 않습니다. <br />
          정말 퀘스트를 종료하시겠습니까?
        </p>
        <button onClick={() => {
          modal.current.close();
        }}>취소</button>
        <button onClick={() => {
          navigate("/");
        }}>종료하기</button>
      </QuizModal>
      {/* modal fin */}
    </>
  )
}

export default QuizSession

// TODO
// DOM 구조는 자유롭게 변경하셔도 됩니다.
// 모바일 화면에서 보이는 정답 입력란은 [입력완료] 버튼을 눌러야 닫히도록 구현해야 합니다.
// 화면 구현에 필요한 아이콘들은 public/assets 폴더에 있습니다.
// 닫기 아이콘은 'Close.svg'
// 뒤로가기 아이콘은 'Back.svg'
