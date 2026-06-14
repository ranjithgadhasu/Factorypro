import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import SolutionCustomImg from "../assets/images/SolutionCustomImg.jpg";
import { FiArrowUpRight, FiPhone, FiMail } from "react-icons/fi";
import RoboCustom from "../assets/images/RoboCustom.png";
import HelpSetting from "../assets/images/HelpSetting.jpg";

import CoreImgOne from "../assets/icons/CoreImgOne.png";
import ContainerImgTwo from "../assets/icons/ContainerImgTwo.png";
import ContainerImgThree from "../assets/icons/ContainerImgThree.png";
import ContainerImgFour from "../assets/icons/ContainerImgFour.png";
import PlaningRoboOne from "../assets/images/PlaningRoboOne.png";
import PlaningRoboTwo from "../assets/images/PlaningRoboTwo.png";
import SettingRight from "../assets/images/SettingRight.png";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "What industries do you serve?",
    answer:
      "We serve manufacturing, automotive, healthcare, logistics, food processing, and many other industries with customized automation solutions.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.",
  },
  {
    question: "What sustainability practices do you follow?",
    answer:
      "We focus on energy-efficient processes, waste reduction, and environmentally responsible manufacturing practices.",
  },
  {
    question: "Do you offer customized solutions?",
    answer:
      "Yes, we provide fully customized solutions tailored to your business requirements and operational goals.",
  },
  {
    question: "How do you handle safety in the workplace?",
    answer:
      "We strictly follow industry safety regulations, conduct regular training, and maintain comprehensive safety protocols.",
  },
];

const planningItems = [
  "Needs Assessment",
  "Timeline and Milestones",
  "Feasibility and ROI",
  "Technology Selection",
  "Process Optimization",
  "Scalability Planning",
];

const features = [
  {
    icon: CoreImgOne,
    title: "Enhanced Efficiency",
    description:
      "Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.",
  },
  {
    icon: ContainerImgFour,
    title: "Enhanced Efficiency",
    description:
      "Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.",
  },
  {
    icon: ContainerImgTwo,
    title: "Enhanced Efficiency",
    description:
      "Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.",
  },
  {
    icon: ContainerImgThree,
    title: "Enhanced Efficiency",
    description:
      "Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.",
  },
];

