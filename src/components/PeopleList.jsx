import React from 'react';
import PersonCard from './PersonCard';

class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peopleArray: []
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://ghibliapi.herokuapp.com/people');
            let peopleArray = await res.json();
            this.setState({ peopleArray })
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div className="row peoplelist">
                {this.state.peopleArray.map(person => (<PersonCard person={person} key={person.id} />))}
            </div>
        );
    }
}

export default PeopleList;