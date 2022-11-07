import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ status }) => {
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [displayTime, setDisplayTime] = useState(0);

  const timer = setInterval(() => {
    const presentTime = new Date().getTime();
    setDisplayTime(presentTime - startTime);
  }, 100);

  useEffect(() => {
    if (status === 'finished') {
      clearInterval(timer);
    }
  }, [status]);

  const displayTimeToHourAndMinAndSec = () => {
    let sec = Math.floor((displayTime / 1000) % 60);
    let min = Math.floor((displayTime / 1000 / 60) % 60);
    let hour = Math.floor((displayTime / 1000 / 60 / 60) % 24);
    if (sec < 10) {
      sec = '0' + sec.toString();
    }
    if (min < 10) {
      min = '0' + min.toString();
    }
    if (hour < 10) {
      hour = '0' + hour.toString();
    }
    return `${hour}:${min}:${sec}`;
  };

  return (
    <div>{`경과한 시간: ${displayTimeToHourAndMinAndSec(displayTime)}`}</div>
  );
};

export default Timer;

Timer.propTypes = {
  status: PropTypes.string.isRequired,
};
