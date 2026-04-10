import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref({
    name: 'Fery Anuar Ramadhan Putra',
    address: 'Bogor, West Java, Indonesia',
    phone: '+62838-1347-9771',
    email: 'feryanuar24@gmail.com',
    linkedin: 'https://www.linkedin.com/in/fery-anuar/',
    github: 'https://github.com/feryanuar24',
    portofolio: 'https://my-portofolio-63497.web.app/ ',
    summary:
      'I am a Software Engineer with experience in developing web, mobile, and desktop applications. I am skilled at handling a variety of projects with flexibility, effective and measurable time management, and I stay up-to-date with the latest advancements in modern technology. I also have experience managing projects from start to finish, including DevOps processes such as deployment, CI/CD, and cloud infrastructure management.',
    skills: {
      web: [
        'Laravel',
        'React.js',
        'Vue.js',
        'Svelte',
        'Livewire',
        'Bootstrap CSS',
        'Tailwind CSS',
        'Admin Templates',
      ],
      mobile: ['React Native', 'Flutter', 'Kotlin (Jetpack)'],
      desktop: ['.NET (C#)', 'Electron.js', 'Flutter Desktop'],
      db: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Redis'],
      api: ['Laravel API', 'Express.js', 'Gin', 'Flask', 'Spring Boot', '.NET Core'],
      infra: ['AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions, GitLab CI)'],
      vsc: ['Git', 'GitHub', 'GitLab'],
    },
    experiences: [
      {
        position: 'Software Engineer',
        company:
          'Diskominfo Karawang (Department of Communication and Information Technology of Karawang Regency)',
        duration: 'October 2024 - Now',
        responsibilities: [
          'Developed and maintained various web applications with complex business processes and standardized encryption and security practices.',
          'Managing a wide range of projects, both internal and external, including: Antrian & MPP, Bappenda CSR, InfoLoker, SIM IP ASN (Professionalism Index Assessment), Pesona Karawang, SiMantra (Satpol PP Task Management), Tangkar (Reporting Application), Tangkas (Health Office Application), as well as various organization websites (company profile) such as diskominfo, dinkes, and others. Also developed a ticketing application for UMKM bazaar events, a stock opname application for disaster relief aid, a management application for KORPRI, and a gateway API application for TTE (digital signature integration).',
          'Implemented refactoring and caching that improved application performance.',
          'Redesigned the website to be more modern and focused on visual appearance, especially on public sites such as Pesona Karawang (tourism website). In addition, implemented GeoJSON with Leaflet for mapping and data grouping needs.',
          'Performed systematic error handling & logging to maintain the stability of production applications.',
          'Implemented security standards as recommended by the Coding Team and followed up on findings from Bug Hunter to ensure applications remained secure and up-to-date.',
          'Handle debugging of complex issues in a short period of time (1-3 days) to prevent user impact.',
          'Adapt to various code styles across projects to create a clean and maintainable code base.',
        ],
      },
      {
        position: 'R&D Engineer',
        company: 'Universitas Singaperbangsa Karawang',
        duration: 'January 2024 - April 2024',
        responsibilities: [
          'Develop a web-based decision support system for water quality evaluation.',
          'Backend using Laravel and frontend using React.js with Fuzzy Tsukamoto method for water quality calculation.',
          'Using actual field data, ensuring that the final outcomes accurately reflect real-world conditions.',
          'The research results were published in the SINTA 4 journal.',
        ],
      },
      {
        position: 'Frontend Developer',
        company: 'PDDikti (Ministry of Education, Culture, Research, and Technology of Indonesia)',
        duration: 'Agust 2023 - December 2023',
        responsibilities: [
          'Developed new version of PDDikti and Helpdesk system using React.js and TailwindCSS, including UI/UX improvements and component modularization.',
          'Implemented Elasticsearch for quick search feature, improving data access efficiency and user experience.',
          'Maintained and updated backend API documentation, including writing endpoints, parameters, and integration process flows.',
          'Perform testing and validation on the AI Question feature, ensuring accurate results that meet user needs.',
          'Collaborate in cross-divisional teams (Ops, Backend, UI/UX, Data Analyst, Data Science, QA) using Agile Sprint methodology, and utilize Asana and GitHub for task management and version control.',
          'Contribute to technical discussions, feature requirements formulation, and cross-system issue resolution during the development process.',
        ],
      },
      {
        position: 'Frontend Engineering',
        company: 'Ruangguru CAMP (Bootcamp for Software Engineers)',
        duration: 'September 2022 - December 2022',
        responsibilities: [
          'Attend an intensive bootcamp that delves deeply into JavaScript fundamentals, covering basic to advanced concepts such as DOM manipulation, asynchronous JavaScript, API fetching, modular patterns, and debugging.',
          'Learn and implement React.js comprehensively, including components, state management, hooks, routing, and modern frontend development best practices.',
          'Build a series of monthly and final projects based on React.js as a portfolio, with modern styling and API consumption.',
          'Improve team collaboration skills, technical communication, problem solving, and industry practices through code review, task-based development, and Git workflow.',
        ],
      },
      {
        position: 'Web Developer & Multimedia Volunteer',
        company: 'LPM Unsika (Student Press Institute of Universitas Singaperbangsa Karawang)',
        duration: 'September 2020 - Mei 2024',
        responsibilities: [
          'Developed the lpmunsika.com news portal using Laravel & MySQL with a neat code structure, modular, and following Laravel best practices, making it easy to be developed by other members.',
          'Designing a lightweight, responsive, and accessible interface to increase reader comfort on mobile and desktop devices.',
          'Implement meta-tag SEO (Open Graph, Twitter Cards, structured meta) to improve news visibility in search engines and social media.',
          'Developed admin dashboard features, editorial management, news categories, and media upload system.',
          "Create and manage graphic content, illustrations, motion graphics, and journalistic videos for social media and the organization's print newsletter.",
          'Work closely with the editorial team on editorial flow, including content planning, page layout, and digital publication.',
          'Contribute to campus media operations through digital asset management and documentation of organizational activities.',
        ],
      },
    ],
    educations: [
      {
        degree: 'Bachelor of Computer Science',
        institution: 'Universitas Singaperbangsa Karawang',
        duration: '2020 - 2024',
        focus: [
          'Analysis and Design of Information Systems',
          'Web and Mobile Application Development',
          'Database Management',
          'Decision Support System',
        ],
      },
    ],
    certifications: [
      {
        title: 'Fullstack Web Development',
        issuer: 'Kelas Fullstack',
        link: 'https://codepolitan.com/c/6LXMNZC',
      },
      {
        title: 'MSIB Batch 5 (Frontend Developer Intern)',
        issuer: 'PDDikti (Ministry of Education, Culture, Research, and Technology of Indonesia)',
        link: 'https://drive.google.com/file/d/105-8fdslH-dWVe_KX_AqC9Bw9LdWgXqe/view?usp=sharing',
      },
      {
        title: 'Frontend Engineering (MSIB Batch 3)',
        issuer: 'Ruangguru CAMP (Bootcamp for Software Engineers)',
        link: 'https://drive.google.com/file/d/1JuzGz_dSrwBLkrTnDQjNVYUo_cnwSX_s/view?usp=sharing',
      },
      {
        title: 'AWS Jobreadiness',
        issuer: 'Orbit Future Academy',
        link: 'https://drive.google.com/file/d/1w2kcLrL1BlG9LgRMT5SLKNAYs1-eNdpb/view?usp=sharing',
      },
      {
        title: 'Flutter Mobile Apps Corse Level Advanced',
        issuer: 'ITBOX by Course-Net',
        link: 'https://itbox.id/certificate-verifier/13EF95781-13F18C724-12D36FB21',
      },
      {
        title: 'Web & App Development',
        issuer: 'MySkill',
        link: 'https://storage.googleapis.com/myskill-v2-certificates/learning-path-vJocQEQMxLW90zJtToaN/GJv2SGNY1LV3s2xuDlV477HlQP33-yiRkV4mCN79rivcB5epn.pdf',
      },
    ],
    projects: [
      {
        name: 'Pesona Karawang',
        description:
          "Enhanced features such as the SK Sanggar application module with role-based tiered flow, layered TTE API integration, and the development of a tourism content module. Redesigned the landing page from a template to a custom design to improve the image and attractiveness of Karawang's tourist destinations.",
      },
      {
        name: 'InfoLoker Karawang',
        description:
          "Integration of the Ministry of Manpower's job vacancy data, development of the company assessment module by the Manpower Office, and optimization of input flow and admin dashboards to improve the efficiency of the employment service process.",
      },
      {
        name: 'PDDikti & Helpdesk',
        description:
          "Developed a new look for PDDikti's main website and built a modern Helpdesk system using React.js and TailwindCSS. Collaborated across divisions (Ops, Backend, UI/UX, Data Analyst, Data Science, QA) and implemented Elasticsearch-based AI Search feature for more accurate and faster data search.",
      },
      {
        name: 'LPM Unsika',
        description:
          'Developed the lpmunsika.com news portal with Laravel & MySQL, implementing admin templates, SEO meta-tagging, as well as consistency of clean code and Laravel best practices so that it is easily developed by other editorial members.',
      },
      {
        name: 'Water Quality Assessment Application',
        description:
          'Built a water quality assessment application in 4 sub-districts in Karawang using Laravel with the Fuzzy Tsukamoto method. This project was successfully published in the SINTA 4 reputable journal.',
      },
    ],
    additionals: [
      'Ready to work onsite and full-time, with high commitment to targets and work quality.',
      'Familiar with using Git Workflow, conducting code reviews, and collaborating with cross-divisional teams (Ops, Backend, UI/UX, Data Analyst, Data Science, QA).',
      'Quickly adapt to new technologies, especially in the field of Web, Desktop, & Mobile Development.',
      'Highly enthusiastic in learning, proactive, and result-oriented with continuous improvement.',
      'Uphold clean code standards, clean documentation, and modern development practices.',
    ],
  })

  return { profile }
})
