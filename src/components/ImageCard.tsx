import { ReactElement } from "react"

interface propTypes {
     img1:string,
     title:string,
     para:ReactElement
}


const ImageCard = ({img1,title,para}:propTypes) => {
  return (
    <div className="w-[500px]  flex flex-col ">
        <img src={img1} alt="img" />
        <h2 className="text-xl text-white mt-8 mb-2">{title}</h2>
        {para}
    </div>
  )
}

export default ImageCard
