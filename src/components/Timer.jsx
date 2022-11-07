import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Utils from '../utils/Utils';

const Timer = ({ status, displayTime, setDisplayTime }) => {
  const [startTime, setStartTime] = useState(new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const presentTime = new Date().getTime();
      setDisplayTime(presentTime - startTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>{`경과한 시간: ${Utils.timeToHourAndMinAndSec(displayTime)}`}</div>
  );
};

export default Timer;

Timer.propTypes = {
  status: PropTypes.string.isRequired,
  displayTime: PropTypes.number.isRequired,
  setDisplayTime: PropTypes.func.isRequired,
};
