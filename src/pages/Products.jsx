import ProductCard from "../components/ProductCard";

export default function Products() {
  const products = [
    { name: "Laptop Pro 15\"", price: "1200", image: "https://via.placeholder.com/150" },
    { name: "Tablet X", price: "500", image: "https://via.placeholder.com/150" },
    { name: "Wireless Mouse", price: "25", image: "https://via.placeholder.com/150" },
    { name: "Keyboard Mechanical", price: "45", image: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}