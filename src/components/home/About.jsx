import Container from "../common/Container";
import Mession from "../../assets/images/Mession.jpg";
import AboutImage from "../../assets/images/AboutImage.png";
import { RiSettings4Line } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import SettingRight from "../../assets/images/SettingRight.png";

const About = () => {
  return (
    <>
      <div className="relative">
        <section className="about-sidemoving py-24 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Images */}
              <div className="relative">
                <img
                  src={Mession}
                  className="image-movetotop w-[180px] md:w-[220px] lg:w-[220px] rounded-2xl ml-0 md:ml-8 lg:ml-18 mt-0 md:mt-[-80px] lg:mt-[-180px]"
                  alt=""
                />
                <img
                  src={AboutImage}
                  className="bigimage-movetotop w-[180px] h-[240px] md:w-[250px] md:h-[320px] lg:w-74 lg:h-90 rounded-2xl absolute top-10 md:top-0 lg:top-[-60px] left-24 md:left-40 lg:left-60 shadow-xl border-l-8 border-t-4 border-white"
                  alt=""
                />
                <div className="year-res absolute top-[-20px] md:top-[-60px] lg:top-[-128px]">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 ml-28 md:ml-48 lg:ml-80">
                    25+{" "}
                  </p>
                  <p className="text-[#222222] text-sm md:text-base lg:text-lg ml-40 md:ml-60 lg:ml-100 mt-[-30px] md:mt-[-40px] lg:mt-[-50px]">
                    Years Of <br /> Experience
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className=" whole-setting">
                <span className="about-setting absolute flex text-[#070707] cursor-pointer uppercase text-xs tracking-widest gap-2">
                  <RiSettings4Line size={20} className="text-orange-500 " />{" "}
                  About US
                </span>
                <h2 className="heading-belowhtwo text-3xl md:text-4xl lg:text-5xl text-[#222222] mt-3 leading-tight">
                  Building quality through
                  <br />
                  <span className="font-semibold"> industrial innovation</span>
                </h2>

                <p className="parapage-indutrial text-gray-500 mt-5 text-sm md:text-base leading-7">
                  At the heart of our operations is a commitment to delivering
                  superior products through cutting-edge technology and
                  innovative processes.
                </p>

                <div className="space-y-4 mt-8 relative">
                  <div className="flex gap-2">
                    <img src={SettingRight} alt="" />
                    Sustainable Manufacturing
                  </div>

                  <div className="flex gap-2">
                    <img src={SettingRight} alt="" /> Advanced Automation
                  </div>

                  <div className="flex gap-2">
                    <img src={SettingRight} alt="" /> Efficient Production
                    Processes
                  </div>

                  <div className="flex gap-2">
                    <img src={SettingRight} alt="" /> Reliable Delivery
                    Services{" "}
                  </div>
                </div>
                <div className="more-button mt-8 h-11 inline-flex items-center bg-[#FF9900] p-0.5 rounded-md cursor-pointer">
                  <button className="bg-white text-black px-5 h-10 font-medium rounded-md cursor-pointer">
                    Learn More
                  </button>

                  <div className="w-10 h-12 flex items-center justify-center">
                    <MdArrowOutward className="text-white text-xl" />
                  </div>
                </div>
                <div className="reating-card mt-8 ml-10 flex items-center gap-6">
                  {/* Rating Card */}
                  <div className="absolute w-[270.5px] h-[255.3px] flex bg-gray-100 rounded-3xl ml-60 px-8 py-6 text-center mb-[250px]">
                    <div className="flex-1 justify-center mt-30 gap-1 text-orange-500">
                      ★ ★ ★ ★ ★
                      <p className="mt-3 text-xs text-gray-500 uppercase tracking-wide">
                        15.5k Genuine Rating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default About;
