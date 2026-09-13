function openProjectCategory(category) {
  document.querySelector('.projects-section').style.display = 'none';

  // Hide all detail sections first
  document.querySelectorAll('.project-detail-section').forEach(sec => {
    sec.style.display = 'none';
  });

  // Show selected section
  const section = document.getElementById(category + '-projects');
  if (section) {
    section.style.display = 'flex'; // Use 'flex' to match your flexbox layout
  } else {
    alert('Section not found: ' + category + '-projects');
  }
}

function loadDemo(projectId) {
  const demoFrame = document.getElementById('project-demo-frame');
  demoFrame.src = projectId + ".html";
}

// Project data (you can expand this easily)
const projectData = {
  web1: {
    title: "ELSEY – ELEARNING MANAGEMENT SYSTEM",
    image: "images/portfolio/web/ELSEY – ELEARNING MANAGEMENT WEB SITE/Picture2.jpg",
    description: "A web based e-learning management system developed using HTML, CSS, JavaScript, and MySQL. The platform allows students to access courses, manage learning materials, and track progress, while administrators can manage users, courses, and content efficiently. Designed with a user-friendly interface and responsive layout to ensure smooth accessibility across devices.",
    gallery: ["images/portfolio/web/elsey e learning gif/1-home-page.gif",
      "images/portfolio/web/elsey e learning gif/2-instructor-studen-sign-up.gif",
      "images/portfolio/web/elsey e learning gif/3-student-login.gif",
      "images/portfolio/web/elsey e learning gif/4-Instructor-login.gif",
      "images/portfolio/web/elsey e learning gif/5-Admin.gif"
    ],
    link: "#"
  },
  web2: {
    title: "LOWA LIBRARY MANAGEMENT SYSTEM",
    image: "images/portfolio/web/lowa-library-management-system/hom.JPG",
    description: "A web based library management system developed using PHP, HTML, CSS, JavaScript, and MySQL. The system manages book cataloging, member registration, borrowing and return processes, and user authentication. Designed to improve library operations through efficient database management and a user-friendly interface.",
    gallery: ["images/portfolio/web/lowa library management system/home.gif",
      "images/portfolio/web/lowa-library-management-systemlogin.gif",
      "images/portfolio/web/lowa-library-management-system/about.gif",
      "images/portfolio/web/lowa-library-management-system/booking.gif",
      "images/portfolio/web/lowa-library-management-system/adm login.jpg",
      "images/portfolio/web/lowa-library-management-system/adm dash.jpg",
      "images/portfolio/web/lowa-library-management-system/add bookkk.jpg",
      "images/portfolio/web/lowa-library-management-system/add authr.jpg"
    ],
    link: "#"
  },
  web3: {
    title: "PURPLE HILL HOTEL WEBSITE",
    image: "images/portfolio/web/purplr hils/home.png",
    description: "A responsive hotel website developed using HTML, CSS, and JavaScript. The website showcases hotel services, room details, amenities, and contact information with a clean and modern design. Focused on user experience, intuitive navigation, and mobile-friendly layout to ensure smooth browsing across different devices.",
    gallery: ["images/portfolio/web/purplr hils/purpule hill.gif"],
    link: "#"
  },
  web4: {
    title: "FINE ART AUCTION SITE",
    image: "images/portfolio/web/fine art auction/home.png",
    description: "A dynamic auction website developed using HTML, CSS, JavaScript, PHP, and MySQL. The platform allows users to browse artwork collections, place bids in real time, and manage their accounts securely. Includes features such as user authentication, bidding management, and artwork listing administration, designed with a responsive and user-friendly interface.",
    gallery: ["images/portfolio/web/fine art auction/HOME.gif"],
    link: "#"
  },
  web5: {
    title: "USWTMS TRANSPORT MANAGEMENT SYSTEM",
    image: "images/portfolio/web/web tms uswtms/Capture.PNG",
    description: "A web-based transport management system developed using ASP.NET and a relational database. The system streamlines vehicle scheduling, route management, driver allocation, and booking operations. It includes secure user authentication, administrative controls, and efficient database handling to improve operational efficiency and data accuracy.",
    gallery: ["images/portfolio/web/web tms uswtms/ezgif.com-speed.gif"],
    link: "#"
  },
  web6: {
    title: "First Choice Japan Tours",

    category: "WEB APPLICATION",

    subtitle: "A modern Japan travel website designed to present tours and travel information through a clean, responsive interface.",

    role: "Front-End Developer",

    year: "2026",

    type: "Web Application",

    image: "images/portfolio/web/First Choice Japan Tours/Home.png",

    description: "First Choice Japan Tours is a modern travel website developed with Next.js. The project focuses on presenting Japan tour information in a clear and visually engaging way while maintaining responsive behavior across desktop and mobile devices. The application uses a component-based structure to keep the interface organized, reusable, and easier to maintain.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS"
    ],

    highlights: [{
        title: "Component-Based Development",
        text: "Built the interface using reusable components to keep the application structure organized and maintainable."
      },

      {
        title: "Responsive Travel Experience",
        text: "Designed the interface to adapt across different screen sizes while keeping tour information easy to browse."
      },

      {
        title: "Modern Front-End Architecture",
        text: "Used Next.js and React to structure the application with modern front-end development practices."
      },

      {
        title: "Visual Presentation",
        text: "Focused on clean layouts, imagery and readable content presentation suitable for a tourism website."
      }
    ],

    gallery: [
      "images/portfolio/web/First Choice Japan Tours/Home.png",
      "images/portfolio/web/First Choice Japan Tours/Tours.png",
      "images/portfolio/web/First Choice Japan Tours/Gallery.png",
      "images/portfolio/web/First Choice Japan Tours/reviews.png",
      "images/portfolio/web/First Choice Japan Tours/FAQ.png",
      "images/portfolio/web/First Choice Japan Tours/Contact.png"
    ],

    link: "#",

    source: "https://github.com/PawanLahiru/first-choice-japan-tours"
  },


  web7: {
    title: "WorkTrack",

    category: "WEB APPLICATION / PWA",

    subtitle: "A personal work and finance management app for tracking hours, weekly limits, salary, expenses, and monthly finances.",

    role: "Full-Stack Developer",

    year: "2026",

    type: "Progressive Web App",

    image: "images/portfolio/web/worktrack/home.png",

    description: "WorkTrack is a personal work management application developed to track working hours, monitor weekly hour limits, estimate salary, record expenses, and provide a clear monthly financial overview. The application was designed with mobile use in mind and can be installed as a Progressive Web App for quick access from a phone.",

    stack: [
      "React",
      "Vite",
      "Firebase",
      "Firestore",
      "JavaScript",
      "PWA"
    ],

    highlights: [{
        title: "Work Time Tracking",
        text: "Implemented clock-in, clock-out, manual entry, work history, and detailed shift tracking."
      },

      {
        title: "Weekly Hour Monitoring",
        text: "Added minute-based weekly working-time calculations to monitor the configured weekly work limit."
      },

      {
        title: "Salary Estimation",
        text: "Calculates estimated salary using recorded work time, hourly rate, and transportation allowance."
      },

      {
        title: "Expense Management",
        text: "Allows users to record, edit, categorize, and review personal expenses alongside estimated income."
      },

      {
        title: "Mobile PWA Experience",
        text: "Designed the interface for mobile use and added Progressive Web App support for installation on a phone."
      }
    ],

    gallery: [
      "images/portfolio/web/worktrack/loading.png",
      "images/portfolio/web/worktrack/home.png",
      "images/portfolio/web/worktrack/work.png",
      "images/portfolio/web/worktrack/work 1.png",
      "images/portfolio/web/worktrack/work history.png",
      "images/portfolio/web/worktrack/money.png",
      "images/portfolio/web/worktrack/overview.png",
      "images/portfolio/web/worktrack/salary.png",
      "images/portfolio/web/worktrack/expenses.png",
      "images/portfolio/web/worktrack/settings.png"
    ],

    link: "#",

    source: "https://github.com/PawanLahiru/worktrack"
  },



  //apps

  app1: {
    title: "Thakshilawa Student Management System.",
    image: "images/portfolio/csharp/Thakshilawa gif/2 SMS-Dashboard.gif",
    description: "A desktop application developed using C# and Windows Forms. The system focuses on efficient data handling, user-friendly interface design, and optimized performance for business operations.",
    gallery: ["images/portfolio/csharp/Thakshilawa gif/1-admin-user-login.gif",
      "images/portfolio/csharp/Thakshilawa gif/2 SMS-Dashboard.gif",
      "images/portfolio/csharp/Thakshilawa gif/3 student-register.gif",
      "images/portfolio/csharp/Thakshilawa gif/4-Search-student.gif",
      "images/portfolio/csharp/Thakshilawa gif/5-make-student-payments.gif",
      "images/portfolio/csharp/Thakshilawa gif/6-Add-course-&-search-course.gif",
      "images/portfolio/csharp/Thakshilawa gif/7-Add-teacher-&-search-teacher.gif",
      "images/portfolio/csharp/Thakshilawa gif/8-admin-privilages-stu-tes-couuser-update-delete.gif",
      "images/portfolio/csharp/Thakshilawa gif/9-SMS-&-cafe-reports.gif"
    ],
    link: "#"
  },

  app2: {
    title: "Thakshilawa Cafe Management System.",
    image: "images/portfolio/csharp/Thakshilawa caf/cafe-dashbord-2.gif",
    description: "A desktop-based café management system developed using C# and Windows Forms, designed to streamline daily operations of a café. The system enables efficient order processing, menu management, billing, and inventory tracking through a user-friendly interface. It supports real-time updates for orders and stock levels, helping reduce manual work and improve service speed. The application focuses on performance, data accuracy, and ease of use, making it suitable for small to medium-scale café businesses.",
    gallery: [
      "images/portfolio/csharp/Thakshilawa caf/cafe-login 1.gif",
      "images/portfolio/csharp/Thakshilawa caf/cafe-dashbord-2.gif",
      "images/portfolio/csharp/Thakshilawa caf/cafe-dashbord-&-cash-payments2.gif",
      "images/portfolio/csharp/Thakshilawa caf/cafe-add-category3.gif",
      "images/portfolio/csharp/Thakshilawa caf/cafe-add-products- 4.gif",
      "images/portfolio/csharp/Thakshilawa caf/cafe-view-all-products-6-.gif",
      "images/portfolio/csharp/Thakshilawa caf/view All Products.JPG",
      "images/portfolio/csharp/Thakshilawa caf/print bill.JPG"

    ],
    link: "#"
  },

  app3: {
    title: "WFM Construction Management System.",
    image: "images/portfolio/csharp/construction ms giff/2-dashboard.gif",
    description: "A desktop-based construction management system developed using C# and Windows Forms, designed to efficiently manage construction project workflows. The system supports task scheduling, workforce management, material tracking, and project progress monitoring through a centralized platform. It helps streamline communication between teams, improve resource allocation, and ensure timely project completion. With a user-friendly interface and structured data management, the system enhances productivity, accuracy, and overall project control in construction environments.",
    gallery: [
      "images/portfolio/csharp/construction ms giff/1-log.gif",
      "images/portfolio/csharp/construction ms giff/2-dashboard.gif",
      "images/portfolio/csharp/construction ms giff/3-engineer.gif",
      "images/portfolio/csharp/construction ms giff/4site-details.gif",
      "images/portfolio/csharp/construction ms giff/5materials.gif",
      "images/portfolio/csharp/construction ms giff/6work-summ.gif",
      "images/portfolio/csharp/construction ms giff/7site-entry.gif",
      "images/portfolio/csharp/construction ms giff/8employee.gif",
      "images/portfolio/csharp/construction ms giff/9payments.gif",
      "images/portfolio/csharp/construction ms giff/10user.gif",
      "images/portfolio/csharp/construction ms giff/11reports.gif"

    ],
    link: "#"
  },


  app4: {
    title: "Chama Computer Management System.",
    image: "images/portfolio/csharp/Chamamanagement gif/dashboard.gif",
    description: "A desktop-based computer management system developed using C# and Windows Forms, designed to efficiently manage computer resources and user activities within an organization. The system provides features such as device tracking, user management, maintenance records, and usage monitoring. It helps improve organization, reduce manual record-keeping, and ensure better control over IT assets. Built with a user-friendly interface, the application focuses on reliability, performance, and accurate data handling.",
    gallery: [
      "images/portfolio/csharp/Chamamanagement gif/log.gif",
      "images/portfolio/csharp/Chamamanagement gif/dashboard.gif",
      "images/portfolio/csharp/Chamamanagement gif/change pass.gif",
      "images/portfolio/csharp/Chamamanagement gif/products.gif",
      "images/portfolio/csharp/Chamamanagement gif/suppliers.gif",
      "images/portfolio/csharp/Chamamanagement gif/sales order.gif",
      "images/portfolio/csharp/Chamamanagement gif/users.gif",
      "images/portfolio/csharp/Chamamanagement gif/report.gif"

    ],
    link: "#"
  },

  app5: {
    title: "LMN Electronics",
    image: "images/portfolio/csharp/Chamamanagement gif/dashboard.gif",
    description: "A desktop-based electronics management system developed using C# and Windows Forms, designed to manage electronic products, inventory, and sales operations efficiently. The system allows users to track product details, monitor stock levels, handle customer transactions, and generate basic reports. It helps reduce manual work, improve accuracy, and streamline daily business operations. Built with a user-friendly interface, the application focuses on performance, reliability, and effective data management.",
    gallery: [
      "images/portfolio/csharp/lmn electronics/animation.gif",
      "images/portfolio/csharp/lmn electronics/0.png",
      "images/portfolio/csharp/lmn electronics/1.png",
      "images/portfolio/csharp/lmn electronics/3.png",
      "images/portfolio/csharp/lmn electronics/4.png",
      "images/portfolio/csharp/lmn electronics/5.png",
      "images/portfolio/csharp/lmn electronics/6.png",
      "images/portfolio/csharp/lmn electronics/7.png",
      "images/portfolio/csharp/lmn electronics/7.png"

    ],
    link: "#"
  },

  game1: {
    title: "Maze Ball",
    image: "images/portfolio/games/cards/animation.gif",
    description: "Built an interactive 3D maze-based game using Godot Engine, focusing on smooth player movement, physics-based interactions, and engaging level design. Implemented core gameplay mechanics such as obstacle navigation, collision handling, and collectible elements, ensuring responsive controls and an immersive user experience. Designed and integrated 3D assets, lighting, and animations to create a visually appealing environment.",
    gallery: [
      "images/portfolio/games/cards/front.png",
      "images/portfolio/games/cards/CardLevel1.png",
      "images/portfolio/games/cards/CardLevel10.png",
      "images/portfolio/games/cards/CardLevel20.png",
      "images/portfolio/games/cards/CardLevel30.png",
      "images/portfolio/games/cards/CardLevel40.png",
    ],
    link: "#"
  },

  game2: {
    title: "Tic Tac Toe.",
    image: "images/portfolio/games/tic tac/tic animation.gif",
    description: "Designed and developed a Tic Tac Toe mobile application using Android Studio, Java, and XML. The game provides a smooth and interactive two-player experience with a responsive user interface, real-time score tracking, player turn management, and automatic win/draw detection. The application was built with a focus on clean UI design, efficient game logic implementation, and an intuitive user experience. The project strengthened my skills in Android application development, event handling, UI design, and game logic programming.",
    gallery: [
      "images/portfolio/games/tic tac/main.png",
      "images/portfolio/games/tic tac/main 2.png",
      "images/portfolio/games/tic tac/name.jpg"

    ],
    link: "#"
  },

  game3: {
    title: "TiC TaC ToE.",
    image: "images/portfolio/games/tic web/tic tac.gif",
    description: "Designed and developed an interactive Tic Tac Toe game using HTML, CSS, and JavaScript. The application features a responsive user interface, turn-based gameplay, automatic win and draw detection, score management, and game reset functionality. JavaScript was used to handle game logic, player interactions, and dynamic updates, while HTML and CSS were utilized to create an intuitive and visually appealing interface. This project strengthened my front-end development skills, including DOM manipulation, event handling, responsive design, and interactive web application development.",
    gallery: [
      "images/portfolio/games/tic web/tic tac.mp4"
    ],
    link: "#"
  },

  game4: {
    title: "ELIEN.",
    image: "images/portfolio/games/Elien/logo.png",
    description: "Designed and developed a mobile arcade game using Swift and Xcode for iOS devices. Players control an alien spaceship navigating through Earth environments while collecting coins, avoiding obstacles, and maximizing their score. The game features responsive touch controls, collision detection, score tracking, and progressively challenging gameplay to keep players engaged. Special attention was given to smooth animations, intuitive user interactions, and performance optimization to deliver an enjoyable gaming experience.",
    gallery: [
      "images/portfolio/games/Elien/copy_822697D1-E8A7-4ABC-9F8B-91AD60D60226.MOV"
    ],
    link: "#"
  },
  

  backend1: {
    title: "USWTMS Transport Management System",
    category: "BACKEND / WEB APPLICATION",
    subtitle: "A database-driven transport management platform for digitizing university transport operations.",
    role: "Full-Stack Developer",
    year: "2026",
    type: "Backend / Web Application",
    image: "images/portfolio/web/web tms uswtms/Capture.PNG",
    description: "A transport management system built around structured workflows for transport requests, vehicle scheduling, driver allocation, users, and administrative control. The backend handles application data and operational processes through a relational database.",
    stack: [
      "ASP.NET",
      "C#",
      "SQL"
    ],
    highlights: [{
        title: "Business Logic",
        text: "Implemented workflow logic for transport requests, allocation, and administrative operations."
      },
      {
        title: "Relational Data",
        text: "Structured transport, user, vehicle, driver, and request information using relational database principles."
      },
      {
        title: "Administrative Workflows",
        text: "Created centralized controls for managing operational records and system activities."
      }
    ],
    gallery: [
      "images/portfolio/web/web tms uswtms/Capture.PNG",
      "images/portfolio/web/web tms uswtms/ezgif.com-speed.gif"
    ],
    link: "#",
    source: "#"
  },

  backend2: {
    title: "Fine Art Auction Site",
    category: "BACKEND / WEB APPLICATION",
    subtitle: "A database-backed auction platform for managing users, artwork listings, and bidding workflows.",
    role: "Web Developer",
    year: "2026",
    type: "Backend / Web Application",
    image: "images/portfolio/web/fine art auction/home.png",
    description: "A PHP and MySQL based auction platform supporting artwork listings, user accounts, authentication, bidding operations, and administrative management.",
    stack: [
      "PHP",
      "MySQL",
      "JavaScript"
    ],
    highlights: [{
        title: "Authentication",
        text: "Implemented account-based access for users and administrative functions."
      },
      {
        title: "Bidding Logic",
        text: "Built application workflows for artwork listings and bid-related operations."
      },
      {
        title: "Database Management",
        text: "Stored and managed users, artworks, and auction-related records through MySQL."
      }
    ],
    gallery: [
      "images/portfolio/web/fine art auction/home.png",
      "images/portfolio/web/fine art auction/HOME.gif"
    ],
    link: "#",
    source: "#"
  },

  backend3: {
    title: "Lowa Library Management System",
    category: "BACKEND / DATABASE SYSTEM",
    subtitle: "A PHP and MySQL library system for managing books, members, borrowing, and returns.",
    role: "Web Developer",
    year: "2026",
    type: "Backend / Database Application",
    image: "images/portfolio/web/lowa-library-management-system/hom.JPG",
    description: "A database-driven library management system supporting member registration, book cataloging, borrowing and return workflows, authentication, and administrative management.",
    stack: [
      "PHP",
      "MySQL"
    ],
    highlights: [{
        title: "Library Records",
        text: "Managed book, author, member, and borrowing information in a structured relational database."
      },
      {
        title: "Borrowing Workflow",
        text: "Implemented borrowing and return processes for library operations."
      },
      {
        title: "Administrative Access",
        text: "Provided management functionality for books, users, and system records."
      }
    ],
    gallery: [
      "images/portfolio/web/lowa-library-management-system/hom.JPG"
    ],
    link: "#",
    source: "#"
  },

  backend4: {
    title: "ELSEY E-Learning Management System",
    category: "BACKEND / WEB APPLICATION",
    subtitle: "An e-learning platform supporting students, instructors, administrators, courses, and learning content.",
    role: "Web Developer",
    year: "2026",
    type: "Backend / Web Application",
    image: "images/portfolio/web/ELSEY – ELEARNING MANAGEMENT WEB SITE/Picture2.jpg",
    description: "A web-based learning management system with database-backed user, course, content, and administrative workflows. Different user roles interact with the system through dedicated application functions.",
    stack: [
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    highlights: [{
        title: "Role-Based Workflows",
        text: "Supported separate student, instructor, and administrative application flows."
      },
      {
        title: "Course Management",
        text: "Structured course and learning-content management through database-backed functionality."
      },
      {
        title: "Data Management",
        text: "Organized system users and learning records using structured application data."
      }
    ],
    gallery: [
      "images/portfolio/web/ELSEY – ELEARNING MANAGEMENT WEB SITE/Picture2.jpg"
    ],
    link: "#",
    source: "#"
  },


};

