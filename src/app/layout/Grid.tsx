export const Grid = () => {
  return (
    <svg
      width="100%"
      height="100%"
      className="absolute inset-0 -z-10 select-none cursor-none"
    >
      <pattern
        id="pattern-circles"
        x="0"
        y="0"
        width="30"
        height="30"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
      >
        <circle
          id="pattern-circle"
          cx="10"
          cy="10"
          r="1.6257413380501518"
          fill="hsl(var(--muted))"
        ></circle>
      </pattern>

      <rect
        id="rect"
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#pattern-circles)"
      ></rect>
    </svg>
  );
};
