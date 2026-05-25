import React from "react";

const Card = ({
    icon,
    title,
    value,
    growth,
    subtitle,
    iconBg,
    iconColor,
}) => {
return (
    <div className="dashboard-card">
        <div className="card-top">
            <div
                className="card-icon"
                style={{
                    backgroundColor: iconBg,
                    color: iconColor,
                }}
            >
            {icon}
        </div>

        {growth && (<span className="growth-text">{growth}</span>)}
        </div>

        <div className="card-body">
            <p>{title}</p>
            <h2>{value}</h2>
            {subtitle && <span>{subtitle}</span>}
        </div>
    </div>
);
};

export default Card;