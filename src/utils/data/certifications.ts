import { ICertification } from "@/models/certifications";
import relational_database_certif from "/public/certifications/relational_database_certif.png";
import java_certif from "/public/certifications/java_certif.png";
import react_certif from "/public/certifications/react_certif.png";
import javascript_certif from "/public/certifications/javascript_certif.png";
import angular from "../../../public/certifications/angular.webp";

const data: ICertification[] = [
  {
    id: 1,
    title: "Java",
    issuer: "Sololearn",
    duration: "2022",
    description: "Java",
    image: java_certif,
    url: "https://www.sololearn.com/fr/certificates/CT-XMDE9RYX"
  },
  {
    id: 2,
    title: "Relational Database",
    issuer: "FreeCodeCamp",
    duration: "2022",
    description: "Relational Database",
    image: relational_database_certif,
    url: "https://www.freecodecamp.org/certification/tkmmoise/relational-database-v8"
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    duration: "2022",
    description: "JavaScript Algorithms and Data Structures",
    image: javascript_certif,
    url: "https://freecodecamp.org/certification/tkmmoise/javascript-algorithms-and-data-structures"
  },
  {
    id: 4,
    title: "React",
    issuer: "HackerRank",
    duration: "2021",
    description: "React",
    image: react_certif,
    url: "https://www.hackerrank.com/certificates/03efdf5393a6"
  },
  {
    id: 5,
    title: "Angular",
    issuer: "Sololearn",
    duration: "2024",
    description: "Angular",
    image: angular,
    url: "https://www.sololearn.com/certificates/CC-SLW2USBU"
  }
  // {
  //   id: 6,
  //   title: "Frontend Developer",
  //   issuer: "FreeCodeCamp",
  //   duration: "2021",
  //   description: "Quality Assurance",
  //   url: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffkjwnnxxsidl6rnwht73.jpg"
  // }
];

export default data;
