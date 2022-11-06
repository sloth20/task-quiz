import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import Question from './components/Question';

const App = () => {
  const [status, setStatus] = useState('beforeStart'); // beforeStart, taking, finished
  const [questions, setQuestions] = useState([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [correctAnswerCnt, setCorrectAnswerCnt] = useState(0);

  useEffect(() => {
    const getData = async () => {
      await fetch('https://opentdb.com/api.php?amount=10')
        .then((response) => response.json())
        .then((data) => setQuestions(data.results));
    };
    getData();
  }, []);

  const handleCorrectAnswer = () => {
    setCorrectAnswerCnt(correctAnswerCnt + 1);
  };

  return (
    <>
      <div>현재 문제 번호: {questionIdx + 1}</div>
      <div>맞춘 문제 개수: {correctAnswerCnt}</div>

      <Question
        data={questions[questionIdx]}
        handleCorrectAnswer={handleCorrectAnswer}
      />
      {'\n'}
      <Button status={status} />
    </>
  );
};

export default App;