// Open modal with project details


let currentProjectMedia = [];
let currentProjectSlide = 0;


function openProjectModal(id) {

  const project = projectData[id];

  if (!project) return;


  /* -------------------------
     BASIC INFORMATION
  ------------------------- */

  document.getElementById("modal-title").textContent =
    project.title || "Project";


  document.getElementById("modal-category").textContent =
    project.category || getCategoryFromId(id);


  document.getElementById("modal-subtitle").textContent =
    project.subtitle ||
    getDefaultSubtitle(project.description);


    document.getElementById("modal-role").textContent =
    project.role || getDefaultRole(id);


  document.getElementById("modal-year").textContent =
    project.year || "2026";


  document.getElementById("modal-type").textContent =
    project.type || getTypeFromId(id);


  document.getElementById("modal-description").textContent =
    project.description || "";


  /* -------------------------
     TECHNOLOGY STACK
  ------------------------- */

  const stackContainer =
    document.getElementById("modal-stack");

  stackContainer.innerHTML = "";


  const stack =
    project.stack || getDefaultStack(id);


  stack.forEach(technology => {

    const tag =
      document.createElement("span");

    tag.className = "stack-tag";

    tag.textContent = technology;

    stackContainer.appendChild(tag);

  });



  /* -------------------------
     ENGINEERING HIGHLIGHTS
  ------------------------- */

  const highlightContainer =
    document.getElementById("modal-highlights");

  highlightContainer.innerHTML = "";


  const highlights =
    project.highlights ||
    createDefaultHighlights(id);


  highlights.forEach((highlight, index) => {

    const item =
      document.createElement("div");

    item.className =
      "engineering-item";


    item.innerHTML = `

    <span class="engineering-number">
      ${String(index + 1).padStart(2, "0")}
    </span>

    <h4>${highlight.title}</h4>

    <p>${highlight.text}</p>

  `;


    highlightContainer.appendChild(item);

  });



  /* -------------------------
     MEDIA
  ------------------------- */

  currentProjectMedia = [];


  if (project.image) {
    currentProjectMedia.push(project.image);
  }


  if (Array.isArray(project.gallery)) {

    project.gallery.forEach(media => {

      if (!currentProjectMedia.includes(media)) {
        currentProjectMedia.push(media);
      }

    });

  }


  currentProjectSlide = 0;

  renderProjectSlide();



  /* -------------------------
     LIVE PROJECT BUTTON
  ------------------------- */

  const liveButton =
    document.getElementById("modal-link");


  if (
    project.link &&
    project.link !== "#"
  ) {

    liveButton.href = project.link;

    liveButton.classList.remove("hidden");

  } else {

    liveButton.classList.add("hidden");

  }



  /* -------------------------
     SOURCE CODE BUTTON
  ------------------------- */

  const sourceButton =
    document.getElementById("modal-source");


  if (
    project.source &&
    project.source !== "#"
  ) {

    sourceButton.href = project.source;

    sourceButton.classList.remove("hidden");

  } else {

    sourceButton.classList.add("hidden");

  }



  /* -------------------------
     OPEN MODAL
  ------------------------- */

  document.getElementById(
    "project-modal"
  ).style.display = "block";


  document.body.style.overflow = "hidden";

}


