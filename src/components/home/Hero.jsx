import ImageBanner from "../../assets/images/ImageBanner.png";
import Container from "../common/Container";
import { MdArrowOutward } from "react-icons/md";
import SettingRight from "../../assets/images/SettingRight.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${ImageBanner})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <Container>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="title-navbar max-w-xl text-white mt-[-120px] md:mt-[-180px] lg:mt-[-250px] px-4 md:px-6 lg:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Excellence innovating
            </h1>

            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold mt-4 md:mt-6 leading-tight">
              industry for today
            </h3>

            <p className="titlepara-content mt-4 md:mt-6 text-gray-200 text-sm md:text-base leading-7">
              At the heart of our operations is a commitment to delivering
              superior products through cutting-edge technology and innovative
              processes.
            </p>

            <div className="navbar-Button relative mt-6 md:mt-8 inline-flex items-center bg-[#FF9900] p-0.5 rounded-md cursor-pointer">
              <button className="bg-white text-black px-5 h-12 font-medium rounded-md cursor-pointer">
                Explore More
              </button>

              <div className="w-10 h-12 flex items-center justify-center">
                <MdArrowOutward className="text-white text-xl" />
              </div>
            </div>
            <div className="absolute bottom-6 md:bottom-10 lg:bottom-14 left-0 right-0 px-4">
              {/* Top Border */}
              <div className="border-top max-w-5xl mx-auto border-t border-white/20 pt-8 ">
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-4 md:gap-10 lg:gap-20 text-white text-sm">
                  <div className="tick-icon flex items-center gap-2 cursor-pointer text-xs md:text-sm">
                    <img src={SettingRight} alt="" className="text-[#FF9900]" />
                    <span>Advanced Manufacturing Solutions</span>
                  </div>
                  <div className="tick-icon flex items-center gap-2 cursor-pointer text-xs md:text-sm">
                    <img src={SettingRight} alt="" className="text-[#FF9900]" />
                    <span>Quality Assurance Systems</span>
                  </div>
                  <div className="tick-icon flex items-center gap-2 cursor-pointer text-xs md:text-sm">
                    <img src={SettingRight} alt="" className="text-[#FF9900]" />
                    <span>State-of-the-Art Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
