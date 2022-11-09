import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';

const Button = ({ text, onClick, variant }) => {
  return (
    <MuiButton variant={variant} size="large" onClick={onClick}>
      {text}
    </MuiButton>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};
