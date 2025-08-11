import React from "react";
import "./donut-progerss.scss";

type Props = {
  value: number;              // 0..100
  thickness?: number;         // толщина дуги в единицах viewBox (по умолчанию 10)
  rounded?: boolean;          // скруглённые концы
  showLabel?: boolean;
  className?: string;
};

export default function DonutProgress({
  value,
  thickness = 10,
  rounded = true,
  showLabel = true,
  className,
}: Props) {
  const v = Math.max(0, Math.min(100, value));
  const r = 50 - thickness / 2;         // viewBox 100x100
  const c = 2 * Math.PI * r;
  const offset = c * (1 - v / 100);

  return (
    <svg
      className={["donut", className].filter(Boolean).join(" ")}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      role="progressbar"
      aria-valuenow={v}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* трек */}
      <circle
        className="donut__track"
        cx="50"
        cy="50"
        r={r}
        fill="none"
        strokeWidth={thickness}
      />

      {/* прогресс */}
      <g transform="rotate(-90 50 50)">
        <circle
          className="donut__progress"
          cx="50"
          cy="50"
          r={r}
          fill="none"
          strokeWidth={thickness}
          strokeLinecap={rounded ? "round" : "butt"}
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </g>

      {showLabel && (
        <text className="donut__label" x="50" y="50" textAnchor="middle" dominantBaseline="middle">
          {v} %
        </text>
      )}
    </svg>
  );
}
