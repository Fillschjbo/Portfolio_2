import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { repos } from "../../repos.jsx";
import { RepoCard } from "../components/cards/RepoCard.jsx";
import { AiOutlineMail, AiFillPhone, AiFillGithub } from "react-icons/ai";

export function Home() {
    const firstSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);

    const firstSectionInView = useInView(firstSectionRef, { margin: "-50% 0px" });
    const aboutSectionInView = useInView(aboutSectionRef, { margin: "-50% 0px" });

    const { scrollYProgress: firstSectionProgress } = useScroll({
        target: firstSectionRef,
        offset: ["start end", "end start"],
    });
    const { scrollYProgress: aboutSectionProgress } = useScroll({
        target: aboutSectionRef,
        offset: ["start end", "end start"],
    });

    const firstSectionScale = useTransform(firstSectionProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
    const aboutSectionScale = useTransform(aboutSectionProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);

    return (
        <div>
            <motion.div
                ref={firstSectionRef}
                className="flex flex-col mx-auto p-10 items-center gap-5 h-screen justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                    scale: firstSectionInView ? firstSectionScale : 0.8,
                    transformOrigin: "center",
                }}
            >
                <h2 className="text-[7vw] text-center w-[75%] font-poppins">
                    CODE THAT CLICKS
                </h2>
                <p className="text-[4vw] text-center w-[75%] font-poppins font-light">
                    DESIGN THAT STICKS
                </p>
            </motion.div>

            <div className="flex flex-wrap mx-auto p-10 justify-center md:justify-between gap-5">
                {repos.map((repo) => (
                    <RepoCard
                        key={repo.id}
                        name={repo.name}
                        id={repo.id}
                        img={repo.img}
                        description={repo.description}
                        deployedProject={repo.deployedProject}
                        github={repo.github}
                    />
                ))}
            </div>

            <motion.div
                ref={aboutSectionRef}
                className="flex flex-col mx-auto p-10 justify-center items-center gap-8 h-screen relative"
                style={{
                    scale: aboutSectionInView ? aboutSectionScale : 0.9,
                    transformOrigin: "center",
                    transition: "scale 0.3s ease-out",
                }}
            >
                <h2 className="text-3xl font-poppins font-bold">About me</h2>
                <p className="w-1/2 text-2xl font-poppins">
                    Hi, I'm a front-end developer who graduated from Noroff in 2025. I specialize in building responsive, modern web interfaces using React, Tailwind CSS, JavaScript, HTML, and CSS. I also have some basic experience with SQL. This fall, I'm starting my journey into back-end development to pursue my goal of becoming a full-stack developer. I'm passionate about clean code, intuitive user experiences, and constantly learning new technologies to grow as a developer.
                </p>
                <h3 className="text-3xl font-poppins font-bold mt-20">Want to contact me?</h3>
                <ul className="w-1/2 text-2xl font-poppins flex justify-center gap-10">
                    <li>
                        <AiOutlineMail />
                    </li>
                    <li>
                        <AiFillPhone />
                    </li>
                    <li>
                        <AiFillGithub />
                    </li>
                </ul>
            </motion.div>
        </div>
    );
}