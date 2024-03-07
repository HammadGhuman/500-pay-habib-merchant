"use client";
import React, { useEffect } from "react";
import Chart from "chart.js";

function Example() {
  useEffect(() => {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;
    if (!ctx) return; // Check if canvas element exists

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "March", "April ", "May", "June", "July"],
        datasets: [
          {
            data: [40, 100, 44, 70, 63, 30, 10],
            label: "Accepted",
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgb(75, 192, 192,0.5)",
            borderWidth: 2,
          },
          {
            data: [20, 24, 50, 34, 33, 23, 12],
            label: "Pending",
            borderColor: "rgb(255, 205, 86)",
            backgroundColor: "rgb(255, 205, 86,0.5)",
            borderWidth: 2,
          },
          {
            data: [6, 20, 52, 12, 11, 78, 21],
            label: "Rejected",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgb(255, 99, 132,0.5)",
            borderWidth: 2,
          },
        ],
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      {/* Bar chart */}
      <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize">
        Bar Chart
      </h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default Example;
