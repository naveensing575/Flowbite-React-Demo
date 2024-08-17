import React, { useState } from "react";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const Chart: React.FC = () => {
  const [series, setSeries] = useState<number[]>([35.1, 23.5, 2.4, 5.4]);

  const getChartOptions = (): ApexOptions => ({
    series: [
      {
        name: "Traffic",
        data: series,
      },
    ],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      height: 320,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Unique visitors",
              fontFamily: "Inter, sans-serif",
              formatter: function (w: any): string {
                const sum = w.globals.seriesTotals.reduce(
                  (a: number, b: number) => a + b,
                  0,
                );
                return "$" + sum.toFixed(1) + "k"; // Ensure sum is formatted as string
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: function (value: any): string {
                return value.toFixed(1) + "k";
              },
            },
          },
          size: "80%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: function (value: any): string {
          return parseFloat(value).toFixed(1) + "k";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value: any): string {
          return parseFloat(value).toFixed(1) + "k";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      switch (value) {
        case "desktop":
          setSeries([15.1, 22.5, 4.4, 8.4]);
          break;
        case "tablet":
          setSeries([25.1, 26.5, 1.4, 3.4]);
          break;
        case "mobile":
          setSeries([45.1, 27.5, 8.4, 2.4]);
          break;
        default:
          setSeries([55.1, 28.5, 1.4, 5.4]);
          break;
      }
    } else {
      setSeries([35.1, 23.5, 2.4, 5.4]);
    }
  };

  return (
    <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-6">
      <div className="mb-3 flex justify-between">
        <div className="flex items-center justify-center">
          <h5 className="pe-1 text-xl font-bold leading-none text-gray-900 dark:text-white">
            Website traffic
          </h5>
          <svg
            data-popover-target="chart-info"
            data-popover-placement="bottom"
            className="ms-1 h-3.5 w-3.5 cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
          </svg>
        </div>
        <div>
          <button
            type="button"
            data-tooltip-target="data-tooltip"
            data-tooltip-placement="bottom"
            className="hidden h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:inline-flex"
          >
            <svg
              className="h-3.5 w-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
              />
            </svg>
            <span className="sr-only">Download data</span>
          </button>
        </div>
      </div>

      <div>
        <div className="flex" id="devices">
          <div className="me-4 flex items-center">
            <input
              id="desktop"
              type="checkbox"
              value="desktop"
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label
              htmlFor="desktop"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Desktop
            </label>
          </div>
          <div className="me-4 flex items-center">
            <input
              id="tablet"
              type="checkbox"
              value="tablet"
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label
              htmlFor="tablet"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tablet
            </label>
          </div>
          <div className="me-4 flex items-center">
            <input
              id="mobile"
              type="checkbox"
              value="mobile"
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label
              htmlFor="mobile"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Mobile
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 h-72" id="chart">
        <ApexCharts
          options={getChartOptions()}
          series={series}
          type="donut"
          height={320}
        />
      </div>
    </div>
  );
};

export default Chart;
