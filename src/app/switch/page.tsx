'use client'
import { Switch } from "@/components/switch";
import { useState } from "react";


const SwitchPage = () => {
    const [value, setValue] = useState(false);

    return (
        <>
        <div className="w-screen h-screen flex flex-col gap-6 p-24 items-center">
            <Switch value={value} onChange={setValue} accentColor="bg-blue-300"/>
        </div>
        </>
    )
}

export default SwitchPage;