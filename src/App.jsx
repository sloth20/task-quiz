import React, { useEffect, useRef, useState } from 'react';

import Button from './components/Button';
import QuestionBody from './components/QuestionBody';
import QuestionHeader from './components/QuestionHeader';
import Result from './components/Result';
import './styles.css';

const App = () => {
  const isLoading = useRef(true);

  const [status, setStatus] = useState('beforeStart'); // beforeStart, taking, finished
  const [questions, setQuestions] = useState([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [correctAnswerCnt, setCorrectAnswerCnt] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [displayTime, setDisplayTime] = useState(0);

  const getData = async () => {
    try {
      await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        .then((response) => response.json())
        .then((data) => setQuestions(data.results));
    } catch (error) {
      alert('error occured! ', error);
    }
  };

  useEffect(() => {
    if (!isLoading.current) return;
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

  const handleReset = () => {
    isLoading.current = true;
    getData();
    setIsAnswered(false);
    setQuestionIdx(0);
    setCorrectAnswerCnt(0);
    setDisplayTime(0);
    setStatus('taking');
    isLoading.current = false;
  };

  if (isLoading.current) return null;

  return (
    <>
      {status === 'beforeStart' && (
        <Button
          text="퀴즈 풀기"
          variant="contained"
          onClick={() => setStatus('taking')}
        />
      )}
      {status === 'taking' && (
        <>
          <QuestionHeader
            status={status}
            questionIdx={questionIdx}
            displayTime={displayTime}
            setDisplayTime={setDisplayTime}
          />
          <QuestionBody
            data={questions[questionIdx]}
            handleCorrectAnswer={handleCorrectAnswer}
            handleNextQuestion={handleNextQuestion}
            isAnswered={isAnswered}
            setIsAnswered={setIsAnswered}
          />
        </>
      )}
      {status === 'finished' && (
        <Result
          displayTime={displayTime}
          correctAnswerCnt={correctAnswerCnt}
          handleReset={handleReset}
        />
      )}
    </>
  );
};

export default App;
