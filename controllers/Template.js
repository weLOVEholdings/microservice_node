let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let Template = require('../models/Template.js');

let bcrypt = require("bcryptjs");
let jwtOptions = require('../config/jwt.js');

exports.create = function(req,res) {

  let test = req.body.test;
  let test2 = req.body.test2;

  let Template = new Template();

  Template.test = test;
  Template.test2 = test2;

  Template.save(function(err, doc) {

    console.log(doc)

    if (err) {

      return res.json({ success : false, err : err });

    }

    if (doc != undefined && doc != null) {

      console.log(doc)
      return res.json({ success : true, data : doc });

    } else {

      return res.json({ succes : false });

    }

  });
  //END Template

};

exports.getById = function(req,res) {

  Template.findOne({ _id : req.params.id }, function(err, doc) {

    if (err) {

      return res.json({ success : false, data : err });

    } else {

      return res.json({ success : true, data : doc });

    }

  });

}

exports.getAll = function(req,res) {

  Template.find({}, function(err, doc) {

    if (err) {

      return res.json({ success : false, data : err });

    } else {

      return res.json({ success : true, data : doc });

    }

  });

};
