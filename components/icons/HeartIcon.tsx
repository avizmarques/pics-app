export default function HeartIcon({
  color,
  fill,
  strokeWidth,
}: {
  color?: string;
  fill?: string;
  strokeWidth?: string;
}) {
  return (
    <svg
      stroke={color ? color : "currentColor"}
      fill={fill ? fill : "none"}
      strokeWidth={strokeWidth ? strokeWidth : "2"}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
}