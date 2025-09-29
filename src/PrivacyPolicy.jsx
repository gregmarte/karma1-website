import React from "react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 font-inter text-gray-800 py-16 px-6 md:px-12">
    <div className="container mx-auto max-w-3xl bg-white p-8 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">Last updated: September 29, 2025</p>
      <p className="mb-4 text-gray-700">Karma Zero Yoga ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
      <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>Personal Information: Name, email address, and any information you provide via our contact form.</li>
        <li>Usage Data: Information about how you use our website (e.g., pages visited, browser type).</li>
      </ul>
      <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>To respond to your inquiries and provide customer support.</li>
        <li>To improve our website and services.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-2">Information Sharing</h2>
      <p className="mb-4 text-gray-700">We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website, as required by law, or to protect our rights.</p>
      <h2 className="text-2xl font-semibold text-purple-700 mt-8 mb-2">Data Security</h2>
      <p className="mt-8 text-gray-500 text-sm text-center">This Privacy Policy may be updated from time to time. Please review this page periodically for changes.</p>
    </div>
  </div>
);

export default PrivacyPolicy;
