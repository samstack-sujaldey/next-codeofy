function Btn() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <button className="px-5 py-2 bg-gray-500 text-white rounded-3xl hover:bg-blue-600">
        Web Developer
      </button>
      <button className="px-5 py-2 bg-gray-500 text-white rounded-3xl hover:bg-blue-600">
        Mobile Developer
      </button>
      <button className="px-5 py-2 bg-gray-500 text-white rounded-3xl hover:bg-blue-600">
        AI Solution
      </button>
      <button className="px-5 py-2 bg-gray-500 text-white rounded-3xl hover:bg-blue-600">
        UI/UX Design
      </button>
      <button className="px-5 py-2 bg-gray-500 text-white rounded-3xl hover:bg-blue-600">
        Cloud Solution
      </button>
    </div>
  );
}
export default Btn;
