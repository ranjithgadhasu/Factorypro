import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import SolutionCustomImg from "../assets/images/SolutionCustomImg.jpg";
import ProjeImgOne from "../assets/images/ProjectOne.png";
import ProjeImgTwo from "../assets/images/ProjectTwo.png";
import ProjeImgThree from "../assets/images/ProjectThree.png";
import ProjeImgFour from "../assets/images/ProjeImgFour.png";

const projects = [
  {
    image: ProjeImgOne,
    category: "Development",
    title: "Total Quality Management Implementation",
  },
  {
    image: ProjeImgTwo,
    category: "Automation",
    title: "Advanced Research In Material Science",
  },
  {
    image: ProjeImgThree,
    category: "Infrastructure",
    title: "Workplace Safety Enhancement Initiative",
  },
  {
    image: ProjeImgFour,
    category: "Infrastructure",
    title: "Robotic Process Automation Deployment",
  },
  {
    image: null,
    category: "Development",
    title: "Energy-Efficient Manufacturing Systems",
  },
  {
    image: null,
    category: "Automation",
    title: "Redesigning Factory Layouts For Efficiency",
  },
];

const categories = [
  "All",
  "Automation",
  "Development",
  "Infrastructure",
  "Manufacturing",
  "Sustainability",
];
const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <MainLayout>
      <section
        className="relative h-[380px] lg:h-[420px] overflow-hidden"
        style={{
          backgroundImage: `url(${SolutionCustomImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}

        {/* Left Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        {/* Top Border Line */}
        <div className="absolute top-[70px] left-0 w-full border-t border-white/10"></div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 h-full flex items-center">
          <div className="mt-16">
            <h1 className="text-white text-[52px] md:text-[64px] leading-none font-light">
              Our <span>Project</span>
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-5 text-sm">
              <span className="text-white">Home</span>

              <span className="w-1 h-1 rounded-full bg-[#f59d0c]"></span>

              <span className="text-[#f59d0c] font-medium">Projects</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Categories */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-14 text-sm cursor-pointer">
            {categories.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <button
                  onClick={() => setActiveTab(item)}
                  className={`transition duration-300 ${
                    activeTab === item ? "text-[#f59d0c]" : "text-[#222222]"
                  }`}
                >
                  {item}
                </button>
                {index !== categories.length - 1 && (
                  <span className="text-[#222222]">/</span>
                )}
              </div>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
            {projects.map((project, index) => (
              <div key={index}>
                {/* Image Area */}
                <div className="h-[300px] mb-5">
                  {project.image ? (
                    <div className="relative h-full overflow-hidden rounded-[28px] group cursor-pointer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* Category Badge */}
                      <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-[#666] text-[11px] px-3 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                  ) : (
                    <div className="h-full flex items-start">
                      {/* Empty Space Card Badge */}
                      <span className="ml-12 cursor-pointer bg-[#ececec] h-7 w-25 text-[#FFFFFF] text-[11px] px-4 py-1 rounded-md">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-center text-[18px] leading-7 font-medium text-[#222] max-w-[420px] mx-auto">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
