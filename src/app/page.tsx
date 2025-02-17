"use client"

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { register } from 'swiper/element-bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Page = () => {
  return(
    <div className="text-center">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default Page;