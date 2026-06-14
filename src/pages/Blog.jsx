import MainLayout from "../components/layouts/MainLayout";
import BlogImgOne from "../assets/images/BlogImgOne.png";
import BlogImgTwo from "../assets/images/BlogImgTwo.png";
import { FiArrowUpRight } from "react-icons/fi";
import SolutionCustomImg from "../assets/images/SolutionCustomImg.jpg";

const blogs = [
  {
    image: BlogImgOne,
    title: "Sustainable Practices Reducing Waste in Industrial Production",
  },
  {
    image: BlogImgTwo,
    title: "Advanced Robotics Revolutionizing Industrial Workflows",
  },
  {
    image: null,
    title: "Top Benefits of the Robotics in Manufacturing",
  },
  {
    image: null,
    title: "Leveraging Data Analytics for Smarter Production",
  },
  {
    image: null,
    title: "Reducing Operational Costs Through Automation",
  },
  {
    image: null,
    title: "The Advantages of Customized Manufacturing Solutions",
  },
];

const Blog = () => {
  return (
    <MainLayout>
      <section
        className="relative h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${SolutionCustomImg})`,
        }}
      >
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 h-full flex items-center">
          <div>
            <h1 className="text-white text-[58px] font-light">
              Latest <span>Post</span>
            </h1>

            <div className="flex items-center gap-2 mt-3 text-sm cursor-pointer">
              <span className="text-white">Home</span>
              <span className="text-[#FF9900]">•</span>
              <span className="text-[#f59d0c]">Blog</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {blogs.map((blog, index) => (
              <div key={index}>
                {/* Fixed image area */}
                <div className="h-[250px] mb-5">
                  {blog.image && (
                    <div className="overflow-hidden rounded-[30px] h-full">
                      <img
                        src={blog.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <h3 className="text-[20px] leading-8 font-medium text-[#222222]">
                  {blog.title}
                </h3>

                <button className="flex items-center text-[16px] gap-2 mt-4 text-[#FF9900] text-sm cursor-pointer">
                  Read More
                  <FiArrowUpRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
