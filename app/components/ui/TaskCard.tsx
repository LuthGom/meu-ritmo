import { useId } from "react"

type TaskCardProps = {
    cardTitle: string
    description: string
    time: string
    className?: string
    children?: React.ReactNode
}
export default function TaskCard({ cardTitle, description, time, children, className }: TaskCardProps) {
    const id = useId();
    return (
        <div className={`aspect-rectangle  border! border-[#4caf50]! bg-[#ffffff] rounded-2xl   flex  items-start  sm:items-start w-full mx-2 m-1!  py-3! px-2! has-checked:bg-blue-50 has-[:checked]:border-blue-200" ${className} `}>
            <label htmlFor="id-input" className={`flex flex-col  px-4!`}>


                <input id={id} type="checkbox" className={` appearance-none
                        h-5 w-5 
                        cursor-pointer
                        border-3! border-gray-300! rounded-full!
                        checked:bg-[#4caf50]! checked:border-[#4caf50]!
                        focus:outline-none! focus:ring-2! focus:ring-offset-2! focus:ring-[#4caf50]!
                        transition-all duration-200!
                        relative!
                        /* Opcional: Criar a marca de check branca interna */
                        checked:after:content-[''! checked:after:absolute! checked:after:left-1.25! checked:after:top-0.5! 
                        checked:after:w-2 checked:after:h-2! checked:after:border-white! 
                        checked:after:border-r-2! checked:after:border-b-2! checked:after:rotate-45!`} />


            </label>
            <div className={`flex flex-col items-start justify-between gap-1!`}>

                <h3 className={`font-semibold! text-sm!`}>{cardTitle}</h3>
                <p className={`text-left text-sm text-[#5b6875]`}>{description}</p>
                <p>{time}</p>
            </div>
            {children}
        </div>
    )
}