/* Personal Portfolio Configuration - Hemant Singh Rathore */

// Website related settings
const settings = {
  isSplash: false, // Splash screen
};

// SEO Related settings
const seo = {
  title: "Hemant Singh Rathore | Portfolio",
  description:
    "Recently graduated B.Tech Computer Science (Blockchain) student with hands-on experience in blockchain development, smart contract engineering, and software development. Proficient in Solidity, Python, JavaScript, and Web3 development technologies.",
  og: {
    title: "Hemant Singh Rathore Portfolio",
    type: "website",
    url: "https://hemant-2704.github.io/",
  },
};

// Home Page Greeting
const greeting = {
  title: "Hemant Singh Rathore",
  logo_name: "HemantSinghRathore",
  nickname: "Hemant",
  subTitle:
    "Recently graduated B.Tech Computer Science (Blockchain) student with hands-on experience in blockchain development, smart contract engineering, and software development. Proficient in Solidity, Python, JavaScript, and Web3 development technologies. Seeking Software Engineer, Blockchain Developer, or Associate Engineer roles.",
  resumeLink: "/resume",
  portfolio_repository: "https://github.com/Hemant-2704/Hemant-2704.github.io",
  githubProfile: "https://github.com/Hemant-2704",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Hemant-2704",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hemant-rathore-2405b6259",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:hemantrathore2704@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Blockchain & Distributed Ledger",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing and developing secure Smart Contracts adhering to ERC-20 and ERC-721 token standards",
        "⚡ Validating and fuzz-testing contracts using Foundry, Remix, Truffle, and OpenZeppelin security standards",
        "⚡ Web3 frontend-to-blockchain communication using Ethers.js, Web3.js, and decentralized storage with IPFS",
        "⚡ Knowledge of Hyperledger Fabric (chaincode concepts, permissioned networks) and Layer-2 scaling (Optimistic & ZK Sync)",
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            color: "#62688F",
          },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            color: "#3C3C3D",
          },
        },
        {
          skillName: "Web3.js",
          fontAwesomeClassname: "simple-icons:web3dotjs",
          style: {
            color: "#F16822",
          },
        },
        {
          skillName: "IPFS",
          fontAwesomeClassname: "simple-icons:ipfs",
          style: {
            color: "#69C4CD",
          },
        },
        {
          skillName: "Hyperledger",
          fontAwesomeClassname: "simple-icons:hyperledger",
          style: {
            color: "#2F3134",
          },
        },
      ],
    },
    {
      title: "Full Stack & Software Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building backend and frontend software using Python, JavaScript, Solidity, and C",
        "⚡ Developing database schemas and queries using MySQL, MongoDB, and MongoDB Compass",
        "⚡ Strong computer science fundamentals: DSA, OOP, DBMS, Operating Systems, and Computer Networks",
        "⚡ Experience with modern developer workflows: Git, GitHub Copilot, Postman, REST APIs, and VS Code",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Data Science & Systems",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Inventory tracking, automated monitoring, low-stock alerts, and data reporting",
        "⚡ Validated and verified 150+ operational records to ensure data accuracy and system consistency",
        "⚡ Certified in Enterprise Data Science (IBM) and Business Intelligence & Analytics (NPTEL IIT Madras)",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/Hemant-2704",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/hemant-rathore-2405b6259",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Samrat Ashok Technological Institute (SATI), Vidisha",
      subtitle: "B.Tech. in Computer Science (Blockchain)",
      logo_path: "sati_logo.png",
      alt_name: "SATI Vidisha",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Maintaining a strong academic performance with CGPA: 8.44.",
        "⚡ Comprehensive study of core CS fundamentals: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks.",
        "⚡ Specialization in Blockchain Technology, Smart Contracts, Distributed Ledger, Ethereum, and Web3 architectures.",
        "⚡ Management Lead for Training & Placement Cell (2023–2025) and active member of BIS Club (CSE Department).",
      ],
      website_link: "https://www.satiengg.in/",
    },
    {
      title: "Carmel Convent Senior Secondary School, Bhopal",
      subtitle: "CBSE Class XII & Class X",
      logo_path: "carmel_logo.png",
      alt_name: "Carmel Convent School Bhopal",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Completed Class XII (CBSE) in 2021–2022.",
        "⚡ Completed Class X (CBSE) in 2019–2020.",
        "⚡ Strong foundation in Mathematics, Science, and Analytical Problem Solving.",
      ],
      website_link: "https://carmelbhopal.net/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Blockchain Developer Certificate Badge",
      subtitle: "Oracle University",
      logo_path: "oracle_logo.png",
      certificate_link: "https://www.linkedin.com/in/hemant-rathore-2405b6259",
      alt_name: "Oracle University",
      color_code: "#C7463499",
    },
    {
      title: "Solidity 101",
      subtitle: "Cyfrin Updraft",
      logo_path: "cyfrin_logo.png",
      certificate_link: "https://updraft.cyfrin.io/",
      alt_name: "Cyfrin Updraft",
      color_code: "#1E1E3899",
    },
    {
      title: "Full-Stack Web3 Development",
      subtitle: "Cyfrin Updraft",
      logo_path: "cyfrin_logo.png",
      certificate_link: "https://updraft.cyfrin.io/",
      alt_name: "Cyfrin Updraft",
      color_code: "#00FFA333",
    },
    {
      title: "Privacy & Security in Online Social Media",
      subtitle: "NPTEL (IIT Hyderabad)",
      logo_path: "nptel_logo.png",
      certificate_link: "https://nptel.ac.in/",
      alt_name: "NPTEL IIT Hyderabad",
      color_code: "#FFBB0099",
    },
    {
      title: "Business Intelligence & Analytics",
      subtitle: "NPTEL (IIT Madras)",
      logo_path: "nptel_logo.png",
      certificate_link: "https://nptel.ac.in/",
      alt_name: "NPTEL IIT Madras",
      color_code: "#FF8C0099",
    },
    {
      title: "Enterprise Data Science",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link: "https://www.ibm.com/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships and Leadership",
  description:
    "Hands-on experience in software development, data validation, and troubleshooting through developer internships. Active leader in campus placement management and technical clubs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      // Marks the section holding the current/most recent role. It is used to
      // build the schema.org jobTitle/worksFor data in
      // components/seoHeader/SeoHeader.js, so it must not be removed.
      work: true,
      experiences: [
        {
          title: "Intern Developer",
          company: "Cyber Cell, Vidisha (ASP Office), MP",
          company_url: "https://mppolice.gov.in/",
          logo_path: "cybercell_logo.png",
          duration: "May 2025 - Oct 2025",
          location: "Vidisha, Madhya Pradesh",
          description:
            "Supported software development and maintenance activities across design, coding, testing, debugging, and issue resolution phases. Verified and validated 150+ operational records to ensure data accuracy and consistency. Assisted in analyzing technical issues and implementing solutions to improve system reliability. Coordinated with team members during requirement collection and project execution activities.",
          color: "#0B1D3A",
        },
        {
          title: "In-House Internship – Programming Tactics",
          company: "Samrat Ashok Technological Institute, Vidisha",
          company_url: "https://www.satiengg.in/",
          logo_path: "sati_logo.png",
          duration: "July 2023",
          location: "Vidisha, Madhya Pradesh",
          description:
            "Completed intensive training in data structures, algorithms, and programming fundamentals. Solved algorithmic and data structure-based coding challenges to strengthen problem-solving and analytical skills. Applied structured programming techniques to improve code efficiency and maintainability.",
          color: "#003366",
        },
      ],
    },
    {
      title: "Leadership & Achievements",
      experiences: [
        {
          title: "Management Lead – Training & Placement Cell",
          company: "SATI Vidisha",
          company_url: "https://www.satiengg.in/",
          logo_path: "sati_logo.png",
          duration: "2023 - 2025",
          location: "Vidisha, Madhya Pradesh",
          description:
            "Led student training initiatives and campus placement coordination across the engineering department. Managed recruiter communications, scheduled technical mock interviews, and assisted students with career prep.",
          color: "#003366",
        },
        {
          title: "1st Prize Winner & Member",
          company: "BIS Club (Bureau of Indian Standards), SATI CSE Dept",
          company_url: "https://www.bis.gov.in/",
          logo_path: "bis_logo.png",
          duration: "2023 - Present",
          location: "Vidisha, Madhya Pradesh",
          description:
            "Awarded 1st Prize in Standard Writing Competition organized by BIS Club, SATI. Earned the Manak Mitra Campaign Certificate from the Bureau of Indian Standards. Active participant in technical department activities.",
          color: "#002B49",
        },
        {
          title: "Google Cloud Swags Achiever",
          company: "GDSC SATI (Google Developer Student Clubs)",
          company_url: "https://developers.google.com/community/gdsc",
          logo_path: "google_logo.png",
          duration: "2022 - 2024",
          location: "Vidisha, Madhya Pradesh",
          description:
            "Earned Google Cloud Swags (2022, 2023, 2024) for active participation and completing hands-on labs in cloud computing, architecture, and deployment.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A showcase of my projects in Blockchain, Smart Contracts, NFT Marketplaces, Web3 dApps, and Python Software Systems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// GitHub Open Source
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN || "",
  githubUserName: "Hemant-2704",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar_hemant.png",
    description:
      "I am available for Software Engineer, Blockchain Developer, and Associate Engineer opportunities. Feel free to reach out via email or LinkedIn — I will respond promptly!",
  },
  blogSection: {
    title: "Technical Writing & Repos",
    subtitle:
      "Showcasing smart contracts, Web3 architecture, and Python projects.",
    link: "https://github.com/Hemant-2704",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bhopal, Madhya Pradesh, India",
    locality: "Bhopal",
    country: "India",
    region: "Madhya Pradesh",
    postalCode: "462001",
    streetAddress: "Bhopal",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Bhopal,+Madhya+Pradesh",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7489284549",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  openSource,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
