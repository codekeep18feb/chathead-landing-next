const SageionLogo = ({ size = 40, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="40" height="40" rx="8" fill="#0A0A0A" />
    <path
      d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20Z"
      stroke="#00D4AA"
      strokeWidth="2.5"
    />
    <path
      d="M20 12V28"
      stroke="#00D4AA"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M12 20H28"
      stroke="#00D4AA"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="20" cy="20" r="3" fill="#00D4AA" />
  </svg>
);

export default SageionLogo;