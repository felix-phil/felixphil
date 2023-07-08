import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  dimechest,
  astrodipity,
  defaultimage,
  smsauto,
  malpdf,
  hometolet,
  kubernetes,
  python,
  hostshare
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile (React Native) Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Next JS",
  //   icon: nextjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Full-Stack Mobile Developer, Remote",
    company_name: "Dimechest",
    icon: dimechest,
    iconBg: "#ffffff",
    date: "May 2022 - August 2022",
    points: [
      "Developing and maintaining mobile application and its server using React Native, Node.js, PostgreSQL and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring compatibility on various screen sizes.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Front-End Developer, Remote",
    company_name: "Astrodipity Inc.",
    icon: astrodipity,
    iconBg: "#E6DEDD",
    date: "August 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js, Agora API and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality web app product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implementing features such as video and audio call, social logins, admin dashboard and much more.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Lead Mobile Developer, Remote",
    company_name: "Astrodipity Inc.",
    icon: astrodipity,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining iOS and Android applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring compatibility on different platforms.",
      "Implementing features such as video and audio call, social logins, push notifications, analytics and much more.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Thank you for your help. 🙏🙏😊😊😊",
    name: "Cassandra Ritter",
    designation: "Founder",
    company: "Astrodipity",
    image: defaultimage,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: defaultimage,
  // },
];

const projects = [
  {
    name: "HostShare",
    description: "HostShare is an online platform like Airbnb that offers a wide variety of homes and condos for rent. Users can conveniently browse and access numerous properties through the website. HostShare provides a comprehensive selection of accommodations to suit different preferences and budgets. With a user-friendly interface, finding the perfect rental property is just a few clicks away.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: hostshare,
    source_code_link: "https://github.com/felix-phil/hostshare",
    live_demo_link: "https://hostshare-xi.vercel.app",
  },
  {
    name: "SMSAuto",
    description:
      "Web-based platform that allows users to send short messages to multiple phone numbers around the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: smsauto,
    source_code_link: "https://github.com/felix-phil/sms-automation",
    live_demo_link: "https://sms-automation-gray.vercel.app/",
  },
  {
    name: "Malicious PDF Detector",
    description:
      "Mobile application that enables users to scan their PDF documents for malicious content. The app employs an algorithm that relies on a Support Vector Machine (SVM) model trained with a dataset of more than 10,000 malicious and 10,000 non-malicious PDF files",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "supportvectormachine",
        color: "pink-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "python-text-gradient",
      },
    ],
    image: malpdf,
    source_code_link: "https://github.com/felix-phil/malware-detector-client",
    live_demo_link:
      "http://www.amazon.com/gp/mas/dl/android?p=com.pdfmalwaredetector.com",
  },
  
  {
    name: "Home To Let",
    description:
      "A comprehensive real-estate API that enables landlords to upload their properties for sale or rent, and allows users to interact with them and purchase them from their wallet",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "sequelize",
        color: "pink-text-gradient",
      },
    ],
    image: hometolet,
    source_code_link: "https://github.com/felix-phil",
    live_demo_link: "https://documenter.getpostman.com/view/21143066/VUjLLmuR",
  },
];
const resume_link =
  "https://drive.google.com/file/d/1Hfain4eQrUkd5Y9GoryEdikJb7bG7DOZ/view?usp=share_link";

const aboutMe = `I'm a computer science graduate from the University of Ilorin,
and I am an experienced full-stack developer with expertise in
JavaScript, TypeScript, Python, React, React Native, Node.js, Django,
Docker, and Kubernetes. Throughout my career, I have worked on various
projects that involve building scalable web applications, developing
and maintaining APIs, and creating mobile applications. I am always
looking to expand my knowledge and skill set, which makes me a quick
learner and adaptable to new technologies and programming languages.
One of my greatest strengths is my ability to collaborate effectively
with other developers and designers. I am a great team player and
always strive to maintain open communication, which fosters a positive
and productive work environment. In my free time, I enjoy exploring
new technologies, reading programming books, and contributing to open
source projects. I am passionate about creating software that makes a
difference and positively impacts people's lives. If you're looking
for a skilled and dedicated full-stack developer who is committed to
delivering high-quality solutions, please don't hesitate to reach out.
I would love to hear about your project and how I can help bring it to
life.`;
const names = {
  firstName: "Felix",
  lastName: "Philips",
};
const emailJSParameters = {
  serviceId: "service_vgs1pyp",
  templateId: "template_m542zef",
  publicKey: "Ym2iABbzyzj5pMQZb",
  toEmail: "devfelixphil@gmail.com",
  toName: "Felix Philips",
};

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  resume_link,
  aboutMe,
  names,
  emailJSParameters,
};
