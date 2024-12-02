const variants = {
    lg: "h-[431px] w-[599px] rounded-3xl",
    sm: "h-[431px] w-[246px] rounded-3xl",
};

const Img = ({ image, size }: { image: string; size: "sm" | "lg" }) => {
    return (
        <div className={variants[size]}>
            <img src={image} alt="" className={variants[size]} />
        </div>
    );
};
export default Img;
