import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import QuestionBody from './components/QuestionBody';
import QuestionHeader from './components/QuestionHeader';

const App = () => {
  const [status, setStatus] = useState('beforeStart'); // beforeStart, taking, finished
  const [questions, setQuestions] = useState([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [correctAnswerCnt, setCorrectAnswerCnt] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        .then((response) => response.json())
        .then((data) => setQuestions(data.results));
    };
    getData();
  }, []);

  const handleCorrectAnswer = () => {
    setCorrectAnswerCnt(correctAnswerCnt + 1);
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    if (questionIdx === 10) {
      setStatus('finished');
    } else {
      setQuestionIdx(questionIdx + 1);
    }
  };

  if (status === 'finished') return '끝!';

  return (
    <>
      {(status === 'taking' || status === 'finished') && (
        <QuestionHeader
          status={status}
          questionNo={questionIdx + 1}
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
