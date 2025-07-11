import React from "react";

const TermsOfService = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 font-inter text-gray-800 py-16 px-6 md:px-12">
    <div className="container mx-auto max-w-3xl bg-white p-8 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">Terms of Service</h1>
      <p className="mb-4 text-gray-700">Last updated: July 10, 2025</p>
      <p className="mb-4 text-gray-700">Welcome to Karma Zero Yoga. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.</p>
      <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-2">Use of Services</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>You must be at least 18 years old or have parental consent to use our services.</li>
        <li>You agree to provide accurate information when using our contact form or booking services.</li>
        <li>All content is for informational purposes only and is not a substitute for professional medical advice.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-2">Payments & Cancellations</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>All payments for private sessions, classes, or workshops are due in advance unless otherwise agreed.</li>
        <li>Cancellations must be made at least 24 hours in advance for a full refund.</li>
        <li>No-shows or late cancellations may be subject to a fee.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-2">Intellectual Property</h2>
      <p className="mb-4 text-gray-700">All* content on this website, including text, images, and logos, is the property of Karma Zero Yoga and may not be used without permission. *The lotus image not ours and is copyright-free.</p>
      <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4 text-gray-700">Karma Zero Yoga is not liable for any injuries or damages resulting from participation in our classes or use of our website. Always consult a physician before beginning any exercise program.</p>
      <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-2">Changes to Terms</h2>
      <p className="mb-4 text-gray-700">We may update these Terms of Service from time to time. Continued use of our website and services constitutes acceptance of the revised terms.</p>
      <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-2">Contact Us</h2>
      <p className="mb-4 text-gray-700">If you have any questions about these Terms, please contact us at <a href="mailto:first.last+terms072025@gmail.com" className="text-purple-700 underline">first.last+terms072025@gmail.com</a>.</p>
      <p className="mt-8 text-gray-500 text-sm text-center">Thank you for choosing Karma Zero Yoga.</p>
    </div>
  </div>
);

export default TermsOfService;
