import CustomBarChart from '@/components/chart/bar-chart';
import CustomPieChart from '@/components/chart/circle-chart';
import HistoryChart from '@/components/chart/composed-chart';
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

const priceData = [
    {
        "date": "May 01",
        "la": 757,
        "amt": 720
    },
    {
        "date": "May 02",
        "hb": 618,
        "amt": 610
    },
    {
        "date": "May 03",
        "la": 774,
        "amt": 800
    },
    {
        "date": "May 04",
        "la": 685,
        "amt": 610
    },
    {
        "date": "May 05",
        "la": 869,
    },
    {
        "date": "May 06",
        "hb": 799,
        "amt": 700
    },
    {
        "date": "May 07",
        "la": 610,
        "amt": 545
    },
    {
        "date": "May 08",
        "hb": 747,
        "amt": 780
    },
    {
        "date": "May 09",
        "la": 649,
        "amt": 620
    },
    {
        "date": "May 10",
        "la": 655,
    },
    {
        "date": "May 11",
        "la": 669,
        "amt": 720
    },
    {
        "date": "May 12",
        "la": 798,
    },
    {
        "date": "May 13",
        "hb": 735,
        "amt": 610
    },
    {
        "date": "May 14",
        "hb": 790,
    },
    {
        "date": "May 15",
        "la": 567,
    },
    {
        "date": "May 16",
        "hb": 750,
        "amt": 720
    },
    {
        "date": "May 17",
        "la": 899,
        "amt": 820
    },
    {
        "date": "May 18",
        "la": 857,
        "amt": 860
    },
    {
        "date": "May 19",
        "la": 672,
        "amt": 740
    },
    {
        "date": "May 20",
        "hb": 658,
        "amt": 770
    },
    {
        "date": "May 21",
        "la": 728,
        "amt": 680
    },
    {
        "date": "May 22",
        "la": 847,
        "amt": 745
    },
    {
        "date": "May 23",
        "la": 856,
        "amt": 785
    },
    {
        "date": "May 24",
        "la": 883,
    },
    {
        "date": "May 25",
        "hb": 816,
        "amt": 740
    },
    {
        "date": "May 26",
        "la": 673,
        "amt": 680
    },
    {
        "date": "May 27",
        "amt": 820
    },
    {
        "date": "May 28",
        "la": 620,
        "amt": 700
    },
    {
        "date": "May 29",
        "la": 818,
        "amt": 720
    },
    {
        "date": "May 30",
        "la": 877,
    }
]

const Chart = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className='mt-4 flex gap-8'>
        <div className='border-[#343434] border-2 rounded-2xl p-4 pr-8 w-fit h-fit'>
          <CustomLineChart months={months}/>
        </div>
        <div className='border-[#343434] border-2 rounded-2xl p-4 w-fit h-fit'>
          <CustomBarChart years={years}/>
        </div>
        <div className='border-[#343434] border-2 rounded-2xl p-8 backdrop-blur-sm h-fit'>
          <CustomPieChart pie={pie}/>
        </div>
      </div>
      <div className='mt-12 w-full h-96 max-w-7xl border-[#343434] border-2 rounded-2xl p-4'>
        <HistoryChart priceData={priceData}/>
      </div>
    </div>
  );
}
export default Chart;