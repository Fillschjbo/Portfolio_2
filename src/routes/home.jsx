import {repos} from "../../repos.jsx";

export function Home(){


    return(
        <div>
            {repos.map((repo) => (
                <div>{repo.name}</div>
            ))}
        </div>
    )
}