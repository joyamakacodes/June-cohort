import { CarouselData } from "../data/CarouselData"
import { Link } from "react-router-dom"
const AllBlogs = () => {
  return (
    <div>
      {CarouselData.map(({id, image, title, desc})=>(
        <Link to={`/blogDetails/${id}`}  key={id} >
          <div>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{desc.slice(0, 20)}....</p>
          <p>Read more</p>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default AllBlogs