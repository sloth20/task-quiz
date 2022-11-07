import React from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';

const QuestionHeader = ({ status, questionIdx, correctAnswerCnt }) => {
  return (
    <>
      <Timer status={status} />
      <div>현재 문제 번호: {questionIdx + 1}/10</div>
      <div>맞춘 문제 개수: {correctAnswerCnt}</div>
    </>
  );
};

export default QuestionHeader;

QuestionHeader.propTypes = {
  status: PropTypes.string.isRequired,
  questionIdx: PropTypes.number.isRequired,
  correctAnswerCnt: PropTypes.number.isRequired,
};
