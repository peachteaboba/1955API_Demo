

// Require controller methods
var names = require('../controllers/names.js');





module.exports = function(app){

  // GET ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: GET
  // GET ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: GET
  // GET ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: GET
  app.get('/', function(req, res){
    names.showAll(req, res);
  });

  app.get('/new/:name/', function(req, res){
    names.addName(req, res);
  });

  app.get('/remove/:name/', function(req, res){
    names.removeName(req, res);
  });

  app.get('/:namee', function(req, res){
    names.showOne(req, res);
  });



  // POST :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: POST
  // POST :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: POST
  // POST :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: POST
  // app.post('/addMessage', function(req, res){
  //   messages.addMessage(req, res);
  // });
  //
  //
  // app.post('/addComment/:id', function(req, res){
  //   comments.addComment(req, res);
  // });


}
