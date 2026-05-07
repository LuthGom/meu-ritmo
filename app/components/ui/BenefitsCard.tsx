type BenefitsCardProps = {

    cardTitle: string
    description: string
    className?: string
    iconOutColor: string
    iconInnerColor: string
}


export default function BenefitsCard({ cardTitle, description, iconOutColor, iconInnerColor, className }: BenefitsCardProps) {
    return (
        <div className={`${className} aspect-square sm:aspect-auto border! bg-[#ffffff] rounded-2xl px-2!  flex flex-col items-center justify-between  sm:items-start w-1/2 sm:w-4/10 md:w-1/3 m-1!  py-6!`}>
            <span className={` w-8 h-8 rounded-lg flex items-center justify-center`} style={{ backgroundColor: `${iconOutColor}` }}><span className={`w-4 h-4 border!  rounded-full`} style={{ borderColor: `${iconInnerColor}` }}></span></span>
            <h3 className={`font-semibold! text-sm!`}>{cardTitle}</h3>
            <p className={`text-left text-sm text-[#5b6875]`}>{description}</p>
        </div>
    )
}