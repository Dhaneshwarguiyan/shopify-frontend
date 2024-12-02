import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function App() {
    const arr: string[] = [
        "big thing",
        "one to watch",
        "category creator",
        "unicorn startup",
        "household name",
        "global empire",
        "solo flier",
        "store they line up for",
    ];
    const [text, setText] = useState(arr[0]);
    const ref = useRef(1);

    useEffect(() => {
        const clock = setInterval(() => {
            ref.current = ref.current % 8;
            setText(arr[ref.current]);
            ref.current++;
        }, 4000);

        return () => {
            clearInterval(clock);
        };
    }, []);
    return (
        <motion.div className="h-[100px] text-8xl bg-transparent overflow-hidden felx items-center">
            <motion.div
                animate={{
                    translateY: [100, 0, 0, -100],
                }}
                transition={{
                    duration: 4,
                    ease: "backInOut",
                    times: [0, 0.1, 0.9, 1],
                    repeat: Infinity,
                    repeatDelay: 0,
                }}
            >
                {text}
            </motion.div>
        </motion.div>
    );
}
