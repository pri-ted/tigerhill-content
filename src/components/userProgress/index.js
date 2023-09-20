import React from 'react';

const PizzaProgress = ({ progress }) => {
  const pizzaRadius = 12;
  const pizzaCenter = 20;
  const sliceAngle = (progress / 100) * 360;

  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx={pizzaCenter} cy={pizzaCenter} r={pizzaRadius} fill="#FFFFFF" stroke="#FF5900" />
      <path
        d={`M${pizzaCenter} ${pizzaCenter - pizzaRadius}
          A ${pizzaRadius} ${pizzaRadius} 0 ${sliceAngle > 180 ? 1 : 0} 1
          ${pizzaCenter + Math.sin(sliceAngle * (Math.PI / 180)) * pizzaRadius}
          ${pizzaCenter - Math.cos(sliceAngle * (Math.PI / 180)) * pizzaRadius}
          L ${pizzaCenter} ${pizzaCenter}
          Z`}
        fill="#FF5900"
      />

    </svg>
  );
};

export default PizzaProgress;
