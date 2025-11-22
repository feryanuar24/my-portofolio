<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const name = ref('Fery Anuar Ramadhan Putra')
const address = ref('Bogor, West Java, Indonesia')
const contacts = ref({
  phone: '+62838-1347-9771',
  email: 'feryanuar24@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fery-anuar/',
  github: 'https://github.com/feryanuar24',
  portofolio: 'https://my-portofolio-63497.web.app/ ',
})

const summary = ref(
  'Fullstack Web & Mobile Developer experienced in building large-scale Laravel and React.js-based applications for government and public needs. Accustomed to handling the entire development cycle from requirements analysis, database design, feature implementation, debugging, to security implementation and documentation. Highly adaptable to new code styles and technologies, including utilization of template admins such as Metronic and KTUI to accelerate the development process efficiently and consistently. Optimized performance, reliability, and user experience.',
)

const skills = ref({
  frontEnd: [
    'React.js',
    'Vue.js',
    'Inertia.js',
    'Tailwind CSS',
    'Blade',
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'Admin Templates (Metronic, KT-UI)',
  ],
  backEnd: [
    'PHP (Laravel, CodeIgniter)',
    'Go (Gin)',
    'Node.js (Express.js)',
    'RESTful API',
    'Authentication & Authorization',
    'Query Optimization',
    'System Design',
    'Application Security',
    'Deployment',
    'Caching',
  ],
  database: ['MySQL', 'PostgreSQL', 'Firebase Realtime Database / Firestore'],
  mobile: ['React Native', 'Flutter'],
  versionControl: ['Git', 'GitLab'],
  otherTools: [
    'Docker (Basic)',
    'Postman',
    'Figma',
    'API Documentation (Swagger / OpenAPI)',
    'Project & Task Management Tools (Asana, Jira, Trello)',
  ],
  softSkills: [
    'Problem Solving',
    'Analytical Thinking',
    'Creative Thinking',
    'Team Collaboration',
    'Communication',
  ],
})

