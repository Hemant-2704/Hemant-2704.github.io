/* Personal Portfolio Configuration - Hemant Singh Rathore */

// Website related settings
const settings = {
  isSplash: false, // Splash screen
};

// SEO Related settings
const seo = {
  title: "Hemant Singh Rathore | Portfolio",
  description:
    "Software Engineer, Blockchain Developer, and Big Data Analytics Scholar. Hands-on expertise in Solidity smart contracts, Python, full-stack Web3 dApps, and distributed data systems.",
  og: {
    title: "Hemant Singh Rathore | Portfolio",
    type: "website",
    url: "https://hemantsinghrathore.me/",
  },
};

// Home Page Greeting
const greeting = {
  title: "Hemant Singh Rathore",
  logo_name: "", // Top signature removed
  nickname: "", // Nickname removed
  subTitle:
    "Software engineer and blockchain developer with a solid foundation in computer science and data analytics. Currently advancing distributed computing and large-scale data systems through a PG Diploma in Big Data Analytics at CDAC Bengaluru. Dedicated to architecting secure smart contracts, resilient Web3 dApps, and scalable, data-driven applications.",
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
    link: "https://www.linkedin.com/in/hemant-rathore-2405b6259/",
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
        "⚡ Architecting battle-tested smart contracts and decentralized protocols following ERC-20, ERC-721, and OpenZeppelin security standards",
        "⚡ Rigorous validation, unit testing, and property-based fuzzing using Foundry to catch reentrancy vulnerabilities and ensure zero critical flaws",
        "⚡ Building seamless full-stack dApps connecting intuitive web interfaces to on-chain logic using Ethers.js, Web3.js, and decentralized IPFS storage",
        "⚡ Exploring permissioned enterprise ledgers and distributed architectures with Hyperledger Fabric",
      ],
      softwareSkills: [
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: { color: "#62688F" },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: { color: "#3C3C3D" },
        },
        {
          skillName: "Web3.js",
          fontAwesomeClassname: "simple-icons:web3dotjs",
          style: { color: "#F16822" },
        },
        {
          skillName: "IPFS",
          fontAwesomeClassname: "simple-icons:ipfs",
          style: { color: "#69C4CD" },
        },
        {
          skillName: "Hyperledger",
          fontAwesomeClassname: "simple-icons:hyperledger",
          style: { color: "#2F3134" },
        },
      ],
    },
    {
      title: "Big Data & Analytics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Engineering scalable batch and streaming data pipelines using Apache Spark, Hadoop (HDFS, MapReduce, YARN), Hive, Pig, and Kafka",
        "⚡ Developing predictive machine learning models and exploratory workflows in Python using Pandas, NumPy, and Scikit-learn",
        "⚡ Crafting interactive business dashboards and analytical visualizations in Tableau, Power BI, Matplotlib, and Seaborn to translate data into actionable insights",
        "⚡ Deepening core distributed systems and enterprise data engineering competencies through CDAC Bengaluru's PG Diploma program",
      ],
      softwareSkills: [
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: { color: "#E25A1C" },
        },
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "simple-icons:apachehadoop",
          style: { color: "#66CCFF" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3" },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: { color: "#E97627" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: { color: "#231F20" },
        },
      ],
    },
    {
      title: "Software Engineering & Databases",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Writing clean, maintainable, modular code across multi-language stacks: Python, JavaScript, Solidity, SQL, C, and R",
        "⚡ Designing, querying, and tuning both relational and NoSQL databases: MySQL, PostgreSQL, MongoDB, and Cassandra",
        "⚡ Solid theoretical and applied CS fundamentals: Data Structures & Algorithms, Object-Oriented Design, DBMS, OS, and Computer Networks",
        "⚡ Professional development workflow: Git version control, Docker containerization, RESTful API integration, and cloud environments",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
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
      profileLink: "https://www.linkedin.com/in/hemant-rathore-2405b6259/",
    },
    {
      siteName: "Credly (Google Cloud Badges)",
      iconifyClassname: "simple-icons:credly",
      style: {
        color: "#FF6B00",
      },
      profileLink: "https://www.credly.com/users/hemant-rathore.8cb1367e",
    },
    {
      siteName: "Credly (IBM & Certifications)",
      iconifyClassname: "simple-icons:credly",
      style: {
        color: "#FF6B00",
      },
      profileLink: "https://www.credly.com/users/hemant-rathore.19576863",
    },
    {
      siteName: "Cyfrin Web3 Achievements",
      iconifyClassname: "simple-icons:ethereum",
      style: {
        color: "#62688F",
      },
      profileLink: "https://profiles.cyfrin.io/u/hemantcode/achievements",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "CDAC, Bengaluru",
      subtitle: "PG Diploma in Big Data Analytics (BDA)",
      logo_path: "cdac_logo.png",
      alt_name: "CDAC Bengaluru",
      duration: "Aug 2026 - Feb 2027",
      descriptions: [
        "⚡ Immersive post-graduate specialization in distributed computing, enterprise Big Data architectures, and machine learning pipelines.",
        "⚡ Hands-on data engineering with Hadoop (HDFS, MapReduce, YARN), Apache Spark, Hive, Pig, and Apache Kafka.",
        "⚡ Advanced data science workflows using Python (Pandas, NumPy, Scikit-learn), R, and predictive machine learning models.",
        "⚡ Designing and querying multi-model data storage solutions across MySQL, PostgreSQL, MongoDB, and Apache Cassandra.",
      ],
      website_link: "",
    },
    {
      title: "Samrat Ashok Technological Institute (SATI), Vidisha",
      subtitle: "B.Tech. in Computer Science (Blockchain)",
      logo_path: "sati_logo.png",
      alt_name: "SATI Vidisha",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Graduated with strong academic performance — CGPA: 8.44.",
        "⚡ Comprehensive curriculum covering core CS: Data Structures & Algorithms, OOP, DBMS, OS, and Computer Networks.",
        "⚡ Specialized coursework in Blockchain Architecture, Smart Contract Engineering, Distributed Ledgers, and Web3 Protocols.",
        "⚡ Authored and presented peer-reviewed research on NFT marketplaces and Layer-2 scaling at NCACSIT-2025.",
        "⚡ Served as Management Lead for the Training & Placement Cell and contributed actively to technical student clubs.",
      ],
      website_link: "",
    },
    {
      title: "Carmel Convent Senior Secondary School, Bhopal",
      subtitle: "CBSE Class XII & Class X",
      logo_path: "carmel_logo.png",
      alt_name: "Carmel Convent School Bhopal",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Completed Class XII (CBSE) with focus on Mathematics, Physics, and Chemistry.",
        "⚡ Completed Class X (CBSE) with distinction in Science and Mathematics.",
        "⚡ Developed early problem-solving acumen, logical reasoning, and disciplined academic foundation.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud Computing Badges (2024)",
      subtitle: "Google Cloud / Credly",
      logo_path: "google_logo.png",
      certificate_link: "https://www.credly.com/users/hemant-rathore.8cb1367e",
      alt_name: "Google Cloud Badges",
      color_code: "#4285F499",
    },
    {
      title: "Enterprise Data Science",
      subtitle: "IBM / Credly",
      logo_path: "ibm_logo.png",
      certificate_link: "https://www.credly.com/users/hemant-rathore.19576863",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Full-Stack Web3 Development",
      subtitle: "Cyfrin Updraft",
      logo_path: "cyfrin_logo.png",
      certificate_link: "https://profiles.cyfrin.io/u/hemantcode/achievements",
      alt_name: "Cyfrin Updraft",
      color_code: "#00FFA333",
    },
    {
      title: "Solidity 101",
      subtitle: "Cyfrin Updraft",
      logo_path: "cyfrin_logo.png",
      certificate_link: "https://profiles.cyfrin.io/u/hemantcode/achievements",
      alt_name: "Cyfrin Updraft",
      color_code: "#1E1E3899",
    },
    {
      title: "Business Intelligence & Analytics",
      subtitle: "NPTEL (IIT Madras)",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1YZA5st5RHpUIJ1v8FZFpVd2YwrbsL1lb/view?usp=sharing",
      alt_name: "NPTEL IIT Madras",
      color_code: "#FF8C0099",
    },
    {
      title: "Cyber Security and Privacy",
      subtitle: "NPTEL (IIT Madras)",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1_wLgx8YNocHfBDGLQ-ja-Y47T_L4xpvs/view?usp=sharing",
      alt_name: "NPTEL IIT Madras",
      color_code: "#002B4999",
    },
    {
      title: "Privacy and Security in Online Social Media",
      subtitle: "NPTEL (IIT Hyderabad)",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1hFroCXRHxGYxh6zo-0YoanjJuTLx-k4j/view?usp=sharing",
      alt_name: "NPTEL IIT Hyderabad",
      color_code: "#FFBB0099",
    },
    {
      title: "Software Developer Internship",
      subtitle: "Cyber Cell, Vidisha (ASP Office), MP",
      logo_path: "cybercell_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1_nuDDLTHlWrHbACu5NMwwm-L7sFppaRs?usp=sharing",
      alt_name: "Cyber Cell Vidisha",
      color_code: "#0B1D3A99",
    },
    {
      title: "Research Paper Presentation (NCACSIT-2025)",
      subtitle: "MPCST & SATI Vidisha",
      logo_path: "sati_logo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1fb7iwi5oRUl38NvUQKOW_hsfOTXm5ouL?usp=sharing",
      alt_name: "NCACSIT 2025",
      color_code: "#00336699",
    },
    {
      title: "Oracle Blockchain Developer Certificate Badge",
      subtitle: "Oracle University",
      logo_path: "oracle_logo.png",
      certificate_link: "https://www.linkedin.com/in/hemant-rathore-2405b6259/",
      alt_name: "Oracle University",
      color_code: "#C7463499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships and Technical Leadership",
  description:
    "Demonstrated hands-on experience in software development, data audit, and system debugging through technical internships. Proactive leader in campus recruitment readiness and technical communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Intern Developer",
          company: "Cyber Cell, Vidisha (ASP Office), MP",
          company_url:
            "https://drive.google.com/drive/folders/1_nuDDLTHlWrHbACu5NMwwm-L7sFppaRs?usp=sharing",
          logo_path: "cybercell_logo.png",
          duration: "May 2025 - Oct 2025",
          location: "Vidisha, Madhya Pradesh",
          description:
            "Collaborated directly with law enforcement officers on software maintenance, data verification, and digital investigative support. Systematically audited and reconciled 150+ operational data records to ensure precision and eliminate inconsistencies. Assisted in identifying system bugs, improving workflow tracking, and developing reliable automated solutions for case record management.",
          color: "#0B1D3A",
        },
        {
          title: "In-House Internship – Programming Tactics",
          company: "Samrat Ashok Technological Institute, Vidisha",
          company_url: "",
          logo_path: "sati_logo.png",
          duration: "July 2023",
          location: "Vidisha, Madhya Pradesh",
          description:
            "Completed intensive immersion in core algorithmic problem solving, time-space complexity optimization, and clean code principles. Built and benchmarked foundational data structures and solved algorithmic challenges to develop strong software engineering and problem-solving discipline.",
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
          company_url: "",
          logo_path: "sati_logo.png",
          duration: "2023 - 2025",
          location: "Vidisha, Madhya Pradesh",
          description:
            "Spearheaded department-level placement initiatives, bridging communication between visiting recruiters and 200+ engineering candidates. Organized mock technical interviews, peer coding preparation sessions, and logistical coordination for on-campus hiring drives.",
          color: "#003366",
        },
        {
          title: "1st Prize Winner & Member",
          company: "BIS Club (Bureau of Indian Standards), SATI CSE Dept",
          company_url: "",
          logo_path: "bis_logo.png",
          duration: "2023 - 2025",
          location: "Vidisha, Madhya Pradesh",
          description:
            "Awarded 1st Prize in the Technical Standard Writing Competition organized by the Bureau of Indian Standards (BIS) Club, demonstrating clarity in technical communication and documentation standards. Certified as a Manak Mitra for active contributions to technical quality outreach.",
          color: "#002B49",
        },
        {
          title: "Google Cloud Milestone & Swags Achiever",
          company: "Google Developer Student Clubs (GDSC)",
          company_url: "https://www.credly.com/users/hemant-rathore.8cb1367e",
          logo_path: "dsc_logo.png",
          duration: "2022 - 2024",
          location: "Vidisha, Madhya Pradesh",
          description:
            "Earned Google Cloud Milestone Badges and Swags (2022, 2023, 2024) across intensive hands-on lab challenges covering cloud compute provisioning, networking, BigQuery analytics, and container deployments.",
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
    "A showcase of real-world decentralized protocols, NFT marketplaces, production-grade smart contracts, and data engineering systems.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "1",
      name: "Block Bazar – NFT Marketplace",
      url: "https://github.com/Hemant-2704",
      description:
        "Full-stack decentralized marketplace enabling trustless trading of ERC-721 NFTs. Integrated IPFS for decentralized metadata storage, cutting centralized hosting costs to zero. Smart contracts secured with OpenZeppelin standards and reentrancy-safe payment logic — verified through comprehensive Foundry test suites with zero critical vulnerabilities.",
      languages: [
        { name: "Solidity", iconifyClass: "logos-solidity" },
        { name: "Ethers.js", iconifyClass: "simple-icons:ethers" },
        { name: "IPFS", iconifyClass: "simple-icons:ipfs" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
      ],
    },
    {
      id: "2",
      name: "Crowdfunding Smart Contract",
      url: "https://github.com/Hemant-2704",
      description:
        "Ethereum community fundraising protocol featuring time-locked milestones, automated goal verification, and instant decentralized refunds. Validated with 100% unit and property-based fuzz test coverage using Foundry.",
      languages: [
        { name: "Solidity", iconifyClass: "logos-solidity" },
        { name: "Foundry", iconifyClass: "simple-icons:ethereum" },
      ],
    },
    {
      id: "3",
      name: "Grin & Earn – Blockchain Reward System",
      url: "https://github.com/Hemant-2704",
      description:
        "Novel on-chain micro-incentive protocol that automatically disbenses token rewards based on real-time computer vision emotion detection outputs. Leveraged Web3.js for seamless frontend-to-blockchain event listening.",
      languages: [
        { name: "Solidity", iconifyClass: "logos-solidity" },
        { name: "Web3.js", iconifyClass: "simple-icons:web3dotjs" },
        { name: "Python", iconifyClass: "logos-python" },
      ],
    },
  ],
};

