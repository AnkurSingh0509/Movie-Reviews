package com.example.Movies;

import com.example.Movies.Movie;
import com.example.Movies.MovieRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    public List<Movie> findAllMovies() {
        return repository.findAll();
    }
    public Optional<Movie> singleMovie(String imdbId) {
        return repository.findMovieByImdbId(imdbId);
    }


}