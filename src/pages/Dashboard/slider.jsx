import React from 'react';



export const Slider = ({
  value,
  onChange,
  min,
  max,
  step = 1,
}) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-500"
    />
  );
};
