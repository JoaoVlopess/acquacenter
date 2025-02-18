const Produtos = () => {
    return (
        <section className="min-h-[90vh] bg-WhiteCenter flex flex-col">
            <p className="text-lg md:text-xl text-black pt-10 uppercase"
            >Conheça os
            </p>
            <h1 className="text-3xl md:text-5xl text-black font-montserrat  mt-5 uppercase"
            >NOSSOS SERVIÇOS E PRODUTOS
            </h1>

            <div 
            className="flex-1 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-6 sm:grid-rows-3 md:grid-rows-2 gap-7 py-8 px-10 md:px-28"
            >

                <div 
                className=" flex justify-center items-center flex-col bg-GrayCenter rounded-md flex-1 p-6 px-11 min-h-36"
                >
                    <img src="/img/agua.png" alt="" className="w-9 h-9 " />
                    <h1 className="font-bold text-xl my-4">Limpeza</h1>
                    <p className="text-sm text-TextProd">Somos especialistas em deixar sua piscina brilhando, utilizando produtos e equipamentos de alta qualidade!</p>
                </div>

                <div 
                className=" flex justify-center items-center flex-col bg-GrayCenter rounded-md flex-1 p-6 px-11 min-h-36"
                >
                    <img src="/img/filtro.png" alt="" className="w-9 h-9" />
                    <h1 className="font-bold text-xl my-4">Manutenção</h1>
                    <p className="text-sm text-TextProd">Nós somos preparados para realizar manutenções mantendo um bom desempenho das estruturas sua piscina</p>
                </div>

                <div 
                className=" flex justify-center items-center flex-col bg-GrayCenter rounded-md flex-1 p-6 px-11 min-h-36"
                >
                    <img src="/img/ferramentas.png" alt="" className="w-9 h-9" />
                    <h1 className="font-bold text-xl my-4">Reparo</h1>
                    <p className="text-sm text-TextProd">Nós temos a capacitação e as ferramentas devidas para poder reparar os filtros e a bomba da sua piscina.</p>
                </div>

                <div 
                className=" flex justify-center items-center flex-col bg-GrayCenter rounded-md flex-1 p-6 px-11 min-h-36"
                >
                    <img src="/img/cloro.png" alt="" className="w-9 h-9" />
                    <h1 className="font-bold text-xl my-4">Produtos Químicos
                    </h1>
                    <p className="text-sm text-TextProd">Nossa loja conta com os melhores produtos de limpeza de piscina do mercado!</p>
                </div>

                <div 
                className=" flex justify-center items-center flex-col bg-GrayCenter rounded-md flex-1 p-6 px-11 min-h-36"
                >
                    <img src="/img/big-float.png" alt="" className="w-9 h-9" />
                    <h1 className="font-bold text-xl my-4">Infláveis</h1>
                    <p className="text-sm text-TextProd">Aqui nós vendemos as mais variadas formas e cores de boias infláveis para divertir ainda mais sua piscina!</p>
                </div>

               <div 
                className=" flex justify-center items-center flex-col bg-GrayCenter rounded-md flex-1 p-6 px-11 min-h-36"
                >
                    <img src="/img/liquido.png" alt="" className="w-9 h-9" />
                    <h1 className="font-bold text-xl my-4">Equipamentos</h1>
                    <p className="text-sm text-TextProd">se estiver procurando peneiras cata-folhas, escovas ou aspiradores para sua psicina, aqui é o lugar certo!</p>
                </div>

            </div>

            <button
                className='text-sm font-semibold bg-BlueCenter text-white rounded-3xl px-4 py-3  max-w-15 self-center justify-self-center mb-6
                shadow-custom'
            >ENTRE EM CONTATO
            </button>

        </section>
    );
}

export default Produtos;