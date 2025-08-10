import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Briefcase, Projector } from "lucide-react";


export const DATA = {
    name: "Gnan",
    initials: "GL",
    url: "https://gnanportfolio.vercel.app", // or your portfolio site once live
    location: "Vishakapatnam, India",
    locationLink: "https://www.google.com/maps/place/Visakhapatnam",
    description:
      "Full-stack developer & AI enthusiast. Passionate about building impactful, cost-efficient software and AI products.",
    summary:[
      
    "Final-year [Computer Science undergrad with 2+ years of hands-on full-stack development experience]().",
    "Specialized in building scalable, production-ready software with a focus on [AI engineering and automation]().",
    "Delivered multiple high-impact projects in AI-powered accessibility, health tracking, and SaaS products.",
    "Contributed to startups by developing end-to-end products, from concept to deployment.",
    "Actively exploring space-tech applications, including remote sensing, anomaly detection, and real-time AI systems.",
    "Passionate about creating cost-efficient, impactful solutions using cutting-edge technology."

    ],
    avatarUrl: "/profile.png", // update with your actual image path
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Node.js",
      "Python",
      "FastAPI",
      "Postgres",
      "Drizzle ORM",
      "Docker",
      "LangChain",
      "Hugging Face",
      "Tailwind CSS",
      "GitHub Actions"
    ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/resume", icon: Briefcase, label: "Resume" },
    { href: "/projects", icon: Projector, label: "Projects" },
  ],
  contact: {
    email: "gnan.lopinti@gmail.com",
    tel: "+91 709568-7172",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/gHGszyQ",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/OuSXdTw",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/NusQ2RT",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:gnan.lopinti@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PSGN Soft Tech",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Computer Vision Intern",
      logoUrl: "/atomic.png",
      start: "April 2024",
      end: "Oct 2024",
      description:
      "Developed a real-time vision system with OCR to read the readings of Warehouse electrical meters, enabling automated data collection and analysis.",
    }
  ],
  education: [
    {
      school: "Koneru Lakshmaiah University",
      href: "https://www.kluniversity.in/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "data:image/jpeg;base64,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q7AXY4VS+luRMseAyxAHqQPGSWdLqVdSrqrqeasAVI8iDzgRrohatmo2vajB631qBXU5RimlpR8MOBwwYH1BE1OsayjaG0NbXvulQ066ipRvb2mNWe1Vft1nLeq745kSd00qihUVUUclUAKB6AcoFSgsQoBbGTjiccBk+MDQdXf/AHXs39Dp/gE7dA/oNP5V3+e831dYUBVAVQMAKMADyAHKK61UYVQoHgowPPkIFf7PoJ1VWysHs9Hq7NVy7p03CzSJ6AXXED9GM3HWMinT6cMtLqddpsrqPmT3+T5B7v6jJOK1yW3RvEAFscSBxAz5cT984voRxuuiuvPDgMM+eDA0/RPT0pW4rq0NRL5YaAg1ngMFiFXvfq8pB+l2j3rds2nSaS5V9nV7rhvX0I1CBrkAXJFYPaYDKe6cSztPpa68hK0rB57ihc/HE7dive7q9/3uA73DHHz4cIGOwVaON2FWnjcSOQXjbvcuXHMhPRGujTX6OgVbPveyhwmr0TDt2VVDPZcmCcPgZffbLEecsBEAAUAAAYAAwAPAATy0+iqrLFKq6y3MooUn4kDjA0u3vpuyfzuo/wDjPMXrJ2ZRborrLKKrXrChWsRWZQbE3grEZGfSSlq1JUlQSucEjiMjBwfDhOLa1YFWUMD4MMj7jA8dFoKaU7KqquqsZ7laBE4nJ7qjHEkyKdGtkldXbUzB6dm93TJjigvXfyfVEPZJ+KT5yaTqtagkgAFsZIHE44DJ8eEDBu+lVY5mi3e/JDJuk+oJbHxabCdQgyWwMkAE44kDJAz5DJ+8ztAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=",
      start: "2022",
      end: "2026",
    },

  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://dub.sh/c6XN7z5",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Kaggle Google Gen AI Hackathon",
      dates: "March, 2025",
      location: "Online, Virtual",
      description:
        "Devleoped a AI-powered Disaster Management System that uses real-time data to predict and manage disaster response.",
      image:
        "data:image/png;base64,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",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
    {
      title: "DevFolio HackVyuha 25, Andhra Pradesh",
      dates: "October 24, 2024",
      location: "Vijayawada, India",
      description:
        "Post-DOX Developed a plaform for maintaining records of Patient records and track recovery to avoid immediate re-admission.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-67f422f118e32_hackvyuha25.png?d=200x200",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
      

    },
            {
      title: "Code for Good Hackathon",
      dates: "March, 2025",
      location: "Vijayawada, India",
      description:
        "Revamped the existing GLOF monitoring platform to improve user experience and data visualization.",
      image:
        "/1719256973582.jpeg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
      

    },
            {
      title: "Smart India Hackathon 2024",
      dates: "October 29, 2024",
      location: "Vijayawada, India",
      description:
        "Developed an platform for monitoring Glacial Lake Outburst Floods (GLOF) using satellite imagery and AI.",
      image:
        "data:image/jpeg;base64,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",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
    {
      title: "Smart India Hackathon 2023",
      dates: "October 29, 2024",
      location: "Vijayawada, India",
      description:
        "Developed a application for Hydroponic/Aeroponic stations to monitor and control the environment using IoT sensors and AI.",
      image:
        "data:image/jpeg;base64,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",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },


    
    
  ],
} as const;
