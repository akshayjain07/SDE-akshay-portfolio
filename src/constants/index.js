import {
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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  powerbi,
  excel,  
  powerpoint,
  jupyter,
  numpy,
  pandas,
  python,
  sql,
  powerbi_project,
  excel_project,
  python_project,
  sql_project,
  price_tracker_project,
  portfolio_project,
  inotebook_project,
  newsapp_project,
  attendance_project
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
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "threejs",
    icon: threejs,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "tailwind",
    icon: tailwind,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Akshay proved me wrong.",
    name: "Neha Singh",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Akshay does.",
    name: "Akash Kumar",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Akshay optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Yaseen Khan",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Price Tracker",
    description:
      "Crafted an e-commerce scraping platform using Next.js and Bright Data's webunlocker. Empowers users with price drop alerts and keeps competitors informed about stock status through automated cron jobs, ensuring strategic insights for both.",
    tags: [
      {
        name: "webScraping",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: price_tracker_project,
    source_code_link: "https://github.com/akshayjain07/price-tracker",
  },
  {
    name: "News App",
    description:
      "Leveraged Python libraries (Numpy, Pandas, Matplotlib, Seaborn) to analyze last year's Diwali sales data for a shop. Presented actionable insights that propelled this year's Diwali sales.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api fetching",
        color: "green-text-gradient",
      },
      // {
      //   name: "matplotlib",
      //   color: "pink-text-gradient",
      // },
    ],
    image: newsapp_project,
    source_code_link: "https://github.com/akshayjain07/news-app",
  },
  {
    name: "Cloud Note App",
    description:
      "Compiled a comprehensive 2022 annual sales report for Vrinda Store using MS Excel. Conducted data cleaning, constructed pivot tables and charts, and developed a dashboard for valuable insights, driving sales growth in 2023.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: inotebook_project,
    source_code_link: "https://github.com/akshayjain07/inotebook",
  },
  {
    name: "Personal Portfolio",
    description:
      "Engineered an online sales dashboard for Madhav Store, facilitating nationwide sales tracking and analysis. The intuitive interface delivers key insights, fostering data-driven decision-making for optimal business performance.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react-tilt",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio_project,
    source_code_link: "https://github.com/akshayjain07/SDE-akshay-portfolio",
  },
  {
    name: "Attendance App",
    description:
      "Applied SQL to analyze a vast music playlist database, extracting valuable insights for business growth. Addressed critical questions, aiding the store in understanding customer preferences, optimizing inventory, and making informed decisions for holistic business development.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machineLearning",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: attendance_project,
    source_code_link: "https://github.com/akshayjain07/face-recognition-attendance-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
