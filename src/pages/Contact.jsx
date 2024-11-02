// pages/Contact.js
import React from "react";

function Contact() {
  return (
    <div className="contact-page p-4">
      <h1 className="text-2xl mb-4">Contact Us</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 p-2 block w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            className="mt-1 p-2 block w-full rounded-md border-gray-300"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
