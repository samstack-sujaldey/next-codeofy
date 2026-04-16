import Image from "next/image";

export default function FeatureCard({ title, desc, image, logo }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20">
      <div className="h-12 w-12 rounded-xl mb-6 flex items-center justify-center">
        {logo && (
          <Image
            src={logo.src || logo}
            alt="logo"
            className="object-contain"
            width={48}
            height={48}
          />
        )}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>

      <p className="text-gray-600 mb-6">{desc}</p>

      <Image
        src={image.src || image}
        alt={title}
        width={400}
        height={160}
        className="object-cover rounded-xl"
      />
    </div>
  );
}
