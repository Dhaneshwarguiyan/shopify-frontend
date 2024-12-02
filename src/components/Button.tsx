type ButtonType = "primary" | "secondary";
interface ButtonProps {
    text: string;
    type: ButtonType;
}

const buttonVarients: Record<string, string> = {
    primary:
        "py-3 px-6 text-black rounded-full tracking-[1px] bg-[#f2f2f2] font-medium text-xl font-sans hover:bg-[#d3d2d2] hover:duration-200",
    secondary:
        "py-3 px-8 rounded-full text-lg bg-transparent outline outline-2 font-medium text-white outline-white hover:bg-white hover:text-black hover:duration-200 ",
};

const Button = ({ text, type }: ButtonProps) => {
    return <button className={buttonVarients[type]}>{text}</button>;
};

export default Button;
