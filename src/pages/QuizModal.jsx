import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuizModal = forwardRef(({ title, quizzes , name , children },ref) => {
  const [isPop,setIsPop] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      open: () => setIsPop(true),
      close: () => setIsPop(false)
    }
  })
  return (
    <>
      <AnimatePresence>
        {/* 아래 코드부터 모달 부분입니다. */}
        {
          isPop && (
            <motion.section
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className={`modal ${name}`}
              onClick={(e) => {
                if(e.target.tagName === "SECTION") {
                  setIsPop(false);
                }
              }}
            >
              <div className="inner">
                {children}
              </div>
            </motion.section>
          )
        }
      </AnimatePresence>
    </>
  )
}) 

export default QuizModal

// TODO
// 해당 파일을 활용하여 퀴즈 나가기 모달을 구현하시면 됩니다.
// DOM 구조는 자유롭게 변경하셔도 됩니다.
// 취소 버튼과 모달 이외의 영역을 누르면 모달이 닫히도록 구현하시면 됩니다.
