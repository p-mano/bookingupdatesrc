var express = require('express');
var router = express.Router();
var Service = require('../services/moviedbservice');

var movieList=[{
    id:1,name:'indra',year:2000
},
{
    id:2,name:'indra sena',year:2000
}]

router.get('/', function(req, res, next) {
  var callback = function(result){
    res.send(result);
  }
  Service.getMovies(callback);
});
// router.post('/', function(req, res, next) {
//     var callback = function(result){
//       res.send({"result":result});
//     }
//     var movie = req.body;
//     Service.addMovie(movie, callback);
//   });
  
//   router.delete('/:id', function(req, res, next) {
//     var callback = function(result){
//       res.send({"result":result});
//     }
//     var movieId = req.params.id;
//     Service.deleteMovie(movieId,callback);
//   });
  
//   router.get('/:id', function(req, res, next) {
//     var callback = function(movie){
//       res.send(movie);
//     }
//     var movieId = req.params.id;
//     var movie = dbService.getMovieById(movieId,callback);
//   });
  
//   router.put('/:id', function(req, res, next) {
//     var callback = function(result){
//       res.send({'result':result});
//     }
//     var movieId = req.params.id;
//     var movie = req.body;
//     Service.updateMovie(movie,callback);
//   });
// router.get('/:id', function(req, res, next) {

//     res.send(movieList);
// });

module.exports = router;
