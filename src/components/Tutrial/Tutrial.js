import React from 'react';
import Button from '../Button/Button';

const Tutrial = (props) => {
    return (
        <div>
            <div className="tutorial">
                <h1 className="title">{props.title}</h1>
                <p>{props.description}</p>
                <Button title="View details"></Button>
            </div>

        </div>
    );
};

export default Tutrial;