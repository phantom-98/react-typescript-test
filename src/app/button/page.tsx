'use client';

import PolyButton from "@/components/button/polygon-button";

const Buttons = () => {

    return (
        <div className="flex items-center justify-center">
            <div className="p-12 mt-24 w-fit h-fit flex flex-wrap gap-8 bg-gray-400 bg-opacity-60 rounded-3xl">
                <PolyButton text="CREATE NEW COIN" theme="primary"/>

                <PolyButton text="EDIT PROFILE" theme="secondary"/>
            </div>
        </div>
    )
}

export default Buttons;