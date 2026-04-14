function Badge({ children, icon }) {
  return (
    <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 font-semibold w-fit rounded-lg px-2 md:px-4 py-1 md:py-2 flex gap-x-1 md:gap-x-2 items-center transition-colors duration-300">
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
}

export default Badge;
