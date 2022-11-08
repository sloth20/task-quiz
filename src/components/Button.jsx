import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';

const Button = ({ status, handleStatus, handleNextQuestion, isAnswered }) => {
  if (status === 'beforeStart') {
    return (
      <MuiButton variant="contained" onClick={() => handleStatus('taking')}>
        퀴즈 풀기
      </MuiButton>
    );
  } else if (status === 'taking' && isAnswered) {
    return (
      <MuiButton variant="outlined" onClick={handleNextQuestion}>
        다음 문항
      </MuiButton>
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
