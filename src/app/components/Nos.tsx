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
          className="float-none w-full  text-center md:w-1/2 md:float-left md:text-left">
            <div 
            className="text-3xl mt-4 md:mt-0 uppercase text-BlueCenter">
              <h1>Aquacenter</h1>
            </div>
            <div className="">
              <h2 
              className="mt-2 md:mt-5  text-xl md:text-2xl text-black"
              >
                Conheça nossa Linda jornada!
              </h2>
              <p className=" mt-3 md:text-lg pr-0 md:pr-9 text-TextProd"
              >
                Nossa empresa foi fundada em 11 de agosto de 1992 por João Humberto, um entusiasta do lazer aquático. Desde o início, a empresa se dedicou a oferecer produtos e serviços de alta qualidade para piscinas, sempre com foco na satisfação do cliente. Ao longo dos anos, a Acqua Center cresceu e se consolidou no mercado, tornando-se referência na região.
              </p>
              <button 
              className="text-xs md:text-sm font-semibold bg-BlueCenter text-white px-4 py-3  shadow-custom transform hover:scale-110 transition-transform duration-800 mt-7"
              >ENTRE EM CONTATO
              </button>
            </div>
            <div className="py-3">
              <a className="text-2xl mr-4" href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
              <a className="text-2xl mr-4" href=""><FontAwesomeIcon icon={faInstagram} /></a>
              <a className="text-2xl mr-0 md:mr-4" href=""><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
          </div>
          <div 
          className="float-none w-full pb-12 md:pb-0 md:float-right md:w-1/2"
          >
            <img 
            className="w-full  h-auto shadow-2xs shadow-[0px_0px_8px_2px_rgba(0,0,0,0.4)]"
            src="/img/ACQUAedit.jpg" 
            alt="" />
          </div>
        </div>
    </section>
  );
}

export default Nos;