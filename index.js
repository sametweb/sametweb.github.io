//prettier-ignore
const social = [
    { platform: 'GitHub', icon: 'fa fa-github-square', link: 'https://github.com/sametweb' },
    { platform: 'LinkedIn', icon: 'fa fa-linkedin-square', link: 'https://www.linkedin.com/in/samet-mutevelli/' },
    { platform: 'Twitter', icon: 'fa fa-twitter-square', link: 'https://twitter.com/sametmutevelli' },
    { platform: 'Facebook', icon: 'fa fa-facebook-square', link: 'https://www.facebook.com/sametmutevelli' }
];
//prettier-ignore
const portfolio = [
    { title: 'NASA Picture of the Day', desc: "This project employes React useState and useEffect hooks for calling the NASA Picture of the Day API by date to retrieve daily content about cool discoveries or worth-to-share facts by NASA.", imgURL: 'images/nasa.png', stack: ['React', 'React Hooks', 'HTML', 'CSS', 'LESS'], repo: 'https://github.com/sametweb/nasa-photo-of-the-day' },
    { title: 'Lambda Calculator', desc: 'Lambda Calculator project was a React components with props practice which utilizes stateful functional components powered by React hooks. I went beyond the task and added a functionality to it.', imgURL: 'images/calculator.png', stack: ['React', 'React Hooks', 'Functional Components', 'CSS'], repo: 'https://github.com/sametweb/lambda-calculator' },
    { title: 'Scoreboard', desc: 'Scoreboard project was my initial project with React hooks and stateful functional components. ', imgURL: 'images/scoreboard.png', stack: ['React', 'React Hooks'], repo: 'https://github.com/sametweb/react-american-football-scoreboard' },
    { title: 'ilmihal oku', desc: 'In this project, I saved my source book in a JSON file by chapters and titles. Designed as a single page application powered by React Router, the way ilmihal oku designed can handle any JSON file with the same chapter/content structure.', imgURL: 'images/ilmihaloku.png', stack: ['React', 'React Router', 'HTML', 'CSS'], repo: 'https://github.com/sametweb/ilmihal' },
    { title: 'DaimaHaber v3', desc: 'DaimaHaber was a WordPress template I created years ago for a local news website. After learning advanced CSS concepts and preprocessors, I have decided to update this template and release for free. It is still an ongoing process.', imgURL: 'images/daimahaber.png', stack: ['HTML', 'CSS', 'LESS', 'Javascript'], repo: 'https://github.com/sametweb/daimahaberv3' },
    { title: 'sedirberjer', desc: "sedirberjer is my family's furniture business. I designed and coded sedirberjer.com with a fast and direct-to-customer attitude to get a better rank at Google search listings.", imgURL: 'images/sedirberjer.png', stack: ['HTML', 'CSS', 'LESS', 'Javascript'], repo: 'https://github.com/sametweb/sedirberjer' },
    { title: 'Portfolio Website', desc: 'This is the website you are browsing right now.', imgURL: 'images/portfolio.png', stack: ['HTML', 'CSS', 'LESS', 'Javascript'], repo: 'https://github.com/sametweb/sametweb.github.io' }
];

let projectsDOM = document.querySelector(".projects");

const createProject = projectObject => {
  let project = document.createElement("div");
  let img = document.createElement("img");
  let info = document.createElement("div");
  let title = document.createElement("h2");
  let desc = document.createElement("p");
  let github = document.createElement("a");
  let linkText = document.createElement("span");
  let icon = document.createElement("i");

  project.classList.add("project");
  info.classList.add("info");
  title.classList.add("title");
  desc.classList.add("desc");
  icon.classList.add("fa", "fa-github");

  img.src = projectObject.imgURL;
  img.title = projectObject.title;
  title.textContent = projectObject.title;
  desc.textContent = projectObject.desc;
  github.href = projectObject.repo;
  github.title = projectObject.title;
  linkText.textContent = "GitHub Repository";

  github.appendChild(linkText);
  github.appendChild(icon);
  info.appendChild(title);
  info.appendChild(desc);
  info.appendChild(github);
  project.appendChild(img);
  project.appendChild(info);

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
