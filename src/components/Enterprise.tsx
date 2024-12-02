import ImageCard from "./ImageCard";
import Button from "./Button";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Enterprise = () => {
    const varients: Record<string, string> = {
        normal: "font-light text-gray-500 text-lg text-wrap",
        span: "font-semibold text-gray-400",
    };
    const element1 = (
        <p className={varients.normal}>
            Solo seller Megan Bre Camp started{" "}
            <span className={varients.span}>Summer Solace Tallow</span> to sell
            her organic candles and skincare online and at local farmers
            markets.
        </p>
    );
    const element2 = (
        <p className={varients.normal}>
            Athleisure brand <span className={varients.span}>Gymshark</span>{" "}
            grew from working out of a garage to the global juggernaut it is
            today, with $500M+ sales annually
        </p>
    );
    const element3 = (
        <p className={varients.normal}>
            With the help of Shopify for enterprise,{" "}
            <span className={varients.span}>Mattel</span> sells their iconic
            toys direct to customers around the world.
        </p>
    );
    return (
        <div className="w-full pt-12 bg-black">
            <div className="w-[75%] m-auto">
                <div className="flex items-end mb-10">
                    <h2 className="text-white w-2/3 text-6xl">For everyone from entrepreneurs <br /> to enterprise</h2>
                    <p className="text-gray-500 text-lg">
                        Millions of merchants of every size have collectively
                        made over <br /> $1,000,000,000,000 in sales on Shopify.
                    </p>
                </div>
                <div className="flex gap-5">
                    <ImageCard
                        img1={img1}
                        title="Get started fast"
                        para={element1}
                    />
                    <ImageCard
                        img1={img2}
                        title="Grow as big as you want"
                        para={element2}
                    />
                    <ImageCard
                        img1={img3}
                        title="Raise the bar"
                        para={element3}
                    />
                </div>
                <div className="flex justify-center mt-10 pb-10">
                    <Button text="Pick a plan that fits" type="secondary" />
                </div>
            </div>
        </div>
    );
};

export default Enterprise;
