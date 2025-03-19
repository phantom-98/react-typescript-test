'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell, Sector } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

const months = new Array<number>(21).fill(0).map((_, index) => {
  const name = month[(index - 1) / 4];
  const uv = Math.random() * 2 + 26;
  const pv = Math.random() * 2 + 26;
  return {
    name,
    uv,
    pv
  }
})

const years = [
  {
    name: "2021",
    v: 3,
    color: "#A6A6A6"
  },
  {
    name: "2020",
    v: 5,
    color: "#7044EA"
  },
  {
    name: "2019",
    v: 1.5,
    color: "#A6A6A6"
  }
]

const pie = [
  {
    name: "73%",
    v: 48,
    color: "#7044EA"
  },
  {
    v: 18,
    color: "#9D6DD5"
  },
  {
    v: 18,
    color: "#8048E7"
  },
  {
    v: 18,
    color: "#2F2F2F"
  },
].reverse();


const Home = () => {
  
  return (
    <div className="flex items-center justify-center">
      <div className='mt-16 flex gap-8 relative'>
        <div className='border-[#343434] border-2 rounded-2xl p-4 pr-8 w-fit h-fit'>
          <LineChart width={500} height={400} data={months}>
            <CartesianGrid vertical={false} stroke='#5D5D5D'></CartesianGrid>
            <Line type="monotone" dataKey="uv" stroke="#6F43E7" strokeWidth={3} dot={false}/>
            <Line type="monotone" dataKey="pv" stroke="#6F43E7" strokeWidth={3} dot={false}/>
            <XAxis dataKey="name" padding={{left: 10, right: 10}} axisLine={false} tickLine={false} tick={{fill: "white"}} tickMargin={16}/>
            <YAxis type='number' domain={[25, 29]} axisLine={false} tickLine={false} tick={{fill: "white"}} tickMargin={16}/>
          </LineChart>
        </div>
        <div className='border-[#343434] border-2 rounded-2xl p-4 w-fit h-fit'>
          <BarChart data={years} width={300} height={330}>
            <Bar dataKey="v" color='color' >
              {
                years.map((y, index) => (
                  <Cell key={index} fill={y.color} radius={10}></Cell>
                ))
              }
            </Bar>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: "white"}} tickMargin={16}/>
          </BarChart>
        </div>
        <div className='absolute top-[360px] left-[360px] border-[#343434] border-2 rounded-2xl p-8 backdrop-blur-sm'>
          <PieChart width={300} height={300}>
            <Pie
              dataKey="v"
              isAnimationActive={false}
              data={pie}
              cx="50%"
              cy="50%"
              outerRadius={140}
              stroke='none'
              startAngle={85}
              endAngle={450}
              cornerRadius={5}
              paddingAngle={-5}
              activeShape={renderLabel}
            >
              {
                pie.map((p, index) => (
                  <Cell key={index} fill={p.color} width={index} className='border-none'></Cell>
                ))
              }
            </Pie>
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
        </div>
      </div>
    </div>
  );
}
export default Home;

const renderLabel = ({cx, cy, name} : PieSectorDataItem) => {
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle">{name}</text>
    </g>
  )
}