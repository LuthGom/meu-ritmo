import { Container } from "../ui/Container";
import SectionBlock from "../ui/SectionBlock";
import TaskCard from "../ui/TaskCard";

export default function TodayRoutine(){
    return (
       <section className={`w-full sm:w-6/10  mx-auto! px-4!`}>
            <Container className={`mx-auto!`}>
                <SectionBlock id="today-tasks" title="Minha Rotina - Hoje" headingLevel="h2" progress="2 de 4 concluídas">
                <TaskCard cardTitle="Caminhar" description="Caminhar na autorama" time="06:00" />
                </SectionBlock>
            </Container>
       </section>
    )
}