import ReactApexCharts from "react-apexcharts";

import { ThemeContext } from "../../context/themeContext";
import { DataContext } from "../../context/dataContext";
import { ApexOptions } from "apexcharts";
import { useContext } from "react";

const Chart = () => {
  //get the darkTheme and data from the context
  const { darkTheme } = useContext(ThemeContext);
  const { filteredData } = useContext(DataContext);

  //find the minimum prices value in all data
  const minimum = filteredData?.reduce((acc, curr) => {
    let min = Math.min(
      Number(curr.ENTSOE_DE_DAM_Price),
      Number(curr.ENTSOE_FR_DAM_Price),
      Number(curr.ENTSOE_GR_DAM_Price)
    );
    return min < acc ? min : acc;
  }, Number.MAX_VALUE);

  //find the maximum price value in data
  const maximum = filteredData?.reduce((acc, curr) => {
    let max = Math.max(
      Number(curr.ENTSOE_DE_DAM_Price),
      Number(curr.ENTSOE_FR_DAM_Price),
      Number(curr.ENTSOE_GR_DAM_Price)
    );
    return max > acc ? max : acc;
  }, Number.MIN_VALUE);

  //create the series for the chart
  const series: ApexAxisChartSeries = [
    {
      name: "Germany",
      data: filteredData?.map((data) => Number(data.ENTSOE_DE_DAM_Price)) || [],
    },
    {
      name: "Greece",
      data: filteredData?.map((data) => Number(data.ENTSOE_GR_DAM_Price)) || [],
    },
    {
      name: "France",
      data: filteredData?.map((data) => Number(data.ENTSOE_FR_DAM_Price)) || [],
    },
  ];

  //create dae format for the chart
  const dates = filteredData?.map((data) => {
    const date = new Date(data.DateTime);
    return `${("0" + (date.getMonth() + 1)).slice(-2)}.${(
      "0" + date.getDate()
    ).slice(-2)} - ${("0" + date.getHours()).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}`;
  });

  //create the options for the chart
  const options: ApexOptions = {
    chart: {
      id: "stellarchart",
      height: 350,
      type: "line",
      background: "transparent",
      animations: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Prices in countries",
      align: "left",
    },
    grid: {
      borderColor: "transparent",
      row: {
        colors: ["#F1FAEE", "transparent"],
        opacity: 0.5,
      },
      padding: {
        left: 20,
        right: 20,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: dates,
      stepSize: 24,
      tickAmount: 24,
      labels: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "Price in euro  (€)",
      },
      min: minimum! - 5,
      max: maximum! + 5,
      tickAmount: 5,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      floating: true,
      offsetY: -30,
      offsetX: -30,
      onItemClick: {
        toggleDataSeries: false,
      },
    },
    theme: {
      mode: darkTheme ? "dark" : "light",
      palette: darkTheme ? "palette8" : "palette6",
    },
    noData: {
      text: "No data available!",
      align: "center",
      verticalAlign: "middle",
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          legend: {
            position: "bottom",
            offsetY: 5,
          },
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <ReactApexCharts
        options={options}
        series={series}
        type="line"
        height={450}
        width={"100%"}
      />
    </div>
  );
};

export default Chart;
