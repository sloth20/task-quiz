import React from 'react';
import PropTypes from 'prop-types';

import Utils from '../utils/Utils';
import Button from './Button';

const Result = ({ displayTime, correctAnswerCnt, handleRestart }) => {
  return (
    <>
      <div style={{ textAlign: 'center', fontWeight: 'bold' }}>결과</div>
      <div>풀이 시간: {Utils.timeToHourAndMinAndSec(displayTime)}</div>
      <div>맞은 문제 수: {correctAnswerCnt}</div>
      <div>틀린 문제 수: {10 - correctAnswerCnt}</div>
      <br />
      <Button text="다시 풀기" variant="contained" onClick={handleRestart} />
    </>
  );
};

export default Result;

Result.propTypes = {
  displayTime: PropTypes.number.isRequired,
  correctAnswerCnt: PropTypes.number.isRequired,
  handleRestart: PropTypes.func.isRequired,
};
