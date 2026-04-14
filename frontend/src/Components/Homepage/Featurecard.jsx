function Featurecard() {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center my-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          99.9%
        </h2>
        <p className="text-blue-600 dark:text-blue-400 font-semibold">
          System Uptime
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Rock-solid stability for mission-critical enterprise applications.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          40%
        </h2>
        <p className="text-blue-600 dark:text-blue-400 font-semibold">
          Faster Loads
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Optimization that significantly improves user retention and SEO.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          2M+
        </h2>
        <p className="text-blue-600 dark:text-blue-400 font-semibold">
          Users Supported
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Platforms scale effortlessly to handle massive global audiences.
        </p>
      </div>
    </div>
  );
}
export default Featurecard;
