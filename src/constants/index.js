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
  rawsam,
  alrajhi,
  oumlapay,
  Quran_System,
  Questions_Bank,
  MyFood,
  HR,
  faculty_eval,
  Eid_Card,
  Golden_Concept,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer & Technical Support",
    company_name: "Rawsam",
    icon: rawsam,
    iconBg: "#E6DEDD",
    date: "April 2021 - June 2021",
    points: [
      "Developing and maintaining web applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Fixing computers and other hardware devices.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Oumlapay",
    icon: oumlapay,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Create dashboards and charts for the company.",
    ],
  },
  {
    title: "Application Developer",
    company_name: "Alrajhi University",
    icon: alrajhi,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Developing and maintaining web applications using Django, React Js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Deploying applications to production servers using Nginx and Apache.",
    ],
  },
];

const projects = [
  {
    name: "Faculty Evaluation",
    description:
      "Faculty Evaluation is an application that helps the students to evaluate the faculty in honest way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: faculty_eval,
    source_code_link: "https://github.com/iiDon/front-end-faculty",
  },
  {
    name: "Questions Bank",
    description:
      "Questions Bank is an application that helps the faculty to add questions and back to them later.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "green-text-gradient",
      },
    ],
    image: Questions_Bank,
    source_code_link: "https://github.com/iiDon/questions-bank",
  },
  {
    name: "Quran Students System",
    description:
      "Quran Students System is an application that helps the students to learn the quran and track their progress.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
    ],
    image: Quran_System,
    source_code_link: "https://github.com/iiDon/Students-Quran-System",
  },
  {
    name: "Human Resources",
    description:
      "Human Resources is an application that helps the compamy to recruit new employees.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
    ],
    image: HR,
    source_code_link: "https://github.com/iiDon/hr",
  },
  {
    name: "My Food",
    description: "My Food is a landing page for a food app.",
    tags: [
      {
        name: "WordPress",
        color: "white-text-gradient",
      },
    ],
    image: MyFood,
    source_code_link: "https://github.com/iiDon/Students-Quran-System",
  },
  {
    name: "Eid Card",
    description:
      "Eid Card is an application that helps the employees to get eid card and send it to their friends.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Express JS",
        color: "green-text-gradient",
      },
    ],
    image: Eid_Card,
    source_code_link: "https://github.com/iiDon/eid-card",
  },
  {
    name: "Golden Concept",
    description: "Golden Concept is a landing page for a company",
    tags: [
      {
        name: "Next JS",
        color: "white-text-gradient",
      },
    ],
    image: Golden_Concept,
    source_code_link: "https://github.com/iiDon/golden-concept",
  },
];

export { services, technologies, experiences, projects };
