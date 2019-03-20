import React from 'react';
import {Link} from 'react-router-dom';

class PersonDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            person: {}
         }
    }

    async componentDidMount() {
        let result = await fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.personid}`);
        let person = await result.json();
        this.setState({ person: person});
    }

    render() { 
        return (
            <div className="row persondetail justify-content-center">
                <h1 className="col-12 text-center mt-5">PERSON DETAILS PAGE</h1>
                <div className="card col-6 p-0 justify-center">
                    <div className="card-header">
                        {this.state.person.age}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.person.name}</h5>
                        <p className="card-text">Eye Color: {this.state.person.eye_color}</p>
                        <p className="card-text">Hair Color: {this.state.person.hair_color}</p>
                        <p className="card-text">Gender Color: {this.state.person.gender}</p>
                        <Link to="/people" className="btn btn-primary">Back To People</Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PersonDetails;
