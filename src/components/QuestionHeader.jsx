import React from 'react';
import PropTypes from 'prop-types';

const QuestionHeader = ({ questionNo, correctAnswerCnt }) => {
  return (
    <>
      <div>현재 문제 번호: {questionNo}/10</div>
      <div>맞춘 문제 개수: {correctAnswerCnt}/10</div>
    </>
  );
};

export default QuestionHeader;

QuestionHeader.propTypes = {
  questionNo: PropTypes.number.isRequired,
  correctAnswerCnt: PropTypes.number.isRequired,
};