const publicationsHeader = {
  title: "Publications & Research",
  description:
    "Peer-reviewed research and conference presentations in blockchain architecture, decentralized storage, and Layer-2 scalability.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ncacsit-2025-nft-marketplaces",
      name: "A Comprehensive Review of Blockchain-Based NFT Marketplaces with Emphasis on Layer 2 Solutions, IPFS, and Smart Contracts",
      createdAt: "2025-09-26T00:00:00Z",
      url: "https://drive.google.com/drive/folders/1fb7iwi5oRUl38NvUQKOW_hsfOTXm5ouL?usp=sharing",
      description:
        "Presented and certified at the National Conference on Advanced Computer Science and Information Technology (NCACSIT-2025). Investigates the convergence of ERC-721 smart contract standards, decentralized content addressing with IPFS, and Layer-2 Polygon scaling solutions to address gas overhead and throughput bottlenecks in modern decentralized marketplaces.",
    },
  ],
};

// GitHub Open Source
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN || "",
  githubUserName: "Hemant-2704",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Get In Touch",
    profile_image_path: "hero_avatar.jpg",
    description:
      "I am actively seeking Software Engineer, Blockchain Developer, and Associate Engineer opportunities. Whether you want to discuss a project, collaborate on open-source, or explore potential roles, my inbox is always open. Feel free to connect via email or LinkedIn!",
  },
  blogSection: {
    title: "Code Repositories & Work",
    subtitle:
      "Explore my open-source smart contracts, Web3 applications, and data pipelines on GitHub.",
    link: "https://github.com/Hemant-2704",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
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
  projects,
  publicationsHeader,
  publications,
  contactPageData,
};
