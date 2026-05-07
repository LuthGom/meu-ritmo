'use client';
import { useState } from "react";
import { Container } from "@/components/ui/Container";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={`w-full sm:w-2/3 md:w-1/2  mx-auto! flex items-center justify-center`}>
            <Container className={`mx-auto! flex flex-wrap sm:flex-nowrap items-center justify-center p-4!  px-4! sm:px-6 lg:px-8`}>
                <span className={`w-full flex items-center sm:w-auto justify-center sm:justify-start gap-2! text-sm font-semibold!`}>

                    <div className={`w-6! h-6! bg-[#2a9d8f]! rounded-full flex items-center justify-center mr-2!`}>
                        <div className={`w-3! h-3! bg-white! rounded-full`}></div>
                    </div>
                    <a href="/" aria-label="Rotina">Rotina</a>
                </span>
                <nav aria-label="Navegação Principal" className={`flex flex-col flex-wrap sm:flex-nowrap items-center justify-end  w-full gap-6 sm:gap-4! py-1!`}>
                    <button className={`w-full rounded-xl! bg-[#ffffff]! text-[#2a9d8f]! border! border-[#2a9d8f]! sm:hidden py-1!`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex sm:items-center sm:justify-end flex-wrap sm:flex-nowrap items-center justify-center  w-full! gap-6 sm:gap-4! py-2!`}>
                        <a className={`w-full sm:w-auto text-sm flex justify-center`} href="/como-funciona">Como funciona</a>
                        <a className={`w-full sm:w-auto text-sm flex justify-center`} href="/beneficios">Benefícios</a>
                        <a className={`w-full h-10 sm:w-auto p-2! text-sm flex justify-center rounded-xl bg-[#2a9d8f] text-[#FFF]! `} href="/criar-rotina">Criar minha rotina</a>
                    </div>
                </nav>
            </Container>
        </header>
    )
}
