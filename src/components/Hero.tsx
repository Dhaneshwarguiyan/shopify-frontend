import HeroMain from "./HeroMain";
import hero from "../assets/hero-video.webm";

const Hero = () => {
    return (
        <div>
            <video
                autoPlay
                loop
                muted
                className="w-[100vw] object-cover bg-slate-100 absolute z-[-100]"
            >
                <source src={hero} type="video/mp4" />
            </video>
            <HeroMain />
        </div>
    );
};

export default Hero;
