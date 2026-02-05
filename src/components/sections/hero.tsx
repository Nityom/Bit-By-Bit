import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl bg-clip-text "
                    )}
                  >
                    Welcome to
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <h1
                    className={cn(
                      "-ml-[6px] leading-none font-thin text-transparent text-slate-800 text-left",
                      "font-thin text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
                      "cursor-default text-edge-outline font-display "
                    )}
                  >
                    Bit By Bit
                    <br />
                    Studio
                  </h1>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl bg-clip-text "
                    )}
                  >
                    Web & App Development Services
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <div className="md:self-start flex gap-3">
                  <Link href={"#contact"}>
                    <BoxReveal delay={2} width="100%" >
                      <Button className="flex items-center gap-2">
                        Get Started
                      </Button>
                    </BoxReveal>
                  </Link>
                  <Link href={"#projects"}>
                    <BoxReveal delay={2.1} width="100%" >
                      <Button variant={"outline"} className="flex items-center gap-2">
                        View Work
                      </Button>
                    </BoxReveal>
                  </Link>
                </div>
                <div className="md:self-start flex gap-3 mt-2">
                  <div className="flex items-center h-full gap-2">
                    {config.social.twitter && (
                      <Link
                        href={config.social.twitter}
                        target="_blank"
                      >
                        <Button variant={"outline"}>
                          <SiX size={24} />
                        </Button>
                      </Link>
                    )}
                    {config.social.github && (
                      <Link
                        href={config.social.github}
                        target="_blank"
                        className="cursor-can-hover"
                      >
                        <Button variant={"outline"}>
                          <SiGithub size={24} />
                        </Button>
                      </Link>
                    )}
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
