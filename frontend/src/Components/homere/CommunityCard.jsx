export default function CommunityCard({ title, time, image }) {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20">
      <img
        src={image.src}
        alt={title}
        className="w-20 h-16 object-cover rounded-lg"
      />
      <div className="text-left">
        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
          {title}
        </h4>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{time}</p>
      </div>
    </div>
  );
}
