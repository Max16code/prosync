// components/ContactForm.jsx
export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/info@prosync-en.com"
      method="POST"
      className="max-w-xl mx-auto p-4 space-y-4 bg-gray-100 rounded-md shadow"
    >
      <h2 className="text-2xl font-bold text-center">GET STARTED</h2>
      <p className="text-center text-gray-700">
        Save money, reduce risk, and speed completion of your project with Eichleay. Contact us to learn how our talented team of versatile professionals could help you.
      </p>

      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://prosync-en.com/thank-you" />

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="w-full border p-2 rounded"
      />

      <textarea
        name="message"
        placeholder="Enter your message..."
        maxLength={500}
        rows={5}
        className="w-full border p-2 rounded"
        required
      />
      <div className="text-right text-sm text-gray-500">0 / 500</div>

      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
      >
        GET IN TOUCH
      </button>
    </form>
  );
}
