'use client';
import { Bar, CartesianGrid, ComposedChart, Label, ReferenceLine, ResponsiveContainer, Scatter, XAxis, YAxis } from "recharts"

const HistoryChart = ({priceData}: {priceData: {date: string, la?: number, hb?: number, amt?: number}[]}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart className="[&_.recharts-cartesian-grid-horizontal>line]:[stroke-dasharray:0]"
                data={priceData}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 10,
                    left: 0,
                }}
                >
                <CartesianGrid
                  stroke="#343434" 
                  strokeDasharray='5 5' 
                  verticalCoordinatesGenerator={({xAxis}) => {
                    const spaceCount = 10, {x, width} = xAxis;
                    return new Array(spaceCount + 1).fill(0).map((_, i) => i * width / spaceCount + x)
                }} horizontalCoordinatesGenerator={({yAxis}) => {
                    const spaceCount = 5, {y, height} = yAxis;
                    return new Array(spaceCount).fill(0).map((_, i) => i * height / spaceCount + y)
                }}/>
                <XAxis dataKey="date" tickLine={false} tickMargin={16} tick={{fill: "white"}}/>
                <YAxis domain={[500, 1000]} tickLine={false} tickMargin={16} tick={{fill: "white"}} axisLine={false}/>
                
                <Bar dataKey="amt" barSize={30} fill="#A6A6A6" radius={[4,4,0,0]}/>
                <Scatter dataKey="la" fill="#05DF72" shape={<PolyShape />} />
                <Scatter dataKey="hb" fill="#F54919" shape={<PolyShape />} />

                <ReferenceLine stroke="#05DF72" y={Math.max(...priceData.map(p => p.la || 0))}>
                    <Label content={<LabelOfLine />} value="la" fill="#05DF72"/>
                    <Label content={<PinOfLine />} fill="#05DF72"/>
                </ReferenceLine>
                <ReferenceLine stroke="#F54919" y={Math.max(...priceData.map(p => p.hb || 0))}>
                    <Label content={<LabelOfLine />} value="hb" fill="#F54919"/>
                    <Label content={<PinOfLine />} fill="#F54919"/>
                </ReferenceLine>
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default HistoryChart;

const PolyShape = (props: any) => {
    const { cx, cy, fill } = props
    const width = 12, height = 12;
    if (cx && cy && fill) {
        return <svg fill={fill} x={cx - width / 2} y={cy - height / 2} height={height} width={width} viewBox="10 0 280 280" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,15 258,77 258,202 150,265 42,202 42,77"/>
        </svg>
    }
    return null
}

const LabelOfLine = (props: any) => {
    const { fill, value, viewBox } = props
    const { x, y, width } = viewBox
    return <g transform={`translate(${x + width - 120}, ${y - 10})`}>
      <rect 
        x={0} 
        y={0} 
        rx={14} 
        ry={14} 
        width={120} 
        height={26} 
        fill={fill}
      />
      <text 
        x={60} 
        y={14} 
        fill="#fff" 
        fontSize={14} 
        textAnchor="middle" 
        dominantBaseline="middle"
      >
        {value === 'la' ? 'Highest Ask' : 'Highest Bid'}
      </text>
    </g>
}

const PinOfLine = (props: any) => {
    const { fill, viewBox } = props
    const { x, y } = viewBox
    return <g transform={`translate(${x}, ${y - (12)})`}>
      <polygon 
        points="0,0, 0,24, 12,12"
        fill={fill}
      />
    </g>
}