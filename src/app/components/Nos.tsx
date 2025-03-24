import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebook, } from "@fortawesome/free-brands-svg-icons";


const  Nos = () => {
  return(
    <section className="min-h-[90vh] bg-WhiteCenter flex flex-col " id="nos">
       <p className="text-lg md:text-xl text-black pt-10 uppercase">NOSSA LOJA</p>
        <h1 className="text-3xl md:text-5xl text-black font-montserrat mt-5 uppercase">
          QUEM SOMOS?
        </h1>
        
        <div 
        className="w-[85%] block m-auto">
          <div 
          className="float-none w-full  text-center lg:w-1/2 lg:float-left lg:text-left">
            <div 
            className="text-3xl mt-5  uppercase text-BlueCenter lg:text-4xl ">
              <h1>Aquacenter</h1>
            </div>
            <div className="">
              <h2 
              className="mt-1  text-xl md:text-2xl lg:text-3xl  text-black"
              >
                Conheça nossa Linda jornada!
              </h2>
              <p className=" mt-3  md:text-lg lg:text-xl 3xl:text-2xl pr-0 md:pr-9  text-TextProd"
              >
                Nossa empresa foi fundada em 11 de agosto de 1992 por João Humberto, um entusiasta do lazer aquático. Desde o início, a empresa se dedicou a oferecer produtos e serviços de alta qualidade para piscinas, sempre com foco na satisfação do cliente. Ao longo dos anos, a Acqua Center cresceu e se consolidou no mercado, tornando-se referência na região.
              </p>
              <button 
              className="text-xs md:text-sm lg:text-lg font-semibold bg-BlueCenter text-white px-4 py-3  shadow-custom transform hover:scale-110 transition-transform duration-800 mt-7"
              >ENTRE EM CONTATO
              </button>
            </div>

          </div>
          <div 
          className="float-none w-full pb-12 lg:pb-0 lg:float-right lg:w-1/2 pt-9"
          >
            <img 
            className="justify-self-center w-[75%] h-[75%] 3xl:w-[90%] 3xl:h-[90%] lg:w-full lg:h-full shadow-2xs shadow-[0px_0px_8px_2px_rgba(0,0,0,0.4)]"
            src="/img/ACQUAedit.jpg" 
            alt="" />
          </div>
        </div>
    </section>
  );
}

export default Nos;