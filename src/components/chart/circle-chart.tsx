'use client';

import { Pie, PieChart, Sector } from "recharts";
import { PieChartDataType } from "./types";

const CustomPieChart = ({ pie }: { pie: PieChartDataType[] }) => {

    return (
        <PieChart width={300} height={300}>
            {pie.map((p, index) => {
                return <Pie
                    key={index}
                    dataKey="v"
                    isAnimationActive={false}
                    data={[p]}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={140 - 12 * index}
                    stroke='none'
                    startAngle={90 - p.start * 3.6}
                    endAngle={90 - p.end * 3.6}
                    fill={p.color}
                    cornerRadius={5}
                ></Pie>
            })}
            <g>
                <Sector
                    cx={150}
                    cy={150}
                    innerRadius={0}
                    outerRadius={60}
                    startAngle={0}
                    endAngle={360}
                    fill="#281A4D"
                />
                <text x={"50%"} y={"50%"} dy={8} textAnchor="middle" fontSize={30} fill='white'>73%</text>
            </g>
        </PieChart>
    );
}

export default CustomPieChart;