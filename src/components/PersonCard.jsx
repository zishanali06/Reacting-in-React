import React from 'react';
import {Link} from 'react-router-dom';

const PersonCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card my-2" style={{ width: '20rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.person.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Gender: {props.person.gender}</h6>
                    <Link to={`/people/${props.person.id}`} className="card-link">Click to See Details</Link>
                </div>
            </div>
        </div>
    );
}

export default PersonCard;