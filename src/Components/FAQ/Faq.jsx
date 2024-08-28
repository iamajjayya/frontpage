import  { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <button
        className="flex text-2xl m-5"
        onClick={onClick}
      >
        <span className="font-semibold">{title}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600 text-xl">
          {content}
        </div>
      )}
    </div>
  );
};

const AccordianData = [
    {
        title: 'How can I post a job vacancy for free?',
        content: 'Post a job for free online using Unstop by clicking on the “Host Events” button at the top right corner. Select the Job or Internship you want to post about.'
      },
      {
        title: 'Is there any fee for posting a job?',
        content: 'This is a free job posting platform. On Unstop you don’t have to pay anything to list your job/internship vacancies. Post a job for free online right away!'
      },
      {
        title: 'What makes Unstop a better platform for free job posting compared to other websites?',
        content: 'When you post jobs on Unstop, you get access to the most competitive candidates who participate in quizzes, hackathons, innovation and business challenges regularly. 11 Mn+ students and working professionals are waiting for you at Unstop.'
      },
      {
        title: 'How do I find candidates to hire?',
        content: 'As soon as you publish your free job posting on Unstop you can find candidates to hire. The intuitive and easy-to-use dashboard will give you access to all applicants and their assessment scores. For more help, do watch our “How to” videos here.'
      },
      {
        title: 'What happens after I publish my job posting?',
        content: 'Your free job posting, when live on Unstop appears to our 11 Mn+ userbase. It appears in searches and also is shared in newsletters and mailers. When applicants finish their application, an email is triggered to you. Roll out assessments, conduct interviews and hire your dream team. All from a single dashboard, available with your free job posting at Unstop.'
      },
      {
        title: 'How long will it take for my job posting to go live?',
        content: 'At Unstop, when you post a job, our team of moderators reviews and approves the listing before it is made public. This is to ensure that your brand puts the best foot forward and your applicants have the best in class experience.'
      },
      {
        title: 'How to remove a job posting from Unstop?',
        content: 'Once the last date to apply to the job post has passed, your job posting will stop appearing in searches on the Unstop website.'
      },
      {
        title: 'How can we hire candidates for free?',
        content: 'Post your job or internship on Unstop without any type of fees involved. Once you are done with adding all the details and publishing your free job posting, it will be live and open to the public within 24 hours. Use the intuitive listing panel and dashboard to conduct assessments and evaluate candidates. Once fully satisfied, roll out offers and build your dream team.'
      },
      {
        title: 'How can I post a job on behalf of my company?',
        content: 'Use your official email id to post a job on behalf of your company. Choose your organisation name from the drop-down during the listing process. It’s that simple to post a free job on Unstop on behalf of your organization.'
      },
      {
        title: 'Can I promote jobs for free?',
        content: 'At Unstop when you post a job for free online, it gets promoted through newsletter inclusions featured sections on the website pages. For more promotion options you can reach out at coffee@unstop.com'
      }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedData = showMore ? AccordianData : AccordianData.slice(0, 5);

  return (
    <div className="ml-40 mt-10">
      <h1 className="text-5xl text-[#1c4980] font-medium">Frequently Asked Questions</h1>
      <p className="text-[#343232] text-xl font-medium mt-4 mb-5">Have a question for us? Find the answers here!</p>
      {displayedData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
      <button 
        className="text-blue-600 text-xl font-semibold mt-5"
        onClick={toggleShowMore}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default Faq;
