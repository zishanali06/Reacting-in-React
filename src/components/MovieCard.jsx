import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    return ( 
        <div className="col-lg-4 col-md-6">
                <div className="card my-2" style={{ width: '20rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{props.movie.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Release Date: {props.movie.release_date}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Producer: {props.movie.producer}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Director: {props.movie.director}</h6>
                        <p className="card-text">{props.movie.description}</p>
                        <Link to={`/desc/${props.movie.id}`} className="card-link">See Unique Endpoint for Movie</Link>
                    </div>
                </div>
            </div>
    );
}
 
export default MovieCard;