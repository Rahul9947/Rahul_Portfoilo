import {
  Project,
  SkillCategory,
  EducationItem,
  ExperienceItem,
  SecurityMilestone,
  WhatIDoItem
} from '../types';

export const PERSONAL_INFO = {
  name: 'Rahul Sharma',
  role: 'MCA Student | Software Developer | Cybersecurity Enthusiast',
  shortIntro:
    "Hello, I'm Rahul Sharma, an MCA student passionate about software development, cybersecurity, programming, and building practical technology projects. I enjoy learning new technologies and turning ideas into useful applications.",
  aboutDetailed:
    "Currently pursuing my Master of Computer Applications (MCA) at Srinath University, Jamshedpur, Jharkhand. My technical journey is anchored in building reliable software applications, exploring defensive cybersecurity principles, and deepening my understanding of underlying computer architectures and network protocols.",
  location: 'Jamshedpur, Jharkhand, India',
  email: 'rahul.sharma.mca@example.com',
  github: 'https://github.com/rahulsharma-dev',
  linkedin: 'https://linkedin.com/in/rahulsharma-mca',
  resumeFileName: 'Rahul_Sharma_Resume.pdf',
  resumePath: '/resume/Rahul_Sharma_Resume.pdf',
};

export const WHAT_I_DO: WhatIDoItem[] = [
  {
    title: 'Software Development',
    description: 'Building applications and learning modern programming technologies with strong algorithmic foundations.',
    iconName: 'code',
    tags: ['C', 'C++', 'Java', 'Python', 'Object-Oriented Programming']
  },
  {
    title: 'Web Development',
    description: 'Creating responsive websites and Flask-based applications with database-driven backends.',
    iconName: 'globe',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Python Flask', 'REST APIs']
  },
  {
    title: 'Cybersecurity',
    description: 'Learning cybersecurity through practical labs, networking, Linux, and web-security concepts.',
    iconName: 'shield',
    tags: ['Network Protocols', 'Linux Internals', 'Web Security', 'TryHackMe']
  },
  {
    title: 'Problem Solving',
    description: 'Developing programming and analytical skills through practical projects and systematic debugging.',
    iconName: 'cpu',
    tags: ['Data Structures', 'Database Design', 'System Architecture']
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'MCA (Master of Computer Applications)',
    institution: 'Srinath University',
    location: 'Jamshedpur, Jharkhand',
    status: 'Currently pursuing',
    highlights: [
      'Advanced computer applications curriculum focusing on software engineering and system architecture.',
      'Hands-on laboratory coursework in network security, database management, and enterprise programming.',
      'Active participant in technical workshops and practical system development projects.'
    ]
  },
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: 'Jamshedpur Co-operative College',
    location: 'Jamshedpur, Jharkhand',
    affiliation: 'Affiliated with Kolhan University',
    status: 'Completed',
    highlights: [
      'Built core foundations in computer science, structured programming (C/C++), and Java fundamentals.',
      'Studied relational database management systems, operating systems, and computer network models.',
      'Successfully delivered academic project implementations demonstrating software development lifecycle skills.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Core languages for systems, logic, and application development',
    skills: [
      { name: 'C', focus: 'Procedural programming & memory fundamentals' },
      { name: 'C++', focus: 'Object-oriented programming & data structures' },
      { name: 'Java', focus: 'OOP architecture, file handling & serialization' },
      { name: 'Python', focus: 'Scripting, automation, Flask & backend services' }
    ]
  },
  {
    title: 'Web Development',
    description: 'Frontend structuring and lightweight Python backend architectures',
    skills: [
      { name: 'HTML', focus: 'Semantic web layout & accessible markup' },
      { name: 'CSS', focus: 'Modern responsive styling & flex/grid systems' },
      { name: 'JavaScript', focus: 'DOM manipulation & asynchronous interactions' },
      { name: 'Flask', focus: 'Micro-framework routing, templates & API endpoints' }
    ]
  },
  {
    title: 'Database',
    description: 'Relational data modeling, querying, and schema management',
    skills: [
      { name: 'MySQL', focus: 'Relational schema design, normalization & complex queries' },
      { name: 'MariaDB', focus: 'Open-source SQL database management & administration' }
    ]
  },
  {
    title: 'Tools & Technologies',
    description: 'Developer utilities, terminal environments, and hardware bridges',
    skills: [
      { name: 'Git', focus: 'Distributed version control & commit management' },
      { name: 'GitHub', focus: 'Repository collaboration, releases & code hosting' },
      { name: 'VS Code', focus: 'Primary development environment & extensions' },
      { name: 'Linux', focus: 'CLI navigation, file permissions & bash scripting' },
      { name: 'Termux', focus: 'Android terminal environment & mobile shell tools' },
      { name: 'Android Debug Bridge (ADB)', focus: 'Device bridging, package control & wireless port pairing' }
    ]
  },
  {
    title: 'Cybersecurity',
    description: 'Security fundamentals and active hands-on lab learning',
    skills: [
      { name: 'Networking Fundamentals', focus: 'TCP/IP, subnetting, DNS, routing & OSI model' },
      { name: 'Linux Fundamentals', focus: 'User privileges, security configurations & system logs' },
      { name: 'Web Security Fundamentals', focus: 'OWASP Top 10 concepts, authentication & request flows' },
      { name: 'Security Testing Concepts', focus: 'Reconnaissance, service scanning & defensive evaluation' },
      { name: 'TryHackMe Learning', focus: 'Practical guided labs, capture-the-flag exercises & write-ups' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'wireless-phone-controller',
    title: 'Wireless Phone Controller',
    category: 'python',
    tagline: 'Control and mirror Android devices wirelessly from desktop over local Wi-Fi',
    description:
      'A Python-based desktop utility that harnesses Android Debug Bridge (ADB) and scrcpy to control, navigate, and mirror an Android device screen wirelessly from a computer. Eliminates the need for continuous physical cable tethering by establishing authenticated TCP/IP connections.',
    technologies: ['Python', 'ADB', 'scrcpy', 'Windows', 'Subprocess API'],
    features: [
      'Wireless Android connection over local subnet',
      'Low-latency device control and input forwarding',
      'Real-time screen mirroring powered by scrcpy',
      'PC-to-phone bidirectional keyboard and mouse interaction',
      'Packaged standalone desktop application executable'
    ],
    githubUrl: 'https://github.com/rahulsharma-dev/wireless-phone-controller',
    liveDemoUrl: 'https://github.com/rahulsharma-dev/wireless-phone-controller#preview',
    architectureDetails: [
      'Initializes ADB daemon via Python subprocess wrapper with automatic port 5555 forward binding.',
      'Scans local network endpoints for authorized Android device IP addresses.',
      'Launches optimized scrcpy pipeline with tuned bitrate and frame buffer for seamless responsiveness.',
      'Gracefully handles connection drops with automated reconnect retry logic.'
    ],
    runCommand: 'python main.py --wireless --connect <DEVICE_IP>:5555'
  },
  {
    id: 'student-attendance-system',
    title: 'Student Attendance Management System',
    category: 'web',
    tagline: 'Web-based student roster and daily attendance tracking system',
    description:
      'A web-based attendance management project designed to streamline student registration, daily classroom attendance recording, and periodic attendance status reporting. Features persistent relational storage and an intuitive web interface for teachers and administrators.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'SQLite', 'Jinja2'],
    features: [
      'Student record management and section assignment',
      'Daily attendance recording with quick status toggles (Present/Absent)',
      'Attendance summary reports and percentage tracking',
      'Database storage with relational student-course schema',
      'Responsive web interface optimized for desktop and tablet entry'
    ],
    githubUrl: 'https://github.com/rahulsharma-dev/student-attendance-flask',
    liveDemoUrl: 'https://github.com/rahulsharma-dev/student-attendance-flask#demo',
    architectureDetails: [
      'Built on lightweight Python Flask framework utilizing clean MVC controller separation.',
      'SQLite relational database with foreign key constraints between courses, students, and attendance records.',
      'Server-side validation to prevent duplicate attendance marks for identical academic sessions.',
      'Export-ready query aggregations for monthly and semester-wise student attendance reports.'
    ],
    runCommand: 'flask run --host=0.0.0.0 --port=5000'
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    category: 'java',
    tagline: 'Object-oriented Java application for managing academic student records',
    description:
      'A robust Java-based application engineered for managing student academic records. Implements object serialization and reliable file handling to ensure persistent record storage between execution sessions without external server dependencies.',
    technologies: ['Java', 'File Handling', 'Serialization', 'OOP Architecture', 'Java Collections'],
    features: [
      'Add new student profiles with validation',
      'Persistent record storage via Java Object Serialization',
      'Fast record retrieval by student ID or name search',
      'Update and manage student data records safely',
      'Clean console and menu-driven interaction architecture'
    ],
    githubUrl: 'https://github.com/rahulsharma-dev/student-management-java',
    liveDemoUrl: 'https://github.com/rahulsharma-dev/student-management-java#overview',
    architectureDetails: [
      'Encapsulated domain models utilizing Java OOP principles (Inheritance, Polymorphism, Encapsulation).',
      'Java IO ObjectOutputStream and ObjectInputStream streams for binary file state serialization.',
      'In-memory collection caching with synchronized disk writes to prevent data corruption.',
      'Structured exception handling preventing program crash during invalid format inputs.'
    ],
    runCommand: 'javac src/*.java && java src.Main'
  }
];

export const SECURITY_JOURNEY: SecurityMilestone[] = [
  {
    step: '01',
    title: 'Computer Networks & Traffic Foundations',
    focus: 'Protocol Analysis & Packets',
    topics: [
      'OSI 7-Layer & TCP/IP model deep dives',
      'Subnetting, CIDR, and routing principles',
      'DNS resolution flow, ARP, DHCP, and ICMP',
      'Hands-on packet inspection with Wireshark'
    ],
    status: 'Core Competency'
  },
  {
    step: '02',
    title: 'Linux Systems & Shell Security',
    focus: 'OS Internals & Terminal Fluency',
    topics: [
      'Linux directory tree & file permission flags (rwx, SUID/SGID)',
      'Bash automation scripting & process management',
      'System log inspection (/var/log/auth.log, syslog)',
      'Termux environment setup for remote Android administration'
    ],
    status: 'Core Competency'
  },
  {
    step: '03',
    title: 'Web Application Security',
    focus: 'OWASP Top 10 & Request Flows',
    topics: [
      'Client-server HTTP/HTTPS request headers & cookies',
      'SQL Injection mechanisms and parameterized query defenses',
      'Cross-Site Scripting (XSS) fundamentals & sanitization',
      'Authentication session management best practices'
    ],
    status: 'In Progress'
  },
  {
    step: '04',
    title: 'Reconnaissance & Vulnerability Concepts',
    focus: 'Methodology & Discovery',
    topics: [
      'Passive vs. active reconnaissance techniques',
      'Network service port discovery and banner grabbing',
      'Vulnerability classification (CVE, CVSS)',
      'Security baseline checking in isolated environments'
    ],
    status: 'In Progress'
  },
  {
    step: '05',
    title: 'Practical Security Labs & TryHackMe',
    focus: 'Hands-on Problem Solving',
    topics: [
      'TryHackMe Complete Beginner & Web Fundamentals rooms',
      'Guided capture-the-flag (CTF) challenges',
      'Defensive security fundamentals & log analysis exercises',
      'Continuous hands-on documentation & learning logs'
    ],
    status: 'Continuous Lab Practice'
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    role: 'LR & Trip Department',
    company: 'Saizar Enterprises Pvt. Ltd.',
    location: 'Jamshedpur, Jharkhand',
    period: 'Current Role',
    overview:
      'Working within the operational LR (Lorry Receipt) and Trip Department, contributing to logistics coordination, trip dispatch verification, and departmental documentation workflows.',
    responsibilities: [
      'Handling Lorry Receipts (LR) processing and trip consignment documentation with operational accuracy.',
      'Coordinating dispatch records, consignment verifications, and trip status tracking data.',
      'Utilizing internal computer software and database records for inventory and transport log updates.',
      '[Placeholder: Add specific department responsibilities or operational systems used here]',
      '[Placeholder: Add notable internal process improvements or team contributions here]'
    ],
    isPlaceholder: true
  }
];

export const CERTIFICATION_NOTICE = {
  heading: 'Certifications',
  message: 'Certifications will be added as I continue my professional learning journey.',
  plannedPathways: [
    'CompTIA Network+ / Security+ Learning Tracks',
    'Linux Foundation Certified System Administrator (LFCS) Curriculum',
    'Python Institute / Oracle Certified Associate Java Foundations',
    'TryHackMe Web Security & Pre-Security Learning Paths'
  ]
};
