// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'edyCodeforLife', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['edyCodeforLife/portfolio'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'BRI Insurance Web Project',
          description:
            'Developed a web project for BRI Insurance, ensuring a smooth and intuitive user experience for insurance customers.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.brins.co.id',
        },
        {
          title: 'Tokio Marine Insurance Web Apps',
          description:
            'Developed insurance web applications for Tokio Marine, focusing on performance optimization and user data security.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://tokiomarine.com/id/id',
        },
        {
          title: 'Dusdusan E-Commerce Web Apps',
          description:
            'Created e-commerce mobile web applications for Dusdusan, improving the overall user experience and adding new features.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.dusdusan.com',
        },
        {
          title: 'Moduit Mutual Fund Web Apps',
          description:
            "Developed web applications for Moduit's mutual fund purchasing platform, ensuring smooth integration with backend systems.",
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.reksa.moduit.id',
        },
        {
          title: 'Moduit Advisor Web Apps',
          description:
            'Developed and upgraded the advisor web application for Moduit, delivering new features and improving usability.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.advisor.moduit.id',
        },
        {
          title: 'Advotics Dashboard',
          description:
            'Created a dashboard web app with chart and date range filtering features for Advotics, aimed at enhancing data analysis and reporting.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.advotics-dashboard.netlify.app',
        },
        {
          title: 'InMotion Todo List',
          description:
            'Developed a simple and functional Todo List web app for demo purposes, showcasing intuitive UI and task management.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://inmotion-todolist.netlify.app',
        },
        {
          title: 'My TMDB Movies',
          description:
            "Created a movie lover's web app using the TMDB API, enabling users to explore and find details about their favorite movies.",
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://mytmdbmovies.netlify.app',
        },
        {
          title: 'Avant Group Intranet Web Apps',
          description:
            "Developed intranet web apps for Avant Group's health insurance, using SharePoint Framework and React for internal communication.",
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://avantmutualgroup.sharepoint.com',
        },
        {
          title: 'ExpandDana Web Apps',
          description:
            'Built a demo web app for ExpandDana using Next.js, focused on financial operations and user interactions.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://expand-dana.vercel.app',
        },
        {
          title: 'Furniture Simple',
          description:
            'Developed a web app where users can search and filter furniture by style and delivery time, making shopping decisions easier.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://furniture-simple.netlify.app',
        },
        {
          title: 'X-Dit University List App',
          description:
            'Created a web app that allows users to view, search, and filter a list of universities by location, with an option to download the data as JSON.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://x-dit.netlify.app',
        },
        {
          title: 'Movies Mockable',
          description:
            'Developed a mockable movie listing web app to allow users to browse through various movie options with ease.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://moviesmockable.netlify.app',
        },
        {
          title: 'Brick Me Credit Card Form',
          description:
            'Created an animated credit card form that provides a smooth user experience for inputting and managing credit card details.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://brick-me.netlify.app',
        },
        {
          title: 'Alteacare Health Consultation Web App',
          description:
            'Developed a teleconsultation platform where users can interact with doctors via video call and chat for health advice.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://alteacare.com',
        },
        {
          title: 'Alteacare Pharmacy',
          description:
            'Built a mobile web view for purchasing medicine online via Alteacare, offering users a seamless e-commerce experience.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://pharmacy.alteacare.com',
        },
        {
          title: 'GoModal Web View in GoBiz Apps',
          description:
            'Developed a web view for GoFood merchants to apply for loans within the GoModal feature of the GoBiz app.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://gobiz.co.id',
        },
        {
          title: 'SF Portal',
          description:
            'Developed a B2B merchant loan application portal to streamline the application process for loans, improving efficiency.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://sf-portal.co.id',
        },
        {
          title: 'MAB Website Maintenance',
          description:
            'Maintained the MAB website, ensuring smooth operations and implementing updates as needed.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://mab.co.id',
        },
        {
          title: 'Findaya Website Maintenance',
          description:
            'Maintained the Findaya website, handling bug fixes, updates, and overall performance improvements.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://findaya.co.id',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Edy Susanto',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'edy-s-565718141/',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'edy.susantoo21@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1QGRhTfM73sOs4yw12JijEKZTTgt3hD_l/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Typescript',
    'React Native',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'PostgreSQL',
    'Vue js',
    'Docker',
    'Redux',
    'CSS',
    'Antd',
    'Firebase',
    'MUI',
    'Webpack',
    'Datadog',
    'Newrelic',
  ],
  experiences: [
    {
      company: 'GoTo Financial',
      position: 'Senior Software Engineer Frontend',
      from: 'August 2022',
      to: 'Present',
      companyLink: 'https://www.gotocompany.com/products/goto-financial',
    },
    {
      company: 'Boost Indonesia',
      position: 'Senior frontend developer',
      from: 'May 2022',
      to: 'August 2022',
      companyLink: 'https://www.axiata.com/brands/boost',
    },
    {
      company: 'PT. Sehat Digital Nusantara',
      position: 'Middle frontend developer',
      from: 'April 2021',
      to: 'May 2022',
      companyLink: 'https://alteacare.com/',
    },
    {
      company: 'PT. Moduit digital indonesia',
      position: 'Mid frontend developer',
      from: 'Februari 2019',
      to: 'Maret 2021',
      companyLink: 'https://moduit.id/',
    },
    {
      company: 'PT. Dusdusan Dotcom',
      position: 'Mid frontend developer',
      from: 'September 2018',
      to: 'Februari 2019',
      companyLink: 'https://www.dusdusan.com/',
    },
    {
      company: 'PT. InfoConnect SDN BHD',
      position: 'Web Developer',
      from: 'March 2018',
      to: 'September 2018',
      companyLink: 'https://www.infoconnect.com.my/',
    },
    {
      company: 'PT. Alvindo Catur Sentosa',
      position: 'Data Analyst',
      from: 'April 2015',
      to: 'March 2016',
      companyLink: 'https://www.alvindocs.com/tentang-kami',
    },
  ],
  certifications: [
    {
      name: 'AWS Security Essentials',
      body: 'Certificate of completion',
      year: '2021',
    },
    {
      name: 'Security Engineering on AWS with AWS Jam',
      body: 'Certificate of completion',
      year: '2021',
    },
  ],
  educations: [
    {
      institution: 'STIKOM DB JAMBI',
      degree: 'Bachelor of computer science',
      from: '2012',
      to: '2016',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary"
      rel="noreferrer"
    >❤️</a>`,

  enablePWA: true,
};

export default CONFIG;
