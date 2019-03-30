const getRandomNumberInRange = (min, max) => {
  const random = (Math.random() * (max - min)) + min;
  return Math.floor(random);
};

module.exports = {
  getRandomNumberInRange,
};
