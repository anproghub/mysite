import GradientBar from "../components/GradientBar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
    SiVisualstudiocode,
    SiDocker,
    SiGit,
    SiNextdotjs as SiNextJs,
    SiNodedotjs as SiNodeJs,
    SiPostgresql,
    SiReact,
    SiStyledcomponents as SiStyledComponents,
    SiTailwindcss as SiTailwindCSS,
    SiTypescript,
    SiYarn,
    SiMysql,
    SiJavascript,
    SiPython,
    SiSolidity,
} from "react-icons/si";
import { FaHardHat, FaAws } from "react-icons/fa";
import { TechItem } from "../components/TechItem";
import Link from "next/link";

interface AppProps {
    stats: Record<string, number>;
}

const Index = ({ stats }: AppProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.15 }}
            className="mt-24 w-full mb-32"
        >
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">Hey, I'm Ankush 👋</h1>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
                gm☀️! I am Ankush, a 15-year-old blockchain-cum-web developer from India.
                <br /> My main professionalism is in web development, but I also have experience working with latest
                tech-stacks.
                <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12 mt-0">
                    Apart from web dev, I have learned blockchain development and worked with big companies like{" "}
                    <a
                        href="https://layer3.xyz"
                        rel="noreferrer"
                        className="font-semibold text-blue-500 hover:underline"
                    >
                        Layer3
                    </a>{" "}
                    {""}
                    and{" "}
                    <a
                        href="https://thirdweb.com/"
                        rel="noreferrer"
                        className="font-semibold text-blue-500 hover:underline"
                    >
                        Thirdweb
                    </a>{" "}
                    by building smart contracts for their projects using solidity. I am a part-time freelancer :)
                </p>
            </p>
            <h2 className="font-medium text-3xl mb-4">What I Do 💭</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
                I'm passionate about everything technology; from designing and developing software, to understanding how
                the many moving parts of the internet work together, to cybersecurity, systems, programming, and so much
                more. I strive to learn more about these things every day, and utilize my knowledge to further
                understand <i>how</i> or <i>why</i> the technology around us works.
            </p>

            <h2 className="font-medium text-3xl mb-4">Technologies 💻</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                I use a variety of tools to streamline my development process and increase the quality of both my code,
                and my projects. Below is a list of technologies and languages I've had experience with in the past, or
                use currently.
            </p>
            <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
                <TechItem icon={SiTypescript} name="TypeScript" />
                <TechItem icon={SiSolidity} name="Solidity" />
                <TechItem icon={SiJavascript} name="JavaScript" />
                <TechItem icon={SiReact} name="React.js" />
                <TechItem icon={SiTailwindCSS} name="TailwindCSS" />
                <TechItem icon={SiNextJs} name="Next.js" />
                <TechItem icon={SiNodeJs} name="Node.js" />
                <TechItem icon={SiYarn} name="Yarn" />
                <TechItem icon={SiMysql} name="MySQL" />
                <TechItem icon={SiVisualstudiocode} name="VSCode" />
                <TechItem icon={FaHardHat} name="HardHat" />
                <TechItem icon={SiStyledComponents} name="styled-components" />
                <TechItem icon={FaAws} name="AWS" />
                <TechItem icon={SiPostgresql} name="Postgres" />
                <TechItem icon={SiGit} name="Git" />
                <TechItem icon={SiDocker} name="Docker" />
                <TechItem icon={SiPython} name="Python" />
            </div>

            <h2 className="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                In my free time, I enjoy creating open source projects on{" "}
                <a
                    href="https://github.com/an-prog-hub"
                    rel="noreferrer"
                    className="font-semibold text-blue-500 hover:underline"
                >
                    GitHub
                </a>
                , so I can learn from others and showcase what I know. In total, all of my open sourced projects have
                earnt me <span className="font-bold text-black dark:text-slate-200">{stats.stars}</span> stars on
                GitHub, and <span className="font-bold text-black dark:text-slate-200">{stats.forks}</span> forks.
            </p>
            <p className="text-grey-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
                if you looking to hire me for any freelancing or consulting work, please reach out to me at{" "}
                <a
                    href="mailto:ac.ankushchauhan.2006@gmail.com"
                    rel="noreferrer"
                    className="font-semibold text-blue-500 hover:underline"
                >
                    Email
                </a>.
            </p>
        </motion.div>
    );
};

export async function getStaticProps() {
    const stats = await fetch(`https://api.github-star-counter.workers.dev/user/an-prog-hub`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/an-prog-hub/repos?type=owner&per_page=100`).then(res =>
        res.json()
    );
    const topRepos = repos
        .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);

    return {
        props: { stats, topRepos },
        revalidate: 3600,
    };
}

export default Index;
