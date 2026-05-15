import salesImage from "../assets/projects/sales.png";
import vendingImage from "../assets/projects/vending.png";
import englishImage from "../assets/projects/Englishapp.png";
import handymanImage from "../assets/projects/handyman.jpg";

const projectList = [
  {
    slug: "pegas-go-sales-app",
    title: "Pegas Go Sales App",
    role: "App Developer",
    description:
      "Created a multi-shop e-commerce app with authentication, order management, and sales dashboards using Flutter and Firebase.",
    image: salesImage,
    tags: ["E-commerce", "Dashboards", "Authentication"],
    repo: "",
    live: ""
  },
  {
    slug: "vending-machine-app",
    title: "Vending Machine App",
    role: "App Developer",
    description:
      "Built an interactive app for product selection and simulated payments with real-time inventory via Firebase.",
    image: vendingImage,
    tags: ["Real-time Inventory", "Payments", "Interactive UI"],
    repo: "",
    live: ""
  },
  {
    slug: "english-learning-app",
    title: "English Learning App",
    role: "App Developer",
    description:
      "Developed a learning app featuring progress tracking, daily tasks, and speech recognition for speaking practice.",
    image: englishImage,
    tags: ["Speech Recognition", "Progress Tracking", "Daily Tasks"],
    repo: "",
    live: ""
  },
  {
    slug: "tapon-handyman-app",
    title: "TapOn Handyman App",
    role: "University Group Project",
    description:
      "University group project: designed a multi-role service app with booking features using Flutter, Node.js, and MongoDB.",
    image: handymanImage,
    tags: ["Flutter", "Node.js", "MongoDB"],
    repo: "",
    live: ""
  }
];

export default projectList;