const experiences = ref([
  {
    position: 'Web Developer',
    company:
      'Diskominfo Karawang (Department of Communication and Information Technology of Karawang Regency)',
    duration: 'October 2024 - Now',
    responsibilities: [
      'Developed and maintained various Laravel and CodeIgniter-based applications with complex business processes and standardized encryption and security practices.',
      'Served as a Fullstack Developer on various large-scale projects, including: Web Queue, MPP Queue, Bappenda CSR, InfoLoker, SIM IP ASN (Professionalism Index Assessment), Pesona Karawang, SiMantra (Satpol PP Task Management), Tangkar (Reporting Application), Tangkas (Health Office Application), as well as various OPD website templates such as diskominfo.karawangkab.go.id, dinkes.karawangkab.go.id, and others.',
      'Implemented refactoring and caching that improved application performance based on internal testing results.',
      'Redesigned the website to be more modern and focused on visual appearance, especially on public sites such as Pesona Karawang (tourism website). In addition, implemented GeoJSON with Leaflet for mapping and data grouping needs.',
      'Performed systematic error handling & logging to maintain the stability of production applications.',
      'Implemented security standards as recommended by the Coding Team and followed up on findings from Bug Hunter to ensure applications remained secure and up-to-date.',
      'Handle debugging of complex issues in a short period of time (1-3 days) to prevent user impact.',
      'Adapt to various code styles across projects to create a clean and maintainable code base.',
    ],
  },
  {
    position: 'Research & Development (R&D) Engineer',
    company: 'Universitas Singaperbangsa Karawang',
    duration: 'January 2024 - April 2024',
    responsibilities: [
      'Develop a web-based decision support system for water quality evaluation.',
      'Backend using Laravel and frontend using React.js with Fuzzy Tsukamoto method for water quality calculation.',
      'Displaying calculation results in real-time and interactive visuals.',
      'The research results were published in the SINTA 4 journal.',
    ],
  },
  {
    position: 'Frontend Developer',
    company: 'PDDikti (Ministry of Education, Culture, Research, and Technology of Indonesia)',
    duration: 'September 2023 - December 2024',
    responsibilities: [
      'Developed new version of PDDikti and Helpdesk system using React.js and TailwindCSS, including UI/UX improvements and component modularization.',
      'Implemented Elasticsearch for quick search feature, improving data access efficiency and user experience.',
      'Maintained and updated backend API documentation, including writing endpoints, parameters, and integration process flows.',
      'Perform testing and validation on the AI Question feature, ensuring accurate results that meet user needs.',
      'Collaborate in cross-divisional teams (Frontend, Backend, QA, and Operations) using Agile Sprint methodology, and utilize Asana and GitHub for task management and version control.',
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
])

const education = ref({
  degree: 'Bachelor of Computer Science',
  institution: 'Universitas Singaperbangsa Karawang',
  duration: '2020 - 2024',
  focus: [
    'analysis and design of information systems',
    'web and mobile application development',
    'database management',
    'decision support system',
  ],
})

const certifications = ref([
  {
    title: 'Fullstack Web Development',
    issuer: 'Kelas Fullstack',
    link: 'https://drive.google.com/file/d/1j4ENY3Sl7vngFaife__yIqLQ33cv4V0A/view?usp=sharing',
  },
  {
    title: 'MSIB Batch 5 (Frontend Developer Intern)',
    issuer: 'PDDikti (Ministry of Education, Culture, Research, and Technology of Indonesia)',
    link: 'https://drive.google.com/file/d/105-8fdslH-dWVe_KX_AqC9Bw9LdWgXqe/view?usp=sharing',
  },
  {
    title: 'Frontend Engineering Batch 3',
    issuer: 'Ruangguru CAMP (Bootcamp for Software Engineers)',
    link: 'https://drive.google.com/file/d/1JuzGz_dSrwBLkrTnDQjNVYUo_cnwSX_s/view?usp=sharing',
  },
  {
    title: 'AWS Jobreadiness',
    issuer: 'Orbit Skill',
    link: 'https://drive.google.com/file/d/1w2kcLrL1BlG9LgRMT5SLKNAYs1-eNdpb/view?usp=sharing',
  },
  {
    title: 'Flutter Mobile Apps Corse Level Advanced',
    issuer: 'ITBOX by Course-Net',
    link: 'https://drive.google.com/file/d/13fLo95I639XoW8KTez7j5Qr6Ow2ZzGTt/view?usp=sharing',
  },
  {
    title: 'Web & App Development',
    issuer: 'Orbit Skill',
    link: 'https://drive.google.com/file/d/10bqdoz213Rksohsnb4ca3qWUvw_hszuv/view?usp=sharing',
  },
])

const projects = ref([
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
])

const additional = ref([
  'Ready to work onsite and full-time, with high commitment to targets and work quality.',
  'Familiar with using Git Workflow, conducting code reviews, and collaborating with cross-divisional teams (FE, BE, QA, DevOps, UI/UX).',
  'Quickly adapt to new technologies, especially in the field of Web & Mobile Development.',
  'Highly enthusiastic in learning, proactive, and result-oriented with continuous improvement.',
  'Uphold clean code standards, clean documentation, and modern development practices.',
])
</script>

<template>
  <main
    class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden py-20 px-6 md:px-10"
      :class="{ 'animate-fade-in-up': isVisible }"
    >
      <!-- Animated Background Elements -->
      <div
        class="absolute top-0 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"
      ></div>
      <div
        class="absolute top-0 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-0 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"
      ></div>

      <div class="relative max-w-6xl mx-auto">
        <!-- Profile Image -->
        <div class="flex justify-center mb-8">
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"
            ></div>
            <img
              src="/images/avatars/profile.jpg"
              alt="Foto Profil"
              class="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        <!-- Name and Address -->
        <h1
          class="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 animate-fade-in"
        >
          {{ name }}
        </h1>
        <p
          class="text-center text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          {{ address }}
        </p>

        <!-- Contact Section -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <a
            :href="`tel:${contacts.phone}`"
            class="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-600 dark:text-blue-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            <span
              class="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition"
              >{{ contacts.phone }}</span
            >
          </a>

          <a
            :href="`mailto:${contacts.email}`"
            class="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-red-600 dark:text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span
              class="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition"
              >{{ contacts.email }}</span
            >
          </a>

          <a
            :href="contacts.linkedin"
            target="_blank"
            class="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-blue-700 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
            <span
              class="text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition"
              >LinkedIn</span
            >
          </a>

          <a
            :href="contacts.github"
            target="_blank"
            class="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-800 dark:text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span
              class="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition"
              >GitHub</span
            >
          </a>
        </div>
      </div>
    </section>

    <!-- Professional Summary -->
    <section class="py-16 px-6 md:px-10">
      <div class="max-w-4xl mx-auto">
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition duration-300"
        >
          <h2
            class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
          >
            <span class="w-2 h-10 bg-linear-to-b from-blue-600 to-purple-600 rounded-full"></span>
            Professional Summary
          </h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{{ summary }}</p>
        </div>
      </div>
    </section>

    <!-- Technical Skills -->
    <section class="py-16 px-6 md:px-10 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Technical Skills
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Front End -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Front End</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in skills.frontEnd"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Back End -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Back End</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in skills.backEnd"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Database -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Database</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in skills.database"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Mobile -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Mobile</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in skills.mobile"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Version Control -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Version Control</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in skills.versionControl"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Other Tools -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Other Tools</h3>
            </div>
            <ul class="space-y-2">
              <li
                v-for="skill in skills.otherTools"
                :key="skill"
                class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                {{ skill }}
              </li>
            </ul>
          </article>

          <!-- Soft Skills - Full Width -->
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 md:col-span-2 lg:col-span-3"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Soft Skills</h3>
            </div>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in skills.softSkills"
                :key="skill"
                class="px-4 py-2 bg-linear-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-pink-800 dark:text-pink-300 rounded-full text-sm font-medium"
              >
                {{ skill }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Professional Experience -->
    <section class="py-16 px-6 md:px-10">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Professional Experience
        </h2>

        <div class="space-y-8">
          <article
            v-for="(exp, index) in experiences"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 border-l-4 border-blue-600"
          >
            <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ exp.position }}
                </h3>
                <p class="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                  {{ exp.company }}
                </p>
              </div>
              <span
                class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mt-2 md:mt-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {{ exp.duration }}
              </span>
            </div>
            <ul class="space-y-3">
              <li
                v-for="(resp, idx) in exp.responsibilities"
                :key="idx"
                class="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-500 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ resp }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="py-16 px-6 md:px-10 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Education
        </h2>

        <article
          class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
        >
          <div class="flex items-start gap-6">
            <div
              class="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {{ education.degree }}
              </h3>
              <p class="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-1">
                {{ education.institution }}
              </p>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ education.duration }}</p>
              <div class="space-y-2">
                <p class="font-semibold text-gray-900 dark:text-white">Focus Areas:</p>
                <ul class="grid md:grid-cols-2 gap-2">
                  <li
                    v-for="(item, index) in education.focus"
                    :key="index"
                    class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-16 px-6 md:px-10">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Certifications
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="(cert, index) in certifications"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 group"
          >
            <div class="flex items-start justify-between mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {{ cert.title }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">{{ cert.issuer }}</p>
            <a
              :href="cert.link"
              target="_blank"
              class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition group-hover:gap-3"
            >
              View Certificate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- Project Highlights -->
    <section class="py-16 px-6 md:px-10 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Project Highlights
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <article
            v-for="(project, index) in projects"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 group"
          >
            <div class="flex items-start gap-4 mb-4">
              <div
                class="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ project.name }}</h3>
            </div>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ project.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Additional Information -->
    <section class="py-16 px-6 md:px-10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Additional Information
        </h2>

        <div class="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 md:p-12">
          <ul class="space-y-4">
            <li
              v-for="(info, index) in additional"
              :key="index"
              class="flex gap-4 text-white text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>{{ info }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Footer CTA -->
    <section
      class="py-20 px-6 md:px-10 bg-linear-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
        <p class="text-xl text-gray-300 mb-8">
          Ready to bring your ideas to life? Get in touch and let's create something amazing!
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a
            :href="`mailto:${contacts.email}`"
            class="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            Send Me an Email
          </a>
          <a
            :href="contacts.linkedin"
            target="_blank"
            class="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
