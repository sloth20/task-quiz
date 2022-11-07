import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ status, handleStatus, handleNextQuestion, isAnswered }) => {
  if (status === 'beforeStart') {
    return (
      <button type="button" onClick={() => handleStatus('taking')}>
        퀴즈 풀기
      </button>
    );
  } else if (status === 'taking' && isAnswered) {
    return (
      <button type="button" onClick={handleNextQuestion}>
        다음 문항
      </button>
    );
  }
};

export default Button;

Button.propTypes = {
  status: PropTypes.string.isRequired,
  handleStatus: PropTypes.func.isRequired,
  handleNextQuestion: PropTypes.func.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};
