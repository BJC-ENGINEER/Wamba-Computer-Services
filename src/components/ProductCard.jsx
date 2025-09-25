export default function ProductCard({ name, price, image, description }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className="w-full h-80 md:h-96 lg:h-[28rem] object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
      <p className="text-blue-600 font-bold mt-2">{price}</p>
    </div>
  );
}