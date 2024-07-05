export const DashboardIcon = ({ width = 24, height = 24, color = '#2c3e50' }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4h6v8h-6z" />
  <path d="M4 16h6v4h-6z" />
  <path d="M14 12h6v8h-6z" />
  <path d="M14 4h6v4h-6z" />
    </svg>
  );
};
