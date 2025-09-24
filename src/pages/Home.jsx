import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Welcome to Wamba Computer Services</h2>
        <p className="text-gray-700">
          Quality computers, tablets, and accessories at the best prices.
        </p>
      </section>

      {/* Products Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard
          name="Laptop Pro 15"
          price="1200"
          image="https://via.placeholder.com/150"
        />
        <ProductCard
          name="Tablet X"
          price="500"
          image="https://via.placeholder.com/150"
        />
        <ProductCard
          name="Wireless Mouse"
          price="25"
          image="https://via.placeholder.com/150"
        />
      </section>
    </div>
  );
}