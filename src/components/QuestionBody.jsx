import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Label = styled.label`
  ${(props) =>
    props.isAnswered &&
    props.isCorrectAnswer &&
    css`
      color: blue;
      font-weight: bold;
    `}
`;

const QuestionBody = ({
  data,
  handleCorrectAnswer,
  isAnswered,
  setIsAnswered,
}) => {
  if (!data) return null;

  const [answers, setAnswers] = useState([]);

  const { category, correct_answer, difficulty, incorrect_answers, question } =
    data;

  useEffect(() => {
    const newAnswers = [...incorrect_answers, correct_answer];
    newAnswers.sort(() => Math.random() - 0.5);
    setAnswers(newAnswers);
  }, [data]);

  const isCorrectAnswer = useCallback(
    (selectedAnswer) => {
      return selectedAnswer === correct_answer;
    },
    [correct_answer],
  );

  const handleChange = (e) => {
    if (isCorrectAnswer(e.target.value)) {
      alert('정답!');
      handleCorrectAnswer();
    } else {
      alert('오답!');
    }
    setIsAnswered(true);
  };

  const decodeHTMLEntities = (text) => {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  };

  return (
    <ul>
      <li>카테고리: {category}</li>
      <li>난이도: {difficulty}</li>
      <li>문제: {decodeHTMLEntities(question)}</li>
      <li>
        보기
        {answers.map((answer, index) => {
          return (
            <div key={`${answer.substr(0, 10)}${index}`}>
              <input
                type="radio"
                name="answer"
                id={answer}
                value={answer}
                onChange={handleChange}
                disabled={isAnswered}
              />
              <Label
                isAnswered={isAnswered}
                isCorrectAnswer={isCorrectAnswer(answer)}
                htmlFor={answer}
              >
                {answer}
              </Label>
            </div>
          );
        })}
      </li>
    </ul>
  );
};

export default QuestionBody;

QuestionBody.propTypes = {
  data: PropTypes.object.isRequired,
  handleCorrectAnswer: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  setIsAnswered: PropTypes.func.isRequired,
};
