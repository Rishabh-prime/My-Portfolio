// !! Function to initialize event listeners for the header
function initializeHeaderEventListeners() {
    const bar = document.getElementById('bar');
    const navbar = document.getElementById('navbar');
    const closebutton = document.getElementById('close');

    if (bar) {
        bar.addEventListener('click', () => {
            console.log('Bar clicked');
            navbar.classList.toggle('active');
            closebutton.classList.toggle('active');
            bar.classList.toggle('active');
        });
    }

    if (closebutton) {
        closebutton.addEventListener('click', () => {
            console.log('Close button clicked');
            navbar.classList.toggle('active');
            closebutton.classList.toggle('active');
            bar.classList.toggle('active');
        });
    }
}

// !!Function to load the hero section
function loadHero() {
    fetch('hero.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('hero-section').innerHTML = data;
        });
}

// !!Function to load the about section
function loadAbout() {
    fetch('about.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('about-section').innerHTML = data;
        });
}


// !----------------------------------------------- Project section code ------------------------------------------------*/


const projectsData = [
  {
    "imgSrc": "./Images/ecommerce website.jpg",
    "projectName": "Ecommerce Website",
    "projectDescription": "This is an ecommerce website. It is built using HTML, CSS and JavaScript. ",
    "githubLink": "https://github.com/Rishabh-prime/Ecommerce-Website"
  },
  {
    "imgSrc": "./Images/BlogImage.jpg",
    "projectName": "Blog Website",
    "projectDescription": "This is an blog website. It is built using HTML, CSS,JavaScript and React.js. ",
    "githubLink": "https://github.com/Rishabh-prime/Blog-Website-"
  },
  {
    "imgSrc": "./Images/code editor.jpg",
    "projectName": "Code Editor",
    "projectDescription": "This is a code editor. It is built using HTML, CSS ,JavaScript and React.js.",
    "githubLink": "https://github.com/your-username/code-editor"
  },
  {
    "imgSrc": "./Images/dog api.jpg",
    "projectName": "Dog Breed Search",
    "projectDescription": "This is a Dog Search website. It is built using HTML, CSS, JavaScript and using API. ",
    "githubLink": "https://github.com/Rishabh-prime/Dog-Breed-Image-Viewer"
  },
  {
    "imgSrc": "./Images/W.jpg",
    "projectName": "Weather App",
    "projectDescription": "This is a weather app. It is built using HTML, CSS, JavaScript and using API.",
    "githubLink": "https://github.com/Rishabh-prime/Weather-APP"
  },
  {
    "imgSrc": "./Images/Plinko.png",
    "projectName": "Plinko Game",
    "projectDescription": "This is a Game. It is built using HTML, CSS, JavaScript ",
    "githubLink": "https://rishabh-prime.github.io/PlinkoGame/"

  }
];

const projectsSection = document.getElementById("projects-section");

projectsData.forEach(project => {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  const projectImage = document.createElement("div");
  projectImage.classList.add("project-image");
  const img = document.createElement("img");
  img.src = project.imgSrc;
  img.alt = project.projectName;
  projectImage.appendChild(img);

  const projectInformation = document.createElement("div");
  projectInformation.classList.add("project-info");

  const projectName = document.createElement('h2');
  projectName.classList.add("project-name");
  projectName.textContent = project.projectName;

  const projectDescription = document.createElement('p');
  projectDescription.classList.add("project-description");
  projectDescription.textContent = project.projectDescription;

  projectInformation.appendChild(projectName);
  projectInformation.appendChild(projectDescription);

  projectContainer.appendChild(projectImage);
  projectContainer.appendChild(projectInformation);

  // Add click event listener to navigate to GitHub link
  projectContainer.addEventListener('click', () => {
    window.location.href = project.githubLink;
  });

  projectsSection.appendChild(projectContainer);
});




// !! --------------------------- Others project content ---------------------------

const otherProject = [
  {
    "ButtonName": "To Do List",
    "description": "A simple to-do list application.",
    "githubLink": "https://github.com/Rishabh-prime/Todo-Task"
  },
  {
    "ButtonName": "Notes",
    "description": "A web application for taking notes.",
    "githubLink": "https://github.com/Rishabh-prime/Notes-Website-"
  },
  {
    "ButtonName": "Movie Info",
    "description": "A site to search for movie information.",
    "githubLink": "https://github.com/Rishabh-prime/Movie-Information-Website"
  },
  {
    "ButtonName": "To Do List (React)",
    "description": "A to-do list application built with React.",
    "githubLink": "https://github.com/Rishabh-prime/React-Todo-List"
  },
  {
    "ButtonName": "Keeper App (React)",
    "description": "A note-taking application built with React.",
    "githubLink": "https://github.com/Rishabh-prime/Keeper-APP"
  },
  {
    "ButtonName": "Bubbel Game",
    "description": "A Bubbel built using HTML, CSS, JavaScript.",
    "githubLink": "https://github.com/Rishabh-prime/Bubbel-Game/tree/main"
  }
];

const otherProjectTableBody = document.querySelector("#other-projects-table tbody");

otherProject.forEach(project => {
  const row = document.createElement("tr");

  const projectNameCell = document.createElement("td");
  projectNameCell.textContent = project.ButtonName;
  row.appendChild(projectNameCell);

  const projectDescriptionCell = document.createElement("td");
  projectDescriptionCell.textContent = project.description;
  row.appendChild(projectDescriptionCell);

  const projectLinkCell = document.createElement("td");
  const projectLink = document.createElement("a");
  projectLink.href = project.githubLink;
  projectLink.innerHTML = '<ion-icon name="logo-github"></ion-icon>';  // GitHub icon
  projectLinkCell.appendChild(projectLink);
  row.appendChild(projectLinkCell);

  otherProjectTableBody.appendChild(row);
});

 
 // ! ---------------------------------------------------------------- skills section------------------------------------------------

 const skillsData = [
  {
    name: "HTML",
    description: "Hypertext Markup Language",
  },
  {
    name: "CSS",
    description: "Cascading Style Sheets",
  },
  {
    name: "JavaScript",
    description: "High-level programming language",
  },
  {
    name: "jQuery",
    description: "JavaScript library for DOM manipulation",
  },
  // {
  //   name: "Node.js",
  //   description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
  // },
  // {
  //   name: "Express.js",
  //   description: "Web application framework for Node.js",
  // },
  {
    name: "React.js",
    description: "JavaScript library for building user interfaces",
  },
  {
    name: "Bootstrap",
    description: "Front-end framework for developing responsive projects",
  }
];

const skillsSection = document.getElementById("skills-section");

skillsData.forEach(skill => {
  const skillContainer = document.createElement("div");
  skillContainer.classList.add("skill-container");

  const skillName = document.createElement("div");
  skillName.classList.add("skill-name");
  skillName.textContent = skill.name;

  const skillDescription = document.createElement("div");
  skillDescription.classList.add("skill-description");
  skillDescription.textContent = skill.description;

  skillContainer.appendChild(skillName);
  skillContainer.appendChild(skillDescription);

  skillsSection.appendChild(skillContainer);
});

// !-------------------------- footer section code ------------------------------//

function loadfooter() {
  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer-section').innerHTML = data;
      });
}


// Initialize event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeHeaderEventListeners();
    loadHero();
    loadAbout();
    loadfooter();
    
});
