export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 sm:px-6 text-center">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} Wamba Computer Services. All rights reserved.
      </p>
    </footer>
  );
}