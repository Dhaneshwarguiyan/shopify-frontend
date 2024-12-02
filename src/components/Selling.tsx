import { useState } from "react";
import selling1 from "../assets/selling1.webp";
import selling2 from "../assets/selling2.webp";
import Button from "./Button";

const Selling = () => {
    const [lightVariant, setVariant] = useState<string>("text-white");
    const defaultVariant: Record<string, string> = {
        para: "text-5xl font-extralight border-b pb-3 hover:text-white",
        num: "text-green-500 text-3xl",
        parent: "flex items-center gap-10 cursor-pointer pb-5",
    };

    return (
        <div className="w-full bg-gradient-to-br from-[#000000] via-[#27292e] to-[#030909] shadow-inner">
            <div className="w-[75%] m-auto">
                <h3 className="text-6xl text-white text-center pt-16">
                    Start selling in no time
                </h3>
                <div className="flex py-32 border-spacing-6 justify-around items-end">
                    <div className="flex gap-4">
                        <img
                            src={selling1}
                            alt="img"
                            className="w-[288px] h-[384px] rounded-3xl relative bottom-[100px]"
                        />
                        <img
                            src={selling2}
                            alt="img"
                            className="w-[288px] h-[384px] rounded-3xl"
                        />
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <div
                                className={defaultVariant.parent}
                                onMouseEnter={() => {
                                    setVariant("text-gray-400");
                                }}
                                onMouseLeave={() => {
                                    setVariant("text-white");
                                }}
                            >
                                <span className={defaultVariant.num}>01</span>
                                <p
                                    className={`${lightVariant} ${defaultVariant.para}`}
                                >
                                    Add your first product
                                </p>
                            </div>
                            <div
                                className={defaultVariant.parent}
                                onMouseEnter={() => {
                                    setVariant("text-gray-400");
                                }}
                                onMouseLeave={() => {
                                    setVariant("text-white");
                                }}
                            >
                                <span className={defaultVariant.num}>02</span>
                                <p
                                    className={`${lightVariant} ${defaultVariant.para}`}
                                >
                                    Customize your store
                                </p>
                            </div>
                            <div
                                className={defaultVariant.parent}
                                onMouseEnter={() => {
                                    setVariant("text-gray-400");
                                }}
                                onMouseLeave={() => {
                                    setVariant("text-white");
                                }}
                            >
                                <span className={defaultVariant.num}>03</span>
                                <p
                                    className={`${lightVariant} ${defaultVariant.para}`}
                                >
                                    Set up payments
                                </p>
                            </div>
                        </div>
                        <div className="pl-20">
                            <Button type="primary" text="Take your shot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selling;
