import React from "react";

const WorkExperienceList = () => {
  const experiences = [
    {
      jobTitle: "IT SUPPORT ASSISTANT",
      company: "Myat Taw Win Hospital",
      duration: "September 25 2025 - Present",
      description:
        "Provided technical support for hospital staff, maintained computer systems and networks, and ensured smooth IT operations for daily hospital activities.",
    },
    {
      jobTitle: "Mechanical and Electrical Helper (M&E Helper)",
      company: "Myat Taw Win Hospital",
      duration: "November 2024 - April 2025",
      description:
        "Assisted in installation, maintenance, and repair of hospital electrical and mechanical systems, ensuring safe and efficient operations.",
    },
    {
      jobTitle: "Patient Care Messanger",
      company: "Myat Taw Win Hospital",
      duration: "February 2022 - November 2024",
      description:
        "Patient Transport app for managing and tracking patient transfers efficiently and safely.",
    },
    {
      jobTitle: "Not Your Vibe Founder",
      company: "Not Your Vibe Media",
      duration: "January 2025 - March 2025",
      description:
        "Started a small EDM media project. Managed operations, content creation, and social media promotion for artists.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto my-12 px-4" id="experience">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">Work Experience</h2>

      <ul className="space-y-6">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="border-l-2 border-blue-500 pl-6 p-4 rounded-lg bg-black/50 backdrop-blur-md transition transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{exp.jobTitle}</h3>
            <p className="text-gray-300 font-medium mb-1">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-2">{exp.duration}</p>
            <p className="text-gray-200">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperienceList;