function renderProjectSlide() {

  const mediaContainer =
    document.getElementById(
      "modal-media-container"
    );


  const dotsContainer =
    document.getElementById(
      "gallery-dots"
    );


  mediaContainer.innerHTML = "";

  dotsContainer.innerHTML = "";


  if (!currentProjectMedia.length) {
    return;
  }


  const media =
    currentProjectMedia[
      currentProjectSlide
    ];


  const extension =
    media
    .split(".")
    .pop()
    .toLowerCase();


  const videoExtensions = [
    "mp4",
    "mov",
    "webm"
  ];


  if (
    videoExtensions.includes(extension)
  ) {

    const video =
      document.createElement("video");


    video.src = media;

    video.controls = true;

    video.autoplay = true;

    video.muted = true;

    video.loop = true;

    video.playsInline = true;


    mediaContainer.appendChild(video);

  } else {

    const image =
      document.createElement("img");


    image.src = media;

    image.alt = "Project screenshot";


    mediaContainer.appendChild(image);

  }



  currentProjectMedia.forEach(
    (_, index) => {

      const dot =
        document.createElement("button");


      dot.className =
        "gallery-dot" +
        (
          index === currentProjectSlide ?
          " active" :
          ""
        );


      dot.onclick = function () {

        currentProjectSlide = index;

        renderProjectSlide();

      };


      dotsContainer.appendChild(dot);

    }
  );

}

