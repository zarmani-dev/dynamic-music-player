const calculateTimeStamp = (seconds) => {
  const minute = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return {
    minute,
    remainingSeconds,
  };
};

export default calculateTimeStamp;
