var express = require('express');
const user = require('../models/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  user.find({})
    .then(users => res.status(200).json(users))
    .catch(err => console.log(err))
});

router.post('/addUser', (req, res) => {
  const { name, email, amount } = req.body;
  user.create({ name, email, amount })
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

router.post('/transfer', (req, res) => {
  const { from, to, amount } = req.body
  console.log(from, to, amount)
  user.updateOne({ name: from }, { $inc: { amount: -1 * amount } })
    .then(resp => {
      user.updateOne({ name: to }, { $inc: { amount: amount } })
        .then(resp => res.json(resp))
        .catch(err => console.log(err))

    })
    .catch(err => console.log(err))


})

module.exports = router;
