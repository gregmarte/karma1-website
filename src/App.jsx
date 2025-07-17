import React, { useState, useEffect } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage('Welcome to Karma Zero Yoga!');
    }, 1000);
  }, []);

  const showMessage = (msg, type = 'info') => {
    setMessage(msg);
    setMessageType(type);
    // Message will stay until clicked
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // TODO: Replace with an actual API Gateway endpoint URL
      const response = await fetch("YOUR_API_GATEWAY_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Failed to send message");
      showMessage("Your message has been sent! We will get back to you soon.", "success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      showMessage("Sorry, message not delivered. Please reach out on Instagram: miamigreg.yoga", "error");
    } finally {
      setSubmitting(false);
    }
  };
  if (showPrivacy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 font-inter text-gray-800">
        <button
          className="fixed top-4 right-4 z-50 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow"
          onClick={() => setShowPrivacy(false)}
        >
          Close
        </button>
        <PrivacyPolicy />
      </div>
    );
  }
  if (showTerms) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 font-inter text-gray-800">
        <button
          className="fixed top-4 right-4 z-50 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow"
          onClick={() => setShowTerms(false)}
        >
          Close
        </button>
        <TermsOfService />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 font-inter text-gray-800">
      {/* Loading/Message Indicator */}
      <>
        {loading && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="text-white text-xl">Loading...</div>
          </div>
        )}
        {message && (
          <div
            className={`fixed top-4 left-1/2 -translate-x-1/2 ${messageType === 'error' ? 'bg-orange-500' : 'bg-green-500'} text-white px-6 py-3 rounded-lg shadow-lg z-50 cursor-pointer`}
            onClick={() => setMessage("")}
          >
            {message}
          </div>
        )}
      </>      

      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-12 sticky top-0 z-40">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-purple-700">Karma Zero Yoga</a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-purple-700 transition-colors">About Us</a>
            <a href="#services" className="text-gray-600 hover:text-purple-700 transition-colors">Services</a>
            <a href="#schedule" className="text-gray-600 hover:text-purple-700 transition-colors">Schedule</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-700 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-700 transition-colors">Contact</a>
            <a href="#payments" className="text-gray-600 hover:text-purple-700 transition-colors">Payments</a>
          </div>
          {/* Mobile Menu Button (Placeholder) */}
          <button className="md:hidden text-gray-600 hover:text-purple-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-purple-700">
        {/* Lotus flower image, 25% of section area, bottom left corner, using public folder for reliability */}
        <img
          src="./img/lotusFlower.png"
          alt="Lotus Flower"
          style={{
            position: 'absolute',
            right: '2%',
            bottom: '2%',
            width: '15%',
            height: 'auto',
            opacity: 0.7,
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'invert(1)'
          }}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white pt-4 pb-6 px-6 rounded-lg max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Find Your Inner Peace and Strength
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            Personalized yoga sessions and group classes to nourish your mind, body, and spirit.
          </p>
          <a href="#services" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Explore Our Offerings
          </a>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">About Karma Zero Yoga</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Karma Zero Yoga, we believe that yoga is for everyone. Our mission is to create a welcoming and supportive environment where individuals of all levels can explore the transformative power of yoga. We connect breath with alignment, and mindful movement with karmic well-being.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our experienced instructors are dedicated to guiding you through practices that enhance physical strength, mental clarity, and emotional balance. Whether you're a complete beginner or an experienced yogi, we're here to help you deepen your practice and find serenity in your daily life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 md:px-12 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Private Yoga Sessions</h3>
              <p className="text-gray-700">
                Tailored one-on-one sessions designed to meet your individual goals, whether it's mastering specific poses, injury recovery, or deep relaxation.
              </p>
              <p className="text-purple-600 font-bold mt-4">$120 - $160 per session</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.189-1.26-0.51-1.802M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.189-1.26.51-1.802M12 14a4 4 0 100-8 4 4 0 000 8zm0 0v.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Studio Classes</h3>
              <p className="text-gray-700">
                Partnering with Skanda Yoga to bring an Ashtanga based, Power Vinyasa. Build your daily practice in studio.
              </p>
              <p className="text-purple-600 font-bold mt-4">Drop in $30 per class, monthly subscriptions available</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Workshops & Retreats</h3>
              <p className="text-gray-700">
                Deepen your practice with our specialized workshops and immersive retreats, focusing on specific aspects of yoga and wellness.
              </p>
              <p className="text-purple-600 font-bold mt-4">Under development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-10">Class Schedule</h2>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="py-3 px-4 text-left">Day</th>
                  <th className="py-3 px-4 text-left">Time</th>
                  <th className="py-3 px-4 text-left">Class Name</th>
                  <th className="py-3 px-4 text-left">Instructor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">Monday</td>
                  <td className="py-3 px-4">6:30 PM - 7:30 PM</td>
                  <td className="py-3 px-4"><a href="https://firstmiami.churchcenter.com/calendar/event/172400079" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">Brickell Soul</a>, Vinyasa</td>
                  <td className="py-3 px-4">Greg M.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50">
                  <td className="py-3 px-4">Tuesday</td>
                  <td className="py-3 px-4">8:00 PM - 9:15 PM</td>
                  <td className="py-3 px-4"><a href="https://www.skandayoga.com/classes-schedule/" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">Skanda</a>, Level 1</td>
                  <td className="py-3 px-4">Greg M.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-gray-600">
            <p>*Private sessions are available by appointment.</p>
            <p>
              <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1EQgvCM10sxu57DSoDdtclFS2szSmTzpz5beLK4NYECpxVFOmvPZfm_sp-SXJ_FVdCfGOIPRo9?gv=true" target="_blank" rel="noopener noreferrer" className="text-purple-700 underline hover:text-purple-900">Book your 15 minute, no-commitment, introductory call here.</a>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 md:px-12 bg-gradient-to-l from-purple-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-10">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <p className="text-lg italic text-gray-700 mb-4">
                "Whoohoo you are an excellent teacher!"
              </p>
              <p className="font-semibold text-gray-900">- Jason P.</p>
              <p className="text-sm text-gray-600">Private Session Client</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <p className="text-lg italic text-gray-700 mb-4">
                "..."
              </p>
              <p className="font-semibold text-gray-900">- TBD</p>
              <p className="text-sm text-gray-600">Group Class Member</p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
              <p className="text-lg italic text-gray-700 mb-4">
                "..."
              </p>
              <p className="font-semibold text-gray-900">- TBD</p>
              <p className="text-sm text-gray-600">Private Session Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Venmo Payments Section (Placeholder) */}
      <section id="payments" className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">Payment Information</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8"></p>
          <div className="bg-purple-50 p-8 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">How to Pay with Venmo</h3>
            <p className="text-gray-700 mb-4">
              To make a payment for private session, please use our Venmo handle:
            </p>
            <p className="text-3xl font-bold text-purple-800 mb-6">@KarmaZeroYoga</p>
            <p className="text-gray-700 mb-4">
              You can also scan the QR code below using your Venmo app:
            </p>
            <img
              src="./img/venmo_qrcode.png"
              alt="Venmo QR Code"
              className="mx-auto mb-6 rounded-lg shadow-md w-52 h-52 object-contain"      
            />
            <p className="text-sm text-gray-600">
              Please include your name and the service you are paying for in the Venmo note.
            </p>
            <p className="mt-6 text-purple-700 font-semibold"></p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-12 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-10">Contact Us</h2>
          <form onSubmit={handleContactSubmit} className="bg-white p-8 rounded-lg shadow-xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
            <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@example.com"
                required
                value={form.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your message here..."
                required
                value={form.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 md:px-12">
        <div className="container mx-auto text-center md:flex md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Karma Zero Yoga</h3>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex justify-center space-x-6">
            <button
              className="text-gray-400 hover:text-white transition-colors underline"
              onClick={() => setShowPrivacy(true)}
            >
              Privacy Policy
            </button>
            <button
              className="text-gray-400 hover:text-white transition-colors underline"
              onClick={() => setShowTerms(true)}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
