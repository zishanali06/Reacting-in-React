import React from 'react';
import { Link } from 'react-router-dom';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    async componentDidMount() {
        try {
            let result = await fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.movieid}`);
            let movie = await result.json();
            this.setState({ movie })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="row moviedetail justify-content-center">
                <h1 className="col-12 text-center mt-5">MOVIE DETAILS PAGE</h1>
                <div className="card col-6 p-0 justify-center">
                    <div className="card-header">
                        {this.state.movie.release_date}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.movie.title}</h5>
                        <p className="card-text">{this.state.movie.description}</p>
                        <Link to="/movies" className="btn btn-primary">Back To Movies</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;