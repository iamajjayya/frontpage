import React, { useState } from "react";

const data = [
  {
    title: "Attract the right audience through your free job posting",
    content:
      "When you post a job vacancy on Unstop, it reaches 11 Mn+ students and working professionals, who periodically engage in testing and upgrading their skill set. This brings your free job posting face to face with the right audience and also helps cut through the noise that one encounters on mass posting platforms.",
  },
  {
    title:
      "Job listing, applications, assessments, interviews and more all on one platform",
    content:
      "The only platform that enables you to post your job to the right audience, assess and shortlist applicants, comes with an in-built communication panel and an offer roll out feature. Listing your job vacancy on Unstop gives you an end-to-end solution to all your hiring needs.",
  },
  {
    title: "A wide range of assessments to zero in on the perfect candidates",
    content:
      "Choose from a comprehensive list of tech and non-tech assessments to assess and hire the right candidates. These assessments are accurate and can be set up with just a few clicks.",
  },
  {
    title: "Build a strong employer brand",
    content:
      "Only at Unstop, your organisation gets a no-code custom microsite and a dedicated page with all your information. This empowers the applicants of your free job posting to understand your organisation and make a conscious decision while applying to your job vacancy. A Recruiter Diary is one of the key differentiators when it comes to posting jobs online.",
  },
];

const Demo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h1>
        Why post jobs and internships for <span>free</span> on Unstop?
      </h1>
      <p>
        Post your job vacancy and close your hiring in record time with minimum
        effort. Here is how our solutions can speed up your hiring:
      </p>
      <div className="flex">
        <div>
          {data.map((item, index) => (
            <div key={index} className="border">
              <div onClick={() => handleToggle(index)}>
                <h3 className="font-semibold cursor-pointer">{item.title}</h3>
              </div>
              <div
                className={`px-4 pb-4 text-gray-600 text-xl ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <video
            width="640"
            height="385"
            controls
            src="https://d8it4huxumps7.cloudfront.net/files/66c876259ddca_ji_video.mp4"
            alt="demo video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <button>Request Demo</button>
    </div>
  );
};

export default Demo;
