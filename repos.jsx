import holidaze from "/src/assets/images/holidaze.png"
import yeager from "/src/assets/images/yeager.png"
import stayawhile from "/src/assets/images/stayawhile.png"

export const repos = [
    {
        name: "Holidaze",
        id: 0,
        img: holidaze,
        description: "Holidaze is a modern and responsive holiday venue booking application." +
            "Built with React, Tailwind CSS, and Vite, it allows users to explore, book, and manage holiday venues with a clean and user-friendly interface." +
            "This project was developed as part of a frontend exam submission.",
        deployedProject: "https://fillipholidaze.netlify.app/",
        github: "https://github.com/Fillschjbo/fillip_fed2_exam"
    },
    {
        name: "Yeager",
        id: 1,
        img: yeager,
        description: "This front-end project utilizes the Noroff API to demonstrate core CRUD operations via fetch GET, POST, and PUT requests." +
            " Key user stories include a recent-posts carousel, a post grid, user registration and login, and full post management (create, view, edit, delete)." +
            " The UI is designed to be clean and minimal, with smooth scroll animations enhancing the overall user experience.",
        deployedProject: "https://yeager.netlify.app/",
        github: "https://github.com/Fillschjbo/PE1-Fillip"
    },
    {
        name: "StayAWhile",
        id: 2,
        img: stayawhile,
        description: "Stay A While is a cabin booking platform ." +
            " The platform allows users to search for cabins, filter options based on location and availability, and book stays." +
            " Users can also register, log in, manage their bookings, and list their own cabins for rent." +
            " All this is made possible by creating or own API.",
        deployedProject: "https://stay-a-while.netlify.app/",
        github: "https://github.com/StayAwhileOrg/stay-a-while"
    },
]