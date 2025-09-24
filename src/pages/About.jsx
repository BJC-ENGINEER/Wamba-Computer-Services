import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>

      {/* Example: your product grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Render product cards here */}
      </div>

      {/* New sentence for more products */}
      <p className="mt-6 text-lg">
        For more products, check the{" "}
        <Link to="/products" className="text-blue-600 font-semibold hover:underline">
          Products page
        </Link>.
      </p>
    </div>
  );
}