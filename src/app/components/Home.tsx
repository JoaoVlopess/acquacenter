import { Swiper, SwiperSlide } from 'swiper/react'

const Home = () => {
  const data = [
    { id: '1', image: '/img/tarde-de-verao-a-beira-da-piscina.jpg' },
    { id: '2', image: '/img/water-3292794_1920.jpg' },
    { id: '3', image: '/img/boias.jpeg' }
  ]

  return (
    <section className="overflow-hidden h-[78vh] " id='home'>

      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`min-h-[50vh] h-screen md:h-[78vh] bg-cover bg-bottom bg-no-repeat`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="h-full w-full"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div 
                className="flex flex-col items-center justify-center h-[78vh] w-screen"
                >
                  <h1 
                  className='text-2xl md:text-4xl text-white font-montserrat font-bold uppercase'
                  >Deixaremos sua piscina <br/> com cara nova!
                  </h1>

                  <p 
                  className='text-xl md:text-2xl text-gray-300 mt-5'
                  >CONHEÇA TODOS OS NOSSOS SERVIÇOS
                  </p>

                  <button
                  className='text-sm 2xl:text-lg font-semibold bg-BlueCenter text-white px-4 py-3 rounded-3xl mt-5 shadow-custom transform hover:scale-110 transition-transform duration-800'
                  >ENTRE EM CONTATO
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Home;