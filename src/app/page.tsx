"use client"
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";

// Enhanced Navigation Item Component
function NavItem({ href, icon, label, isActive }: { 
  href: string; 
  icon: string; 
  label: string; 
  isActive: boolean;
}) {
  return (
    <a 
      href={href} 
      className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 ${
        isActive 
          ? 'bg-secondary/80 text-foreground shadow-md border border-border/50' 
          : 'hover:bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-border/30 border border-transparent'
      }`}
    >
      <span className="text-lg transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

// Professional Profile Card Component
function ProfileCard() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-card/95 backdrop-blur-sm border border-border shadow-xl">
      {/* Subtle animated background with floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-muted/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-accent/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative p-6 space-y-5">
        {/* Profile Header */}
        <div className="flex items-start gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-muted/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
            <Avatar className="relative size-16 border-2 border-border/60 shadow-lg ring-2 ring-background/50 group-hover:scale-105 transition-all duration-300">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
              <AvatarFallback className="bg-secondary text-foreground font-bold text-lg">
                {DATA.initials}
              </AvatarFallback>
            </Avatar>
            {/* Enhanced online indicator */}
            <div className="absolute -bottom-1 -right-1 flex items-center justify-center">
              <div className="w-5 h-5 bg-green-500 border-2 border-background rounded-full animate-pulse shadow-sm"></div>
              <div className="absolute w-5 h-5 bg-green-400 rounded-full animate-ping opacity-30"></div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="space-y-1">
              <h3 className="font-bold text-foreground text-base leading-tight">{DATA.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {DATA.description.split('.')[0]}...
              </p>
              </div>

          </div>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="group relative overflow-hidden text-center p-3 rounded-lg bg-secondary/40 hover:bg-secondary/60 border border-border/40 hover:border-border/60 transition-all duration-300 hover:shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-lg font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
                {DATA.projects.length}+
              </div>
              <div className="text-xs text-muted-foreground font-medium">Projects</div>
            </div>
          </div>
          <div className="group relative overflow-hidden text-center p-3 rounded-lg bg-muted/40 hover:bg-muted/60 border border-border/40 hover:border-border/60 transition-all duration-300 hover:shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-lg font-bold text-foreground group-hover:scale-110 transition-transform duration-300">
                {DATA.hackathons.length}+
              </div>
              <div className="text-xs text-muted-foreground font-medium">Hackathons</div>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Info */}
        <div className="space-y-3 p-4 bg-secondary/20 hover:bg-secondary/30 rounded-lg border border-border/30 transition-all duration-300">
          <div className="flex items-center gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-background/60 border border-border/40">
              <span className="text-xs">📧</span>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200 truncate">
              gnan.lopinti@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm group hover:translate-x-1 transition-transform duration-200">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-background/60 border border-border/40">
              <span className="text-xs">📍</span>
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
              Visakhapatnam, India
            </span>
          </div>
        </div>

        {/* Enhanced Social Links */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-border/30"></div>
            <span className="text-xs text-muted-foreground font-medium">Connect</span>
            <div className="h-px flex-1 bg-border/30"></div>
          </div>
          <div className="flex gap-2 justify-center">
            {Object.entries(DATA.contact.social).map(([platform, { url, icon }], index) => (
              <Link
                key={platform}
                href={url}
                className="relative group flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/40 hover:bg-secondary/70 border border-border/30 hover:border-border/60 transition-all duration-300 hover:scale-110 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                <span className="relative text-sm group-hover:scale-125 transition-transform duration-300">
                  {getPlatformIcon(platform)}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced Quick Action Button */}
        <Link
          href="#contact"
          className="relative group block w-full text-center py-3 px-4 bg-foreground hover:bg-foreground/90 text-background rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <span className="relative flex items-center justify-center gap-2">
            Let's Connect
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

// Helper function for social platform icons
function getPlatformIcon(platform: string): string {
  const iconMap: Record<string, string> = {
    'GitHub': '🐙',
    'LinkedIn': '💼',
    'X': '🐦',
    'Twitter': '🐦',
    'Email': '📧',
    'Website': '🌐',
  };
  return iconMap[platform] || '🔗';
}

function DockedSidebar({ position, children }: { position: "left" | "right"; children: React.ReactNode }) {
  return (
    <aside
      className={`fixed top-24 ${position === "left" ? "left-6" : "right-6"} hidden lg:block z-30 animate-in slide-in-from-${position}-10 duration-500`}
      style={{ width: position === "left" ? 260 : 280 }}
    >
      <div className="backdrop-blur-xl bg-card/95 shadow-2xl border border-border rounded-xl overflow-hidden">
        {children}
      </div>
    </aside>
  );
}

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [showDock, setShowDock] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setShowDock(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'work', 'education', 'skills', 'projects', 'hackathons', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigationItems = [
    { href: "#hero", icon: "🏠", label: "Home" },
    { href: "#about", icon: "👤", label: "About" },
    { href: "#work", icon: "💼", label: "Work" },
    { href: "#education", icon: "🎓", label: "Education" },
    { href: "#skills", icon: "⚡", label: "Skills" },
    { href: "#projects", icon: "🚀", label: "Projects" },
    { href: "#hackathons", icon: "🏆", label: "Hackathons" },
    { href: "#contact", icon: "📞", label: "Contact" },
  ];

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 relative">
      {showDock && (
        <>
          {/* Enhanced Left Navigation Sidebar */}
          <DockedSidebar position="left">
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-foreground">
                  Navigation
                </h2>
                <p className="text-xs text-muted-foreground mt-1">Jump to any section</p>
              </div>
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                    isActive={activeSection === item.href.replace('#', '')}
                  />
                ))}
              </nav>
              
              {/* Progress Indicator */}
              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>📊</span>
                  <span>Scroll Progress</span>
                </div>
                <div className="mt-2 w-full bg-secondary/60 rounded-full h-1 border border-border/30">
                  <div 
                    className="bg-foreground h-1 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </DockedSidebar>

          {/* Enhanced Right Profile Sidebar */}
          <DockedSidebar position="right">
            <div className="p-6">
              <ProfileCard />
            </div>
          </DockedSidebar>
        </>
      )}
      
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
  <BlurFade delay={BLUR_FADE_DELAY * 3}>
    <h2 className="text-3xl font-bold mb-6 relative inline-block text-foreground">
      About
      <span className="absolute left-0 -bottom-1 w-1/2 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"></span>
    </h2>
  </BlurFade>
  <BlurFade delay={BLUR_FADE_DELAY * 4}>
    <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
      {`
  **Final-year Computer Science undergrad** with 2+ years of hands-on full-stack development experience.  

  Specialized in building **scalable, production-ready software** with a focus on [AI engineering and automation]().  

  Delivered multiple **high-impact projects** in AI-powered accessibility, health tracking, and SaaS products.  

  Contributed to **startups** by developing end-to-end products, from concept to deployment.  

  Actively exploring **space-tech applications**, including remote sensing, anomaly detection, and real-time AI systems.  

  Passionate about creating **cost-efficient, impactful solutions** using cutting-edge technology.
        `}
    </Markdown>
  </BlurFade>
</section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
  <div className="flex min-h-0 flex-col gap-y-6">
    <BlurFade delay={BLUR_FADE_DELAY * 9}>
      <h2 className="text-xl font-bold">Skills</h2>
      <p className="text-sm text-neutral-400">
        These are the technologies I've learned and worked with. This list is
        constantly evolving as I continue to learn and grow as a developer.
      </p>
    </BlurFade>

    {[
      {
        title: "< Languages />",
        items: ["Typescript", "Python"],
      },
      {
        title: "< Frameworks / Libraries />",
        items: ["React", "Next.js", "Tailwind CSS", "FastAPI", "LangChain", "Hugging Face"],
      },
      {
        title: "< Backend & Runtime />",
        items: ["Node.js"],
      },
      {
        title: "< Database />",
        items: ["Postgres", "Drizzle ORM"],
      },
      {
        title: "< Developer Tools />",
        items: ["Docker", "GitHub Actions"],
      },
    ].map((category, i) => (
      <BlurFade key={category.title} delay={BLUR_FADE_DELAY * (10 + i)}>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-sm font-mono text-neutral-400">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.items.map((skill) => {
              const iconMap: Record<string, JSX.Element> = {
                "React": <i className="devicon-react-original colored text-lg"></i>,
                "Next.js": <i className="devicon-nextjs-original text-lg"></i>,
                "Typescript": <i className="devicon-typescript-plain colored text-lg"></i>,
                "Node.js": <i className="devicon-nodejs-plain colored text-lg"></i>,
                "Python": <i className="devicon-python-plain colored text-lg"></i>,
                "FastAPI": <i className="devicon-fastapi-plain colored text-lg"></i>,
                "Postgres": <i className="devicon-postgresql-plain colored text-lg"></i>,
                "Drizzle ORM": <span className="text-yellow-500">🌦</span>,
                "Docker": <i className="devicon-docker-plain colored text-lg"></i>,
                "LangChain": <span className="text-purple-500">🔗</span>,
                "Hugging Face": <span>🤗</span>,
                "Tailwind CSS": <i className="devicon-tailwindcss-plain colored text-lg"></i>,
                "GitHub Actions": <i className="devicon-github-original text-lg"></i>,
              };

              return (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-3 py-1 bg-neutral-800 rounded-md hover:bg-neutral-700 transition-colors"
                >
                  {iconMap[skill] || <span>⚙️</span>}
                  <span className="text-sm">{skill}</span>
                </div>
              );
            })}
          </div>
        </div>
      </BlurFade>
    ))}
  </div>
</section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}