function changeProjectSlide(direction) {

  if (!currentProjectMedia.length) {
    return;
  }


  currentProjectSlide += direction;


  if (
    currentProjectSlide < 0
  ) {

    currentProjectSlide =
      currentProjectMedia.length - 1;

  }


  if (
    currentProjectSlide >=
    currentProjectMedia.length
  ) {

    currentProjectSlide = 0;

  }


  renderProjectSlide();

}

function closeModal() {

  document.getElementById(
    "project-modal"
  ).style.display = "none";


  document.body.style.overflow =
    "auto";

}

function getCategoryFromId(id) {

  if (id.startsWith("backend")) {
    return "BACKEND DEVELOPMENT";
  }

  if (id.startsWith("web")) {
    return "WEB APPLICATION";
  }

  if (id.startsWith("app")) {
    return "DESKTOP APPLICATION";
  }

  if (id.startsWith("game")) {
    return "GAME DEVELOPMENT";
  }

  return "SOFTWARE PROJECT";
}

function getDefaultRole(id) {

  if (id.startsWith("backend")) {
    return "Backend Developer";
  }

  if (id.startsWith("web")) {
    return "Web Developer";
  }

  if (id.startsWith("app")) {
    return "Software Developer";
  }

  if (id === "game1") {
    return "Game Developer";
  }

  if (id === "game2") {
    return "Android Developer";
  }

  if (id === "game3") {
    return "Front-End Developer";
  }

  if (id === "game4") {
    return "iOS Developer";
  }

  return "Developer";
}

