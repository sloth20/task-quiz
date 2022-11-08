import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

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
    if (isAnswered) return;
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
      <FormControl>
        <RadioGroup name="radio-buttons-group">
          {answers.map((answer, index) => {
            return (
              <FormControlLabel
                key={index}
                value={answer}
                onChange={handleChange}
                disabled={isAnswered}
                control={<Radio />}
                label={answer}
                style={{
                  display: 'block',
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      {isAnswered && (
        <li>
          <FormHelperText style={{ fontSize: '16px', color: 'blue' }}>
            정답: {correct_answer}
          </FormHelperText>
        </li>
      )}
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
