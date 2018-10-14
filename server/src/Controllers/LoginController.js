const jwt = require('jsonwebtoken')
const moment = require('moment')
moment.locale('pt-BR')

const generateToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1h' })
}

const setUserInfo = (request) => {
  return {
    _id: request._id,
    username: request.username,
    password: request.password,
    createdAt: request.createdAt,
    updatedAt: request.updatedAt
  }
}

exports.login = (req, res, next) => {
  let userInfo = setUserInfo(req.user)

  return res.status(200).json({
    token: `Bearer ${generateToken(userInfo)}`,
    user: userInfo
  })
}

exports.testAuth = (req, res, next) => {
  return res.status(200).json(req.user)
}