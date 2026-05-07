import BenefitsCard from "../ui/BenefitsCard";
import { Container } from "../ui/Container";


const benefitsCardData = [
    { cardTitle: "Clareza e foco", description: "Veja exatamente o que precisar fazer, sem distrações ou informações desnecessárias", iconOutColor: "#ddf3ef", iconInnerColor: "#2a9d8f" },
    { cardTitle: "Interface leve", description: "Design minimalista que não sobrecarrega e torna o uso diário confortável", iconOutColor: "#fff3d6", iconInnerColor: "#b8860b" },
    { cardTitle: "Constância facilitada", description: "Acompanhe seu progresso e mantenha a motivação sem pressão excessiva", iconOutColor: "#e7f6ea", iconInnerColor: "#4caf50" },
    { cardTitle: "Progresso visível", description: "Veja sua evolução de forma clara e celebre cada pequena conquista", iconOutColor: "#ddf3ef", iconInnerColor: "#2a9d8f" }
]


export default function WhyUse() {
    return (
        <section>
            <Container className={`  `}>

                <h2 className={`text-2xl! text-center! font-semibold! mb-4! `}>Por que usar o Meu Ritmo</h2>
                <div className={`w-full mx-auto! flex flex-wrap justify-center px-4!`}>

                {benefitsCardData.map((item, index) => {
                    return <BenefitsCard key={index} cardTitle={item.cardTitle} description={item.description} iconOutColor={item.iconOutColor} iconInnerColor={item.iconInnerColor} className={``} />
                })}
                </div>
            </Container>

        </section>
    )
}