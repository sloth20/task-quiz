const Utils = {
  timeToHourAndMinAndSec(time) {
    let sec = Math.floor((time / 1000) % 60);
    let min = Math.floor((time / 1000 / 60) % 60);
    let hour = Math.floor((time / 1000 / 60 / 60) % 24);
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
  },
};

export default Utils;
