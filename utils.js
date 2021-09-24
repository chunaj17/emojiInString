const unwanted = (checks) => {
  let reg = /(^[a-z ]+$)/i;
  return reg.test(checks);
};

module.exports = unwanted;
