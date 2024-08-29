import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [feedback, setFeedback] = useState("");

  return (
    <div className="flex flex-col gap-6 md:flex-row justify-center items-center min-h-screen bg-gray-100 py-10 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl">
        {/* Form Section */}
        <div className="flex flex-col w-full md:w-1/2 bg-white border-2 border-gray-300 shadow-lg rounded-md p-8">
          <form>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                className="border-2 border-gray-300 mt-1 p-3 rounded-md w-full"
                required
              />
            </div>

            {/* Organisation */}
            <div className="mb-4">
              <label htmlFor="organisation" className="block font-medium">
                Organisation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="organisation"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Enter Your Organisation"
                className="border-2 border-gray-300 mt-1 p-3 rounded-md w-full"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium">
                Official Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter an Email"
                className="border-2 border-gray-300 mt-1 p-3 rounded-md w-full"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block font-medium">
                Mobile No. <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-2 border-gray-300 mt-1 p-3 rounded-md w-full"
                required
              />
            </div>

            {/* Feedback */}
            <div className="mb-4">
              <label className="block font-medium">
                What's on Your Mind? <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter Your Feedback"
                className="border-2 border-gray-300 mt-1 p-3 rounded-md w-full"
                required
              ></textarea>
            </div>

            {/* Radio Buttons */}
            <div className="mb-6">
              <label className="block font-medium">
                You want to connect with us for:
              </label>
              <div className="flex flex-col space-y-2">
                <div>
                  <input
                    type="radio"
                    id="option1"
                    name="connect"
                    value="option1"
                    defaultChecked
                  />
                  <label htmlFor="option1" className="ml-2">
                    Support
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option2"
                    name="connect"
                    value="option2"
                  />
                  <label htmlFor="option2" className="ml-2">
                    Sales (Demos & Pricing)
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="option3"
                    name="connect"
                    value="option3"
                  />
                  <label htmlFor="option3" className="ml-2">
                    Partnership
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#0073e6] text-white p-3 font-medium rounded"
              >
                Submit Your Details
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col w-full md:w-1/2 bg-[#1c4980] p-8 rounded-lg text-center md:text-left">
          <h1 className="text-4xl text-[#f6f1f1] font-bold">
            Contact Information
          </h1>
          <div className="mt-8">
            <div className="flex text-white font-medium gap-4 items-start mb-10">
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/inquiries-icon.png?d=120x120"
                alt="inquiries"
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-lg mb-2">Inquiries</h2>
                <div>
                  <h4 className="font-semibold">Sales Inquiries</h4>
                  <p>sales@unstop.com, +91 9311777388</p>
                  <p>(Monday to Friday, 9 AM to 6 PM)</p>
                </div>
              </div>
            </div>

            <div className="flex text-white font-medium gap-4 items-start mb-10">
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/addresses-icon.png?d=120x120"
                alt="addresses"
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-lg mb-2">Our Addresses</h2>
                <div>
                  <h4 className="font-semibold">
                    Delhi Office: Unstop, Somdutt Chamber 1,5, Bhikaji Cama Place, Rama Krishna Puram, New Delhi 110066
                  </h4>
                  <p>
                    Registered Office: Unstop c/o FLIVE Consulting Private
                    Limited, #6317, B9, Vasant Kunj, New Delhi - 110070
                  </p>
                </div>
              </div>
            </div>

            <div className="flex text-white font-medium gap-4 items-start">
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/hiring/company-icon.png?d=120x120"
                alt="company"
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-lg mb-2">FLIVE Consulting Pvt. Ltd.</h2>
                <div>
                  <p>GST Number: 07AADCF7366C1ZP</p>
                  <p>PAN Number: AADCF7366C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
