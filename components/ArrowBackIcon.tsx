export default function ArrowBackIcon({ color }: { color?: string }) {
  return (
    <svg
      stroke={color ? color : "currentColor"}
      fill={color ? color : "currentColor"}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
    </svg>
  );
}
