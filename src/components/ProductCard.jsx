export default function ProductCard({ name, price, image, description }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition flex flex-col items-center bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-md"
      />
      <h3 className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-center">
        {name}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mt-2 text-center">
        {description}
      </p>
      <p className="text-blue-600 font-bold mt-2 text-center text-base sm:text-lg">
        {price}
      </p>
    </div>
  );
}