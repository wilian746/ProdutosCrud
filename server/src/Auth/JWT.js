const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local').Strategy
const jwt = require('jsonwebtoken')
const User = require('../Models/UserModel')

let localOptions = {
  usernameField: 'username'
}

let localLogin = new LocalStrategy(localOptions, (username, password, done) => {
  User.findOne({
    username: username,
    password: password
  }, (err, user) => {
    if (err)
        return done(err);

    if(!user){
      return done('User not found!!');
    }

    return done(null, user)
  })
})

let jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKEN_SECRET
}

let jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload._id, (err, user) => {
    if (err)
        return done(err);

    if(!user){
      return done('User not found!!');
    }

    return done(null, user)
  })
})

passport.use(jwtLogin)
passport.use(localLogin)

module.exports = {
  initialize: () => {
    return passport.initialize()
  },
  authenticate: (req, res, next) => {
    return passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        return res.status(400).json({erro: err})
      }

      if (!user || Object.keys(user).length === 0) {
        return res.status(401).json({
          status: 'error',
          error: 'ANOTHORIZED_USER',
          info: info.message ? info.message : ''
        })
      }

      req.user = user
      next()
    })(req, res, next)
  },
  login: (req, res, next) => {
    return passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err) {
        return res.status(400).json({erro: err})
      }

      if (!user || Object.keys(user).length === 0) {
        return res.status(401).json({
          status: 'error',
          error: 'ANOTHORIZED_USER'
        })
      }

      req.user = user
      next()
    })(req, res, next)
  },
  decodeToken: (token) => {
    let decoded = jwt.decode(token.substr(7))
    return decoded
  }
}
