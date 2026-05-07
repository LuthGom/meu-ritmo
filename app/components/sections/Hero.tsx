import { Container } from "@/components/ui/Container";
export default function Hero() {
    return (
        <section aria-labelledby="hero-title" className="mx-auto w-full text-center ">
            <Container className="flex items-center flex-col gap-4! p-4!  px-4! sm:px-6 lg:px-8 text-center mx-4!">
                <div className={`px-4! py-1! bg-[#fff3d6] rounded-full text-sm`}>

                <p className={`text-[#b8860b] `}>Simples, leve e eficaz</p>
                </div>

                <h1 id="hero-title" className={`text-3xl! sm:text-5xl font-semibold! leading-15 pt-2!`}>Construa sua rotina diária
                    <br />
                    com leveza e constância
                </h1>

                <p className={`max-w-prose text-[#5b6875]`}>
                    Uma ferramenta simples para criar hábitos que ficam. Organize suas tarefas, defina horários e acompanhe seu progresso sem complicação.
                </p>

                <div className={`w-full! flex flex-wrap! items-center justify-center  sm:flex-nowrap gap-4`}>
                    <a className={`h-10 w-full px-4! py-2 flex items-center justify-center rounded-xl bg-[#2a9d8f] text-[#FFF]! sm:w-35`} href="#criar-rotina">Começar agora</a>
                    <a className={`h-10 w-full flex items-center justify-center border! border-[#2a9d8f]! rounded-xl bg-[#ffffff]! text-[#2a9d8f]! sm:w-30`} href="#exemplo">Ver exemplo</a>
                </div>
            </Container>
        </section>
    )
}