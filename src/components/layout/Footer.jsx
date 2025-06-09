export function Footer(){
    return(
        <footer className="mt-[4rem] p-[4rem] flex justify-between">
            <ul className=" flex flex-col text-white font-poppins text-[1rem] gap-[1rem]">
                <li>Contact Me</li>
                <li>About Me</li>
                <li>&#169; Fillip Schjølberg Husebø 2025</li>
            </ul>
            <ul className=" flex flex-col text-white font-poppins text-[1rem] gap-[1rem]">
                <li>Legal Policies</li>
                <li>Terms of Service</li>
                <li>Pricacy Policy</li>
            </ul>
            <ul className=" flex flex-col textwhite font-poppins text-[1rem] gap-[1rem]">
                <li>Follow Me on:</li>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
        </footer>
    )
}