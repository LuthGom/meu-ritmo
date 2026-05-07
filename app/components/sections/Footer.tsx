import { Container } from "../ui/Container";

export default function Footer() {
    return (
         <footer className={`w-full sm:w-2/3 md:w-1/2  mx-auto! flex items-center justify-center`}>
            <Container className={`mx-auto! flex flex-wrap sm:flex-nowrap items-center justify-center p-4!  px-4! sm:px-6 lg:px-8 gap-2!`}>
                <span className={`w-full flex items-center  justify-center sm:justify-start gap-2! text-sm font-semibold!`}>

                    <div className={`w-6! h-6! bg-[#2a9d8f]! rounded-full flex items-center justify-center mr-2!`}>
                        <div className={`w-3! h-3! bg-white! rounded-full`}></div>
                    </div>
                    <p className={`shrink-0`} aria-label="Rotina">Rotina © 2026</p>
                </span>

                <nav className={`flex flex-col flex-wrap sm:flex-row! md:flex-row sm:flex-nowrap items-center justify-end  w-full gap-8 sm:gap-4! py-1! text-left text-sm text-[#5b6875]`}>
                    <a href="">Privacidade</a>
                    <a href="">Termos</a>
                    <a href="">Contato</a>
                </nav>
            </Container>
        </footer>
    )
}