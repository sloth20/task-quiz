import React, { useEffect, useRef, useState } from 'react';
import Button from './components/Button';
import QuestionBody from './components/QuestionBody';
import QuestionHeader from './components/QuestionHeader';

const App = () => {
  const isLoading = useRef(true);
  const [status, setStatus] = useState('beforeStart'); // beforeStart, taking, finished
  const [questions, setQuestions] = useState([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [correctAnswerCnt, setCorrectAnswerCnt] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (!isLoading.current) return;
    const getData = async () => {
      try {
        await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
          .then((response) => response.json())
          .then((data) => setQuestions(data.results));
      } catch (error) {
        alert('error occured! ', error);
      }
    };
    getData();
    isLoading.current = false;
  }, []);

  const handleCorrectAnswer = () => {
    setCorrectAnswerCnt(correctAnswerCnt + 1);
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    if (questionIdx === 9) {
      setStatus('finished');
    } else {
      setQuestionIdx(questionIdx + 1);
    }
  };

  if (isLoading.current) return null;

  return (
    <>
      {(status === 'taking' || status === 'finished') && (
        <QuestionHeader
          status={status}
          questionIdx={questionIdx}
          correctAnswerCnt={correctAnswerCnt}
        />
      )}
      {status === 'taking' && (
        <QuestionBody
          data={questions[questionIdx]}
          handleCorrectAnswer={handleCorrectAnswer}
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered}
        />
      )}
      {status === 'finished' && '끝!'}
      <Button
        status={status}
        handleStatus={setStatus}
        handleNextQuestion={handleNextQuestion}
        isAnswered={isAnswered}
      />
    </>
  );
};

export default App;
