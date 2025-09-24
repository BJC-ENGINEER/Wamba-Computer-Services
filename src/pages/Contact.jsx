export default function Contact() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded"/>
        <input type="email" placeholder="Your Email" className="border p-2 rounded"/>
        <textarea placeholder="Message" className="border p-2 rounded"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
}