function getTypeFromId(id) {

  if (id.startsWith("backend")) {
    return "Backend / Database Application";
  }

  if (id.startsWith("web")) {
    return "Web Application";
  }

  if (id.startsWith("app")) {
    return "Desktop Application";
  }

  if (id === "game2") {
    return "Android Game";
  }

  if (id === "game3") {
    return "Browser Game";
  }

  if (id === "game4") {
    return "iOS Game";
  }

  if (id.startsWith("game")) {
    return "Game";
  }

  return "Software Project";
}

function getDefaultSubtitle(description) {

  if (!description) {
    return "";
  }

  const firstSentence =
    description.split(".")[0];

  return firstSentence + ".";

}


function getDefaultStack(id) {

  if (id === "web1") {
    return ["HTML", "CSS", "JavaScript", "MySQL"];
  }

  if (id === "web2") {
    return ["PHP", "HTML", "CSS", "JavaScript", "MySQL"];
  }

  if (id === "web3") {
    return ["HTML", "CSS", "JavaScript"];
  }

  if (id === "web4") {
    return ["PHP", "HTML", "CSS", "JavaScript", "MySQL"];
  }

  if (id === "web5") {
    return ["ASP.NET", "C#", "JavaScript", "SQL"];
  }

  if (id === "web6") {
    return ["Next.js", "React", "TypeScript", "CSS"];
  }

  if (id === "web7") {
    return [
      "React",
      "Vite",
      "Firebase",
      "Firestore",
      "JavaScript",
      "PWA"
    ];
  }

  if (id.startsWith("backend")) {
    return ["Backend Development", "SQL"];
  }

  if (id.startsWith("app")) {
    return ["C#", "Windows Forms", "SQL"];
  }

  if (id === "game1") {
    return ["Godot", "Game Development", "3D"];
  }

  if (id === "game2") {
    return ["Java", "Android Studio", "XML"];
  }

  if (id === "game3") {
    return ["HTML", "CSS", "JavaScript"];
  }

  if (id === "game4") {
    return ["Swift", "Xcode", "iOS"];
  }

  return ["Software Development"];
}

