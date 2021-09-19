import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

// header Component 
function Header() {
  return (
    <header>
      <Nav></Nav>
      <Banner></Banner>
    </header>


  );
}

// nav bar component 
function Nav() {
  return (
    <nav>
      <h3>That JS Dude</h3>
      <button className="">sing in</button>
    </nav>
  )
}
// banner component
function Banner() {
  return (
    <div className="banner">
      <h1>Exclusive React Workshop for beginners!</h1>
      <p>Once in a year opportunity to learn and build your first React app</p>
      <Button title="Learn more"></Button>
    </div>
  );
}

function Main() {
  return (
    <section className="main">
      <Right></Right>
      <Left></Left>
    </section>
  );
}
// Right side component 
function Left() {
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
      <PersonalTraining></PersonalTraining>
      <RecentItem topTitle="Recent Videos" btnTitle = "More on Youtube" recentVideo = {recentVideo}></RecentItem>
      <RecentItem topTitle="Recent Talks" btnTitle = "Speaker Profile" recentVideo = {recentTalks}></RecentItem>
    </div>
  )
}
function PersonalTraining() {
  return (
    <div>
      <h3>Personal Training for $30</h3>
      <p>If you need career guide, personal interview tips, mock interview, Life Coaching, or anything else,
        you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book a time
        slot You can Book me</p>
    </div>
  )
}

function RecentItem(props) {

  return (
    <div>
      <h3>{props.topTitle}</h3>
      <ul id="recent-video">
         {
           props.recentVideo.map(item => <li>{item}</li>)
         }
      </ul>
      <Button title = {props.btnTitle}></Button>
    </div>
  )
  
}
// left side component 
function Right() {
  return (
    <div className="right">
      <JsConfus></JsConfus>
      <Tutrials></Tutrials>
    </div>
  );
}
// Js confus Component 
function JsConfus() {
  return (
    <div className="js-confus">
      <h2>JS Confusing Parts</h2>
      <p>Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event
        delegation, dom, timers and many more caveats.</p>
    </div>
  )
}

function Tutrials() {
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
        tutorialData.map(tutorial => <Tutrial title={tutorial.title} description={tutorial.description}></Tutrial>)
      }
    </div>
  );
}

// tutorial Component 
function Tutrial(props) {

  return (
    <div>
      <div className="tutorial">
        <h1 className="title">{props.title}</h1>
        <p>{props.description}</p>
        <Button title="View details"></Button>
      </div>

    </div>
  );

}

// Button component 
function Button(props) {
  return (
    <button className="btn">{props.title} &gt;&gt; </button>
  );
}

function Footer(){
  return (
    <footer>
        <p>© thatJSDude 2021, Abu Daud Hossain.</p>
    </footer>
  )
}


export default App;
