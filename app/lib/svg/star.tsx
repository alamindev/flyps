export default function star({ classes = "w-2.5 h-2.5" }) {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        fill="#FED02D"
        d="M2.084 9.66l.777-3.356L.257 4.046l3.44-.298L5.034.583l1.338 3.165 3.44.298-2.604 2.258.777 3.356-2.95-1.78-2.95 1.78z"
      ></path>
    </svg>
  );
}
