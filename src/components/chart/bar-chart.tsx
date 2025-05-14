'use client';

import { Bar, BarChart, Cell, XAxis } from "recharts"
import { BarChartDataType } from "./types"

const CustomBarChart = ({ years } : { years: BarChartDataType[] }) => {
    return (
        <BarChart data={years} width={300} height={330}>
            <Bar dataKey="v" color='color'>
                {years.map((y, index) => (
                    <Cell key={index} fill={y.color} radius={10}></Cell>
                ))}
            </Bar>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: "white"}} tickMargin={16}/>
        </BarChart>
    )
}

export default CustomBarChart;