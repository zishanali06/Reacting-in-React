import React from 'react';
import MovieList from './MovieList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="" className="mx-auto" />
                </div>
                <Router>
                    <React.Fragment>
                        <div className="row">
                            <Link className="mx-auto btn btn-primary" to="/movies">See Movies</Link>
                            <Link className="mx-auto btn btn-primary" to="/">Go Home</Link>
                            <Link className="mx-auto btn btn-primary" to="/people">See People</Link>
                        </div>
                        <Switch>
                            <Route exact path="/movies" component={MovieList} />
                            <Route exact path="/" component={App} />
                        </Switch>
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}

export default App;
