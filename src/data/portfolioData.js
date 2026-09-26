export const personalInfo = {
  name: "Anand Giri Goswami",
  shortName: "Anand Goswami",
  tagline: "Full-Stack MERN Developer & Software Engineer",
  roles: [
    "Full-Stack MERN Developer",
    "React.js & Node.js Specialist",
    "Python & Data Science Trainee",
    "Software Engineer & Problem Solver"
  ],
  location: "Jaipur, Rajasthan, India",
  email: "Goswamianand054@gmail.com",
  phone: "+91 7725923120",
  rawPhone: "+917725923120",
  whatsappUrl: "https://wa.me/917725923120?text=Hi%20Anand,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!",
  linkedinUrl: "https://linkedin.com/in/anand-goswami",
  githubUrl: "https://github.com",
  educationBadge: {
    degree: "B.Tech CSE Graduate",
    college: "GIT Jaipur (2021 – 2025)"
  },
  bio: {
    headline: "Passionate Software Engineer and B.Tech CSE Graduate based in Jaipur, India. Specialized in crafting modern, high-performance web applications using the MERN Stack (MongoDB, Express, React, Node.js) and Python.",
    aboutP1: "I am a Computer Science & Engineering graduate from Global Institute of Technology, Jaipur (2021 – 2025). My journey includes developing full-stack production platforms like Parth Car Rental, building robust RESTful APIs, and implementing clean, mobile-first responsive interfaces.",
    aboutP2: "I have hands-on experience through internships with EngineerCore (Effervescent IIT Allahabad) in Android Application Development and specialized training in Python for Data Science. I love solving real-world challenges through elegant, maintainable code."
  },
  stats: [
    { number: "5+", label: "Full-Stack Projects Built" },
    { number: "1+", label: "Live Production Platforms" },
    { number: "4+", label: "Professional Certifications" },
    { number: "2+", label: "Internships & Trainings" }
  ]
};

