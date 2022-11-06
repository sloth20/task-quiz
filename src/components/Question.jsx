import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Question = ({ data, handleCorrectAnswer }) => {
  if (!data) return null;

  const [answerIsSelected, setAnswerIsSelected] = useState(false);
  const [answers, setAnswers] = useState([]);

  const { category, correct_answer, difficulty, incorrect_answers, question } =
    data;

  useEffect(() => {
    const newAnswers = [...incorrect_answers, correct_answer];
    newAnswers.sort(() => Math.random() - 0.5);
    setAnswers(newAnswers);
  }, [data]);

  const handleChange = (e) => {
    if (correct_answer === e.target.value) {
      alert('정답!');
      handleCorrectAnswer();
    } else {
      alert('오답!');
    }
    setAnswerIsSelected(true);
  };

  return (
    <ul>
      <li>카테고리: {category}</li>
      <li>난이도: {difficulty}</li>
      <li>문제: {question}</li>
      <li>
        보기
        {answers.map((answer, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="answer"
                id={index}
                value={answer}
                onChange={handleChange}
                disabled={answerIsSelected}
              />
              <label htmlFor={index}>{answer}</label>
            </div>
          );
        })}
      </li>
    </ul>
  );
};

export default Question;

Question.propTypes = {
  data: PropTypes.object.isRequired,
  handleCorrectAnswer: PropTypes.func.isRequired,
};
