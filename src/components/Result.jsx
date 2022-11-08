import React from 'react';
import PropTypes from 'prop-types';

import Utils from '../utils/Utils';

const Result = ({ displayTime, correctAnswerCnt }) => {
  return (
    <>
      <div>결과</div>
      <div>풀이 시간: {Utils.timeToHourAndMinAndSec(displayTime)}</div>
      <div>맞은 문제 수: {correctAnswerCnt}</div>
      <div>틀린 문제 수: {10 - correctAnswerCnt}</div>
    </>
  );
};

export default Result;

Result.propTypes = {
  displayTime: PropTypes.number.isRequired,
  correctAnswerCnt: PropTypes.number.isRequired,
};
