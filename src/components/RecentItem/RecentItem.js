import React from 'react';
import Button from '../Button/Button';

const RecentItem = (props) => {
    return (
        <div>
            <h3>{props.topTitle}</h3>
            <ul id="recent-video">
                {
                    props.recentVideo.map(item => <li key={item}>{item}</li>)
                }
            </ul>
            <Button title={props.btnTitle}></Button>
        </div>
    );
};

export default RecentItem;