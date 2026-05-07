import { Container } from "../ui/Container";
import StepCard from "../ui/StepCard";

export default function HotItWorks() {
    return (
        <section className={`w-full  mx-auto! `}>
            <Container className={`mx-auto flex flex-col items-center justify-center flex-wrap py-8! `}>
                <h2 className={`text-2xl! py-2! font-semibold!`}>Como funciona</h2>
                <p className={`text-[#5b6875] text-sm pb-4! !`}>Três passos simples para começar</p>
                <div className={`w-full sm:w-2/3 mx-auto flex items-center justify-center flex-wrap sm:flex-nowrap wrap-break-word p-4! `}>

                    <StepCard step="1" title="Criar tarefa" description="Adicione o que deseja fazer, onde e quando prefere realizar" />
                    <StepCard step="2" title="Organizar período" description="Defina horários flexíveis que se encaixam na sua rotina" />
                    <StepCard step="3" title="Concluir e progredir" description="Marque como feito e veja sua evolução dia após dia" />
                </div>
            </Container>
        </section>
    )
}