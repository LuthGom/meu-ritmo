import { Container } from "../ui/Container";
import SectionBlock from "../ui/SectionBlock";

export default function ProgressSection() {
    return (
        <section className={`w-full sm:w-1/2 mx-auto! px-4!`}>
            <Container className={`py-8!`}>
                <SectionBlock title="Seu progresso Hoje" headingLevel="h2" className={`w-full! py-6! `} titleClassName={`justify-center! pb-4! font-bold! text-lg!`}>
                    <div className={`w-full flex justify-between p-2!`}>
                        <p className={`text-gray-600 font-bold text-xs`}>2 de 4 tarefas</p>
                        <p className={`text-green-500 text-xs`}>50%</p>
                    </div>
                    <div className={`h-4 w-full bg-gray-100 rounded-full overflow-hidden  `} >
                        <div
                            className="h-full bg-green-500 transition-all duration-500 ease-out"
                            style={{ width: `${68}%` }}
                        />
                    </div>

                </SectionBlock>
            </Container>
        </section>
    )
}