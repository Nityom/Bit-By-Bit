import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";
import { Button } from "../ui/button";

type Developer = {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
  };
};

const DEVELOPERS: Developer[] = [
  {
    id: 1,
    name: "Nityom Tikhe",
    role: "Frontend Developer",
    bio: "Creative frontend developer specializing in building beautiful and responsive user interfaces. Expert in modern React frameworks and creating seamless user experiences.",
    avatar: "https://avatars.githubusercontent.com/u/112824495?v=4",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    social: {
      github: "https://github.com/Nityom",
      linkedin: "https://www.linkedin.com/in/nityom-tikhe-bb53b3249/",
    },
  },
  {
    id: 2,
    name: "Rushikesh Chaudhari",
    role: "App Developer",
    bio: "Passionate mobile app developer focused on creating high-performance native and cross-platform applications. Skilled in delivering intuitive mobile experiences.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEfU404jH87AA/profile-displayphoto-scale_200_200/B4DZwhuaKKI8AY-/0/1770092346485?e=1772064000&v=beta&t=J4IaekBvNmtxH1dEpydmCN3OxY8LL1k0nthPcC5pxXM",
    skills: ["React Native", "Flutter", "Android", "iOS", "Firebase"],
    social: {
      github: "https://github.com/rushi055",
      linkedin: "https://www.linkedin.com/in/rushikesh012/",
    },
  },
  {
    id: 3,
    name: "Atharva Joshi",
    role: "Backend Developer",
    bio: "Backend specialist focused on building scalable server architectures and robust APIs. Expert in database design and cloud infrastructure.",
    avatar: "https://avatars.githubusercontent.com/u/114106490?v=4",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    social: {
      github: "https://github.com/Atharvajoshiii",
      linkedin: "https://www.linkedin.com/in/atharva-joshi-50305323b/",
    },
  },
];

const DevelopersSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-screen py-20 z-10">
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="team"
          title="Meet Our Team"
          desc="The talented developers behind Bit By Bit Studio"
          className="mb-12 md:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DEVELOPERS.map((developer, index) => (
            <DeveloperCard key={developer.id} developer={developer} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const DeveloperCard = ({
  developer,
  index,
}: {
  developer: Developer;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border h-full",
          "hover:border-primary/20 transition-all duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10">
              <img
                src={developer.avatar}
                alt={developer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold tracking-tight">
                {developer.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {developer.role}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            {developer.bio}
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {developer.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-xs font-normal"
              >
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2 justify-center pt-2">
            {developer.social.github && (
              <Link href={developer.social.github} target="_blank">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <SiGithub className="h-4 w-4" />
                </Button>
              </Link>
            )}
            {developer.social.linkedin && (
              <Link href={developer.social.linkedin} target="_blank">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <SiLinkedin className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DevelopersSection;
