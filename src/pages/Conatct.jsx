import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "message") setMessage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await emailjs.send(
        "service_i7tle2e", // Replace with your Service ID
        "template_k75jrfr", // Replace with your Template ID
        {
          to_name: "Recipient Name", // You can hardcode your name or website name here
          from_name: name,
          user_name: name, // Add user_name
          user_email: email, // Add user_email
          message: message,
        },
        "oeP2CdHS4lol_O1Ab" // Replace with your Public Key
      );
      console.log("SUCCESS!", response.text);
      setIsSubmitting(false);
      setSubmissionResult({
        success: true,
        message: "Message sent successfully!",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("FAILED...", error);
      setIsSubmitting(false);
      setSubmissionResult({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <>
      <div className=" py-8">
        <h2 className="text-center text-2xl font-bold mt-6 md:mt-8 md:text-3xl">
          CONTACT
        </h2>
        <p className="text-left text-sm mt-5 max-w-2xl mx-auto px-4 md:text-base">
          Located on Alcester Road in the heart of beautiful Moseley village,
          Lemar is ready to welcome you. Reach out to us for bookings,
          enquiries, or more information!
        </p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto px-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-[[#EAD9C5]] text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="shadow appearance-none border-3 rounded w-full py-2 px-3 text-[[#EAD9C5]] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[[#EAD9C5]] text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="shadow appearance-none border-3 rounded w-full py-2 px-3 text-[[#EAD9C5]] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-[[#EAD9C5]] text-sm font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              rows="4"
              className="shadow appearance-none border-3 rounded w-full py-2 px-3 text-[[#EAD9C5]] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="border-2 p-2">
              <button
                className={`bg-tan-100 border-y-2 border-[#EAD9C5] px-8 py-2 font-bold  rounded-none focus:outline-none hover:bg-tan-200 transition duration-300 text-sm ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send "}
              </button>
            </div>
          </div>
          {submissionResult && (
            <div
              className={`mt-4 text-sm text-center ${
                submissionResult.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {submissionResult.message}
            </div>
          )}
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8 justify-center items-start mt-8  px-4 max-w-3xl lg:max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold mt-6 py-2 md:text-2xl">
            OPENING 
          </h2>
          <p className="text-base font-bold mt-5 whitespace-pre-line">
            Mon – Sun: 12pm – 10pm
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mt-6 py-2 md:text-2xl">ADDRESS</h2>
          <p className="text-base font-bold mt-5 whitespace-pre-line">
            120-126 Alcester Road, Moseley, Birmingham, B13 8EE
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mt-6 py-2 md:text-2xl">CONTACT</h2>
          <p className="text-base font-bold mt-5 whitespace-pre-line">
            info@Lemar.co.uk +44 (0) 121 714 8328
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
