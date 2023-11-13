var jwt = require('jsonwebtoken');

const users = [
  {
    username: 'alziputra',
    password: '123',
  },
  {
    username: 'meyzi',
    password: '123456',
  },
];

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const login = async (req, res) => {
  const { username, password } = req.body;

  const findUser = users.find((user) => user.password === password && user.username === username);

  if (!findUser) {
    return res.status(403).json({
      message: 'User not found',
    });
  }

  const token = jwt.sign(findUser, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.status(201).json({
    token: token,
  });
};

module.exports = {
  login,
};