import React from 'react';

const ProjectsSection = () => {
  // Sample projects array
  const projects = [
    {
      id: 1,
      title: "Point of Sell",
      desc: "Dynamic POS system built with Laravel for smooth sales operations.",
     demo : "https://github.com/izumi-dev98/pos_of_sell_laravel",
      image: "https://agentestudio.com/uploads/ckeditor/pictures/2245/content_self-service_POS_8.png",
      badge: "Laravel"
    },
    {
      id: 2,
      title: "React Movies API Channel",
      desc: "Movie listing web app using React and external APIs.",
      demo :"https://github.com/izumi-dev98/react_movies_api",
      image: "https://reactjsexample.com/content/images/2020/01/React-MovieCards.jpg",
      badge: "React"
    },
    {
      id: 3,
      title: "Ramdom Poem",
      desc: "Myanmar Poem Random Using Javascript.",
      demo : "https://randompoems.vercel.app/",
      image: "https://cdn.dribbble.com/userupload/12685068/file/original-ac6494f4bab98a867e54b3e9b078b30c.png?resize=400x0",
      badge: "JavaScript"
    },
    {
      id: 4,
      title: "Online Job Finder Laravel",
      desc: "One Months One Project Team 7 creation API For Online Job Finder.",
      demo : "https://github.com/one-project-one-month/online-job-finder-laravel",
      image: "https://themewagon.com/wp-content/uploads/2020/11/jobfinder-1.jpg",
      badge: "Laravel"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto my-12 px-4" id='projects'>
      <h2 className="text-3xl font-bold mb-8 text-white text-center">My Projects</h2>

      {/* Grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-black/50 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Project Image */}
            <div className="relative">
              <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
              />
              {project.badge && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  {project.badge}
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                
                <a href={project.demo} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition">
                  Soure Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
