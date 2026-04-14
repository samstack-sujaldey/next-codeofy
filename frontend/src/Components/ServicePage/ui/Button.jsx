function Button({ children, onClick, rounded = "lg", variant = "blue", icon }) {
  const variants = {
    blue: "bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-blue-500/30 dark:shadow-blue-900/20 dark:hover:shadow-blue-600/40",
    black:
      "border border-gray-200 dark:border-gray-700 text-black dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md",
    outline:
      "border bg-white/20 border-white/20 hover:bg-white/10 hover:border-white/50 text-white hover:shadow-lg",
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-blue-500/30 dark:hover:shadow-blue-600/40",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white hover:shadow-md",
    outlineDark: "border border-gray-700 hover:border-gray-400 text-white hover:bg-white/5",
    white: "bg-white text-gray-900 hover:bg-gray-50 hover:shadow-md",
  };
  
  const Rounded = {
    lg: "rounded-lg",
    full: "rounded-full",
  };
  
  // Added transition, float (translate-y), and press (active) animations here
  const basicStyle =
    "cursor-pointer w-fit py-2.5 px-8 inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:shadow-sm";
  
  return (
    <div>
      <button
        onClick={onClick}
        className={`${basicStyle} ${variants[variant] || variants.blue} ${Rounded[rounded]}`}
      >
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </button>
    </div>
  );
}

export default Button;