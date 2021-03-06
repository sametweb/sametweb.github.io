//prettier-ignore
const social = [
    { platform: 'GitHub', icon: 'fa fa-github-square', link: 'https://github.com/sametweb' },
    { platform: 'LinkedIn', icon: 'fa fa-linkedin-square', link: 'https://www.linkedin.com/in/samet-mutevelli/' },
    { platform: 'Twitter', icon: 'fa fa-twitter-square', link: 'https://twitter.com/sametmutevelli' },
    { platform: 'Facebook', icon: 'fa fa-facebook-square', link: 'https://www.facebook.com/sametmutevelli' }
];
//prettier-ignore
const portfolio = [
//  { title: '', desc: '', imgURL: '', stack: ['React', 'React Router'], repo: '', demo: '' },
    { title: 'To-Do App', desc: 'The state management is handled with useReducer hook.', imgURL: 'images/reducer-todo.png', stack: ['React', 'HTML', 'CSS'], repo: 'https://github.com/sametweb/reducer-todo', demo: 'https://reducertodosm.netlify.com/' },
    { title: 'GitHub User Card', desc: 'API request to GitHub API: Main objective of the project is to practice class components with didMount and didUpdate life-cycle methods.', imgURL: 'images/githubusercard.png', stack: ['React', 'Material UI'], repo: 'https://github.com/sametweb/React-Github-User-Card', demo: 'https://githubusercardsm.netlify.com/' },
    { title: 'To-Do App', desc: 'To-Do app developed in React with class components. Data persist even after refresing or leaving the page with the help of JS\'s localStorage.', imgURL: 'images/todoapp.png', stack: ['React', 'Semantic UI'], repo: 'https://github.com/sametweb/React-Todo', demo: 'https://todoappsm.netlify.com/' },
    { title: 'Safe Refuge - Refugee Stories', desc: 'This web application is to share stories anonymously. Admin panel lets you approve the stories that are submitted by the users. I worked on: Homepage, Single stories page, fetch_single_story action creator, UX design of the overall application by Reactstrap and Material UI.', imgURL: 'images/saferefuge.png', stack: ['React', 'React Router', 'Redux', 'Formik', 'Reactstrap', 'Bootstrap', 'Material UI'], repo: 'https://github.com/bw-refugeestories/Front-End', demo: 'https://saferefugeapp.netlify.com/' },
    { title: 'Rick and Morty Fan Page', desc: 'A single page application that is built during 3 hours sprint challenge at Lambda School.', imgURL: 'images/rick-and-morty.png', stack: ['React', 'React Router', 'reactstrap'], repo: 'https://github.com/sametweb/Sprint-Challenge-Single-Page-Apps', demo: 'https://rick-and-mortysm.netlify.com' },
    { title: 'User Onboarding', desc: 'A single page application for general user sign up purposes. Form creation and validation is provided by Formik and Yup.', imgURL: 'images/user-onboarding.png', stack: ['React', 'Formik', 'Yup', 'Semantic UI'], repo: 'https://github.com/sametweb/User-Onboarding', demo: 'https://user-onboardingsm.netlify.com/' },
    { title: 'Team Builder', desc: 'A single page application for managing teams and members of teams.', imgURL: 'images/teambuilder.png', stack: ['React', 'React Router', 'Bootstrap', 'Reactstrap'], repo: 'https://github.com/sametweb/team-builder', demo: 'https://team-buildersm.netlify.com/' },
    { title: 'Apple.com Navigation', desc: 'A navigation that is created with nested routes in React Router.', imgURL: 'images/applenav.png', stack: ['CSS', 'React', 'React Router'], repo: 'https://github.com/sametweb/React-Router-Apple-Nav', demo: 'https://apple-navsm.netlify.com/' },
    { title: 'ilmihal oku Android App', desc: 'Android application version of the ilmihal project. The app is waiting to be approved on Google Play.',  imgURL: 'images/ilmihal-app.png', stack: ['React Native', 'React Router'], repo: 'https://github.com/sametweb/ilmihal-native', demo: 'https://play.google.com/store/apps/details?id=com.oku.ilmihal' },
    { title: 'React Wars', desc: 'This web app makes a request to an API called SWAPI (Star Wars API) and fetches information about Star Wars characters. Three hours of work as a Sprint Challenge at Lambda School.', imgURL: 'images/reactwars.png', stack: ['React', 'axios', 'Bootstrap', 'Reactstrap'], repo: 'https://github.com/sametweb/Sprint-Challenge-React-Wars', demo: 'https://reactwarssm.netlify.com/' },
    { title: 'NASA Picture of the Day', desc: "This project employes React { useState, useEffect } hooks for calling the NASA Picture of the Day API by date to retrieve daily content about cool discoveries or worth-to-share facts by NASA.", imgURL: 'images/nasa.png', stack: ['React', 'React Hooks', 'axios', 'HTML', 'CSS', 'LESS'], repo: 'https://github.com/sametweb/nasa-photo-of-the-day', demo: 'https://nasasm.netlify.com' },
    { title: 'Lambda Calculator', desc: 'Lambda Calculator project was a React components with props practice which utilizes stateful functional components powered by React hooks. I went beyond the task and added a functionality to it.', imgURL: 'images/calculator.png', stack: ['React', 'React Hooks', 'CSS'], repo: 'https://github.com/sametweb/lambda-calculator', demo: 'https://calculatorsm.netlify.com/' },
    { title: 'Scoreboard', desc: 'Scoreboard project was my initial project with React hook { useState } and stateful functional components. We have buttons and inputs to update each teams score.', imgURL: 'images/scoreboard.png', stack: ['React', 'React Hooks'], repo: 'https://github.com/sametweb/react-american-football-scoreboard', demo: 'https://footballsm.netlify.com/' },
    { title: 'ProLift', desc: 'ProLift was the first build week project of mine at Lambda School. I worked with 2 other UI developers and 4 React developers. I was responsible for creating the landing homepage for the marketing website.', imgURL: 'images/prolift.png', stack: ['HTML', 'CSS', 'LESS'], repo: 'https://github.com/Weight-Lifting-Journal-Tattoine/WebUI', demo: 'https://weight-lifting-journal-tattoine.github.io/WebUI/' },
    { title: 'ilmihal oku', desc: 'In this project, I saved my source book in a JSON file by chapters and titles. Designed as a single page application powered by React Router, the way ilmihal oku designed can handle any JSON file with the same chapter/content structure.', imgURL: 'images/ilmihal.png', stack: ['React', 'React Router', 'HTML', 'CSS'], repo: 'https://github.com/sametweb/ilmihal', demo: 'https://ilmihaloku.com' },
    { title: 'DaimaHaber v3', desc: 'DaimaHaber was a WordPress template I created years ago for a local news website. After learning advanced CSS concepts and preprocessors, I have decided to update this template and release for free. It is still an ongoing process.', imgURL: 'images/daimahaber.png', stack: ['HTML', 'CSS', 'LESS', 'Javascript'], repo: 'https://github.com/sametweb/daimahaberv3', demo: 'https://sametweb.github.io/daimahaberv3' },
    { title: 'sedirberjer', desc: "sedirberjer is my family's furniture business. I designed and coded sedirberjer.com with a fast and direct-to-customer attitude to get a better rank at Google search listings.", imgURL: 'images/sedirberjer.png', stack: ['HTML', 'CSS', 'LESS', 'Javascript'], repo: 'https://github.com/sametweb/sedirberjer', demo: 'https://sedirberjer.com' },
    { title: 'Portfolio Website', desc: 'This is the website you are browsing right now.', imgURL: 'images/portfolio.png', stack: ['HTML', 'CSS', 'LESS', 'Javascript'], repo: 'https://github.com/sametweb/sametweb.github.io', demo: '#' }
];

