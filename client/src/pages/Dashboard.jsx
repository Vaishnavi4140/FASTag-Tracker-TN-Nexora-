import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import Card from "../components/Card";
import "../styles/Dashboard.css";
import {
    IndianRupee,
    TrendingUp,
    Route,
    DollarSign,
} from "lucide-react";

const Dashboard = () => {
    const navigate = useNavigate();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/signin");
        }
    }, []);
    const transactions = [
    {
        date: "Mar 5, 2026",
        plaza: "Navi Mumbai Toll Plaza",
        vehicle: "MH-02-AB-1234",
        amount: "₹120",
        provider: "Paytm FASTag",
    },
    {
        date: "Mar 4, 2026",
        plaza: "Pune-Mumbai Expressway",
        vehicle: "MH-02-CD-5678",
        amount: "₹215",
        provider: "HDFC FASTag",
    },
    {
        date: "Mar 3, 2026",
        plaza: "Vadodara Toll Plaza",
        vehicle: "MH-02-AB-1234",
        amount: "₹85",
        provider: "Paytm FASTag",
    },
];

return (
    <div className="dashboard-layout">
        <Sidebar 
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
        />

        <div className="dashboard-main">
        <DashboardNavbar  setIsMobileOpen={setIsMobileOpen} />

        <div className="dashboard-content">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <p className="dashboard-subtitle">Welcome back! Here's your toll payment overview.</p>
            </div>

        <div className="cards-grid">
            <Card
                icon={<IndianRupee size={28} />}
                title="Total Toll Paid"
                value="₹12,450"
                growth="+12.5%"
                iconBg="#e8f0ff"
                iconColor="#2563eb"
            />

            <Card
                icon={<TrendingUp size={28} />}
                title="This Month Toll"
                value="₹2,340"
                growth="+8.2%"
                iconBg="#e8f7ed"
                iconColor="#16a34a"
            />

            <Card
                icon={<Route size={28} />}
                title="Total Trips"
                value="82"
                growth="+15.3%"
                iconBg="#f4e8ff"
                iconColor="#9333ea"
            />

            <Card
                icon={<DollarSign size={28} />}
                title="Last Toll Deduction"
                value="₹120"
                // subtitle="Today"
                iconBg="#fff8e6"
                iconColor="#d97706"
            />
        </div>

        <div className="transactions-section">
            <div className="transactions-header">
                <h2>Recent Toll Transactions</h2>
            </div>

            <table className="transactions-table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Toll Plaza</th>
                    <th>Vehicle</th>
                    <th>Amount</th>
                    <th>FASTag Provider</th>
                </tr>
                </thead>

                <tbody>
                {transactions.map((item, index) => (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.plaza}</td>
                        <td>{item.vehicle}</td>
                        <td>{item.amount}</td>
                        <td>
                            <span className="provider-badge">
                                {item.provider}
                            </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
    </div>
</div>
);
};
export default Dashboard;