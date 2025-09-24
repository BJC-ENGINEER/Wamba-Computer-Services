export default function ProductCard({ name, price, image }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
      <p className="text-blue-600 font-bold">${price}</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
}