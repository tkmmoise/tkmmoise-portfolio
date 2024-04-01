import { IExperience } from "@/models/experiences";

const en: IExperience[] = [
  {
    id: 1,
    title: "Python Developer",
    company: "MOON TOGO",
    duration: "(March 2022 - August 2023)",
    contract: "Full-time",
    address: "Lome, Togo",
    details: [
      "Performed Python (Django) and React Native development.",
      "Documented the implemented developments.",
      "Performed unit tests and ensured their automation for continuous integration purposes.",
      "Participated in the testing and deployment phases.",
      "Ensured evolutionary and corrective maintenance after deployment."
    ]
  },
  {
    id: 2,
    title: "FullStack Developer",
    company: "Kimoasoft",
    duration: "(April 2021 - February 2022)",
    contract: "Apprenticeship",
    address: "Lome, Togo",
    details: [
      "Designed responsive user interfaces following best practices.",
      "Created high-performance web applications (WordPress and Node.js or Laravel).",
      "Improved and maintained existing web applications.",
      "Designed and implemented testing strategies."
    ]
  },
  {
    id: 3,
    title: "Web Developer",
    company: "SPark Corporation",
    duration: "(November 2020 - April 2021)",
    contract: "Internship",
    address: "Lome, Togo",
    details: [
      "Analyzed user requirements using UML and wrote a technical specification document.",
      "Actively contributed to the development and maintenance of a ticket selling platform (Laravel, JavaScript, MySQL).",
      "Designed showcase websites for Krys Crêpes and JDOP Consulting."
    ]
  }
];

const fr: IExperience[] = [
  {
    id: 1,
    title: "Développeur Python",
    company: "MOON TOGO",
    duration: "(Mars 2022 - Août 2023)",
    contract: "CDD",
    address: "Lomé, Togo",
    details: [
      "Réaliser les développements en Python (Django) et React Native.",
      "Documenter les développements effectués.",
      "Réaliser les tests unitaires et veiller à leur automatisation à des fins d'intégration continue.",
      "Participer aux phases de recette et de déploiement.",
      "Assurer la maintenance évolutive et corrective après la mise en service."
    ]
  },
  {
    id: 2,
    title: "Développeur FullStack",
    company: "Kimoasoft",
    duration: "(Avril 2021 - Février 2022)",
    contract: "Alternance",
    address: "Lomé, Togo",
    details: [
      "Concevoir des interfaces utilisateurs responsive suivant les meilleures normes.",
      "Créer des applications Web performantes (WordPress et Node.js ou Laravel).",
      "Améliorer les performances et maintenir les applications Web actuelles.",
      "Concevoir et mettre en place des stratégies de tests."
    ]
  },
  {
    id: 3,
    title: "Développeur Web",
    company: "SPark Corporation",
    duration: "(Novembre 2020 - Avril 2021)",
    contract: "Stage",
    address: "Lomé, Togo",
    details: [
      "Analyse des besoins utilisateurs avec UML et rédaction d'un cahier des charges technique.",
      "Contribution active au développement et à la maintenance d'une plateforme de vente de billets (PHP avec Laravel et JavaScript).",
      "Conception de sites vitrines Krys Crêpes et JDOP Consulting."
    ]
  }
];

const experiencesData = {
  en,
  fr
};

export default experiencesData;
