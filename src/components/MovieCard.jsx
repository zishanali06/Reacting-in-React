import React from 'react';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: this.props.movie.title,
            id: this.props.movie.id,
            desc: this.props.movie.description,
            director: this.props.movie.director,
            producer: this.props.movie.producer,
            release: this.props.movie.release_date,
            rtscore: this.props.movie.rt_score
        }
    }
    render() { 
        return (  );
    }
}
 
export default MovieCard;