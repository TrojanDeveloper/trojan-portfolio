import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: "TROJAN",
  title: `Hi all, I'm Trojan`,
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
  resumeLink:
    'https://docs.google.com/document/d/14P778nHnIp2u9kkf0pGl5-H-jZW5dY-g/edit',
};

export const openSource = {
  githubUserName: 'trojandeveloper',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/TrojanDeveloper/trojan-portfolio',
  linkedin: 'https://www.linkedin.com',
  github: 'https://github.com/trojandeveloper',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassName: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Nanyang Technological University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'September 2011 - April 2015',
    desc: 'Participated in the research of computer science and published 2 papers.',
    grade: 'Grade A',
    descBullets: [
      'Benefits of Exercise.',
      'Impact of Technology on our Lives',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Software Engineer',
    company: 'EPAM SYSTEMS',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2020 – Oct 2022',
    desc: 'I worked as software engineer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'Full Stack Developer',
    company: 'SOFTSERVE',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Sept 2017 - Jan 2020',
    desc: 'Worked as full-stack web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  },
  {
    role: 'Web Developer',
    company: 'TOTALCAN',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'Apr 2016 - Jun 2017',
    desc: 'Worked as a Web Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'COVID Tracker',
    desc: 'This app shows a statistical view about corona virus over the world',
    github: 'https://github.com/TrojanDeveloper/covid-19-tracker',
    link: 'https://covid-19-tracker-by-sumit.web.app/',
  },
  {
    name: 'Realtime Chat App',
    desc: 'Basic Realtime Chat App where one can create a room can talk to each other',
    github: 'https://github.com/TrojanDeveloper/chat-app-socket.io-react-node',
    link: 'https://sumit-chat.netlify.app/',
  },
  {
    name: 'Algorithm Visualizer',
    desc: 'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
    github: 'https://github.com/TrojanDeveloper/algorithm-visualizer',
    link: 'https://visual-algorithm.web.app/',
  },
  {
    name: 'YouTube using YouTube',
    desc: 'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More',
    github: 'https://github.com/TrojanDeveloper/react-clone',
    link: 'https://not-utube.web.app/',
  },
  {
    name: 'Football App',
    desc: 'O my goal replica where an user can keep an eye on his favorite club.This app will keep providing all the statistics of that club.all the fans can also chat',
    github: 'https://github.com/TrojanDeveloper/football-app',
    link: 'https://o-my-goal.web.app/',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Jimmy Goyette',
    feedback:
      'Great to work with! Very responsive; very creative. Really good.',
  },
  {
    name: 'Tremayne Reynolds',
    feedback:
      'Creative Web Expert are the best at what they do. He knew every idea we had, and even added new ideas aswell. He was as excited about this project as we were. Will definitely keep using him in the future.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Trojan Developer',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Trojan Developer',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://trojan-portfolio.vercel.app',
  keywords: [
    'Trojan',
    'Trojan Developer',
    '@1Trojan131',
    '1Trojan131',
    'Portfolio',
    'Trojan Portfolio ',
    'Trojan Developer Portfolio',
  ],
};
