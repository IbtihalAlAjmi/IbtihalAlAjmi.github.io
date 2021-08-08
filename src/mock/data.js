import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ibtihal Al Ajmi | Finance', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio. Get to know me and my work!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome! I am',
  name: 'Ibithal Al Ajmi',
  subtitle: 'Graduated with a BBA in Finance',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am an alumna Business Student from the University of Michigan-Dearborn, with a Bachelor Degree in Finance, working for Getwell Medical Transport Co. and Clearpath Diagnostics.',
  paragraphTwo:
    'BBA in Finance at the University of Michigan Dearborn. Seeking a full-time job to continue developing my understanding and experience in calculating financial ratios, and interpreting the present and future values.',
  paragraphThree:
    'I am also interested in a wide range of business opportunities that will give me the ability to apply my education to a profession.',
  resume: '../resume/Ibtihal_Al Ajmi_CV.docx', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'getwell.jpg',
    title: 'Financial Clerk - Getwell Medical Transport Co & Clearpath Diagnostic',
    info: 'Work with both paper documents and electronic files, and do routine tasks like data entry, organization, cross-referencing, scanning, copying, and retrieval',
    info2:
      'Responsible for keeping track of money owed to us by customers, preparing invoices, and updating records',
    info3: 'Schedule patients for their doctor appointments.',
    info4:
      'Check patients insurances either auto or health insurance such as BCBS, Medicaid, Medicare, Progressive, Allstate, Memic, and Blue care.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'leftys.jpg',
    title: "Assistant Manager - Lefty's Cheesesteak and Hoagies",
    info: 'Directing employees through their daily routines.',
    info2: 'Ensuring that customers are receiving a satisfactory experience.',
    info3: 'Responsible for daily cash counts and deposits.',
    info4: 'Improving the quality of service and assisting with employees skills and abilities.',
    url: 'https://eatleftys.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bankmuscat.jpg',
    title: 'Personal Banker - Bank Muscat',
    info: 'Customer service.',
    info2: 'Providing periodic reports and analysis.',
    info3: 'Referring clients to other financial experts when necessary.',
    info4: 'Monitoring client accounts and keeping information up-to-date.',
    url: 'https://www.bankmuscat.com/en/about/pages/default.aspx',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in hiring me? Talk to me on LinkedIn',
  btn: 'Connect',
  email: 'https://www.linkedin.com/in/ibtihal-al-ajmi/',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
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
