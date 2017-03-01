import mongoose from 'mongoose';

const AddedMovieSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  posterpath: {
    required: true,
    type: String
  },
  overview: {
    required: true,
    type: String
  }
});

export default mongoose.model('Added', AddedMovieSchema, 'addedmovies');
