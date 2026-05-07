type StepCardProps = {
    step: string
    title: string
    description: string
    className?: string
}

export default function StepCard({step, title, description, className}: StepCardProps){
    return(
        <article id="how-it-works" className={`${className} w-full sm:w-1/3 md:w-1/3 flex flex-col wrap-break-word- items-center justify-center gap-4! px-2! p text-center`}>
            <span className={`w-10 h-10 bg-[#ddf3ef] text-[#2a9d8f] p-2! rounded-full flex justify-center`}>{step}</span>
            <h3 className={`font-bold! text-[#1f2933]!`}>{title}</h3>
            <p className={`text-[#5b6875] text-sm wrap-break-word!`}>{description}</p>
        </article>
    )
}