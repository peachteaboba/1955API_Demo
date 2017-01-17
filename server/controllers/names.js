var mongoose = require('mongoose');
var Name = mongoose.model('Name');



module.exports = {

  showAll: function(req, res){
      // Find all names and respond with json
      Name.find({}, function(err, data) {
        if(err){
          console.log("ya done messed up");
        } else {
          console.log(data);
          res.json(data);
        }
      });
  },
  addName: function(req, res){
    var name = new Name({name: req.params.name});
    name.save(function(err){
      if(err){
        console.log("there's and error when saving");
      } else {
        res.redirect('/');
      }
    });
  },
  removeName: function(req, res){
    Name.remove({name: req.params.name}, function(err){
      if(err){
        console.log("there's and error when removing");
      } else {
        res.redirect('/');
      }
    });
  },
  showOne: function(req, res){
      // Find all names and respond with json
      Name.findOne({name: req.params.namee}, function(err, data) {
        if(err){
          console.log("ya done messed up");
        } else {
          console.log(data);
          res.json(data);
        }
      });
  },




  // showAll: function(req, res) {
  //   // Find all messages and render index page
  //   Message.find({}).populate('comments').exec(function(err, data) {
  //     if(err){
  //       console.log("ya done messed up");
  //     } else {
  //       console.log(data);
  //       res.render('index', {messages: data});
  //     }
  //   });
  // },
  // addMessage: function(req, res) {
  //     console.log("POST DATA", req.body);
  //     var message = new Message({name: req.body.name, message: req.body.message});
  //     message.save(function(err) {
  //         if (err) {
  //             console.log('something went wrong');
  //         } else {
  //             console.log('successfully added a message!');
  //             res.redirect('/');
  //         }
  //     });
  // }

}
