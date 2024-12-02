import Slider from "./Slider";

const Commerce = () => {
    const variant: string =
        "text-5xl hover:text-transparent text-[#71717A] inline";
    return (
        <div className="bg-black rounded-t-3xl mt-20">
            <div className="m-auto w-[75%] flex flex-col gap-12 items-start">
                <h1 className="text-white text-7xl mt-24">
                    The one commerce platform behind it all
                </h1>
                <div className="bg-gradient-to-r from-[#5fd5b6] to-[#806ff3] bg-clip-text">
                    <p className={variant}>Sell online and in person. </p>
                    <p className={variant}>Sell locally and globally. </p>
                    <p className={variant}>
                        Sell direct and <br />
                        wholesale.
                    </p>
                    <p className={variant}>Sell on desktop and mobile.</p>
                </div>
                <Slider />
            </div>
        </div>
    );
};

export default Commerce;
