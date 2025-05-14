import CustomBarChart from '@/components/chart/bar-chart';
import CustomPieChart from '@/components/chart/circle-chart';
import CustomLineChart from '@/components/chart/line-chart';
// import dynamic from 'next/dynamic';
// const CustomBarChart = dynamic(() => import('@/components/chart/bar-chart'), { ssr: false })

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const months = new Array<number>(21).fill(0).map((_, index) => {
  const name = month[(index - 1) / 4];
  const uv = Math.random() * 2 + 26;
  const pv = Math.random() * 2 + 26;
  return {
    name,
    uv,
    pv
  }
});

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
];

const pie = [
  {
    v: 50,
    color: "#7044EA",
    start: 0,
    end: 50,
  },
  {
    v: 17,
    color: "#9D6DD5",
    start: 50,
    end: 67,
  },
  {
    v: 17,
    color: "#8048E7",
    start: 67,
    end: 84,
  },
  {
    v: 16,
    color: "#2F2F2F",
    start: 84,
    end: 100,
  },
];

const Chart = () => {
  return (
    <div className="flex items-center justify-center">
      <div className='mt-16 flex gap-8 relative'>
        <div className='border-[#343434] border-2 rounded-2xl p-4 pr-8 w-fit h-fit'>
          <CustomLineChart months={months}/>
        </div>
        <div className='border-[#343434] border-2 rounded-2xl p-4 w-fit h-fit'>
          <CustomBarChart years={years}/>
        </div>
        <div className='absolute top-[360px] left-[360px] border-[#343434] border-2 rounded-2xl p-8 backdrop-blur-sm'>
          <CustomPieChart pie={pie}/>
        </div>
      </div>
    </div>
  );
}
export default Chart;