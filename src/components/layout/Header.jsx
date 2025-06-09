import logo from "/src/assets/logo/e5c086be-7cc6-4c40-b216-cad8a2651b23.svg"
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useContext } from "react";
import { OutletContext } from "../../main.jsx";

export function Header() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const threshold = 100;
    const { scrollToAbout } = useContext(OutletContext);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > lastScrollY && latest > threshold) {
            setIsVisible(false);
        } else if (latest < lastScrollY) {
            setIsVisible(true);
        }
        setLastScrollY(latest);
    });

    const headerVariants = {
        visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
        hidden: { y: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
    };

    return (
        <motion.div
            className="w-screen mx-auto p-6 flex justify-between sticky top-0 z-50"
            variants={headerVariants}
            initial="visible"
            animate={isVisible ? "visible" : "hidden"}
        >
            <div className="bg-white w-1/5 h-full rounded-md p-4 flex justify-center items-center gap-2">
                <img className="size-[2vw]" src={logo} alt="Logo" />
                <h1 className="text-black font-poppins text-[1vw] font-bold tracking-wide">
                    Fillip Husebø
                </h1>
            </div>
            <button
                onClick={scrollToAbout}
                className="bg-white p-4 h-full rounded-md flex justify-center items-center hover:bg-gray-100 transition-colors hover:cursor-pointer"
            >
                <h2 className="text-black font-poppins font-bold text-[1vw] tracking-wide">
                    Contact Me!
                </h2>
            </button>
        </motion.div>
    );
}