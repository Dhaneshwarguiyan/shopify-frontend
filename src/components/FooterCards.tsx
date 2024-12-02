import NavTiles from "./NavTiles"


interface propTypes {
    title:string,
    items:string[]
}

const FooterCards = ({title,items}:propTypes) => {
  return (
    <div>
      <p className="font-medium  text-white text-xl mb-4">{title}</p>
      <ul className="flex flex-col gap-2">
        {
            items.map((item,i)=>{
                return <NavTiles text={item} type="foot" key={i}/>
            })
        }
      </ul>
    </div>
  )
}

export default FooterCards
