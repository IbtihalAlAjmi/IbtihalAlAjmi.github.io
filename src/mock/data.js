import { nanoid } from 'nanoid';
import Resume from '../../static/resume.pdf';

// HEAD DATA
export const headData = {
  title: 'Ibtihal Al Ajmi | Finance', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio. Get to know me and my work!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Ibithal Al Ajmi.',
  subtitle: 'Welcome to my career portfolio.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "My name is Ibtihal Al Ajmi. I graduated from the University of Michigan Dearborn with a bachelor's degree in Business administration, currently working for EY as an Audit Associate ",
  paragraphTwo:
    'I am a Well-rounded and reliable person with outstanding interpersonal and communication skills, driven to succeed and advance critical goals',
  paragraphThree:
    'As well I am hardworking and dedicated person who follows directions and effective team player to achieve the mission and the vision of the organization and ready to take on new challenges.',
  resume: Resume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ey_logo.png',
    title: 'EY, Ernst & Young, Audit Associate',
    info: 'Establishing clear communication with the clients in order to collect all the necessary data/information',
    info2: 'Set up and maintain audit files, prepare leads, etc.',
    info3: 'Support the planning, execution, and delivery of assurance engagements',
    // info4: ''
    url: 'https://www.ey.com/en_om',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lng_logo.jpg',
    title:
      'Oman Liquefied Natural Gas, Oman LNG L.L.C (Job Seekers Program-Phase 3), HR Consultant Trainee',
    info: 'Performed trainees onboarding, and analyzed exit interviews. Worked on the People Survey of 2022, and Unique Job Descriptions JDs',
    info2:
      'Summed up MYR & EYR (Mid and End - year review). Manageed MOC Reports (Management of Change)',
    info3: 'Founder of Creative OLNG (Mantel Health Program)',
    url: 'https://omanlng.co.om/en/Pages/home.aspx',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dotnxt_logo.png',
    title: 'Dotnxt Sponsored by Occidental Oman, Digital Marketing Intern',
    info: 'Create a Tourism Platform for tourists by involving in a Boot Camp for 10 days at Sheraton Hotels in Muscat, Oman',
    info2: 'Completed all phases from Dotnxt training',
    info3: 'Granted certificate of completion of Dotnxt Phase 3',
    // info4: '',
    url: 'https://dotnxt.om/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'oman_broadband_logo.jpg',
    title: 'Oman Broadband (Tamkeen Program), Business Relations Trainee',
    info: 'Created an Escalation Matrix',
    info2: 'Selling Services for customers such as ODF, ODT, SCT, ITHCA, Onsor, and DTM',
    info3: 'Created CSR reports, and SLA’s agreement Guidelines',
    url: 'https://www.omanbroadband.om/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have any questions? Connect with me on LinkedIn',
  btn: 'Connect',
  email: 'https://www.linkedin.com/in/ibtihal-al-ajmi/',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ibtihal-al-ajmi/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
