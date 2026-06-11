import React, { useState } from "react";
import "../styles/Analytics.css";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import { Link } from "react-router-dom";

import {
  IndianRupee,
  CalendarDays,
  TrendingUp,
  MapPinned,
  Lightbulb,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const Analytics = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const monthlyData = [
    { month: "Sep", amount: 1800 },
    { month: "Oct", amount: 2100 },
    { month: "Nov", amount: 1950 },
    { month: "Dec", amount: 2450 },
    { month: "Jan", amount: 2200 },
    { month: "Feb", amount: 2600 },
    { month: "Mar", amount: 2350 },
  ];

  const weeklyData = [
    { day: "Mon", trips: 2 },
    { day: "Tue", trips: 1 },
    { day: "Wed", trips: 3 },
    { day: "Thu", trips: 2 },
    { day: "Fri", trips: 4 },
    { day: "Sat", trips: 1 },
    { day: "Sun", trips: 2 },
  ];

  const tollLocations = [
    { name: "Mumbai-Pune", value: 35, color: "#2563eb" },
    { name: "Delhi NCR", value: 25, color: "#22c55e" },
    { name: "Bangalore", value: 20, color: "#f59e0b" },
    { name: "Ahmedabad", value: 15, color: "#8b5cf6" },
    { name: "Others", value: 5, color: "#ec4899" },
  ];

  const comparisonData = [
    { month: "Sep", year2026: 1800, year2025: 1500 },
    { month: "Oct", year2026: 2100, year2025: 1750 },
    { month: "Nov", year2026: 1950, year2025: 2000 },
    { month: "Dec", year2026: 2500, year2025: 2200 },
    { month: "Jan", year2026: 2200, year2025: 1900 },
    { month: "Feb", year2026: 2650, year2025: 2350 },
    { month: "Mar", year2026: 2400, year2025: 2150 },
  ];

  const tripDistribution = [
    { name: "Morning", value: 30, color: "#2563eb" },
    { name: "Afternoon", value: 20, color: "#22c55e" },
    { name: "Evening", value: 40, color: "#f59e0b" },
    { name: "Night", value: 10, color: "#8b5cf6" },
  ];

  const radarData = [
    { route: "Mumbai-Pune", efficiency: 85, savings: 70 },
    { route: "Delhi NCR", efficiency: 65, savings: 55 },
    { route: "Bangalore", efficiency: 75, savings: 60 },
    { route: "Ahmedabad", efficiency: 55, savings: 45 },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar 
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="dashboard-main">
        <DashboardNavbar 
          setIsMobileOpen={setIsMobileOpen}
        />

        <div className="analytics-content">

          <div className="analytics-header">
  <h1>Travel Analytics & Toll Expense Insights</h1>

  <p>
    FastagTracker Analytics helps users understand toll spending,
    travel behavior, vehicle activity, and FASTag usage through
    visual reports and interactive charts.
  </p>

  <p>
    Monitor monthly toll expenses, analyze travel trends, compare
    vehicle performance, and identify opportunities to reduce
    transportation costs.
  </p>
</div>
<div className="analytics-links">
  <p>
    Review your
    <Link to="/toll-history"> Toll History </Link>
    or manage vehicles through
    <Link to="/vehicles"> Vehicle Management </Link>
    for deeper insights.
  </p>
</div>

          {/* TOP CARDS */}

          <div className="analytics-cards">

            <div className="analytics-card">
              <div className="card-icon blue">
                <IndianRupee size={22} />
              </div>

              <h3>This Month</h3>
              <h2>₹2,340</h2>
              <span className="positive">↗ 12% from last month</span>
            </div>

            <div className="analytics-card">
              <div className="card-icon purple">
                <CalendarDays size={22} />
              </div>

              <h3>Avg. Per Trip</h3>
              <h2>₹152</h2>
              <span className="negative">↘ 3% from last month</span>
            </div>

            <div className="analytics-card">
              <div className="card-icon green">
                <TrendingUp size={22} />
              </div>

              <h3>Total Trips</h3>
              <h2>77</h2>
              <span>This month</span>
            </div>

            <div className="analytics-card">
              <div className="card-icon orange">
                <MapPinned size={22} />
              </div>

              <h3>Total Distance</h3>
              <h2>2,450 km</h2>
              <span>This month</span>
            </div>
          </div>

          {/* MONTHLY CHART */}

          <div className="chart-card large-chart">
            <h2>Monthly Toll Spending</h2>

            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#2563eb" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* TWO CHARTS */}

          <div className="double-charts">

            <div className="chart-card">
              <h2>Trip Frequency (This Week)</h2>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="trips"
                    stroke="#22c55e"
                    strokeWidth={4}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h2>Toll Locations</h2>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={tollLocations}
                    innerRadius={70}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {tollLocations.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="location-list">
                {tollLocations.map((item, index) => (
                  <div className="location-item" key={index}>
                    <div className="location-left">
                      <span
                        className="dot"
                        style={{ background: item.color }}
                      ></span>

                      <p>{item.name}</p>
                    </div>

                    <span>{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AREA CHART */}

          <div className="chart-card large-chart">
            <h2>Year-over-Year Comparison</h2>

            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={comparisonData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="year2026"
                  stroke="#2563eb"
                  fill="#2563eb55"
                />

                <Area
                  type="monotone"
                  dataKey="year2025"
                  stroke="#94a3b8"
                  fill="#94a3b855"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* BOTTOM CHARTS */}

          <div className="double-charts">

            <div className="chart-card">
              <h2>Trip Time Distribution</h2>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={tripDistribution}
                    outerRadius={110}
                    dataKey="value"
                    label
                  >
                    {tripDistribution.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h2>Route Performance</h2>

              <ResponsiveContainer width="100%" height={300}>
                <RadarChart outerRadius={90} data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="route" />
                  <PolarRadiusAxis />

                  <Radar
                    name="Efficiency"
                    dataKey="efficiency"
                    stroke="#2563eb"
                    fill="#2563eb"
                    fillOpacity={0.5}
                  />

                  <Radar
                    name="Savings"
                    dataKey="savings"
                    stroke="#22c55e"
                    fill="#22c55e"
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* VEHICLE ANALYSIS */}

          <div className="chart-card">
            <h2>Vehicle-wise Analysis</h2>

            <div className="vehicle-analysis">

              <div className="analysis-item">
                <div className="analysis-top">
                  <div>
                    <h3>MH-02-AB-1234</h3>
                    <p>45 trips this month</p>
                  </div>

                  <div className="analysis-price">
                    <h2>₹12,500</h2>
                    <span>Avg: ₹278/trip</span>
                  </div>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill fill-1"></div>
                </div>
              </div>

              <div className="analysis-item">
                <div className="analysis-top">
                  <div>
                    <h3>MH-02-CD-5678</h3>
                    <p>32 trips this month</p>
                  </div>

                  <div className="analysis-price">
                    <h2>₹8,200</h2>
                    <span>Avg: ₹256/trip</span>
                  </div>
                </div>

                <div className="progress-bar">
                  <div className="progress-fill fill-2"></div>
                </div>
              </div>
            </div>
          </div>
          <section className="analytics-info">
  <h2>Why Travel Analytics Matters</h2>

  <p>
    Understanding travel expenses is essential for vehicle owners,
    families, fleet managers, and transport businesses.
    FastagTracker Analytics provides visibility into toll payments,
    route usage, and travel spending patterns.
  </p>

  <p>
  By analyzing FASTag transactions and vehicle activity,
  users can make informed decisions, optimize travel costs,
  and improve overall transportation efficiency. Users can also
  review detailed <Link to="/toll-history">toll history records</Link>
  and monitor vehicle performance through
  <Link to="/dashboard"> dashboard reports</Link>.
</p>
</section>

          {/* INSIGHTS */}

          <div className="insights-box">

            <div className="insights-title">
              <Lightbulb size={22} />
              <h2>Insights & Recommendations</h2>
            </div>

            <div className="insight-item">
              Peak hour savings: You could save ₹450/month by avoiding evening rush.
            </div>

            <div className="insight-item">
              Usage pattern: Your toll spending is 12% higher this month.
            </div>

            <div className="insight-item">
              Subscription opportunity: Monthly pass could save ₹800/month.
            </div>

            <button className="report-btn">
              View Detailed Report
            </button>

          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Analytics;