import { useRef, useState} from 'react';
import { Link , useNavigate } from "react-router-dom"
import QuizModal from "./QuizModal"
import Layout from '../components/layout';

function ShortAnswer({isSolved,setIsSolved}) {
  let hiddenTxt;
  const handleChange = (e) => {
    hiddenTxt = document.querySelector(`.hiddentxt`).value;
    let targetTxt = e.target.value;
    if(targetTxt === "") {
      document.querySelector(`.hiddentxt`).value = "";
      setIsSolved(isSolved - 1);
    } else if(targetTxt !== "" && hiddenTxt !== "done") {
      document.querySelector(`.hiddentxt`).value = "done";
      setIsSolved(isSolved + 1);
    }
  }
  return (
    <>
      <input type="text" className={`hiddentxt`} readOnly hidden />
      <input type="text" onChange={handleChange}  placeholder='정답을 입력해주세요.' />
    </>
  )
}

function MultipleAnswer({idx,isSolved,setIsSolved}) {
  
  const abc = (e) => {
    let hiddenTxt = document.querySelector(`.hiddentxt${idx}`).value;
    if(hiddenTxt === "") {
      document.querySelector(`.hiddentxt${idx}`).value = "done"
      setIsSolved(isSolved + 1)
    }
  }

  return (
    <>
      <div className='btnWrap'>
        <input type="text" className={`hiddentxt${idx}`} readOnly hidden />
        <label className='labelRdi'>
          <input type="radio" name={idx} onChange={abc} hidden />
          <p>1</p>
        </label>
        <label className='labelRdi'>
          <input type="radio" name={idx} onChange={abc} hidden />
          <p>2</p>
        </label>
        <label className='labelRdi'>
          <input type="radio" name={idx} onChange={abc} hidden />
          <p>3</p>
        </label>
        <label className='labelRdi'>
          <input type="radio" name={idx} onChange={abc} hidden />
          <p>4</p>
        </label>
        <label className='labelRdi'>
          <input type="radio" name={idx} onChange={abc} hidden />
          <p>5</p>
        </label>
      </div>
    </>
  )
}

function QuizSession({ title, quizzes }) {
  const modal = useRef(null);
  const navigate = useNavigate();
  const path = process.env.PUBLIC_URL;
  const [isSolved,setIsSolved] = useState(0);
  const [isOrm,setIsOmr] = useState(false);

  let rate = 100 - (isSolved * 20);


  return (
    <>
      <Layout name="quiz">
        <div className='quizInner'>
          {/* 아래의 버튼을 누르면 모달이 보이는 페이지로 이동합니다.. */}
          <div className='quiz__header'>
            <button 
              className='qh__btn'
              onClick={() => {
              modal.current.open();
            }}>
              <img src={`${path}/assets/Back.svg`} alt="" className='pc' />
              <img src={`${path}/assets/close.svg`} alt="" className='mobile' style={{width: "1rem",}}  />
              <span className='pc'>퀴즈 나가기</span>
            </button>
            <h1>{title}</h1>
            <div className="gaugeWrap">
              <div className="bar">
                <div className="barInner" style={{right: `${rate}%`}}></div>
              </div>
              <p className='gaugeNum'><span>{isSolved}</span> / 5</p>
            </div>
          </div>
          <div style={{ display: "flex" }} className="quiz__cnts">
            <div className="quiz__left">
              {/* 문제 이미지가 보이는 영역 */}
              {/* 해당 영역에서 문제 이미지가 보여져야 합니다.(src='/assets/QuizImage.png') */}
              <img src={`${path}/assets/QuizImage.png`} alt="문제이미지"/>
            </div>
            <div className={`quiz__right ${isOrm ? "active" : ""}`}>
              <div>
                <div className='quiz__tableWrap'>
                  <table className='quiz__table'>
                    <thead>
                      <tr>
                        <th>문번</th>
                        <th>답안</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quizzes.map((quiz) => {
                        return(
                          <tr key={quiz.seq}>
                            <td>{quiz.seq}</td>
                            <td>{quiz.dtype === "선다형" ? <MultipleAnswer isSolved={isSolved} setIsSolved={setIsSolved} idx={quiz.seq} /> : <ShortAnswer isSolved={isSolved} setIsSolved={setIsSolved} />}</td>
                          </tr>
                        ) 
                      })}
                    </tbody>
                  </table>
                </div>
                <button className='btnEnroll mobile768' onClick={() => {setIsOmr(false)}} >입력 완료</button>
              </div>
            </div>
          </div>
          {/* 모바일 화면에서만 보이는 답안입력 버튼, 해당 버튼을 누르면 정답 입력란이 화면에 보여져야 합니다. */}
          <div className='btnWrap'>
            <button className='btnEnroll mobile768' onClick={()=>{setIsOmr(true)}}>답안입력</button>
            <Link to='/result' className='btnSubmit'>제출하기</Link>
          </div>
        </div>
      </Layout>
      {/* modal init */}
      <QuizModal name="quizModal" ref={modal}>
        <h6 className='modalTit'>퀴즈를 종료하시겠습니까?</h6>
        <p className='modalTxt'>
          지금 종료하시면 문제 푼 기록이 저장되지 않습니다. <br />
          정말 퀘스트를 종료하시겠습니까?
        </p>
        <div className='modalBtnWrap'>
          <button onClick={() => {
            modal.current.close();
          }}>취소</button>
          <button onClick={() => {
            navigate("/");
          }}>종료하기</button>
        </div>
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
