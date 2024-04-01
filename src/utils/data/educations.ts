import { IEducation } from "@/models/educations";

const en: IEducation[] = [
  {
    id: 1,
    title: "Master's in Computer Engineering",
    duration: "2023 - Present",
    institution: "Private School of Computer Science (EPSI)",
    address: "Lyon, France",
    details: [
      "Decisional Informatics Management, Big Data, and Business Intelligence.",
      "Design and Development of Advanced Application Solutions (Mobile, Embedded ERP).",
      "Big Data and Business Intelligence, Innovation and Professional Development."
    ]
  },
  {
    id: 2,
    title: "Bachelor's in Software Engineering",
    duration: "2018 - 2021",
    institution: "Polytechnic School of Lomé (EPL/UL)",
    address: "Lomé, Togo",
    details: [
      "Programming in Java, C, C++, OOP, Database.",
      "Algorithms, Data Structures, Computer Architecture, Networks.",
      "Linear Algebra, Probability."
    ]
  }
];

const fr: IEducation[] = [
  {
    id: 1,
    title: "Master en Ingénierie informatique",
    duration: "2023 - Présent",
    institution: "Ecole Privée des Sciences Informatiques (EPSI)",
    address: "Lyon, France",
    details: [
      "Gestion de l'Informatique Décisionnelle, Big Data et Business Intelligence.",
      "Conception et Développement de Solutions Applicatives Avancées (Mobiles, Embarquées ERP).",
      "Big Data et Business Intelligence, Innovation et Développement Professionnel."
    ]
  },
  {
    id: 2,
    title: "Licence en Génie Logiciel",
    duration: "2018 - 2021",
    institution: "École Polytechnique de Lomé (EPL/UL)",
    address: "Lomé, Togo",
    details: [
      "Programmation en Java, C, C++, POO, Base de données.",
      "Algorithmes, Structure des données, Architecture des ordinateurs, Réseaux.",
      "Algebre linéaire, Probabilité."
    ]
  }
];

const educationsData = { en, fr };

export default educationsData;
