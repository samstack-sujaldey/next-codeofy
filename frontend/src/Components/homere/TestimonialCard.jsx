import Image from "next/image";

export default function TestimonialCard({ image, name, role, text, company }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20">
      <Image
        src={image.src || image}
        alt={name}
        width={80}
        height={80}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover ring-2 ring-gray-100 dark:ring-gray-700"
      />

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{role}</p>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 italic">
        "{text}"
      </p>
      <p className="text-blue-950 dark:text-blue-400 font-medium text-sm">
        {company}
      </p>
    </div>
  );
}
