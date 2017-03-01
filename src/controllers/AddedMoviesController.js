import AddedMovieModel from '../models/AddedMovieModel';
const AddedMoviesController = {};


AddedMoviesController.list = function (request, response, next) {
  AddedMovieModel.find().exec()
    .then(movies => {
      return response.json(movies);
    })
    .catch(err => {
      return next(err);
    });
};

AddedMoviesController.show = function (request, response, next) {
  AddedMovieModel.findById(request.params._id).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
};

AddedMoviesController.create = function (request, response, next) {

  const movie = new AddedMovieModel({
    title: request.body.title,
    posterpath: request.body.posterpath,
    overview: request.body.overview,
  });

  movie.save()
    .then(newMovie => {
      return response.json(newMovie);
    })
    .catch(err => {
      return next(err);
    });

};

AddedMoviesController.update = function (request, response, next) {
  AddedMovieModel.findById(request.params._id)
    .then(movie => {
      movie.title = request.body.title || movie.title;
      movie.posterpath = request.body.posterpath || movie.posterpath;
      movie.overview = request.body.overview || movie.overview;

      return movie.save();
    })
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
};

AddedMoviesController.remove = function (request, response, next) {
  AddedMovieModel.findByIdAndRemove(request.params._id).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
};

export default AddedMoviesController;
