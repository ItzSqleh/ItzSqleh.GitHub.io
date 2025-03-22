import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';
import Background from '../images/Background.jpg';
import Profile from '../images/Profile.png';
import Gamak from '../images/Gamak.png';
import CS50P from '../images/CS50P.png';
import SQL from '../images/SoloLearn_SQL_Intermediate.jpg';
import C from '../images/SoloLearn_C_Intermediate.jpg';
import CPlusPlus from '../images/SoloLearn_CPlusPlus_Intermediate.jpg';
import CShrap from '../images/SoloLearn_CSharp_Intermediate.jpg';
import PythonDeveloper from '../images/SoloLearn_PythonDeveloper.jpg';
import CodingForData from '../images/SoloLearn_CodingForData.jpg';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page Meta Data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mohammad Saleh Nasrabadi - Junior Python Developer',
  description: 'Personal Portfolio And Resume Of Mohammad Saleh Nasrabadi, A Passionate Python Developer With Expertise In Machine Learning, Algorithms, And Video Editing.',
};

/**
 * Section Definition
 */
export const SectionId = {
  Hero: 'Hero',
  About: 'About',
  Contact: 'Contact',
  Portfolio: 'Portfolio',
  Resume: 'Resume',
  Skills: 'Skills',
  Stats: 'Stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero Section
 */
export const heroData: Hero = {
  imageSrc: Background,
  name: `Mohammad Saleh Nasrabadi`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm A <strong className="text-stone-100">Junior Python Developer</strong>, With A Passion For Machine Learning, Algorithms, And Creative Problem-Solving.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I Specialize In Building Efficient And Scalable Solutions, And I Enjoy Working On Projects That Challenge Me To Grow. In My Free Time, I Explore Topics Like Macroeconomics, Psychology, And Negotiation Techniques. I Also Enjoy Playing Football And Trading, Which Keep Me Active And Engaged With Global Trends.
      </p>
    </>
  ),
  actions: [
    {
      href: '../components/Sections/Resume/Resume-MohammadSalehNasrabadi.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About Section
 */
export const aboutData: About = {
  profileImageSrc: Profile,
  description: `As A Passionate And Results-Driven Python Programmer, I Have Over One Year Of Experience In Designing And Implementing Innovative Solutions. My Expertise Includes Algorithm Development, Video Editing, And Content Creation. I Thrive In Collaborative Environments And Enjoy Working With Cross-Functional Teams To Achieve Common Goals.`,
  aboutItems: [
    {label: 'Location', text: 'Mashhad, Razavi Khorasan, Iran', Icon: MapIcon},
    {label: 'Age', text: '16', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Iranian', Icon: FlagIcon},
    {label: 'Interests', text: 'Chess, Psychology, Negotiation Techniques', Icon: SparklesIcon},
    {label: 'Education', text: 'Amirkabir Technical And Vocational School', Icon: AcademicCapIcon},
    {label: 'Employment',text: 'Currently A Student', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills Section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 8 },
      { name: 'JavaScript', level: 4 },
      { name: 'C', level: 4 },
      { name: 'C++', level: 4 },
      { name: 'C#', level: 8 },
      { name: 'PHP', level: 6 },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Teamwork', level: 8 },
      { name: 'Crisis Management', level: 8 },
      { name: 'Communication', level: 9 },
      { name: 'Problem Solving', level: 8 },
      { name: 'Time Management', level: 8 },
      { name: 'Adaptability', level: 8 },
    ],
  },
  {
    name: 'Graphic Design & Video Editing',
    skills: [
      { name: 'Video Editing', level: 8 },
      { name: 'Motion Graphics', level: 6 },
      { name: 'Graphic Design', level: 6 },
      { name: 'Content Development', level: 8 },
      { name: 'Color Grading', level: 6 },
      { name: 'Audio Editing', level: 6 },
    ],
  },
  {
    name: 'Other Skills & Interests',
    skills: [
      { name: 'Foreign Exchange (FX) Trading', level: 6 },
      { name: 'Chess Strategy', level: 4 },
      { name: 'Psychology & Negotiation', level: 8 },
      { name: 'Content Creation', level: 8 },
      { name: 'Macroeconomics', level: 6 },
      { name: 'Creative Writing', level: 6 },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'HTML', level: 8 },
      { name: 'CSS', level: 8 },
      { name: 'SQL', level: 8 },
      { name: 'Object-Oriented Programming (OOP)', level: 6 },
    ],
  },
  {
    name: 'Data Science & AI',
    skills: [
      { name: 'Data Analysis', level: 4 },
      { name: 'Machine Learning', level: 4 },
    ],
  },
];

/**
 * Portfolio Section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Gamak',
    description: 'Gamak Is A Personal Development Tool Designed To Help Users Enhance Their Personal And Professional Skills .',
    url: 'https://github.com/hamednazeri/Gamak',
    image: Gamak,
  },
  {
    title: 'CS50P - Harvard University',
    description: 'Getting a CS50P Certificate From Harvard University .',
    url: 'https://certificates.cs50.io/52d421bd-4915-4d83-8eb5-20890f5d21b4.pdf?size=letter',
    image: CS50P,
  },
  {
    title: 'SQL Intermediate',
    description: 'Getting an Intermediate SQL Certificate from Sololearn .',
    url: 'https://www.sololearn.com/certificates/CC-GKEKD6S9',
    image: SQL,
  },
  {
    title: 'C Intermediate',
    description: 'Getting an Intermediate C Certificate from Sololearn .',
    url: 'https://www.sololearn.com/certificates/CC-EXRLSSVQ',
    image: C,
  },
  {
    title: 'C++ Intermediate',
    description: 'Getting an Intermediate C++ Certificate from Sololearn .',
    url: 'https://www.sololearn.com/certificates/CC-HCUOAUL4',
    image: CPlusPlus,
  },
  {
    title: 'C# Intermediate',
    description: 'Getting an Intermediate C# Certificate from Sololearn .',
    url: 'https://www.sololearn.com/certificates/CC-FOL2DFI8',
    image: CShrap,
  },
  {
    title: 'Python Developer',
    description: 'Getting a Python Developer Certificate from Sololearn .',
    url: 'https://www.sololearn.com/certificates/CC-HEQLMSVS',
    image: PythonDeveloper,
  },
  {
    title: 'Coding For Data',
    description: 'Getting a Coding for Data Certificate from Sololearn .',
    url: 'https://www.sololearn.com/certificates/CC-ISGEFGLQ',
    image: CodingForData,
  },
  // {
  //   title: 'FootStats',
  //   description: 'Coming Soon ...',
  //   url: '',
  //   image: FootStats,
  // },
  // {
  //   title: 'CanGrow - 2',
  //   description: 'Coming Soon ...',
  //   url: 'https://partschool.ir/cangrow/app/course/clymreh20000kh4fva3pd8h8r',
  //   image: Unknown,
  // },
  // Add More Projects As Needed
];

/**
 * Resume Section
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2023 - Jun 2026',
    location: 'Amirkabir Technical And Vocational School',
    title: 'High School Diploma, Computer Software Engineering',
    content: <p>
      Grade: 19.93 <br />
      <br />
      At Amirkabir Technical And Vocational School, I Was Actively Involved In Various Groups And Activities, Focusing On Teamwork And Collaboration. I Worked With Peers Across Different Areas, Developing Essential Skills In Communication And Leadership While Building Strong Relationships.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2022 - Aug 2023',
    location: 'Tehran, Tehran Province, Iran · Remote',
    title: 'Video Editor for YouTubers',
    content: (
<p> Worked As A Freelance Video Editor For Various YouTubers, Specializing In Creating Engaging And High-Quality Video Content. <br /> <strong>Skills :</strong> Communication, Content Development, Graphic Design, Project Planning, Video Editing, Content Management, Interviewing, Motion Graphics. </p>
    ),
  },
  // Add more work experiences here if needed
];

/**
 * Contact Section
 */
export const contact: ContactSection = {
  headerText: 'Get In Touch .',
  description: 'Feel Free To Reach Out To Me For Collaborations, New Opportunities , Or Even Just A Friendly Chat ! I’m Always Excited To Connect With Creative And Motivated Individuals Like You And Explore New Ideas Together .',
  items: [
    {
      type: ContactType.Email,
      text: 'MSalehNasrabadi@Gmail.Com',
      href: 'mailto:MSalehNasrabadi@Gmail.Com',
    },
    {
      type: ContactType.Location,
      text: 'Mashhad, Razavi Khorasan, Iran',
      href: 'https://www.google.com/maps/place/Mashhad',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Sqleh',
      href: 'https://www.linkedin.com/in/Sqleh/',
    },
    {
      type: ContactType.Github,
      text: 'ItzSqleh',
      href: 'https://github.com/ItzSqleh',
    },
    {
      type: ContactType.Facebook,
      text: 'ItzSqleh',
      href: 'https://t.me/ItzSqleh',
    },
    {
      type: ContactType.Instagram,
      text: 'ItzSqleh',
      href: 'https://instagram.com/ItzSqleh',
    },
  ],
};

/**
 * Social Items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ItzSqleh'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/Sqleh/'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://t.me/ItzSqleh'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/ItzSqleh'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/27679194/Saleh'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ItzSqleh'},
];
