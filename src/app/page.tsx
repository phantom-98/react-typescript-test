

const Home = () => {
  
  return (
    <div className="flex flex-col gap-8 p-12 items-center justify-center text-white">
      <h1 className="text-4xl">Test list</h1>
      <ul className="list-disc [&_a]:underline">
        <li><span><a href="/chart" target="_blank">Chart</a> (<a href="https://recharts.org/" target="_blank">Recharts</a>)</span></li>
        <li><span><a href="/button" target="_blank">Button</a></span></li>
        <li><span><a href="/tab" target="_blank">TabBar</a></span></li>
        <li><span><a href="/switch" target="_blank">Switch</a></span></li>
      </ul>
    </div>
  );
}
export default Home;