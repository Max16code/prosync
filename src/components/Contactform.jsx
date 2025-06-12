// components/ContactForm.jsx
export default function Contactform() {
  return (
    <form
      action="https://formspree.io/f/yourFormID" // Replace with your real ID
      method="POST"
      className="max-w-xl mx-auto p-4 space-y-4 bg-white shadow rounded"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input type="text" name="firstName" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input type="text" name="lastName" required className="w-full border p-2 rounded" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Phone Number</label>
        <input type="tel" name="phone" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" name="email" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" required rows="5" className="w-full border p-2 rounded" />
      </div>

      {/* Optional redirect on success */}
      <input type="hidden" name="_redirect" value="/thank-you" />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
