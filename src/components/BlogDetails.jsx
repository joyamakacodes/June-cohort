import { useParams } from "react-router-dom";
import { CarouselData } from "../data/CarouselData";
import { useState, useEffect } from "react";

const BlogDetails = () => {
  const {id} = useParams()
  const [blog, setBlog]= useState({})
  useEffect(()=>{
    const render = CarouselData.find((data)=>data.id === parseInt(id))
    if(render){
      setBlog(render)
    }
  },[id])
  return (
    <div>
      <img src={blog.image} alt={blog.title} />
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
    </div>
  )
}

export default BlogDetails