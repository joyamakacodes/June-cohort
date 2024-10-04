import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home"
import About from "./page/About";
import Contact from "./page/Contact";
import Services from "./page/Services";
import Carousel from "./components/Carousel";
import BlogDetails from "./components/BlogDetails";
import AllBlogs from "./components/AllBlogs";
import CardDetails from "./components/CardDetails";
import { StateManager } from "./context/Context";
import Stating from "./components/Stating";
import Practice from "./components/Practice";
import FetchPractice from "./components/Fetch";
import HomePage from "./components/PagePractice";
import AxiosPractice from "./components/AxiosPractice";
import CountSubscribe from "./components/CountSubscribe";
import TodoSubscribe from "./components/TodoSubscribe";
function App() {


  return (
   <StateManager>
     <Router>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/practice' element={<Practice/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/allBlogs' element={<AllBlogs/>}/> 
        <Route path='/state' element={<Stating/>}/> 
        <Route path='/fetch' element={<FetchPractice/>}/> 
        <Route path='/page' element={<HomePage/>}/> 
        <Route path='/axios' element={<AxiosPractice/>}/>
        <Route path='/countSubscribe' element={<CountSubscribe/>}/>
        <Route path='/todoSubscribe' element={<TodoSubscribe/>}/>
        <Route path='/blogDetails/:id' element={<BlogDetails/>}/>
        <Route path='/cardDetails/:id' element={<CardDetails/>}/>
        
        </Routes>

    </Router>
   </StateManager>
  )
}

export default App
