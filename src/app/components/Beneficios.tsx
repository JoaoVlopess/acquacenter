import { Swiper, SwiperSlide } from 'swiper/react'

const Beneficios = () => {
  const data = [
    {
      img: "/img/etiqueta-de-preco.png",
      title: "Orçamentos Transparentes",
      text: "Orçamentos justos, promovendo uma experiência financeira tranquila.",
    },
    {
      img: "/img/verifica.png",
      title: "Cumprimentos de Prazos",
      text: "Garantia que os prazos sejam respeitados é crucial para nossa empresa.",
    },
    {
      img: "/img/suporte-tecnico.png",
      title: " Habilidade Especializada",
      text: "Equipe especializada para auxiliar na aplicação e transporte dos produtos.",
    },
    {
      img: "/img/instrucoes.png",
      title: "Cumprimento de Regulações",
      text: "Lidar e garantir as regulamentações é algo que nós prezamos sempre.",
    },
    {
      img: "/img/resistencia (1).png",
      title: "Produtos muito duráveis",
      text: "Todos os nossos produtos têm uma duração excepcional e com garantia.",
    },
    {
      img: "/img/garantido.png",
      title: "Garantia de Contentamento",
      text: "A satisfação do cliente é nosso foco, garantir isso é sempre nossa preferência!",
    }
  ]

  return(
    <section className="min-h-[90vh] bg-white flex flex-col">
    <p className="text-lg md:text-xl text-black pt-10 uppercase"
    >Conheça os
    </p>
    <h1 className="text-3xl md:text-5xl text-black font-montserrat  mt-5 uppercase"
    >NOSSOS SERVIÇOS E PRODUTOS
    </h1>

    <div className="h-full w-full px-11 sm:px-28 md:px-40 py-10">
  <Swiper 
    slidesPerView={1} 
    breakpoints={{
      640: { slidesPerView: 1 }, // Telas pequenas (até 640px)
      800: { slidesPerView: 2 }, // Tablets (768px ou mais)
      1175: { slidesPerView: 3 }, // Desktops médios (1024px ou mais)
      1280: { slidesPerView: 3 }, // Telas grandes (1280px ou mais)
    }}
    navigation
    >
    <div className="h-full">
    {data.map((item, index) => (
        <SwiperSlide key={index} className="">
          <div 
            className="flex flex-col items-center border-2 rounded-xl border-BlueCenter min-h-[400px] sm:min-h-[370px] px-12 py-8 md:px-10 md:py-10 md:mx-2  md:min-h-[460px] h-full gap-y-4"
            >
            <img 
              src={item.img} 
              alt="" 
              className="w-14 h-14 md:w-18 md:h-18" 
              />
            <h1 
              className="font-bold text-xl md:text-2xl  my-4">
                {item.title}
            </h1>
            <span 
              className="flex-grow flex text-[16px] sm:text-[19px] md:text-lg text-center">
                {item.text}
                </span>
            <button 
              className="text-xs md:text-sm font-semibold bg-BlueCenter text-white px-4 py-3 rounded-3xl shadow-custom transform hover:scale-110 transition-transform duration-800"
              >ENTRE EM CONTATO
            </button>
          </div>
        </SwiperSlide>
      ))}
    </div>
  </Swiper>
</div>
    </section>
  );
}

export default Beneficios;