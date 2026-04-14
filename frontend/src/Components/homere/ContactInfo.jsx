export default function ContactInfo({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors duration-300 text-left">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{value}</p>
    </div>
  );
}