const SolutionCustom = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    "Custom Manufacturing Solution",
    "Industrial Automation And Robotics",
    "Product Design And Prototyping",
    "Equipment Maintenance Support",
    "Research And Development",
  ];

  return (
    <MainLayout>
      <section
        className="relative h-[380px] lg:h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${SolutionCustomImg})`,
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 h-full flex items-center ml-62">
          <div class="cunstom-solution">
            <h1 className="text-white text-[42px]  md:text-[53px] font-light leading-tight">
              Custom Manufacturing
              <span className="font-semibold"> Solution</span>
            </h1>

            <div className="flex items-center gap-3 mt-4 text-sm cursor-pointer">
              <span className="text-white">Home</span>

              <span className="text-[#f7ae11]">•</span>

              <span className="text-white">Services</span>

              <span className="text-[#FF9900]">•</span>

              <span className="custom-manifacturing text-[#f7ae11]">
                Custom Manufacturing Solution
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid lg:grid-cols-[320px_1fr] gap-10">
            {/* LEFT SIDEBAR */}
            <div className="space-y-10">
              {/* CATEGORY CARD */}
              <div className="bg-white rounded-[18px] shadow-lg overflow-hidden">
                <div className="bg-[#f59d0c] px-6 py-5">
                  <h3 className="text-white font-semibold text-lg">
                    Services Category
                  </h3>
                </div>

                <div className="p-5">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-5 border-b border-gray-300 last:border-b-0 cursor-pointer group"
                    >
                      <span className="text-[15px] text-gray-600 group-hover:text-[#f59d0c] transition">
                        {service}
                      </span>

                      <FiArrowUpRight
                        className="text-black group-hover:text-[#f59d0c]"
                        size={18}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* HELP CARD */}
              <div
                className="relative rounded-[20px] overflow-hidden min-h-[390px]"
                style={{
                  backgroundImage: `url(${HelpSetting})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/55"></div>

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <h3 className="text-white text-[48px] font-light leading-none mb-6">
                    Need help!
                  </h3>

                  <p className="text-white/80 leading-7 mb-10">
                    Got questions or need assistance with your industry needs?
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-[#f59d0c] flex items-center justify-center cursor-pointer">
                        <FiPhone className="text-[#f59d0c]" />
                      </div>

                      <span className="text-white font-medium cursor-pointer">
                        +1 840 841 256
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-[#f59d0c] flex items-center justify-center cursor-pointer">
                        <FiMail className="text-[#f59d0c]" />
                      </div>

                      <span className="text-white cursor-pointer">
                        info@domain.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <img
                src={RoboCustom}
                alt=""
                className="w-[760px] h-auto rounded-[28px] object-cover"
              />

              <div className="coaching-our mt-8 space-y-7 text-gray-500 leading-8 text-[16px]">
                <p>
                  Our business coaching services are designed to help
                  entrepreneurs and professionals unlock their full potential,
                  overcome challenges, and achieve sustainable growth. We
                  provide tailored strategies and expert insights to improve
                  leadership skills, enhance team performance, and streamline
                  business operations. Whether you’re launching a startup or
                  scaling an established business, our coaching empowers you to
                  make informed decisions, set clear goals, and drive meaningful
                  results. With a focus on both personal development and
                  business success, we guide you toward building a thriving,
                  purpose-driven enterprise.
                </p>
                <p>
                  Through expert guidance, we focus on refining your vision,
                  enhancing operations, and unlocking new opportunities for
                  growth. With a collaborative approach, we empower you to make
                  confident decisions and build a sustainable, thriving
                  business.
                </p>
              </div>

              <h2 className="why-choose mt-12 text-[50px] leading-tight font-light text-[#222]">
                Why choose <span className="font-bold">robotics services</span>
              </h2>
              <div className="max-w-[1200px] mx-auto px-5">
                {/* Description */}
                <p className="mt-6 text-[#7a7a7a] text-[14.9px] leading-8 max-w-[850px]">
                  Through expert guidance, we focus on refining your vision,
                  enhancing operations, and unlocking new opportunities for
                  growth. With a collaborative approach, we empower you to make
                  confident decisions and build a sustainable,
                  <br />
                  thriving business.
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-0 mt-14">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="pb-10 mb-10 border-b border-gray-200"
                    >
                      {/* Icon */}
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-12 h-12 object-contain mb-8 cursor-pointer"
                      />

                      {/* Title */}
                      <h3 className="text-[34px] font-semibold text-[#222] mb-5">
                        {item.title}
                      </h3>

                      {/* Content */}
                      <p className="text-[#7a7a7a] text-[14.5px] leading-7">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="strategy-planing max-w-[1200px] mx-auto px-5 ml-[340px]">
            {/* Heading */}
            <h2 className="text-[42px] md:text-[58px] leading-tight font-light text-[#222]">
              Planning & <span className="font-bold">strategy</span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-[#777] text-[17px] leading-8 max-w-[850px]">
              Our Industrial Automation and Robotics planning and strategy
              services focus on designing tailored automation solutions that
              align with your business goals.
            </p>

            {/* Features */}
            <div className="settingright-icon grid md:grid-cols-3 gap-x-12 gap-y-4 mt-10">
              {planningItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-7 h-7 flex items-center justify-center cursor-pointer">
                    <img
                      src={SettingRight}
                      size={14}
                      className="text-[#FF9900]"
                    />
                  </div>
                  <span className="text-[#222222] text-[16px]">{item}</span>
                </div>
              ))}
            </div>
            {/* Images */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <img
                src={PlaningRoboOne}
                alt="Automation"
                className="w-full h-[400px] object-cover rounded-[35px]"
              />

              <img
                src={PlaningRoboTwo}
                alt="Robotics"
                className="w-full h-[400px] object-cover rounded-[35px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="asked-qustion py-16 lg:py-15 ml-[300px] mt-[-80px]">
        <div className="max-w-[900px] mx-auto px-5">
          {/* Heading */}
          <h2 className="solution-titleasked text-[40px] md:text-[50px] font-light text-[#222] mb-12 ml-11">
            Frequently asked <span className="font-bold">questions</span>
          </h2>

          {/* FAQ List */}
          <div className="faqlist-side space-y-4">
            {faqData.map((item, index) => {
              const active = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`askedquestion-width overflow-hidden ml-10 w-200 cursor-pointer rounded-2xl border transition-all duration-300 ${
                    active
                      ? "bg-[#FF9900] border-[#FF9900]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full px-6 py-4 flex items-center justify-between text-left ${
                      active ? "text-white" : "text-[#222]"
                    }`}
                  >
                    <span className="text-[18px] font-medium cursor-pointer">
                      {item.question}
                    </span>

                    {active ? (
                      <FiChevronUp size={18} />
                    ) : (
                      <FiChevronDown size={18} />
                    )}
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      active ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-8 border-t border-white/20">
                      <p className="pt-6 text-[16px] leading-8 text-white">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SolutionCustom;
