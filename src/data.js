import { TbFileTypeSql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiGoogleanalytics, SiTableau } from "react-icons/si";
import { BsClipboard2DataFill, BsDatabaseFillCheck } from "react-icons/bs";

export const skills = [
  {
    id: 1,
    tech: "SQL",
    topics: "Joins, Subqueries, CTE's",
    icon: TbFileTypeSql,
  },
  {
    id: 2,
    tech: "Python",
    topics: "Pandas, Numpy, Matplotlib",
    icon: FaPython,
  },
  {
    id: 3,
    tech: "Excel",
    topics: "Pivot Tables, Dasboards, Formulas",
    icon: RiFileExcel2Fill,
  },
  {
    id: 4,
    tech: "Power BI",
    topics: "Dax, Data Modeling",
    icon: SiGoogleanalytics,
  },
  {
    id: 5,
    tech: "Tableau",
    topics: "Joins, Dashboards",
    icon: SiTableau,
  },
  {
    id: 6,
    tech: "EDA",
    topics: "Exploratory Data Analysis",
    icon: BsClipboard2DataFill,
  },
  {
    id: 7,
    tech: "Data",
    topics: "Data Cleaning & Data Wrangling",
    icon: BsDatabaseFillCheck,
  },
];

export const projects = [
  {
    id: 1,
    name: "Sales Promotion Strategies",
    desc: [
      "This is a research based on Data Analysis Project in which we try to analyze datasets of customers.",
      "We have would be analyzing few aspects such as sales and cost.",
      "Company can make important decisions for sales promotion strategies within the company and manage the quality of customers in order to enhance the business of the company.",
      "This insight will also help to increase the profit to company.",
    ],
    skills: [TbFileTypeSql, SiTableau],
    sourceLink: null,
  },
  {
    id: 2,
    name: "COVID-19 Death-Analysis",
    desc: [
      "Collected and cleaned real-world COVID-19 datasets for deaths by country",
      "Performed Exploratory data analysis (EDA) to identify Death count by the continent and mortality rates",
      "Visualized insights using bar charts, line graphs and heatmaps to show death spikes and risk factors, countries with high infection rate compared to the population.",
    ],
    skills: [RiFileExcel2Fill, TbFileTypeSql, SiTableau],
    sourceLink: "https://github.com/prabanjan-analyst/Covid-death-analysis",
  },
  {
    id: 3,
    name: "PIZZA Sales-Analysis",
    desc: [
      "Cleaned and organized raw pizza sales data using Excel and Power Query.",
      "Analysed sales performance by pizza type, size, time of day and day of the week.",
      "Identified best-selling pizzas, total revenue, daily order count, monthly order count, sales by category and sales by size and Top 5 selling and Worst 5 selling pizzas by quantity.",
      "Visualized insights using bar charts, gauge and using cards by showing the count and quantity.",
    ],
    skills: [TbFileTypeSql, SiGoogleanalytics],
    sourceLink: "https://github.com/prabanjan-analyst/pizza-sales-analysis",
  },
];
