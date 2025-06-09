import {repos} from "../../repos.jsx";
import {RepoCard} from "../components/cards/RepoCard.jsx";

export function Home(){


    return(
        <div>
            <div className={"flex flex-wrap mx-auto p-10 justify-center md:justify-between gap-5"}>
                {repos.map((repo) => (
                    <RepoCard
                        name={repo.name}
                        id={repo.id}
                        img={repo.img}
                        description={repo.description}
                        deployedProject={repo.deployedProject}
                        github={repo.github}
                    />
                ))}
            </div>
        </div>
    )
}