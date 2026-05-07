'use client';

import { useId } from "react";
import { Container } from "../ui/Container";
import SectionBlock from "../ui/SectionBlock";
import TaskForm from "../ui/TaskForm";
import Tasklist from "../ui/TaskList";

export default function ProductPreviewSection() {
    const id = useId();
    return (
        <section className={`w-full sm:w-6/10 mx-auto! px-4!`}>
            <Container className={`py-8! mx-auto!`}>
                <div className={`flex flex-col items-center justify-center flex-wrap `}>

                    <h2 className={`text-2xl! font-semibold! py-2!`}>Experimente agora</h2>
                    <p className={`text-[#5b6875] font-semibold text-sm text-center! pb-8! `}>Uma interface simples para acompanhar sua rotina com mais clareza</p>
                </div>

                <SectionBlock headingLevel="h3" title="Nova tarefa">
                    <p className={`w-full text-left! pt-2! text-[#5b6875] text-sm`}>Adicione uma tarefa e veja como é simples</p>
                    <TaskForm />
                </SectionBlock>

                <SectionBlock headingLevel="h3" title="Suas tarefas" className={`mt-4!`}>
                    <Tasklist/>
                </SectionBlock>
            </Container>
        </section>
    )
}