'use client';

type SwitchProps = {
    value: boolean;
    accentColor?: string;
    onChange: (value: boolean) => void;
    className?: string;
}

export const Switch = ({value, onChange, accentColor = 'bg-[#34C759]', className}: SwitchProps) => {
    return (
        <>
        <div onClick={() => onChange(!value)} className={`rounded-full cursor-pointer overflow-auto ${value ? accentColor : 'bg-gray-400'} w-12 aspect-[12/7] ${className || ''}`}>
            <div className={`w-1/2 aspect-square rounded-full bg-white transition-all duration-200 m-0.5 ${value ? 'translate-x-[calc(84%)]' : ''}`}></div>
        </div>
        </>
    )
}