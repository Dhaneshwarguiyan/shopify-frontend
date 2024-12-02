import NavTiles from "./NavTiles";
import logo from "../assets/logo.png";
import Button from "./Button";
import {  useState } from "react";

const Navbar = () => {
    const [color,setColor] = useState("");
    const handleScroll = ()=>{
        if(window.scrollY === 0 && color === "bg-black"){
            setColor("");
        }
        if(window.scrollY !== 0 && color !== "bg-black"){
            setColor("bg-black")
        }
    }
    window.addEventListener("scroll",handleScroll);
    const tiles: string[] = [
        "Solutions",
        "Pricing",
        "Resources",
        "Enterprise",
        "What's new",
    ];
    return (
        <div className={`w-[100vw] px-24 h-[80px] flex items-center justify-between fixed ${color} z-20`}>
            {/* left */}
            <div className="flex gap-7 items-center">
                <img src={logo} alt="logo" width={130} className="mr-10" />
                {tiles.map((tile, i) => (
                    <NavTiles text={tile} type="nav" key={i} />
                ))}
            </div>
            {/* right */}
            <div className="flex gap-6 items-center">
                <NavTiles type="nav" text={"Log in"} />
                <Button text={"Start free trial"} type={"primary"} />
            </div>
        </div>
    );
};

export default Navbar;
