export type Experience = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Sr Manager',
    org: 'Veterans Business Continuity Professionals, LLC',
    period: 'Aug 2023 – Present',
    bullets: [
      'Led veterans-corporate CBCP thinktank advising Fortune-level companies and nonprofits on resilience.',
      'Designed Enterprise Resilience Office architectures bridging BC, CM, IT Ops and InfoSec.',
      'Delivered scalable crisis communications and supplier resilience programs.',
    ],
  },
  {
    title: 'Principal Resilience & IT Consultant',
    org: 'FlexAMS',
    period: 'Jan 2017 – Present',
    bullets: [
      'Advised on EHR optimization, cloud integrations, and security architecture.',
      'Led architectural design and microservices integration projects.',
    ],
  },
  {
    title: 'Assistant Professor, Computer Information Systems',
    org: 'Saint Leo University',
    period: '2014 – Present',
    bullets: [
      'Developed and taught courses in cybersecurity, software engineering, and cloud computing.',
      'Led grant collaborations and curriculum modernization efforts.',
    ],
  },
  {
    title: 'Enterprise Architect Engineer & Researcher',
    org: 'Mangata',
    period: 'Jul 2022 – Jun 2023',
    bullets: [
      'Designed edge computing solutions and integrated satellite data flows for enterprise pipelines.',
      'Introduced ML techniques and data engineering patterns to improve throughput and analytics.',
    ],
  },
  {
    title: 'Health Services Technician & Leadership',
    org: 'U.S. Coast Guard',
    period: '1995 – 2015',
    bullets: [
      'Led clinic operations, training programs and lab operations, ensuring mission readiness and compliance.',
    ],
  },
];

export type Education = { degree: string; school: string; period: string };

export const education: Education[] = [
  {
    degree: 'Graduate Certificate in Artificial Intelligence (In Progress)',
    school: 'Stanford University',
    period: '2021 – Present',
  },
  { degree: 'Doctorate in Information Technology (DIT)', school: 'Walden University', period: '2020' },
  { degree: 'M.Sc. in Information Technology', school: 'Walden University', period: '2014 – 2016' },
  { degree: 'MBA in Information Security Management', school: 'Saint Leo University', period: '2012 – 2014' },
  {
    degree: 'B.S. in Business Administration & B.A. in Mass Communication',
    school: 'University of South Florida',
    period: '2012 – 2014',
  },
  { degree: 'A.A.S. in Medical Laboratory Science', school: 'George Washington University', period: '2001 – 2005' },
];

export type Certification = { name: string; issuer?: string };
export const certifications: Certification[] = [
  { name: 'Certified Business Continuity Professional (CBCP)', issuer: 'DRI International' },
  { name: 'EMT Certification' },
  { name: 'Field Management of Chemical and Biological Incidents', issuer: 'U.S. Army' },
  { name: 'Independent Health Services Technician', issuer: 'U.S. Navy Health Science' },
];

export const awards: string[] = [
  'Coast Guard Achievement Medal (Gold Star)',
  'Coast Guard Unit Commendation Ribbon (x2)',
  'Coast Guard Meritorious Team Commendation Ribbon (Silver Star)',
  'Commandant Letter of Commendation (x2 Gold Stars)',
  'Coast Guard Presidential Unit Citation Ribbon',
  'Coast Guard Sea Service Ribbon',
  'Saint Leo University 5-Year Service Award, 2019',
];

export const memberships: string[] = [
  'Association for Computing Machinery (ACM)',
  'National CyberWatch Center',
];

export const skills: string[] = [
  'Technical Coaching & Mentorship',
  'Enterprise-Scale Application Architecture',
  'Cloud Migration & Modernization',
  'Structured Design & Documentation',
  'Application Assessment & Strategy (6R)',
  'Post-Migration Optimization & Support',
  'Crisis Management & Operational Coordination',
  'Risk Management & Cybersecurity',
  'Cloud Computing (Azure, GCP)',
  'Incident Response & Problem Management',
  'Strategic Team Management',
  'Cross-Functional Team Leadership',
];
