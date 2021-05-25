const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  if (password) {
    const hash = await bcrypt.hashSync(password, 10);
    return hash;
  }

  return null;
};

module.exports = { hashPassword };
