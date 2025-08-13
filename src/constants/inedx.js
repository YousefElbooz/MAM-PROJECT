import {
    asu,
    nti,
    iti,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    cpp,
    python,
    tesla,
    shopify,
    carrent,
    restaurant,
    mapRouting,
    movieApp,
    gymPadelSystem,
    hospitalApp,
    tripguide,
    threejs,
    mam
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Computer Science Student",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "ML Student",
      icon: backend,
    }
  ];

const servicesWork = [
  {
    title: "MERN Stack Development",
    icon: web, // replace with MERN icon if available
    description: 
      "Want to create a complete and professional website using modern technologies? I will build and design a full-stack website using the MERN Stack:",
    technologies: [
      "MongoDB for the database",
      "Express.js for the backend",
      "React.js for the frontend",
      "Node.js for the server"
    ],
    features: [
      "Clean, well-commented code",
      "Responsive design for all devices",
      "Option to deploy online (GitHub Pages, Vercel, Render)"
    ]
  },
  {
    title: "MEAN Stack Development",
    icon: mobile, // replace with MEAN icon if available
    description: 
      "Need a high-performance web application? I will develop a complete solution using the MEAN Stack:",
    technologies: [
      "MongoDB for the database",
      "Express.js for the backend",
      "Angular for the frontend",
      "Node.js for the server"
    ],
    features: [
      "Optimized and maintainable code",
      "Cross-platform responsive design",
      "Deployment and hosting options available"
    ]
  },
  {
    title: "Responsive Web Development",
    icon: creator, // replace with web design icon if available
    description: 
      "Looking for a modern, mobile-friendly website? I will design and develop a site that looks great on any screen:",
    technologies: [
      "HTML5, CSS3, and JavaScript",
      "Modern UI/UX principles",
      "SEO-friendly structure"
    ],
    features: [
      "Fast loading times",
      "Engaging and user-friendly design",
      "Clean, editable source code"
    ]
  }
];


  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "css",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Science Student",
      company_name: "Asu",
      icon: asu,
      iconBg: "#fff",
      date: "March 2023 - April 2027",
      points: [
        "Completed coursework and projects covering core computer science topics such as algorithms, data structures, databases, and software engineering.",
        "Collaborated with classmates on programming assignments and group projects, applying problem-solving skills and coding best practices.",
        "Developed practical applications and mini-projects using languages like C++, Python, and Java to strengthen programming proficiency.",
        "Actively participated in college tech events, coding competitions, and workshops to expand technical knowledge and teamwork experience."
      ],
    }
    ,
    {
      title: "Cpp Developer",
      company_name: "Asu",
      icon: cpp,
      iconBg: "#383E56",
      date: "March 2024 - April 2024",
      points: [
        "I developed an engaging and interactive game using C++ and the Simple and Fast Multimedia Library (SFML).",
        " This project showcases my ability to design, implement, and optimize a complete game from the ground up, highlighting my skills in software development game mechanics, and multimedia handling."
      ],
    },
    {
      title: "Web Developer",
      company_name: "MAM-Web",
      icon: mam,
      iconBg: "#383E56",
      date: "Jan 2023 - Jan 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Machine Learning Developer",
      company_name: "Student",
      icon: python,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "I have applied my knowledge of Machine Learning (ML) to develop various projects that demonstrate my ability to preprocess data, build models, and evaluate their performance.",
        " These projects highlight my proficiency in applying ML techniques to solve real-world problems and showcase my skills in data analysis, model development, and deployment.",
      ],
    },
    {
  title: "MEAN Stack Developer",
  company_name: "ITI Summer Training 2025",
  icon: iti,
  iconBg: "#fff",
  date: "August 2025",
  points: [
    "Completed an intensive MEAN Stack training program at ITI, focusing on MongoDB, Express.js, Angular, and Node.js.",
    "Developed a full-featured web application from the ground up, implementing scalable backend APIs, responsive front-end interfaces, and seamless integration between them.",
    "Applied best practices in RESTful API development, database modeling, authentication, and performance optimization to deliver a production-ready solution."
  ],
  },
      {
  title: "MEAN Stack Developer",
  company_name: "NTI Summer Training 2025",
  icon: nti,
  iconBg: "#fff",
  date: "August 2025",
  points: [
    "Completed an intensive MEAN Stack training program at NTI, focusing on MongoDB, Express.js, Angular, and Node.js.",
    "Developed a full-featured web application from the ground up, implementing scalable backend APIs, responsive front-end interfaces, and seamless integration between them.",
    "Applied best practices in RESTful API development, database modeling, authentication, and performance optimization to deliver a production-ready solution."
  ],
  }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
  name: "Hospital Management System",
  description:
    "Full-stack hospital management platform built with the MEAN stack, enabling doctors, patients, and admins to manage appointments, medical records, reports, and payments securely with authentication and role-based access control.",
  tags: [
    {
      name: "angular",
      color: "red-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
    {
      name: "expressjs",
      color: "pink-text-gradient",
    },
  ],
  image: hospitalApp,
  source_code_link: "https://github.com/YousefElbooz/Hospital-System",
},
{
  name: "Movie App",
  description:
    "MEAN stack movie web application allowing users to browse movies, manage personal watchlists, and interact with movie details. Includes authentication, authorization, and a responsive card-based UI for an engaging experience.",
  tags: [
    {
      name: "angular",
      color: "red-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
    {
      name: "expressjs",
      color: "pink-text-gradient",
    },
  ],
  image: movieApp,
  source_code_link: "https://github.com/YousefElbooz/MovieApp",
},
{
  name: "Gym & Padel Management System",
  description:
    "Desktop application developed with C++ and Qt for managing memberships, bookings, and schedules for both gym and padel facilities, integrating data structures for efficient storage, retrieval, and processing of member and activity data.",
  tags: [
    {
      name: "cpp",
      color: "blue-text-gradient",
    },
    {
      name: "qt",
      color: "green-text-gradient",
    },
    {
      name: "data-structures",
      color: "pink-text-gradient",
    },
  ],
  image: gymPadelSystem,
  source_code_link: "https://github.com/YousefElbooz/FullGymProject",
},
{
  name: "Map Routing System",
  description:
    "C++-based routing system implementing graph algorithms to calculate optimal paths and travel distances between locations. Designed for efficient performance and accuracy in route planning applications.",
  tags: [
    {
      name: "cpp",
      color: "blue-text-gradient",
    },
    {
      name: "algorithms",
      color: "green-text-gradient",
    },
    {
      name: "graph-theory",
      color: "pink-text-gradient",
    },
  ],
  image: mapRouting,
  source_code_link: "https://github.com/",
},

    {
      name: "Restaurant",
      description:
        "Web application that allows users to view the menu, make reservations, find the restaurant’s location, and read customer reviews.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://yousefelbooz.github.io/Restaurant/",
    },
  ];
  
  export { services,servicesWork, technologies, experiences, testimonials, projects };