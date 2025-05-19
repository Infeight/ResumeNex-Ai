const ProgressIndicator = ({ percentage }) => {
  const radius = 96;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center  bg-white ">
      <div className="relative w-[110px] h-[110px]">
        <svg
          className="transform -rotate-90 w-full h-full "
          viewBox="0 0 256 256"
        >
          <circle
            cx="128"
            cy="128"
            r={radius}
            fill="transparent"
            stroke="#DEF1CE" // Lighter green for unfilled portion
            strokeWidth="32"
          />
          <circle
            cx="128"
            cy="128"
            r={radius}
            fill="transparent"
            stroke="#58B90A" // Green for filled portion
            strokeWidth="32"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-[#58B90A] ">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
