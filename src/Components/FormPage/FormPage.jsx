import { useState } from "react";

const FormPage = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [position, setPosition] = useState("");
  const [candidates, setCandidates] = useState(1);
  

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 py-10 px-4">
      {/* Text Section */}
      <div className="text-center md:text-left mb-10 md:mb-0 md:mr-20">
        <h1 className="text-4xl md:text-6xl text-[#3e3e3e] font-bold">
          Reach right <br />
          Candidates through <br />
          <span className="text-[#1c4980]">FREE Job postings</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Hire from a talent pool of 11 Mn+ students and working professionals.
        </p>
        <button className="mt-4 text-lg bg-[#0073e6] text-white p-3 font-medium rounded">
          List Jobs/Internships
        </button>
      </div>

      {/* Form Section */}
      <div className="flex flex-col w-full max-w-2xl bg-white border-2 border-gray-300 shadow-lg rounded-md p-12">
        <form>
          {/* Name and Company in a single row */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="flex-1">
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
            <div className="flex-1">
              <label htmlFor="company" className="block font-medium">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter Your Company"
                className="border-2 border-gray-300 mt-1 p-3 rounded-md w-full"
                required
              />
            </div>
          </div>

          {/* Phone Number and Email id in a single row */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="flex-1">
              <label htmlFor="phonenumber" className="block font-medium">
                Phone Number
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="countrycode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  placeholder="+1"
                  className="border-2 border-gray-300 p-3 rounded-md w-20"
                  required
                />
                <input
                  type="text"
                  id="phonenumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter 10-digit Phone Number"
                  className="border-2 border-gray-300 ml-2 p-3 rounded-md flex-1"
                  required
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="emailid" className="block font-medium">
                Email id <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailid"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Official Email ID"
                className="border-2 border-gray-300 mt-1 p-3 rounded-md w-full"
                required
              />
            </div>
          </div>

          {/* Designation */}
          <div className="mt-4">
            <label htmlFor="designation" className="block font-medium">
              Your Designation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder="Ex: Recruiter"
              className="border-2 border-gray-300 mt-1 p-3 rounded-md w-full"
              required
            />
          </div>

          {/* Position */}
          <div className="mt-4">
            <label htmlFor="position" className="block font-medium">
              What Position are you hiring for?
            </label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Ex: Product Manager"
              className="border-2 border-gray-300 mt-1 p-3 rounded-md w-full"
            />
          </div>

          {/* Candidates */}
          <div className="mt-4">
            <label htmlFor="candidates" className="block font-medium">
              How many candidates? <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="candidates"
              value={candidates}
              onChange={(e) => setCandidates(Number(e.target.value))}
              placeholder="Ex: 4"
              className="border-2 border-gray-300 mt-1 p-3 rounded-md w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-[#0073e6] text-white p-3 font-medium rounded"
            >
              Submit Your Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
