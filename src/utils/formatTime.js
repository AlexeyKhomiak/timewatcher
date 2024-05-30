const formatTime = (time) => {
  const getMilliseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2);
  const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
  const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600000)}`.slice(-2);
  return {
    hours: time < 3600000 ? null : getHours,
    minutes: getMinutes,
    seconds: getSeconds,
    milliseconds: getMilliseconds,
  };
};

export default formatTime;
