var express = require('express');
var router = express.Router();
//model user
var User = require('../models/User');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // get all user
  User.find({}, function (err, users) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  }
  );
});

// get user by email
router.get('/:nim', function (req, res, next) {
  User.findOne({ nim: req.params.nim }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
});

// update user by email
router.put('/:nim', function (req, res, next) {
  User.findOneAndUpdate({ nim: req.params.nim }, req.body, { new: true }, function (err, user) {
    if (err) return res.status(500).send("There was a problem updating the user.");
    res.status(200).send(user);
  });
});

// POST user
router.post('/', function (req, res) {
  // create user
  User.create({
    nama: req.body.nama,
    nim: req.body.nim,
    prodi: req.body.prodi,
    angkatan: req.body.angkatan,
    email: req.body.email,
    created_at: Date.now(),
    updated_at: Date.now()
  },

    function (err, user) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(user);
    });
});

module.exports = router;
