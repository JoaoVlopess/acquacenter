"use client"

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { register } from 'swiper/element-bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Produtos from "./components/Produtos";
import Beneficios from "./components/Beneficios";
import Nos from "./components/Nos";
import Footer from "./components/Footer";


const Page = () => {
  return(
    <div className="text-center">
      <Navbar/>
      <Home/>
      <Produtos/>
      <Beneficios/>
      <Nos/>
      <Footer/>
    </div>
  );
}

export default Page;