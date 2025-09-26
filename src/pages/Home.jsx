import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// Import first 3 product images
import lenovoImg from "../assets/images/all-in-one-lenovo.jpg";
import HpElite840Img from "../assets/images/hp-elitebook840-g3.jpg";
import SsdSataImg from "../assets/images/ssd-sata-256gb.jpg";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 py-6 max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Welcome to Wamba Computer Services
        </h2>
        <p className="text-gray-700 text-sm sm:text-base max-w-lg mx-auto">
          Quality computers, tablets, and accessories at the best prices.
        </p>
      </section>

      {/* Featured Products Section */}
      <section>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard
            name="all-in-One-lenovo"
            price="200,000 RWF"
            image={lenovoImg}
            description="Pentium, 4GB RAM, 500GB HDD – a compact all-in-one desktop for home or office."
          />
          <ProductCard
            name="HP EliteBook 840 G3"
            price="270,000 RWF"
            image={HpElite840Img}
            description="Core i5, 8GB RAM, 256GB SSD, Backlight keyboard – perfect for professionals."
          />
          <ProductCard
            name="SSD SATA 256GB"
            price="30,000 RWF"
            image={SsdSataImg}
            description="Fast 256GB SATA SSD – boost performance and storage for laptops & desktops."
          />
        </div>

        {/* Call to Explore More */}
        <p className="mt-6 text-center text-base sm:text-lg">
          Want to see more? Visit our{" "}
          <Link
            to="/products"
            className="text-blue-600 font-semibold hover:underline"
          >
            Products page
          </Link>{" "}
          to explore all categories.
        </p>
      </section>
    </div>
  );
}