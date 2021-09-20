import React from 'react';
import PersonalTrining from '../PersonalTraining/PersonalTrining';
import RecentItem from '../RecentItem/RecentItem';

const Right = () => {

    const recentVideo = ["15+ tricks for dev tool",
        ' Understanding this',
        'be expert in JS Array',
        'How Browsers works in 4 min']

    const recentTalks = ['Functional Programming: What, Why and How',
        'JavaScript Code Quality',
        'Angular JS for Absolute Beginners',
        'Getting started with React JS',
        'High Perf JS',
        'Are you sure, you know JavaScripts',
        'High Performance JS and CSS',
        ' What\'s New in ES6',
        'Make Web Faster'];

    return (
        <div className="left">
            <PersonalTrining></PersonalTrining>
            <RecentItem topTitle="Recent Videos" btnTitle="More on Youtube" recentVideo={recentVideo}></RecentItem>
            <RecentItem topTitle="Recent Talks" btnTitle="Speaker Profile" recentVideo={recentTalks}></RecentItem>
        </div>
    );
};

export default Right;