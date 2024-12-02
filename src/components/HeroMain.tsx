import Button from "./Button";
import HeroMotion from "./HeroMotion";

const HeroMain = () => {
    return (
        <div className="flex justify-center">
            <div className="text-white w-[75%] flex flex-col gap-6 justify-end mt-80">
                <div>
                    <div className="text-8xl">Be the next</div>
                    <HeroMotion />
                </div>
                <p className="text-xl mt-10 pl-1">
                    Dream big,build fast, and <br /> grow far on Shopify.
                </p>
                <div className="flex gap-4 pl-1 items-center">
                    <Button text={"Start free trial"} type={"primary"} />
                    <p className="text-sm">
                        {" "}
                        Get 3 days free <br /> then 1 month for $20
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroMain;
