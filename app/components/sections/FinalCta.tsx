import Button from "../ui/Button";
import { Container } from "../ui/Container";

export default function FinalCta() {
    return (
        <section className={`w-full! mx-auto!`}>
            <Container className={`flex flex-col items-center justify-center gap-4`}>
                <h2 className={`text-2xl! text-center! font-semibold! `}>Comece sua rotina hoje</h2>
                <p className={`text-gray-500 font-semibold! text-sm py-2!`}>Simples, leve e feito para você ter sucesso</p>
                <Button type="button" variant="primary" size="md" className={`h-10 w-1/2 sm:w-1/5 px-4!  flex items-center text-sm! justify-center rounded-xl! bg-[#2a9d8f]! text-[#FFF]! `}>Criar minha primeira rotina</Button>
            </Container>
        </section>
    )
}