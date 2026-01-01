const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function setActiveLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// Also update immediately on click (fast UI response)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
const fullstackResponsibilities = [
  {
    icon: "fa-solid fa-laptop-code",
    title: "Frontend Development",
    description:
      "Build responsive, accessible, and modern user interfaces using HTML, CSS, JavaScript, and frameworks like React.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend Development",
    description:
      "Create server-side logic, REST APIs, and handle application workflows.",
  },
  {
    icon: "fa-solid fa-database",
    title: "Database Management",
    description:
      "Design schemas, write queries, and manage data using SQL or NoSQL databases.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Authentication & Security",
    description:
      "Implement login systems, authorization, and protect applications from common security threats.",
  },
  {
    icon: "fa-solid fa-code-branch",
    title: "API Integration",
    description:
      "Connect frontend and backend services and integrate third-party APIs.",
  },
  {
    icon: "fa-solid fa-rocket",
    title: "Deployment & Maintenance",
    description:
      "Deploy applications, monitor performance, and maintain production systems.",
  },
];

// Select the row container inside #about section (RIGHT column)
const aboutRow = document.querySelector("#about .col-lg-6 .row");

// Clear existing cards if needed
aboutRow.innerHTML = "";

// Loop through the array and create cards
fullstackResponsibilities.forEach((item) => {
  const colDiv = document.createElement("div");
  colDiv.className = "col-md-6 col-lg-4"; // same as your HTML

  colDiv.innerHTML = `
    <div class="about-card">
      <i class="${item.icon}"></i>
      <h5>${item.title}</h5>
      <p>${item.description}</p>
    </div>
  `;

  aboutRow.appendChild(colDiv);
});

const cards = [
  {
    image: "image/Screenshot 2026-01-01 154247.png",
    title: "Grocery App",
    text: "This is a grocery shopping app.It is a frontend application built using Flutter for the user interface and Firebase for backend services such as authentication and real-time database management.",
    updated: "Last updated 3 mins ago",
    button: "flutter ,firebase and sqlite",
  },
  {
    image: "image/Screenshot 2026-01-01 154259.png",
    title: "Music App player",
    text: "This is a music player app built with Flutter as a framework.This application allows users to play, pause, and skip tracks.",
    updated: "Last updated 3 mins ago",
    button: "flutter",
  },
  {
    image: "image/Screenshot 2026-01-01 154405.png",
    title: "Library Management System",
    text: "This is a library management system built with Java and swing framework.This application allows users to manage library resources, including adding, updating, and deleting books, as well as tracking borrowed and returned items.",
    updated: "Last updated 3 mins ago",
    button: "java, swing and mysql",
  },
];

const container = document.getElementById("cardContainer");

container.innerHTML = cards
  .map(
    (card) => `
    <div class="col-lg-4 col-md-6 col-sm-12 rounded-5 gap-3 mb-4 border-dark">
      <div class="card mb-3 rounded-5 h-100 shadow ">
        <img src="${card.image}" class="card-img-top rounded-5" alt="${card.title}">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text fs-6">${card.text}</p>
          <div>
            <a href="#" class="btn btn-dark disabled rounded-3">${card.button}</a>
          </div>
        </div>
      </div>
    </div>
  `
  )
  .join("");

  function randomProgress(min = 20, max = 95) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fullstackSkills = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "Bootstrap",
      "Basic UI/UX",
    ],
    progress: Array(7).fill().map(() => randomProgress()),
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "CRUD Operations",
      "Authentication Basics",
      "Middleware",
    ],
    progress: Array(6).fill().map(() => randomProgress()),
  },
  {
    category: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQL Basics",
      "Database Relationships",
      "Data Modeling",
    ],
    progress: Array(6).fill().map(() => randomProgress()),
  },
  {
    category: "Tools",
    skills: ["VS Code", "Git", "GitHub", "npm", "Browser DevTools", "Postman"],
    progress: Array(6).fill().map(() => randomProgress()),
  },
  {
    category: "Deployment",
    skills: [
      "GitHub Pages",
      "Netlify",
      "Vercel",
      "Render",
      "Environment Variables",
    ],
    progress: Array(5).fill().map(() => randomProgress()),
  },
];


const skillContainer = document.getElementById("skillContainer");
skillContainer.innerHTML = fullstackSkills
  .map(
    (fullstackSkill) => `
    <div
            class="col-lg-2 col-md-4 gap-3 mb-4"
          >
            <div class="card text-bg-light mb-3 h-100 shadow rounded-5" >
              <div class="card-header fs-4">${fullstackSkill.category}</div>
              <div class="card-body">
                <ul class="list-unstyled">
                  ${fullstackSkill.skills
                    .map(
                      (skill) => `<li class="fs-6">
                    <div>
                    <h3 class="fs-6 fw-light my-2">${skill}</h3>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 10px;">
                    <div class="progress-bar" style="background-color: #bb78feff; height: 10px; width: ${fullstackSkill.progress[fullstackSkill.skills.indexOf(skill)]}%"></div>
                    </div>
                    </li>`
                    )
                    .join("")}
                </ul>
              </div>
            </div>
          </div>`
  )
  .join("");
