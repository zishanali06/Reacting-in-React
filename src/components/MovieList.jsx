import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieArray: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(result => result.json())
            .then(movieArray => {
                this.setState({ movieArray })
            })
            .catch(e => console.log(e))
    }
    render() {
        return (
            <div className="row moviegrid">
                <h3 className="col-12 text-center mt-3">MOVIES THAT HAVE NEVER BEEN WATCHED:</h3>
                {this.state.movieArray.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
            </div>
        );
    }
}

export default MovieList;