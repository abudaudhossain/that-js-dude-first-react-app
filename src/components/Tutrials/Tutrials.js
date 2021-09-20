import React from 'react';
import Tutrial from '../Tutrial/Tutrial';

const Tutrials = () => {
    const tutorialData = [
        {
            title: "Angular2 Tutorial",
            description: "If you have some idea about web development but doesnt have any clue about angular 1 or 2 or 4. This is the"
        },
        {
            title: "50 Dev tool Tips",
            description: "If you have some idea about dev tool and want to become a master..this is the right video for your"
        },
        {
            title: "scope & closure",
            description: "Understand scope, scope chain, hoisting, closure in JavaScript in the most easiest and funniest way. This is so easy even your grandma can understand."
        },
        {
            title: "Interview Questions",
            description: "If you want to upgrade the person shouting at you in every evening at 5.00pm, you have to be competent and pretty sharp with latest technology. The world is competitive. but dont worry, that js dude will compile the questions for you. this will make your life easier to win the next big thing."
        },
        {
            title: "Angular Interview Question",
            description: "A complete guideline to prepare for angular interviews. Also, you can use these questions to verify your expertise in angular."
        },
        {
            title: "this",
            description: "Value of this in Javascript is very confusing and very important. If you are not sure you are a master of this, you have to watch this video..."
        },
        {
            title: "array",
            description: "This is once in a year opportunity for beginners. You will have the opportunity to learn React from the industry expert. You will learn React Fundamentals, React Router and everything else needed to build a professional React App all by yourself with our help."
        },
        {
            title: "React Workshop for beginners",
            description: "This is once in a year opportunity for beginners. You will have the opportunity to learn React from the industry expert. You will learn React Fundamentals, React Router and everything else needed to build a professional React App all by yourself with our help."
        },
        {
            title: "console",
            description: "To be a decent web developer you have to know developer tool. If you want to be a better JavaScript developer, you have to master in the console tab of dev tool. there is no exception. no hanky panky..."
        },
    ];
    return (
        <div id="tutorial-container" className="tutorial-contianer">
            {
                tutorialData.map(tutorial => <Tutrial title={tutorial.title} description={tutorial.description} key={tutorial.title}></Tutrial>)
            }
        </div>
    );
};

export default Tutrials;