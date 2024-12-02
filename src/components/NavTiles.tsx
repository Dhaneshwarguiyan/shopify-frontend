interface propTypes {
    text: string;
    type:"nav"|"foot"
}

const NavTiles = ({ text,type }: propTypes) => {
    const varients = {
        "nav":"text-white",
        "foot":"text-gray-400"
    }
    return (
        <div className ={`${varients[type]} text-lg hover:underline hover:duration-300`}>
            {text}
        </div>
    );
};

export default NavTiles;
