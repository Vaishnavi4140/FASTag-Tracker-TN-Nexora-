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

      <div className="card-row">

        <div
          className="card-icon"
          style={{
            backgroundColor: iconBg,
            color: iconColor,
          }}
        >
          {icon}
        </div>

        <div className="card-content">
          <h2>{value}</h2>
          <p>{title}</p>

          {subtitle && (
            <span className="card-subtitle">
              {subtitle}
            </span>
          )}
        </div>

      </div>

      {growth && (
        <span className="growth-text">
          {growth}
        </span>
      )}

    </div>
  );
};

export default Card;