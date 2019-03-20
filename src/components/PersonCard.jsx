import React from 'react';

const PersonCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card my-2" style={{ width: '20rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.person.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Gender: {props.person.gender}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Age: {props.person.age}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Eye Color: {props.person.eye_color}</h6>
                    <a href={props.person.url} className="card-link">See Unique Endpoint for Movie</a>
                </div>
            </div>
        </div>
    );
}

export default PersonCard;