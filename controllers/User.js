let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let User = require('../models/User.js');
let fs = require('fs')

let bcrypt = require("bcryptjs");
let jwtOptions = require('../config/jwt.js');

exports.updateById = function(req, res) {

  let update = {};

  if (req.body.picture != undefined) {
    update.picture = req.body.picture;
  }

  if (req.body.name != undefined) {
    update.nome = req.body.nome;
  }

  User.findOneAndUpdate({ _id : req.account._id }, update, function(err, accounts) {

    if (err) {

      return res.json({ success : false, err : err });

    } else {

      return res.json({ success : true, data : accounts });

    }

  });

}

exports.getByPropertyId = function(req, res) {

  User.find({ property : req.params.property }, function(err, accounts) {

    if (err) {

      return res.json({ success : false, err : err });

    } else {

      return res.json({ success : true, data : accounts });

    }

  });

}

exports.create = function(req,res) {

  let name = req.body.name;
  let password = req.body.password;
  let email = req.body.email;

  /* aniversario */
  let day = req.body.day;
  let month = req.body.month;
  let year = req.body.year;

  let user = new User();

  user.nome = nome;
  let hash = bcrypt.hashSync(password, 10);
  user.password = hash;
  user.email = email;

  user.day = day;
  user.month = month;
  user.year = year;

  user.save(function(err) {

    if (err) {

      console.log(err)
      return res.json({ success : false });

    } else {

      return res.json({ success : true });

    }

  });

};

exports.login = function(req,res) {

  let password = req.body.senha;

  User.findOne({ email : req.body.email }, function(err, account) {

    if (err) {

      return res.json({ success : false, err : err });

    } else {

      if (account == null || account == undefined) {

        return res.json({ success : false, err : 1 });

      } else {

        bcrypt.compare(password, account.senha, function(err, response) {

          if (err) {
            return res.json({ success : false, err : err });
          }

          if (response) {

            let cert = fs.readFileSync(__dirname + '/../keys/private.pem');

            let payload = {
              "_id" : account._id
            };

            // Create Token
            jwt.sign(payload, { key : cert, passphrase: '1234' }, { algorithm: 'RS256' }, function(err, token) {

              if (err) {

                return res.json({ success : false, err : err, status : 00 });

              } else {

                account.senha = "";
                let user = account;

                return res.json({ success : true, token : token, data : user, status : 01 });

              }

            });

          }
          //END response

        });
        //END bcrypt compare

      }

    }
    //END if (err)

  });
  //END User.findOne

  // $and: [ { email : req.body.email }, { senha : req.body.senha }

};

exports.getById = function(req,res) {

  User.findOne({ _id : req.params.id }, function(err, doc) {

    if (err) {

      return res.json({ success : false, data : err });

    } else {

      doc.password = "";

      return res.json({ success : true, data : doc });

    }

  });

}
