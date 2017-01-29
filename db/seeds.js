const mongoose = require('mongoose');
const Work = require('../models/work');
const Blog = require('../models/blog');

// //  If wanting to remove the promise warning on running the seeds file..
// const Promise = require('bluebird');
// mongoose.Promise = Promise;

const db = require('../config/db');
mongoose.connect(db.uri);

Work.collection.drop();
Blog.collection.drop();

console.log('Dropping the db\'s');

const workList =
  [
    {
      'title': 'Legends of Key Hero',
      'shortIntro': 'HTML, CSS, jQuery',
      'mainContent': 'This objective was to create a web based game using javascript and html. Starting off with a standard typing game, I expanded the idea to included a time and \'collision\' based model, along with music to try and emulate something similar to the popular game Guitar Hero.',
      'heroImage': '/images/project-ss-keyhero@3x.png',
      'gitHub': 'https://github.com/lukejohnhammond/WDI23_LDN_P1_Key-Hero',
      'liveLink': 'http://keyhero.herokuapp.com/'
    },
    {
      'title': 'Conquiztadors',
      'shortIntro': 'jQuery, Google Maps, AJAX, Node.js, MongoDB',
      'mainContent': 'A Google Maps, world domination game. Answer the questions about your chosen country to win points and defeat the the villain. Google Maps, jQuery and AJAX front end on a Node.js/MongoDB backend. JWT Authenticated login. Marvel and RESTCountries RESTful API integration.',
      'heroImage': '/images/project-ss-conquiztadors@3x.png',
      'gitHub': 'https://github.com/Johne103/WDI-Project2',
      'liveLink': 'http://conquiztadors.herokuapp.com/'
    },
    {
      'title': 'Van Pelt\'s Travel Buddies',
      'shortIntro': 'MEAN stack app',
      'mainContent': 'Van Pelt’s Travel Buddies is a MEAN stack app that pulls together like minded adventurers and leaders to participate on the same challenge, allowing the leaders to put together a team and also market their trip through blogging. This app made use of embedded and referenced models, css keyframe animations and a Google Maps Angular directive. My role in this project was primarily focused on the stories (blog section), styling and general blog fixing.',
      'heroImage': '/images/project-ss-vanpelt@3x.png',
      'gitHub': 'https://github.com/Smodger/WDI_23_Project3',
      'liveLink': 'http://wdi-go-app.herokuapp.com/'
    },
    {
      'title': 'CTRL Hub',
      'shortIntro': 'Angular, Ruby on Rails, PostgreSQL',
      'mainContent': 'Utilising a Ruby On Rails built API, CTRL Hub is an application interface simulation that would allow users to control their smart home. The app allows users to add rooms, and appliances to those rooms, then assign settings to each appliance based on set parameters. CTRL Hub is also designed to be easily integrated with the Smart Things API in the future.',
      'heroImage': '/images/project-ss-ctrlhub@3x.png',
      'gitHub': 'https://github.com/lukejohnhammond/WDI23_LDN_P4_CTRL-Hub',
      'liveLink': 'https://ctrlhub.herokuapp.com/'
    }
  ];

workList.forEach((project) => {
  Work.create(project, (err, work) => {
    if(err) return console.log(err);
    console.log(work + ' Was created!');
  });
});

const blogList =
  [
    {
      'title': 'This blog is coming soon',
      'shortIntro': 'Coming Soon'
    }
  ];

blogList.forEach((project) => {
  Blog.create(project, (err, blog) => {
    if(err) return console.log(err);
    console.log(blog + ' Was created!');
  });
});

mongoose.connection.close();
