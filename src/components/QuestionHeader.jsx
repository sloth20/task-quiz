import React from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';

const QuestionHeader = ({
  questionIdx,
  status,
  displayTime,
  setDisplayTime,
}) => {
  return (
    <>
      <Timer
        status={status}
        displayTime={displayTime}
        setDisplayTime={setDisplayTime}
      />
      <div>현재 문제 번호: {questionIdx + 1}/10</div>
    </>
  );
};

export default QuestionHeader;

QuestionHeader.propTypes = {
  questionIdx: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  displayTime: PropTypes.number.isRequired,
  setDisplayTime: PropTypes.func.isRequired,
};
