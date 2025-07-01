'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

type TabItem = {
    id: string,
    label: string,
    icon?: string
}

type TabBar = {
    options: TabItem[],
    value: string,
    onChange: (value: string) => void,
    className?: string
}

export default function TabBar ({options, value, onChange, className}: TabBar) {
    const [index, setIndex] = useState(options.findIndex(opt => opt.id === value) || 0);

    useEffect(() => {
        const i = options.findIndex(opt => opt.id === value);
        i >= 0 && setIndex(i)
    }, [value])

    return (
        <>
        <div className={`flex items-center rounded-lg overflow-hidden bg-[#7676801F] h-8 p-0.5 relative ${className}`}>
            <div style={{
                width: `calc((100% - 0.28rem)/${options.length})`,
                transform: `translateX(${100 * index}%)`
            }} className="absolute left-0.5 top-0.5 bottom-0.5 transition-all duration-200 bg-white shadow-2xl rounded-lg"></div>
            {options.map((opt, i) => (
                <div key={`tab_opt_${i}`} onClick={() => {
                    onChange(opt.id);
                    setIndex(i);
                }} style={{width: `calc(100%/${options.length})`}} className={`flex items-center justify-center gap-2 z-10 px-4`}>
                    {opt.icon && (
                        <Image src={opt.icon} alt={"i"} width={20} height={20} className="tab-icon"/>
                    )}
                    <span className="text-sm">{opt.label}</span>
                </div>
            ))}
        </div>
        </>
    )
}