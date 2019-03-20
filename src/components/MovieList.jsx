import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieArray: []
        }
    }

    //THIS IS USING THE .THEN PROMISE CHAINING
    // componentDidMount() {
    //     fetch("https://ghibliapi.herokuapp.com/films")
    //         .then(result => result.json())
    //         .then(movieArray => {
    //             this.setState({ movieArray })
    //         })
    //         .catch(e => console.log(e))
    // }

    //THIS IS USING ES6 TRY AND CATCH
    async componentDidMount() {
        try{
            let apiresultinjson = await fetch('https://ghibliapi.herokuapp.com/films');
            let convertjsontoarray = await apiresultinjson.json();
            this.setState({ movieArray: convertjsontoarray });
        } catch (e) {
            console.log(e);
        }
        

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