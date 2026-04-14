import Image from "next/image";
export default function Step({ number, title, desc, image }) {
  return (
    <div className="flex flex-col items-center text-center relative z-10">
      <div className="flex items-start gap-4 text-left">
        <div className="bg-gray-800 dark:bg-blue-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold shrink-0 transition-colors">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-300 mt-2">
            {desc}
          </p>
        </div>
      </div>

      <div className="mt-8 w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20">
        <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden flex items-center justify-center transition-colors">
          {image ? (
            <img
              src={image.src}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400 dark:text-gray-500 text-sm">
              UI Preview
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
