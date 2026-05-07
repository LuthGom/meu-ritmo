import { ChangeEvent, ReactEventHandler, ReactHTMLElement, useId } from "react";

type InputTaskProps = {
    label: string
    placeholder?: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function InputTask({ label, placeholder, value, onChange }: InputTaskProps) {
    const id = useId();
    return (
        <div className={`w-full flex flex-col items-start gap-2 py-2!`}>

            <label htmlFor={id} className={`font-semibold!`}>{label}</label>
            <input id={id} type="text" className={`w-full border-gray-400! border! rounded-lg! p-2!`} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}