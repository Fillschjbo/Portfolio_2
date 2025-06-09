import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function RepoCard({ name, id, img, description, deployedProject, github }) {
    const descriptionRef = useRef(null);
    const [descriptionHeight, setDescriptionHeight] = useState(0);

    useEffect(() => {
        if (descriptionRef.current) {
            setDescriptionHeight(descriptionRef.current.offsetHeight);
        }
    }, [description]);

    const overlayVariants = {
        initial: { y: 0 },
        hover: {
            y: -descriptionHeight,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    };

    const contentVariants = {
        initial: { y: 100, opacity: 0 },
        hover: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut", delay: 0.1 },
        },
    };

    return (
        <Link to={deployedProject} className="md:w-1/4 w-1/2 min-w-[200px] h-70 relative block overflow-hidden">
            <img src={img} alt="repo image" className="rounded-lg w-full h-full object-cover" />
            <motion.div
                className="absolute bottom-0 left-0 w-full"
                initial="initial"
                whileHover="hover"
            >
                <motion.div
                    variants={overlayVariants}
                    className="absolute bottom-0 left-0"
                    style={{ zIndex: 20 }}
                >
                    <div className="absolute bottom-10 right-25">
                        <svg width="11" height="11" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0C1 7.5068 6.24016 9.70491 9.61943 9.97124H11C10.5987 10.0076 10.1303 10.0115 9.61943 9.97124H1V0Z" fill="#111319"/>
                            <path d="M1 0C1 8.64174 7.94444 10.2482 11 9.97124H1V0Z" stroke="#111319" stroke-width="0.1"/>
                        </svg>
                    </div>
                    <h2 className="font-chonburi bg-[#111319] p-2 rounded-tr-xl w-[110px] text-center text-white">
                        {name}
                    </h2>
                    <div className="absolute bottom-0 left-27">
                        <svg width="11" height="11" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0C1 7.5068 6.24016 9.70491 9.61943 9.97124H11C10.5987 10.0076 10.1303 10.0115 9.61943 9.97124H1V0Z" fill="#111319"/>
                            <path d="M1 0C1 8.64174 7.94444 10.2482 11 9.97124H1V0Z" stroke="#111319" stroke-width="0.1"/>
                        </svg>
                    </div>
                </motion.div>

                <motion.div
                    ref={descriptionRef}
                    variants={contentVariants}
                    className="bg-[#111319] p-4 mt-2"
                    style={{ zIndex: 10 }}
                >
                    <p className="text-white font-poppins text-xs">{description}</p>
                    <p className="text-blue-400 text-sm mt-2">
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </Link>
    );
}