import React from "react";
import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';




export const Hero = ({ movies }) => {

      const navigate= useNavigate();
      function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }


  return (
    <div className="movie-carousel-container">
      {movies && movies.length > 0 ? (
        <Carousel>
          {movies.map((movie, index) => (
            <Paper key={movie.imdbId }>
              <div className="movie-card-container">
                <div className="movie-card"  style={{"--img": `url(${movie.backdrops[0]})`}}>
                  <div className="movie-details">
                    <div className="movie-poster">
                      <img
                        src={movie.poster} alt=""/>
                        
                        
                      
                    </div>
                    <div className="movie-title">
                      <h4>{movie.title}</h4>
                    </div>
                    <div className="movie-buttons-container">
                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                    <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                            </Link>
                                            <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                                        </div>
                                       
                                        
                                        
                                    


                                        </div>
                  </div>
                </div>
              </div>
            </Paper>
          )
          )}
        </Carousel>
      ) : (
        <p>No movies available to display.</p>
      )}
    </div>
  );
};
