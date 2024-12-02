import Img from "./Img";

type size = "sm" | "lg";

interface propTypes {
    img1: string;
    size1: size;
    img2: string;
    size2: size;
    img3: string;
    size3: size;
}

const SliderPage = ({ img1, size1, img2, size2, img3, size3 }: propTypes) => {
    return (
        <div className="flex gap-4 h-min snap-start">
            <Img image={img1} size={size1} />
            <Img image={img2} size={size2} />
            <Img image={img3} size={size3} />
        </div>
    );
};

export default SliderPage;
