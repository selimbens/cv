import Certification from "./components/certification";
import Experience from "./components/expertise";
import Info from "./components/info";
import Project from "./components/project";
import Skills from "./components/skills";
import { CVType, CertificationType, ProjectType, SkillsType } from "./types";

const data: CVType = {
  info: {
    full_name: "Selim Ben Slimene",
    job_title: "fullstack web developer",
    languages: ["english", "french", "arabic"],
    address: "Tunisia, Tunis",
    telephone: "+216 55 312 068",
    links: [
      "linkedin.com/in/selim-bens",
      "github.com/selimbens",
      "selimbenslimene@gmail.com",
    ],
  },
  experiences: [
    {
      company: "Think-iT",
      website: "https://www.think-it.io/",
      location: "Tunis (hybrid)",
      title: "Fullstack web developer",
      description: "loremy",
      started_at: "11/2022",
      ended_at: "present",
      tasks: [
        "Worked on adding functionalities to Kulimi`s Open Learning Community plateform",
      ],
    },
    {
      company: "bloobloom",
      website: "https://bloobloom.com/",
      location: "United Kingdom (Remote)",
      title: "Front-end VueJs Developer",
      description: "loremy",
      started_at: "03/2022",
      ended_at: "07/2022",
      tasks: [
        "Improved functionalities and added features to two Vue.js apps and a Nuxt.js website within time estimation.",
        "Helped write coding standards to follow.",
        "Journaled though code base to plan code refactoring execution according to priority.",
        "Investigated team workflows (like handling hotfixes, and managing git branches) and documented solutions for both the team and futur onboardings.",
      ],
    },
    {
      company: "GoMyCode",
      website: "https://gomycode.com",
      location: "Tunis, lac 1 Hackerspace",
      title: "Fullstack Web Development Track Instructor",
      description: "loremy",
      started_at: "07/2022",
      ended_at: "present",
      tasks: [
        "Plan workshop demonstrating problem solving approaches",
        "Guide students to learn how to do their own research",
        "Keep track of deadlines and correct students projects",
      ],
    },
  ],
  skills: [
    {
      category: "programing languages",
      skills: [
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "GraphQL",
        "Python",
        "Linux Bash",
      ],
    },
    {
      category: "frameworks/libraries",
      skills: [
        "ReactJs",
        "NextJs",
        "VueJs",
        "NuxtJs",
        "NodeJs",
        "Express",
        "Mongoose",
        "Cypress",
        "Jest",
        "TailwindCss",
        "Bootstrap",
      ],
    },
    {
      category: "tools/technologies",
      skills: [
        "Git",
        "Docker",
        "AWS Cognito",
        "Figma",
        "Github",
        "Github Actions",
        "BitBucket",
        "Jira",
        "CPanel",
        "Notion",
      ],
    },
  ],
  projects: [
    {
      title: "TK Digital Agency",
      date: "11/2021",
      tasks: [
        "Build tkdigitalagency.ca full website for digital marketing agency launch, using React.js and Typescript.",
        "Helped internal team write data vizualisation algorithms.",
        "Setup deployment workflow and scripts",
      ],
    },
  ],

  certifications: [
    {
      title: "JavaScript Algorithms and Data Structures Certification",
      date: "08/2020",
      skills: [
        "Object Oriented & Functional Programming",
        "JavaScript ES6, and Intermediate Algorithm Scripting",
      ],
    },
    {
      title: "Responsive WebDesign Certification",
      date: "06/2020",
      skills: ["HTML5, CSS3 & Responsive Web Design Principles"],
    },
  ],
};

function App() {
  const { info, experiences, skills, projects, certifications } = data;
  return (
    <div className="mx-auto container p-8 max-w-4xl">
      <Info className="border-b mb-4" info={info} />
      {/* Main section */}
      <div className="flex gap-8 pb-4">
        {/* Left side */}
        <div className="max-w-md">
          <h2 className="text-xl font-medium">Experience</h2>
          {experiences.map((experience, index) => (
            <Experience
              className="mb-4"
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </div>
        {/* Right side */}
        <div>
          <h2 className="text-xl font-medium">Skills</h2>
          {skills.map((skillsGroup: SkillsType, index: number) => (
            <Skills
              key={`skill_group-${index}`}
              skillsGroup={skillsGroup}
              className="max-w-md mb-2"
            />
          ))}
          <h2 className="text-xl font-medium mt-4">Projects</h2>
          {projects.map((project: ProjectType, index: number) => (
            <Project
              key={`project-${index}`}
              project={project}
              className="max-w-md mb-2"
            />
          ))}
        </div>
      </div>
      {/* Footer section */}
      <div className="border-t pt-6">
        <h2 className="text-xl font-medium">Certifications</h2>
        {certifications.map(
          (certification: CertificationType, index: number) => (
            <Certification
              key={`certification-${index}`}
              className="mb-2"
              certification={certification}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
