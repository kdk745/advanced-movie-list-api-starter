import express from 'express';
import AddedMoviesController from '../controllers/AddedMoviesController';

const router = express.Router();
router.get('/addedMovies', function (request, response, next) {
  AddedMoviesController.list(request, response, next);
});

router.get('/addedMovies/:_id', function (request, response, next) {
  AddedMoviesController.show(request, response, next);
});

router.delete('/addedMovies/:_id', function (request, response, next) {
  AddedMoviesController.remove(request, response, next);
});

router.post('/addedMovies', function (request, response, next) {
  console.log(request);
  AddedMoviesController.create(request, response, next);
});

router.put('/addedMovies/:_id', function (request, response, next) {
  AddedMoviesController.update(request, response, next);
});

export default router;
