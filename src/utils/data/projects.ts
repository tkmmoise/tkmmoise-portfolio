import { IProject } from "@/models";

import marvel_quiz from "/public/projects/marvel_quiz.gif";
import bmi_calculator from "/public/projects/bmi_calculator.gif";
import colisky from "/public/projects/colisky.png";
import ulboard from "/public/projects/ulboard.png";
import portfolio from "/public/projects/portfolio.png";
import election_prediction from "/public/projects/election_prediction.png";
import chat_app from "../../../public/projects/chat_app.webp";
import tesla_app from "../../../public/projects/tesla.webp";
import food_app from "../../../public/projects/food_app.gif";

const en: IProject[] = [
  {
    id: 1,
    name: "My Portfolio",
    description: "",
    tools: [
      "Next JS",
      "React",
      "Typescript",
      "Tailwind CSS",
      "SASS",
      "Email JS"
    ],
    role: "Full stack Developer",
    code: "https://github.com/tkmmoise/tkmmoise-portfolio",
    demo: "/#",
    image: portfolio
  },
  {
    id: 2,
    name: "Prédiction des élections en France grace à l'IA",
    description: "",
    tools: [
      "Machine Learning",
      "Talend",
      "ETL",
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplolib",
      "Seaborn",
      "Tableau",
      "Tensorflow",
      "Postgres"
    ],
    role: "Full Stack Developer",
    code: "#",
    demo: "#",
    image: election_prediction
  },
  {
    id: 3,
    name: "Marvel Quiz",
    description: "",
    tools: [
      "React",
      "JavaScript",
      "Redux",
      "Axios",
      "Firebase Auth",
      "FireStore"
    ],
    role: "Full Stack Developer",
    code: "https://github.com/tkmmoise/marvel-quiz",
    demo: "https://marvel-quiz-dc589.web.app/",
    image: marvel_quiz
  },
  {
    id: 4,
    name: "BMI Calculator",
    description: "",
    tools: [
      "React",
      "Javascript",
      "Redux",
      "Axios",
      "Firebase Auth",
      "Firestore"
    ],
    code: "https://github.com/tkmmoise/bmi-calculator",
    role: "Full Stack Developer",
    demo: "https://bmi-calculator-6e3e9.web.app/",
    image: bmi_calculator
  },
  {
    id: 5,
    name: "UL Board App",
    description: "UL Board App",
    tools: ["React Native", "Javascript", "Redux", "Graph QL"],
    code: "https://github.com/tkmmoise/ULMobile",
    demo: "#",
    image: ulboard,
    role: "Full Stack Developer"
  },
  {
    id: 6,
    name: "Colisky App",
    description: "Colisky App",
    tools: ["React Native", "Javascript", "Formik", "Social Media Auth"],
    code: "#",
    demo: "#",
    image: colisky,
    role: "Full Stack Developer"
  },
  {
    id: 7,
    name: "Chat App",
    description: "Chat App",
    tools: ["React", "Javascript", "NodeJS", "Express", "Socket.IO"],
    code: "#",
    demo: "#",
    image: chat_app,
    role: "Full Stack Developer"
  },
  {
    id: 8,
    name: "Tesla App",
    description: "Tesla App",
    tools: ["React Native", "Javascript"],
    code: "#",
    demo: "#",
    image: tesla_app,
    role: "Full Stack Developer"
  },
  {
    id: 9,
    name: "Food App",
    description: "Food App",
    tools: ["HTML", "CSS", "Javascript"],
    code: "#",
    demo: "#",
    image: food_app,
    role: "Full Stack Developer"
  }
];

const fr: IProject[] = [
  {
    id: 1,
    name: "My Portfolio",
    description: "",
    tools: [
      "Next JS",
      "React",
      "Typescript",
      "Tailwind CSS",
      "SASS",
      "Email JS"
    ],
    role: "Full stack Developer",
    code: "https://github.com/tkmmoise/tkmmoise-portfolio",
    demo: "/#",
    image: portfolio
  },
  {
    id: 2,
    name: "Prédiction des élections en France grace à l'IA",
    description: "",
    tools: [
      "Machine Learning",
      "Talend",
      "ETL",
      "Python",
      "Pandas",
      "Scikit-learn",
      "Matplolib",
      "Seaborn",
      "Tableau",
      "Tensorflow",
      "Postgres"
    ],
    role: "Full Stack Developer",
    code: "#",
    demo: "#",
    image: election_prediction
  },
  {
    id: 3,
    name: "Marvel Quiz",
    description: "",
    tools: [
      "React",
      "JavaScript",
      "Redux",
      "Axios",
      "Firebase Auth",
      "FireStore"
    ],
    role: "Full Stack Developer",
    code: "https://github.com/tkmmoise/marvel-quiz",
    demo: "https://marvel-quiz-dc589.web.app/",
    image: marvel_quiz
  },
  {
    id: 4,
    name: "BMI Calculator",
    description: "",
    tools: [
      "React",
      "Javascript",
      "Redux",
      "Axios",
      "Firebase Auth",
      "Firestore"
    ],
    code: "https://github.com/tkmmoise/bmi-calculator",
    role: "Full Stack Developer",
    demo: "https://bmi-calculator-6e3e9.web.app/",
    image: bmi_calculator
  },
  {
    id: 5,
    name: "UL Board App",
    description: "UL Board App",
    tools: ["React Native", "Javascript", "Redux", "Graph QL"],
    code: "https://github.com/tkmmoise/ULMobile",
    demo: "#",
    image: ulboard,
    role: "Full Stack Developer"
  },
  {
    id: 6,
    name: "Colisky App",
    description: "Colisky App",
    tools: ["React Native", "Javascript", "Formik", "Social Media Auth"],
    code: "#",
    demo: "#",
    image: colisky,
    role: "Full Stack Developer"
  },
  {
    id: 7,
    name: "Chat App",
    description: "Chat App",
    tools: ["React", "Javascript", "NodeJS", "Express", "Socket.IO"],
    code: "#",
    demo: "#",
    image: chat_app,
    role: "Full Stack Developer"
  },
  {
    id: 8,
    name: "Tesla App",
    description: "Tesla App",
    tools: ["React Native", "Javascript"],
    code: "#",
    demo: "#",
    image: tesla_app,
    role: "Full Stack Developer"
  },
  {
    id: 9,
    name: "Food App",
    description: "Food App",
    tools: ["HTML", "CSS", "Javascript"],
    code: "#",
    demo: "#",
    image: food_app,
    role: "Full Stack Developer"
  }
];

const projectsData = {
  en,
  fr
};

export default projectsData;
