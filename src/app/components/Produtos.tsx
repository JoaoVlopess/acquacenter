const Produtos = () => {
    
    const servicos = [
        { 
            img: "/img/agua.png",
            titulo: "Limpeza", 
            descricao: "Especialistas em deixar sua piscina brilhando, utilizando produtos e equipamentos de alta qualidade!" 
        },
        { 
            img: "/img/filtro.png", 
            titulo: "Manutenção", 
            descricao: "Nós somos preparados para realizar manutenções mantendo um bom desempenho das estruturas de sua piscina." 
        },
        { 
            img: "/img/ferramentas.png", 
            titulo: "Reparo", 
            descricao: "Nós temos a capacitação e as ferramentas devidas para poder reparar os filtros e a bomba da sua piscina." 
        },
        { 
            img: "/img/cloro.png", 
            titulo: "Produtos Químicos", 
            descricao: "Nossa loja conta com os melhores produtos de limpeza de piscina do mercado!" 
        },
        { 
            img: "/img/big-float.png", 
            titulo: "Infláveis", 
            descricao: "Aqui nós vendemos as mais variadas formas e cores de boias infláveis para divertir ainda mais sua piscina!" 
        },
        { 
            img: "/img/liquido.png", 
            titulo: "Equipamentos", 
            descricao: "Se estiver procurando peneiras cata-folhas, escovas ou aspiradores para sua piscina, aqui é o lugar certo!" 
        }
    ];
    
    return (
        <section className="min-h-[90vh] bg-WhiteCenter flex flex-col" id="produtos">
            <p className="text-lg md:text-xl text-black pt-10 uppercase">Conheça os</p>
            <h1 className="text-3xl md:text-5xl text-black font-montserrat mt-5 uppercase">
                NOSSOS SERVIÇOS E PRODUTOS
            </h1>

            <div className="flex-1 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 sm:grid-rows-3 md:grid-rows-2 gap-9 py-8 px-10 md:px-24">
                {servicos.map((servico, index) => (
                    <div 
                        key={index}
                        className="flex justify-center items-center flex-col bg-GrayCenter rounded-md flex-1 p-6 px-9 min-h-36 transform hover:scale-110 transition-transform duration-800"
                    >
                        <img src={servico.img} alt={servico.titulo} className="w-9 h-9" />
                        <h1 className="font-bold text-xl 3xl:text-2xl my-4">{servico.titulo}</h1>
                        <p className="text-base text-TextProd 3xl:text-xl">{servico.descricao}</p>
                    </div>
                ))}
            </div>

            <button className="text-sm 3xl:text-base font-semibold bg-BlueCenter text-white rounded-3xl px-4 py-3 max-w-15 self-center justify-self-center mb-6 shadow-custom transform hover:scale-110 transition-transform duration-800">
                ENTRE EM CONTATO
            </button>
        </section>
    );
};

export default Produtos;