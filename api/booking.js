var express = require('express');
var router = express.Router();
var Service = require('../services/bookingdbservice');



router.get('/', function(req, res, next) {
    var callback= function(result){
    res.send(result);
    }
    Service.getBooking(callback);
});
// router.get('/:id', function(req, res, next) {

//     res.send(movieList);
// });
router.post('/', function(req, res, next) {
    var callback = function(result){
      res.send({"result":result});
    }
    var booking = req.body;
    Service.addBooking(booking, callback);
  });
  
  router.delete('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({"result":result});
    }
    var bookingId = req.params.id;
    Service.deleteBooking(bookingId,callback);
  });
  
  router.get('/:id', function(req, res, next) {
    var callback = function(booking){
      res.send(booking);
    }
    var bookingId = req.params.id;
    var booking = dbService.getBookingById(bookingId,callback);
  });
  
  router.put('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var bookingId = req.params.id;
    var booking = req.body;
    Service.updateBooking(booking,callback);
  });
module.exports = router;
