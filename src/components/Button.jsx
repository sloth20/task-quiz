import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ status }) => {
  return <button>{status}</button>;
};

export default Button;

Button.propTypes = {
  status: PropTypes.string.isRequired,
};
