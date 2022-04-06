import {} from "bootstrap";
import React, { useState } from "react";
import './DashBoard.css'
import {  Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const DashBoard = () => {
  const data = [
    {
      name: "January",
      Investment: 4000,
      Price: 24400,
      Profit: 2400,
    },
    {
      name: "February",
      Price: 3000,
      Investment: 11398,
      Profit: 5210,
    },
    {
      name: "March",
      Price: 300,
      Investment: 9800,
      Profit: 2690,
    },
    {
      name: "April",
      Price: 80,
      Investment: 396,
      Profit: 700,
    },
    {
      name: "May",
      Price: 940,
      Investment: 4400,
      Profit: 181,
    },
    {
      name: "June",
      Price: 2390,
      Investment: 38600,
      Profit: 2500,
    },
    {
      name: "July",
      Price: 1000,
      Investment: 5000,
      Profit: 500,
    },
  ];

  return (
    <div className="towChart mt-5 d-flex">
      <div className="ml-4 ">
        <h5>Investment Result with Line Chart</h5>
        <div className="lineChart">
          <LineChart width={500} height={500} data={data}>
            <Line dataKey={"Price"}></Line>
            <Line dataKey={"name"}></Line>
            <Line dataKey={"Investment"}></Line>
            <Line dataKey={"Profit"}></Line>
            <XAxis dataKey={"name"}></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
          </LineChart>
        </div>
      </div>
      <div className="">
        <h4>Investment Result with Bar Chart</h4>
        <BarChart width={500} height={500} data={data}>
          <Bar dataKey={"Price"} fill="#8884d8"></Bar>
          <Bar dataKey={"name"} fill="#8884d8"></Bar>
          <Bar dataKey={"Investment"} fill="#8884d8"></Bar>
          <Bar dataKey={"Profit"} fill="#8884d8"></Bar>

          <XAxis dataKey={"name"}></XAxis>

          <Tooltip></Tooltip>
          <YAxis></YAxis>
        </BarChart>
      </div>
    </div>
  );
};
export default DashBoard;
