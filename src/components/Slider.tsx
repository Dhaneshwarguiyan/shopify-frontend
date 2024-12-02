import img1 from "../assets/page1_1.webp";
import img2 from "../assets/page1_2.webp";
import img3 from "../assets/page1_3.webp";
import img4 from "../assets/page2_1.webp";
import img5 from "../assets/page2_2.webp";
import img6 from "../assets/page2_3.webp";

import SliderPage from "./SliderPage";
import { useRef, useEffect, useState } from "react";

const Slider = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isLeft, setIsLeft] = useState<boolean>(false);
    const clock = useRef<number>(0);

    //to stop the clock on hover
    const hoverHandler: () => void = () => {
        clearInterval(clock.current);
    };
    //to stop the clock when the mouse leaves the element
    const leaveHandler: () => void = () => {
        setIsLeft(!isLeft);
    };

    // logic to automatically scroll after 5 secs
    useEffect(() => {
        clock.current = setInterval(() => {
            if (containerRef.current) {
                if (containerRef.current.scrollLeft + 1300 >= 1500) {
                    containerRef.current.scrollLeft = 0;
                } else containerRef.current.scrollLeft += 1300;
            }
        }, 5000);
        return () => {
            clearInterval(clock.current);
        };
    }, [isLeft]);

    //Todo: Add all the sliders and add scroll behavior on mouse drag and add hover effect
    return (
        <div
            className="h-fit w-[1480px] rounded-3xl overflow-x-hidden overflow-y-hidden flex gap-24 snap-x scroll-smooth"
            ref={containerRef}
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
        >
            <SliderPage
                img1={img1}
                size1="lg"
                img2={img2}
                size2="sm"
                img3={img3}
                size3="lg"
            />
            <SliderPage
                img1={img4}
                size1="sm"
                img2={img5}
                size2="lg"
                img3={img6}
                size3="lg"
            />
        </div>
    );
};
export default Slider;
