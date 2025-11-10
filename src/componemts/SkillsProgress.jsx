import React from "react";

const SkillsProgress = () => {
  // Array of skills
  const skills = [
    { name: "HTML", percentage: 70 },
    { name: "CSS", percentage: 70 },
     { name: "Javascript", percentage: 60 },
    { name: "Booytsrap", percentage: 70 },
     { name: "Tailwind CSS", percentage: 60 },
    { name: "Laravel", percentage: 70 },
    { name: "PHP", percentage: 60 },
    { name: "React", percentage: 60 },
    { name: "MySQL", percentage: 65 },
  
   

  ];

  return (
    <section id="progressBar" className="relative max-w-4xl mx-auto my-12 px-4 py-8 bg-black/50 backdrop-blur-md rounded-2xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
        My Skills
      </h2>

      {/* Progress bars */}
      {skills.map((skill, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-white font-medium">{skill.name}</span>
            <span className="text-white font-medium">{skill.percentage}%</span>
          </div>
          <div className="w-full bg-gray-700/50 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all duration-1000"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsProgress;
