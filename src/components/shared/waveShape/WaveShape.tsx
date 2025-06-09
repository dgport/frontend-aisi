export const WaveShape = ({ position = "top", className = "" }) => {
  const isTop = position === "top";
  
  return (
    <div
  className={`absolute ${isTop ? 'top-0 -mt-px' : 'bottom-0'} w-full z-10 ${className}`}
>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        className={`w-full h-auto ${isTop ? 'transform rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};