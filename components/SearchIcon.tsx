export default function SearchIcon({
  color,
  strokeWidth,
}: {
  color?: string;
  strokeWidth?: string;
}) {
  return (
    <svg
      width="100%"
      height="100%"
      stroke={color ? color : "currentColor"}
      fill="none"
      strokeWidth={strokeWidth ? strokeWidth : "2"}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}
