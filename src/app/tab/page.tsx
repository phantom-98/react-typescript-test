'use client'
import TabBar from "@/components/tab/bar";
import { useState } from "react";


const tabdata = [
    {
        id: 'tab1',
        label: 'Tab 1',
    },{
        id: 'tab2',
        label: 'Tab 2',
    },{
        id: 'tab3',
        label: 'Tab 3',
    },{
        id: 'tab4',
        label: 'Tab 4',
    },
]

const TabPage = () => {
    const [value, setValue] = useState(tabdata[0].id)
    return (
        <>
        <div className="flex flex-col w-screen h-screen gap-6 p-24 items-center">
            <div className="bg-white p-16">
                <TabBar options={tabdata} value={value} onChange={setValue}/>
            </div>
        </div>
        </>
    )
}

export default TabPage;