function createDefaultHighlights(id) {

  if (id.startsWith("web")) {

    return [

      {
        title: "Frontend Development",
        text: "Built the user interface and interactive application flows with a focus on usability and responsive behavior."
      },

      {
        title: "Application Logic",
        text: "Implemented the core functionality required for users to interact with and manage system data."
      },

      {
        title: "Data Management",
        text: "Structured and managed application data to support reliable system operations."
      }

    ];

  }


  if (id.startsWith("app")) {

    return [

      {
        title: "Desktop Interface",
        text: "Designed Windows desktop interfaces focused on simple navigation and practical business workflows."
      },

      {
        title: "Business Logic",
        text: "Implemented application logic for managing operational records and user activities."
      },

      {
        title: "Data Handling",
        text: "Integrated structured data storage and retrieval for reliable record management."
      }

    ];

  }


  if (id.startsWith("game")) {

    return [

      {
        title: "Gameplay Logic",
        text: "Implemented the core rules, player interactions and game-state management."
      },

      {
        title: "Interactive Experience",
        text: "Focused on responsive controls and immediate visual feedback for player actions."
      },

      {
        title: "UI & Game Flow",
        text: "Designed clear navigation, game progression and restart functionality."
      }

    ];

  }


  return [];

}

function backToProjectCategories() {

  document
    .querySelectorAll(".project-detail-section")
    .forEach(section => {
      section.style.display = "none";
    });


  document.querySelector(
    ".projects-section"
  ).style.display = "block";

}