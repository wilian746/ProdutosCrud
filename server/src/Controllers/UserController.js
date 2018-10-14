const User = require('../Models/UserModel')

exports.createUser = (req, res, next) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  }, (err, user) => {
    if (err)
      return res.status(500).send({message: 'Error creating user', error: err})

    if (!user || Object.keys(user).length === 0)
      return res.status(404).send('User not found!')

    return res.status(200).send({
      message: 'User created successfully!',
      product: user
    })
  })
}

exports.getAllUser = (req, res, next) => {
  User.find().exec((err, users) => {
    if (err)
      return res.status(500).send({error: err})

    if (!users || users.length === 0)
      return res.status(404).send('User not found!')

    return res.status(200).json(users)
  })
}

exports.getOneUser = (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err)
      return res.status(500).send({message: 'Error fetching user', error: err})

    if (!user || Object.keys(user).length === 0)
      return res.status(404).send('User not found!')

    return res.status(200).send(user)
  })
}

exports.updateUser = (req,res, next) => {
  User.findById({ _id: req.params.id }, (err, user) => {
    if (err)
      return handleError(err)

    if (!user || Object.keys(user).length === 0)
      return res.status(404).send('User not found!')

    user.set({
      username: req.body.username,
      password: req.body.password
    })

    user.save((err, userUpdated) => {
      if (err)
        return handleError(err)

      return res.status(200).send({
        message: 'User updated successfully!',
        user: userUpdated
      })
    })
  })
}

exports.deleteUser = (req, res, next) => {
  User.findById(req.params.id, (err, userfind) => {
    if (err)
      return res.status(404).json({message: 'Error', error: err})

    if (!userfind || Object.keys(userfind).length === 0)
      return res.status(404).send('User not found!')

    User.remove({_id: req.params.id}, (err) => {
      if (err)
        return res.status(500).send({message: 'Error in delete user', error: err})

      return res.status(200).send({message: 'User deleted successfully!'})
    })
  })
}