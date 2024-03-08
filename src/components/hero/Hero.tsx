import DataFilter from "../data-filter/DataFilter";
import Chart from "../chart/Chart";
import Table from "../table/Table";

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <DataFilter />
      <Chart />
      <Table />
    </div>
  );
};

export default Hero;
