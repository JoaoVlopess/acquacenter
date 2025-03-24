import { Swiper, SwiperSlide } from 'swiper/react'

const Beneficios = () => {
  const data = [
    {
      img: "/img/etiqueta-de-preco.png",
      title: `Orçamentos Transparentes`,
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
      text: "Equipe especializada em aplicação e transporte dos produtos.",
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
    <section className="min-h-[80vh] bg-white flex flex-col  px-5" id='beneficios'>
    <p className="text-lg md:text-xl text-black pt-10 uppercase"
    >ESPECIALISTAS EM VENDAS DE PRODUTOS PARA PISCINAS
    </p>
    <h1 className="text-3xl md:text-5xl text-black font-montserrat  mt-5 uppercase"
    >POR QUE COMPRAR CONOSCO?
    </h1>

    <div className="h-full sm:px-28 md:px-40 py-10">
  <Swiper 
    slidesPerView={1} 
    breakpoints={{
      640: { slidesPerView: 1 }, // Telas pequenas (até 640px)
      900: { slidesPerView: 2 }, // Tablets (768px ou mais)
      1250: { slidesPerView: 3 }, // Desktops médios (1024px ou mais)
      1280: { slidesPerView: 3 }, // Telas grandes (1280px ou mais)
    }}
    navigation
    >
    <div className="h-full ">
    {data.map((item, index) => (
        <SwiperSlide key={index} className="">
          <div 
            className="flex flex-col  justify-self-center items-center border-2 rounded-xl border-BlueCenter h-[400px] sm:h-[390px] max-w-[300px] lg:max-w-[400px] 3xl:max-w-[500px] px-12 py-8 md:px-10 md:py-10 md:mx-2  md:min-h-[460px]  gap-y-4 "
            >
            <img 
              src={item.img} 
              alt="" 
              className="w-12 h-12 md:w-16 md:h-16 lg:h-18 lg:w-18" 
              />
            <h1 
              className="font-bold text-[20px] sm:text-[21px] md:text-[21px] lg:text-[27px] 3xl:text-[30px]  my-3">
                {item.title}
            </h1>
            <span 
              className="flex-grow flex text-[16px] sm:text-[17px] md:text-[16px] lg:text-[18px] 3xl:text-[22px]  text-center">
                {item.text}
                </span>
            <button 
              className="text-[12px] sm:text-[13px] md:text-[12px] 3xl:text-[13px] font-semibold bg-BlueCenter text-white px-4 py-3 lg:px-6 lg:py-4 rounded-3xl shadow-custom transform hover:scale-110 transition-transform duration-800"
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