import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Footer = () => {
    const [endereco, setEndereco] = useState<boolean>(false);
    const [tel, setTel] = useState<boolean>(false);
    const [fale, setFale] = useState<boolean>(false);
    const [exp, setExp] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
      
        const handleResize = () => {
          if (window.innerWidth >= 768) {
            setEndereco(false);
            setTel(false);
            setFale(false);
            setExp(false);
          }
        };
      
        handleResize();
      
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const handleToggleendereco = () => {
        setEndereco(!endereco)
    }
    const handleToggletel = () => {
        setTel(!tel)
    }
    const handleToggleFale = () => {
        setFale(!fale)
    }
    const handleToggleExp = () => {
        setExp(!exp)
    }

  return(
    <section className="min-h-[60vh] bg-gradient-to-b from-BlueCenter to-[#0f0e0e] " id="contato">
        <div className="hidden md:flex md:flex-row px-16 md:px-28 text-white  text-center md:text-left py-7">
            <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-montserrat mt-5 uppercase">CONECTE-SE CONOSCO!</h1>
                <div className="flex flex-col pr-5">
                    <div className="mt-5">
                        <h3 className="text-xl font-bold">Endereço</h3>
                        <p>📍João da Silva, Rua das Flores, 123,<br/> Jardim
                        das Rosas, Fortaleza - CE, 01234-567</p>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl font-bold" >Telefone</h3>
                        <p>💬(85) 91234-5678</p>
                        <p>☏ (85) 1234-5678</p>
                    </div >
                        <div className="mt-5">
                            <h3 className="text-xl font-bold" >Redes Sociais</h3>
                            <div className="py-3">
                            <a className="text-2xl mr-4" href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
                            <a className="text-2xl mr-4" href=""><FontAwesomeIcon icon={faInstagram} /></a>
                            <a className="text-2xl mr-0 md:mr-4" href=""><FontAwesomeIcon icon={faFacebook} /></a>
                            </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 ">
                <h1 className="text-2xl md:text-3xl font-montserrat mt-5 uppercase">PREENCHA E ENTRAREMOS EM CONTATO.</h1>
                <div className="flex flex-col md:pr-5 pr-0 text-black items-center md:items-start">
                    <input 
                    className="mt-5 rounded-2xl p-1 pl-3 w-[80%]" 
                    type="text" 
                    name="nome" 
                    placeholder="Nome:" 
                    />
                    <input 
                    className="mt-5 rounded-2xl p-1 pl-3 w-[80%]" 
                    type="email" 
                    name="email" 
                    placeholder="Email:" 
                    />
                    <input 
                    className="mt-5 rounded-2xl p-1 pl-3 w-[80%]"  
                    type="tel" 
                    name="telefone" 
                    placeholder="Telefone:" 
                    />
                    <textarea 
                    className=" resize-none mt-5 rounded-2xl p-2 pl-3 w-[80%]"
                    name="mensagem"
                    placeholder="Mensagem:"
                    >  
                    </textarea>

                </div>
                <button 
                    className="text-xs md:text-sm mt-5 font-semibold bg-BlueCenter text-white px-10 py-3 rounded-3xl shadow-custom transform hover:scale-110 transition-transform   duration-800 uppercase"
                    >Enviar
                    </button>

            </div>
        </div>

        <div className="flex flex-col justify-center items-center md:hidden w-full py-5 text-gray-300 ">
            <div className="w-full pb-5 text-gray-300">
                <button 
                onClick={handleToggleendereco}
                >ENDEREÇO
                </button>
                <div 
                className={`w-full pt-5 text-gray-300 ${endereco?"block":"hidden"}`}
                >
                <p>📍João da Silva, Rua das Flores, 123,<br/> Jardim
                das Rosas, Fortaleza - CE, 01234-567
                </p>
            </div>
            </div>

            
            <div className="border-t w-full py-5 ">
                <button 
                onClick={handleToggletel}
                >TELEFONE
                </button>
                <div className={`w-full text-gray-300 pt-5 ${tel?"block":"hidden"}`}>
                <p>💬(85) 91234-5678</p>
                <p>☏ (85) 1234-5678</p>
            </div>
            </div>

            <div className="border-t w-full py-5">
                <button
                onClick={handleToggleFale}
                >FALE CONOSCO!
                </button>

                <div className={` flex-col pr-0 text-black items-center  ${fale?"flex":"hidden"}`}>
                    <input 
                    className="mt-5 rounded-2xl p-1 pl-3 w-[80%]" 
                    type="text" 
                    name="nome" 
                    placeholder="Nome:" 
                    />
                    <input 
                    className="mt-5 rounded-2xl p-1 pl-3 w-[80%]" 
                    type="email" 
                    name="email" 
                    placeholder="Email:" 
                    />
                    <input 
                    className="mt-5 rounded-2xl p-1 pl-3 w-[80%]"  
                    type="tel" 
                    name="telefone" 
                    placeholder="Telefone:" 
                    />
                    <button 
                    className="text-xs md:text-sm mt-5 font-semibold bg-BlueCenter text-white px-10 py-3 rounded-3xl shadow-custom transform hover:scale-110 transition-transform   duration-800 uppercase"
                    >Enviar
                    </button>


                </div>
            </div>
           
            <div className="border-t border-b w-full py-5">
                <button 
                onClick={handleToggleExp}
                >AVALIE SUA EXPERIÊNCIA
                </button>
                <div 
                 className={` ${exp?"block":"hidden"}`}>
                    <textarea 
                    className={`resize-none mt-5 rounded-2xl p-2 pl-3 w-[80%] justify-self-center ${exp?"block":"hidden"}`}
                    name="mensagem"
                    placeholder="Mensagem:"
                    >  
                    </textarea>
                    <button 
                    className=" justify-self-center text-xs md:text-sm mt-5 font-semibold bg-BlueCenter text-white px-10 py-3 rounded-3xl shadow-custom transform hover:scale-110 transition-transform   duration-800 uppercase"
                    >Enviar
                    </button>
                </div>
            </div>

            
            <div className="mt-5">
              <a className="text-2xl mr-4" href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
              <a className="text-2xl mr-4" href=""><FontAwesomeIcon icon={faInstagram} /></a>
              <a className="text-2xl mr-0 md:mr-4" href=""><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
            <p className="text-xs mt-10  text-gray-500">Copyright © 2025 Lopes  Todos os direitos reservados. </p>
        </div>
    </section>
  );
}

export default Footer;