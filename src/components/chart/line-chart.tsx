'use client';

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { LineChartDataType } from "./types";


const CustomLineChart = ({ months } : { months: LineChartDataType[]}) => {
    return (
        <LineChart width={500} height={330} data={months}>
            <CartesianGrid vertical={false} stroke='#5D5D5D'></CartesianGrid>
            <Line type="monotone" dataKey="uv" stroke="#6F43E7" strokeWidth={3} dot={false}/>
            <Line type="monotone" dataKey="pv" stroke="#6F43E7" strokeWidth={3} dot={false}/>
            <XAxis dataKey="name" padding={{left: 10, right: 10}} axisLine={false} tickLine={false} tick={{fill: "white"}} tickMargin={16}/>
            <YAxis type='number' domain={[25, 29]} axisLine={false} tickLine={false} tick={{fill: "white"}} tickMargin={16}/>
        </LineChart>
    )
}

export default CustomLineChart;