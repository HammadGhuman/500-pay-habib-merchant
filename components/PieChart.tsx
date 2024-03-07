"use client";
import React, { useEffect } from "react";
import Chart from "chart.js";

function PieChart({ succeeded, rejected, pending }: any) {
  useEffect(() => {
    const ctx = document.getElementById("myChart2") as HTMLCanvasElement;
    if (!ctx) return;

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Accepted", "Pending", "Rejected"],
        datasets: [
          {
            data: [succeeded.count, pending.count, rejected.count],
            borderColor: [
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
              "rgb(255, 99, 132)",
            ],
            backgroundColor: [
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
              "rgb(255, 99, 132)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      {/* Doughnut chart */}
      <h1 className="mx-auto mt-10 text-4xl font-semibold capitalize">
        Pie Chart
      </h1>
      <div className="w-[1100px] h-screen flex mx-auto -mt-40">
        <div className="border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl pb-2">
          <canvas id="myChart2"></canvas>
        </div>
      </div>
    </>
  );
}

export default PieChart;