export const skillsData = [
  {
    category: "Web & MERN Stack",
    subtext: "Full-stack architecture",
    icon: "fa-solid fa-layer-group",
    skills: [
      { name: "React.js", icon: "fa-brands fa-react", color: "#00f2fe" },
      { name: "Node.js", icon: "fa-brands fa-node-js", color: "#22c55e" },
      { name: "Express.js", icon: "fa-solid fa-server", color: "#94a3b8" },
      { name: "HTML5", icon: "fa-brands fa-html5", color: "#f97316" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#38bdf8" },
      { name: "RESTful APIs", icon: "fa-solid fa-network-wired", color: "#a855f7" },
      { name: "JavaScript (ES6+)", icon: "fa-brands fa-js", color: "#eab308" }
    ]
  },
  {
    category: "Programming Languages",
    subtext: "Logic & problem solving",
    icon: "fa-solid fa-terminal",
    skills: [
      { name: "Python", icon: "fa-brands fa-python", color: "#38bdf8" },
      { name: "C++", icon: "fa-solid fa-code", color: "#60a5fa" },
      { name: "JavaScript", icon: "fa-brands fa-js", color: "#eab308" },
      { name: "PHP", icon: "fa-brands fa-php", color: "#818cf8" }
    ]
  },
  {
    category: "Databases",
    subtext: "NoSQL & Relational Storage",
    icon: "fa-solid fa-database",
    skills: [
      { name: "MongoDB", icon: "fa-solid fa-leaf", color: "#10b981" },
      { name: "MySQL", icon: "fa-solid fa-database", color: "#38bdf8" },
      { name: "Database Design", icon: "fa-solid fa-table", color: "#f59e0b" }
    ]
  },
  {
    category: "Developer Tools",
    subtext: "IDEs, Version Control & Analysis",
    icon: "fa-solid fa-toolbox",
    skills: [
      { name: "VS Code", icon: "fa-solid fa-code", color: "#38bdf8" },
      { name: "GitHub", icon: "fa-brands fa-github", color: "#f8fafc" },
      { name: "Git", icon: "fa-brands fa-git-alt", color: "#f97316" },
      { name: "Android Studio", icon: "fa-brands fa-android", color: "#22c55e" },
      { name: "Jupyter Notebook", icon: "fa-solid fa-book-open", color: "#f59e0b" },
      { name: "Dev C++", icon: "fa-solid fa-desktop", color: "#60a5fa" }
    ]
  }
];

export const experienceData = [
  {
    role: "B.Tech in Computer Science & Engineering",
    period: "2021 – 2025",
    company: "Global Institute of Technology, Jaipur",
    icon: "fa-solid fa-graduation-cap",
    accentColor: "var(--accent-cyan)",
    points: [
      "Comprehensive core curriculum in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Full-Stack Web Development.",
      "Engineered full-stack academic and production projects with scalable architecture and collaborative team workflows."
    ]
  },
  {
    role: "Android Application Development Intern",
    period: "May 2023 – June 2023",
    company: "EngineerCore (Effervescent IIT Allahabad) • Remote",
    icon: "fa-solid fa-briefcase",
    accentColor: "var(--accent-purple)",
    points: [
      "Developed a functional Android support game using Android Studio.",
      "Gained rigorous hands-on experience in application development life cycles (SDLC) and debugging.",
      "Mentored by industry engineers on real-world software architecture and project practices."
    ]
  },
  {
    role: "Python for Data Science Trainee",
    period: "July 2022 – August 2022",
    company: "Global Institute of Technology, Jaipur",
    icon: "fa-brands fa-python",
    accentColor: "#f59e0b",
    points: [
      "Mastered Python programming fundamentals, data structures, and algorithmic logic building.",
      "Explored data manipulation, statistical routines, and foundational data science concepts using Jupyter Notebooks."
    ]
  },
  {
    role: "Higher Secondary Certificate (12th Standard)",
    period: "2021",
    company: "Ascent International Senior Secondary School, Udaipur",
    icon: "fa-solid fa-school",
    accentColor: "var(--accent-emerald)",
    points: [
      "Completed secondary schooling with rigorous focus on Science & Mathematics."
    ]
  }
];

export const projectsData = [
  {
    id: "car-rental",
    title: "Car Rental Website",
    category: "mern live",
    categoryLabel: "MERN Stack • Live Production",
    isLive: true,
    liveUrl: "https://parthcarrental.com/",
    githubUrl: "#",
    image: "/assets/images/project-car-rental.svg",
    shortDesc: "A full-fledged, scalable car booking web platform with responsive mobile/tablet UI, customer registration, and booking history.",
    fullDesc: "Developed a high-performance, web-based system for car rental bookings. Features customer authentication, fleet selection, rental calendar scheduling, and automated booking history tracking. Built with RESTful APIs, optimized database queries, and a fully responsive layout.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API", "Responsive UI"],
    features: [
      "Live in Production at parthcarrental.com",
      "Customer Authentication & Profile Management",
      "Real-time Vehicle Availability & Booking Engine",
      "Booking History & Invoice Generation",
      "Fully Mobile & Tablet Optimized Responsive Design",
      "Scalable & Performance-Optimized MERN Backend"
    ]
  },
  {
    id: "food-app",
    title: "Food Ordering App",
    category: "mern",
    categoryLabel: "MERN Stack",
    isLive: false,
    liveUrl: "",
    githubUrl: "#",
    image: "/assets/images/project-food-app.svg",
    shortDesc: "End-to-end full-stack food delivery application with RESTful APIs and seamless online payment gateway integration.",
    fullDesc: "A complete food delivery solution built from scratch using the MERN stack. Includes restaurant menus, dynamic cart management, order tracking, address verification, and integrated payment gateway for secure transactions.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Payment Gateway", "JWT Auth"],
    features: [
      "Interactive Restaurant Menus & Category Filtering",
      "Cart State Management & Checkout Flow",
      "Payment Gateway Integration for Fast Orders",
      "Real-time Order Status & Tracking",
      "Admin Panel for Food Item & Menu Management"
    ]
  },
  {
    id: "dress-rental",
    title: "Dress Rental Platform",
    category: "mern",
    categoryLabel: "MERN Stack",
    isLive: false,
    liveUrl: "",
    githubUrl: "#",
    image: "/assets/images/project-dress-rental.svg",
    shortDesc: "End-to-end dress rental platform featuring rental scheduling, real-time availability tracking, and admin workflows.",
    fullDesc: "An innovative fashion rental web application where users can browse designer dresses, check date-specific availability, schedule rental durations, and book securely. Provides separate dedicated workflows for customers and administrators.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "CSS3"],
    features: [
      "Interactive Product Catalog with Rich Filters",
      "Date-Picker Rental Scheduling & Conflict Detection",
      "Secure User Authentication & Profile History",
      "Dual Workflow: Customer Storefront & Admin Dashboard",
      "Availability Status Tracking & Inventory Alerts"
    ]
  },
  {
    id: "electronics-ecommerce",
    title: "Electronics E-Commerce Platform",
    category: "mern",
    categoryLabel: "MERN Stack",
    isLive: false,
    liveUrl: "",
    githubUrl: "#",
    image: "/assets/images/project-ecommerce.svg",
    shortDesc: "Full-stack gadget store with secure JWT auth, product catalog management, dynamic shopping cart, and order processing.",
    fullDesc: "Scalable electronics e-commerce web platform engineered with MongoDB, Express, React, and Node.js. Features comprehensive product management, user reviews, shopping cart synchronization, and order fulfillment pipelines.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "RESTful API"],
    features: [
      "Secure Authentication with JWT & bcrypt",
      "Dynamic Product Management & Search Filtering",
      "Persistent Shopping Cart & Wishlist",
      "Order Placement & Customer History Dashboard",
      "Scalable Backend Architecture with Express & MongoDB"
    ]
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    category: "php",
    categoryLabel: "PHP & MySQL",
    isLive: false,
    liveUrl: "",
    githubUrl: "#",
    image: "/assets/images/project-hotel.svg",
    shortDesc: "Web-based hotel reservation system with room allocation, customer registration, booking history, and responsive UI.",
    fullDesc: "Traditional web-based database management system created for hospitality operations. Handles room inventory, check-in/check-out dates, customer records, and invoice tracking with PHP backend and MySQL relational database.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    features: [
      "Room Booking & Real-time Allocation System",
      "Customer Registration & Record Database",
      "Reservation History & Billing Summary",
      "Responsive UI for Receptionist and Guest Access",
      "Relational Database Design with Structured MySQL Tables"
    ]
  }
];

export const certificationsData = [
  {
    id: "cert-1",
    title: "Android Application Development",
    issuer: "EngineerCore",
    issuerIcon: "fa-solid fa-building-columns",
    icon: "fa-brands fa-android",
    date: "May 2023 – June 2023",
    verified: true
  },
  {
    id: "cert-2",
    title: "Python for Data Science",
    issuer: "Global Institute of Technology",
    issuerIcon: "fa-solid fa-university",
    icon: "fa-brands fa-python",
    date: "July 2022 – Aug 2022",
    verified: true
  },
  {
    id: "cert-3",
    title: "Software Engineering Job Simulation",
    issuer: "Industry Simulated Program",
    issuerIcon: "fa-solid fa-award",
    icon: "fa-solid fa-gears",
    date: "Dec 2022 – Jan 2023",
    verified: true
  },
  {
    id: "cert-4",
    title: "Data Analyst Certification",
    issuer: "Edureka",
    issuerIcon: "fa-solid fa-graduation-cap",
    icon: "fa-solid fa-chart-pie",
    date: "Sept 2025 – Present",
    verified: true
  }
];