let projectsDOM = document.querySelector(".projects");

const createProject = projectObject => {
  let project = document.createElement("div");
  let img = document.createElement("img");
  let info = document.createElement("div");
  let title = document.createElement("h2");
  let desc = document.createElement("p");
  let stack = document.createElement("p");
  let repo = document.createElement("a");
  let demo = document.createElement("a");
  let links = document.createElement("div");
  let repoText = document.createElement("span");
  let demoText = document.createElement("span");
  let repoIcon = document.createElement("i");
  let demoIcon = document.createElement("i");

  project.classList.add("project");
  info.classList.add("info");
  title.classList.add("title");
  desc.classList.add("desc");
  stack.classList.add("stack");
  links.classList.add("links");
  repoIcon.classList.add("fa", "fa-github");
  demoIcon.classList.add("fa", "fa-tv");

  img.src = projectObject.imgURL;
  img.title = projectObject.title;
  title.textContent = projectObject.title;
  desc.textContent = projectObject.desc;
  repo.href = projectObject.repo;
  repo.title = projectObject.title;
  demo.href = projectObject.demo;
  demo.title = projectObject.title;
  repoText.textContent = "Repository";
  demoText.textContent = "Live Demo";

  stackHandler = stackArray => {
    return stackArray.map(item => {
      let stackItem = document.createElement("span");
      stackItem.textContent = item;
      stack.appendChild(stackItem);
    });
  };

  stackHandler(projectObject.stack);
  repo.appendChild(repoIcon);
  repo.appendChild(repoText);
  demo.appendChild(demoIcon);
  demo.appendChild(demoText);
  info.appendChild(title);
  info.appendChild(stack);
  info.appendChild(desc);
  links.appendChild(repo);
  links.appendChild(demo);
  project.appendChild(img);
  project.appendChild(info);
  project.appendChild(links);

  return project;
};

portfolio.forEach(project => projectsDOM.appendChild(createProject(project)));

//Social Links
let socialDOM = document.querySelector(".social");

const createSocialIcons = socialObject => {
  let link = document.createElement("a");
  let icon = document.createElement("i");

  let iconStyles = socialObject.icon.split(" ");

  link.href = socialObject.link;
  link.target = "_blank";
  link.title = `Samet Mutevelli ${socialObject.platform}`;
  icon.classList.add(...iconStyles);

  link.appendChild(icon);

  return link;
};

social.forEach(item => socialDOM.appendChild(createSocialIcons(item)));
