import { Container } from "./Container"

type FrameProps = {
    headingLevel?: 'h2' | 'h3' | 'h4'
    title: string
    progress?: string
    children: React.ReactNode
    id?: string
    className?: string
    titleClassName?: string

}


export default function SectionBlock({ headingLevel: Heading = 'h2', title, children, id, titleClassName, progress, className }: FrameProps) {
    return (
        <section id={id} className={`w-full!  p-4! mx-auto! bg-[#ffffff] border-2! border-[#d9d3c7]! rounded-2xl h-fit ${className}`}>
            <div className={`flex justify-between items-start ${titleClassName}`}>

                <Heading className={`font-semibold! `}>{title}</Heading>
                <p className={`text-gray-400 text-xs`}>{progress}</p>
            </div>

            <div className={`flex flex-col items-center justify-center flex-wrap`}>

                {children}
            </div>

        </section>
    )
}