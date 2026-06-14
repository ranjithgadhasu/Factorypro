import { useState } from "react";
import Container from "./Container";
import AboutFirst from "../../assets/images/AboutFirst.jpg";
import { MdArrowOutward } from "react-icons/md";
import SettingRight from "../../assets/images/SettingRight.png";
import AboutImage from "../../assets/images/AboutImage.png";
import { RiSettings4Line } from "react-icons/ri";
import Mession from "../../assets/images/Mession.jpg";
import ApprochImg from "../../assets/images/ApprochImg.jpg";
import SettingIcon from "../../assets/icons/SettingIcon.png";
import MissionMan from "../../assets/images/MissionMan.png";
import OurMessionOne from "../../assets/images/OurMessionOne.png";
import OurMessionTwo from "../../assets/images/OurMessionTwo.png";
import OurMessionThree from "../../assets/images/OurMessionThree.png";
import CompanyImg from "../../assets/images/CompanyImg.png";
import Background from "../../assets/images/Background.png";
import { FaIndustry, FaTools, FaCogs } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import whatwe from "../../assets/images/whatwe.png";
import FeaturesCard from "../../assets/images/FeaturesCard.png";
import CoreImgOne from "../../assets/icons/CoreImgOne.png";
import ContainerImgTwo from "../../assets/icons/ContainerImgTwo.png";
import ContainerImgThree from "../../assets/icons/ContainerImgThree.png";
import ContainerOne from "../../assets/images/ContainerOne.png";
import OurTeamOne from "../../assets/images/OurTeamOne.png";
import OurTeamTwo from "../../assets/images/OurTeamTwo.png";
import OurTeamThree from "../../assets/images/OurTeamThree.png";
import OurTeamFour from "../../assets/images/OurTeamFour.png";
import ContainerTest from "../../assets/images/ContainerTest.png";
import FactroyProTwo from "../../assets/images/FactroyProTwo.png";
import FactroyProThree from "../../assets/images/FactroyProThree.png";
import FactroyProOne from "../../assets/images/FactroyProOne.png";
import FactroyProFour from "../../assets/images/FactroyProFour.png";
import AuthorOne from "../../assets/images/AuthorOne.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PolustionImg from "../../assets/images/PolustionImg.jpg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We provide industrial solutions across manufacturing, engineering, energy, logistics, and construction sectors.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.",
  },
  {
    question: "What sustainability practices do you follow?",
    answer:
      "We follow eco-friendly manufacturing processes, reduce waste, and optimize energy consumption.",
  },
  {
    question: "Do you offer customized solutions?",
    answer:
      "Yes, we provide customized industrial solutions tailored to your specific business requirements.",
  },
  {
    question: "How do you handle safety in the workplace?",
    answer:
      "Our teams follow strict safety protocols and industry regulations to maintain a safe working environment.",
  },
];

const teamMembers = [
  {
    image: OurTeamOne,
    name: "Ronald Richards",
    role: "Manufacturing Executive",
  },
  {
    image: OurTeamTwo,
    name: "Brooklyn Simmons",
    role: "Industrial Engineer",
  },
  {
    image: OurTeamThree,
    name: "Cameron Williamson",
    role: "Production Supervisor",
  },
  {
    image: OurTeamFour,
    name: "Darlene Robertson",
    role: "Manufacturing Executive",
  },
];

const historyData = [
  {
    year: "In 1920 - Planning",
    title: "Company started",
    image: CompanyImg,
    description:
      "Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.",
    points: [
      "Quality Control System",
      "Building Quality Industrial",
      "Environmental Responsibility",
      "Building Quality Industrial",
    ],
  },
  {
    year: "In 1922 - Journey Started",
    title: "Journey Started",
    image: CompanyImg,
    description:
      "Our journey began with a commitment to innovation and manufacturing excellence.",
    points: [
      "Global Manufacturing",
      "Innovation Driven",
      "Trusted Partnership",
      "Operational Excellence",
    ],
  },
  {
    year: "In 1925 - Journey Progress",
    title: "Journey Progress",
    image: CompanyImg,
    description:
      "Expanding capabilities and delivering reliable industrial solutions worldwide.",
    points: [
      "Market Expansion",
      "Advanced Technology",
      "Research Development",
      "Customer Satisfaction",
    ],
  },
  {
    year: "In 1930 - Global Reach",
    title: "Global Reach",
    image: CompanyImg,
    description:
      "Successfully entered international markets and established a global presence.",
    points: [
      "Worldwide Operations",
      "Supply Chain Growth",
      "Strategic Partnerships",
      "Global Impact",
    ],
  },
  {
    year: "In 1940 - Industry Leadership",
    title: "Industry Leadership",
    image: CompanyImg,
    description:
      "Became a trusted leader recognized for innovation and sustainable growth.",
    points: [
      "Industry Leader",
      "Sustainable Growth",
      "Award Winning Services",
      "Future Innovation",
    ],
  },
];
const features = [
  {
    icon: "fa-light fa-industry-windows",
    title: "Advanced Technology Integration",
    desc: "We integrate cutting-edge technologies into every aspect of our operations, enhancing efficiency, precision, and innovation to deliver superior industrial solutions.",
  },
  {
    icon: "fa-light fa-ruler-combined",
    title: "Uncompromising Quality Standards",
    desc: "We uphold the highest quality standards across all processes, ensuring consistency, reliability, and excellence in every product and service we deliver.",
  },
  {
    icon: "fa-light fa-building",
    title: "Continuous Innovation and R&D",
    desc: "We prioritize ongoing research and development to drive continuous innovation, staying ahead of industry trends and creating advanced solutions that meet evolving market demands.",
  },
];

const PageBanner = ({ title }) => {
  const [activeTab, setActiveTab] = useState("mission");
  const [activeIndex, setActiveIndex] = useState(0);
  const activeHistory = historyData[activeIndex];

  const [activeIndexOne, setActiveIndexOne] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndexOne(activeIndexOne === index ? null : index);
  };

  const tabs = {
    mission: {
      title: "Our Mission",
      icon: OurMessionOne,
      image: MissionMan,
      content:
        "Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both businesses and the environment.",
      points: [
        "Sustainable Manufacturing Practices",
        "Advanced Technology Integration",
        "Community and Environmental Responsibility",
        "Innovation-Driven Growth",
      ],
    },

    vision: {
      title: "Our Vision",
      icon: OurMessionTwo,
      image: MissionMan,
      content:
        "We envision a future where industries operate efficiently while minimizing environmental impact through smart automation and innovation.",
      points: [
        "Future Ready Industries",
        "Smart Automation",
        "Global Manufacturing Excellence",
        "Sustainable Innovation",
      ],
    },

    value: {
      title: "Our Value",
      icon: OurMessionThree,
      image: MissionMan,
      content:
        "Our values guide every decision we make, ensuring trust, excellence, innovation and long-term partnerships.",
      points: [
        "Integrity",
        "Excellence",
        "Customer Focus",
        "Continuous Improvement",
      ],
    },
  };

  const cards = [
    {
      icon: <FaIndustry />,
      title: "Automation Solutions",
      desc: "Streamlining processes through cutting-edge technology.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Quality Control",
      desc: "Ensuring product excellence through rigorous testing.",
    },
    {
      icon: <FaCogs />,
      title: "Process Engineering",
      desc: "Ensuring product excellence through rigorous testing.",
    },
    {
      icon: <FaTools />,
      title: "Product Development",
      desc: "Streamlining processes through cutting-edge technology.",
    },
  ];
  return (
    <>
      <section
        className="relative h-[300px] md:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${AboutFirst})`,
        }}
      >
        <div className="absolute inset-0 banner-img"></div>

        <Container>
          <div className="relative z-10 flex items-center h-[300px] md:h-[400px] text-white">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>

              <p className="mt-3 text-lg">
                Home / <span className="text-[#FF9900]">{title}</span>
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="about-top py-24 bg-white">
        <Container>
          <div className="small-image grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Images */}
            <div className="relative">
              <img
                src={Mession}
                className="imageabout-yearsmall w-55 rounded-2xl ml-18 mt-[-180px]"
                alt=""
              />
              <img
                src={AboutImage}
                className="imageabout-yearsbig about-image w-74 h-90 rounded-2xl absolute top-[-60px] left-60 shadow-xl border-l-8 border-t-4 border-white"
                alt=""
              />
              <div className="years-about absolute top-[-128px]">
                <p className="text-4xl font-bold text-orange-500 ml-80">25+ </p>
                <p className="year-ofexpe text-[#222222] text-lg ml-100 mt-[-50px]">
                  Years Of <br /> Experience
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="About-us">
              <span className="absolute aboutus-icontop flex text-[#070707] cursor-pointer uppercase text-xs tracking-widest gap-2">
                <RiSettings4Line size={20} className="text-orange-500 " /> About
                US
              </span>

              <h2 className="build-title text-4xl font-[#222222] mt-3">
                Building quality through
                <br />
                <span className="build-title font-semibold">
                  {" "}
                  industrial innovation
                </span>
              </h2>

              <p className="building-paracontenting text-gray-500 mt-5">
                At the heart of our operations is a commitment to delivering
                superior products through cutting-edge technology and innovative
                processes.
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
              <div className="mt-8 h-11 inline-flex items-center bg-[#FF9900] p-0.5 rounded-md cursor-pointer">
                <button className="bg-white text-black px-5 h-10 font-medium rounded-md cursor-pointer">
                  Learn More
                </button>

                <div className="w-10 h-12 flex items-center justify-center">
                  <MdArrowOutward className="text-white text-xl" />
                </div>
              </div>
              <div className="card-aboutCard mt-8 ml-10 flex items-center gap-6">
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
      <section className="our-approch bg-[#f5f5f5] pb-20 mt-20">
        {/* Hero Section */}
        <div
          className="relative h-[450px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/approach-banner.jpg')",
          }}
        >
          <img
            src={ApprochImg}
            alt=""
            className="absolute w-full h-150 inset-0"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <p className="our-approching uppercase tracking-[3px] text-[#fafafafa] text-xs font-semibold flex items-center gap-2 mb-4 ml-12">
                  <img src={SettingIcon} alt="" />
                  Our Approach
                </p>

                <h2 className="text-white ml-12 text-4xl lg:text-5xl font-light leading-tight">
                  Empowering sustainable
                  <br />
                  <span className="font-bold">growth in industry</span>
                </h2>
              </div>

              {/* Right */}
              <div className="provide-content">
                <p className="provide-contentPara text-white/90 leading-8 max-w-xl">
                  We provide a wide range of services tailored to meet the
                  unique needs of modern industries. From precision
                  manufacturing and advanced <br /> automation to custom product
                  design and efficient logistics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="our-mission max-w-6xl mx-auto px-4 -mt-24 relative z-20">
          <div className="bg-white rounded-[30px] overflow-hidden shadow-lg">
            {/* Tabs */}
            <div className="grid md:grid-cols-3">
              {Object.entries(tabs).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center justify-center gap-3 py-7 transition-all duration-300
      ${
        activeTab === key ? "bg-[#ff9900] text-white" : "bg-white text-[#222]"
      }`}
                >
                  <img
                    src={tab.icon}
                    alt={tab.title}
                    className="w-6 h-6 object-contain"
                  />

                  <span className="font-medium">{tab.title}</span>
                </button>
              ))}
            </div>
            {/* Content */}
            <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-14 items-center">
              {/* Left Content */}
              <div>
                <p className="text-gray-500 leading-8 mb-8">
                  {tabs[activeTab].content}
                </p>

                <ul className="space-y-5">
                  {tabs[activeTab].points.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-[#444]"
                    >
                      <img src={SettingRight} alt="" />

                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Image */}
              <div>
                <img
                  src={tabs[activeTab].image}
                  alt=""
                  className="w-full h-[320px] object-cover rounded-[25px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-history py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 mt-[-70px]">
            <div className="history-head">
              <p className="uppercase tracking-[4px] text-[12px] text-[#222] mb-4 flex items-center gap-2 ml-15 cursor-pointer">
                <img src={SettingIcon} alt="" />
                Our History
              </p>
              <h2 className="text-[40px] lg:text-[38px] ml-15 leading-tight font-light text-[#222]">
                Foundation of excellences
                <br />
                <span className="font-semibold">in industry</span>
              </h2>
            </div>

            <div className="our-para mt-6">
              <p className="our-content text-[#777] leading-6 text-md">
                Built on a legacy of quality and innovation, we have established
                a strong <br /> foundation in the industrial sector,
                consistently delivering reliable <br /> solutions that drive
                progress and set industry standards.
              </p>
            </div>
          </div>
          {/* Content */}
          <div className="palning-cal grid lg:grid-cols-[280px_1fr] gap-10 mt-[-30px]">
            {/* Left Timeline */}
            <div className="cardiclaender-info  bg-white w-75 h-85 rounded-[20px] overflow-hidden border border-[#e9e9e9] ml-15">
              {historyData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer w-full py-5 px-4 text-center border-b border-[#ececec] transition-all duration-300
              
              ${
                activeIndex === index
                  ? "bg-[#ff9900] text-white"
                  : "bg-white text-[#222] hover:bg-[#fafafa]"
              }
            `}
                >
                  {item.year}
                </button>
              ))}
            </div>

            {/* Right Content */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <div className="head-title ml-23 mt-0">
                <h3 className="text-back text-[42px] lg:text-[40px] leading-none font-light text-[#222] mb-6">
                  Company <span className="font-bold">started</span>
                </h3>

                <p className="company-para text-[#777] l text-[14px] eading-8 mb-8">
                  {activeHistory.description}
                </p>

                <ul className="quality-control space-y-3">
                  {activeHistory.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="system-controll flex items-center gap-3 text-[#444] cursor-pointer"
                    >
                      <img src={SettingRight} alt="" />

                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="plaining-image mt-[5px]">
                <img
                  src={activeHistory.image}
                  alt=""
                  className="plaining-imageOne w-[300] h-[350px] object-cover rounded-[35px] ml-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Your existing Innovation Section code here */}
      <section className="whatwe-do pt-0 bg-[#222222] mt-10">
        <Container>
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="griding-sizeing relative px-6 lg:px-16 py-20">
              <span className="whatwe-dosize flex gap-2 mt-[-60px] text-[#fafafa] uppercase tracking-[3px] text-[13px] cursor-pointer">
                <img src={SettingIcon} alt="" />
                What We Do
              </span>
              <h2 className="factory-title text-white text-4xl lg:text-2xl font-light mt-5 leading-tight">
                Innovative factory and industry
                <br />
                <span className="font-semibold">solutions today</span>
              </h2>
              <div className="whatwe-box grid md:grid-cols-2 gap-5 mt-6">
                {cards.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[24px] p-6 border border-[#343434]
                ${
                  index === 1 || index === 2 ? "bg-[#3b3b3b]" : "bg-transparent"
                }`}
                  >
                    <div className="text-orange-500 text-2xl">{item.icon}</div>

                    <h3 className="text-white font-semibold mt-5">
                      {item.title}
                    </h3>

                    <p className="text-[#9b9b9b] text-sm mt-3 leading-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="parain-below text-[#9b9b9b] mt-10 text-sm">
                Let's make something great work together.
                <span className="text-orange-500 font-medium ml-1 cursor-pointer">
                  Get Free Quote
                </span>
              </p>
            </div>

            {/* RIGHT SIDE */}

            <div className="working-img relative w-220">
              <img
                src={whatwe}
                alt=""
                className="woringOne-img  w-300 object-cover h-[710px]"
              />
              {/* CENTER CIRCLE */}
              <div className="working-Logo absolute w-25 h-25 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src={Background} alt="" clasName="workinimage-Logo" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#f8f8f8] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
            <div>
              <div className="flex items-center gap-2 uppercase tracking-[3px] text-[11px] text-[#222] font-medium mb-5 cursor-pointer mt-[-30px]">
                <img src={SettingIcon} alt="" />
                <span>Our Key Feature</span>
              </div>

              <h2 className="text-[34px] md:text-[46px] leading-[1.1] font-light text-[#222]">
                Core strengths in
                <br />
                <span className="font-bold">industrial innovation</span>
              </h2>
            </div>
            <div className="invocation-para lg:pl-16">
              <p className="text-[#777] text-[15px] leading-8 max-w-[500px]">
                Our expertise in industrial innovation combines advanced
                technology, sustainable practices, and a skilled workforce to
                deliver efficient, future-ready solutions that drive industry
                progress.
              </p>
            </div>
          </div>
          {/* Grid Box */}
          <div className="advanced-techno overflow-hidden rounded-[34px] border border-[#e5e5e5] bg-white">
            <div className="grid md:grid-cols-2">
              {/* Card 1 */}
              <div className="p-8 lg:p-6 border-b md:border-r border-[#e9e9e9]">
                <div className="mb-6 cursor-pointer">
                  <img src={CoreImgOne} alt="" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#222] mb-4">
                  {features[0].title}
                </h3>
                <p className="text-[#777] leading-8 text-[15px]">
                  {features[0].desc}
                </p>
              </div>
              {/* Card 2 */}
              <div className="p-8 lg:p-10 border-b border-[#e9e9e9]">
                <div className="mb-6 cursor-pointer">
                  <img src={ContainerImgTwo} alt="" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#222] mb-4">
                  {features[1].title}
                </h3>
                <p className="text-[#777] leading-8 text-[15px]">
                  {features[1].desc}
                </p>
              </div>
              {/* Card 3 */}
              <div className="p-8 lg:p-10 md:border-r border-[#e9e9e9]">
                <div className="mb-6 cursor-pointer">
                  <img src={ContainerImgThree} alt="" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#222] mb-4">
                  {features[2].title}
                </h3>
                <p className="text-[#777] leading-8 text-[15px]">
                  {features[2].desc}
                </p>
              </div>
              {/* Image */}
              <div className="h-[280px] md:h-auto">
                <img
                  src={FeaturesCard}
                  alt="Industrial Innovation"
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-our-line py-20 bg-[#f8f8f8]">
        <Container>
          {/* Top Header */}
          <div className="head-process-title grid lg:grid-cols-2 gap-10 items-start mb-15">
            <div>
              <span className="flex gap-2 text-[11px] mt-[-60px] uppercase tracking-[3px] text-[#222222] font-medium cursor-pointer">
                <img src={SettingIcon} alt="" /> Our Process
              </span>

              <h2 className="title-cont mt-4 text-[42px] leading-[52px] text-[#1f1f1f]">
                Streamlined processes{" "}
                <span className="font-semibold">
                  {" "}
                  for
                  <br />
                  optimal efficiency
                </span>
              </h2>
            </div>

            <div className="process-paragraph lg:pl-20 mt-[-60px]">
              <p className="proessparaone text-[#8a8a8a] text-[15px] leading-7 max-w-lg">
                Our process is designed to maximize efficiency and quality at
                every stage of production. By integrating advanced technologies
                and best practices, we ensure seamless workflows.
              </p>
            </div>
          </div>

          {/* Content */}

          <div className="grid lg:grid-cols-2 gap-15 items-center">
            {/* Left Image */}

            <div>
              <img
                src={ContainerOne}
                alt=""
                className="w-full rounded-[32px] object-cover"
              />
            </div>

            {/* Right Steps */}
            <div className="design-planing space-y-10">
              {/* STEP 01 */}

              <div className="flex gap-8">
                <h3 className="text-[48px] font-semibold text-[#FF9900]">01</h3>

                <div>
                  <h4 className="text-[26px] font-medium text-[#1f1f1f]">
                    Understanding Your Needs
                  </h4>

                  <p className="text-[#8a8a8a] mt-3 leading-7">
                    We begin by thoroughly assessing your requirements and
                    objectives to develop a tailored approach.
                  </p>
                </div>
              </div>

              {/* STEP 02 ACTIVE */}

              <div className="bg-[#FF9900] rounded-[28px] px-6 py-2 ml-[-20px] text-white">
                <div className="flex gap-8">
                  <h3 className="text-[48px] font-semibold">02</h3>

                  <div>
                    <h4 className="text-[26px] font-medium">
                      Design and Planning
                    </h4>

                    <p className="mt-3 leading-7 text-orange-100">
                      Our team collaborates to create detailed project plans,
                      ensuring all aspects of the process.
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 03 */}

              <div className="flex gap-8">
                <h3 className="text-[48px] font-semibold text-[#FF9900]">03</h3>

                <div>
                  <h4 className="text-[26px] font-medium text-[#1f1f1f]">
                    Implementation
                  </h4>

                  <p className="text-[#8a8a8a] mt-3 leading-7">
                    Utilizing advanced technologies and skilled personnel, we
                    execute the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="our-teammets py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Top Area */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-14">
            <div>
              <div className="flex items-center gap-2 uppercase tracking-[3px] text-[10px] font-medium text-[#222] mb-4 cursor-pointer">
                <img src={SettingIcon} alt="" />
                <span>OUR TEAM</span>
              </div>
              <h2 className="text-[34px] md:text-[43px] leading-[1.05] text-[#222] font-light">
                Core strengths in
                <br />
                <span className="font-bold">industrial innovation</span>
              </h2>
            </div>
            <div className="all-members mt-8 inline-flex items-center bg-[#FF9900] p-0.5 rounded-md cursor-pointer">
              <button className="bg-white text-black px-5 h-12 font-medium rounded-md cursor-pointer">
                All Member
              </button>
              <div className="w-10 h-12 flex items-center justify-center">
                <MdArrowOutward className="text-white text-xl" />
              </div>
            </div>
          </div>
          {/* Team Cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden rounded-[18px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="text-center mt-4">
                  <h3 className="text-[16px] font-semibold text-[#222]">
                    {member.name}
                  </h3>

                  <p className="text-[13px] text-[#8B8B8B] mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-15 bg-[#F5F5F5] relative overflow-hidden">
        {/* Dotted Background */}

        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(#d9d9d9 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        <Container>
          <div className="mession-checking relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}

            <div>
              <img
                src={ContainerTest}
                alt=""
                className="w-full h-120 rounded-[28px] object-cover"
              />
            </div>

            {/* Right Content */}

            <div clasName="clint-saying">
              <span className="flex gap-2 text-[11px] uppercase tracking-[3px] text-[#222222] font-medium cursor-pointer">
                <img src={SettingIcon} alt="" />
                Our Client Say
              </span>
              <h2 className="headtitle-our mt-4 text-[42px] leading-[52px] text-[#222]">
                What our satisfied clients
                <br />
                <span className="font-semibold">are saying</span>
              </h2>

              <p className="details-improve mt-10 text-[#7f7f7f] leading-8 text-[16px] max-w-xl">
                "The team's attention to detail and commitment to quality
                exceeded our expectations. They delivered on time, and their
                innovative solutions improved our production efficiency by 30%.
                Highly recommended!"
              </p>

              {/* Client Info */}

              <div className="flex items-center justify-between mt-10">
                <div className="flex items-center gap-4">
                  <img
                    src={AuthorOne}
                    alt=""
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-[#222]">
                      Brooklyn Simmons
                    </h4>

                    <p className="text-sm text-gray-500">Homeowner</p>
                  </div>
                </div>

                {/* Navigation */}

                <div className="flex gap-5">
                  <button className="w-12 h-12 rounded-lg bg-[#FF9900] text-white flex items-center justify-center hover:bg-[#FF9900] transition cursor-pointer">
                    <FaArrowLeft />
                  </button>

                  <button className="w-12 h-12 rounded-lg bg-[#FF9900] text-white flex items-center justify-center hover:bg-orange-400 transition cursor-pointer">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}

          <div className="border-t border-gray-200 mt-20 pt-12">
            <div className="logo-ipsum grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center text-center">
              <img
                src={FactroyProThree}
                className="w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
              <img
                src={FactroyProTwo}
                className="w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
              <img
                src={FactroyProOne}
                className="margin-ipsum w-40font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
              <img
                src={FactroyProFour}
                className="margin-ipsum w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>

              <img
                src={FactroyProOne}
                className="margin-ipsum w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
            </div>
          </div>
        </Container>
      </section>

      <section className="Fqas-paran bg-[#f8f8f8] py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-14">
            <div>
              <div className="faqs-title flex items-center gap-2 uppercase tracking-[3px] text-[10px] font-medium mb-4 cursor-pointer">
                <img src={SettingIcon} alt="" className="image-sizing" />
                <span>FAQs</span>
              </div>
              <h2 className="text-[38px] md:text-[52px] leading-[1.05] font-light text-[#222]">
                Frequently asked
                <br />
                <span className="font-bold">questions</span>
              </h2>
            </div>

            <div className="bgyellow-button mt-8 inline-flex items-center bg-[#FF9900] p-0.5 rounded-md cursor-pointer">
              <button className="button-allfqas bg-white text-black px-5 h-12 font-medium rounded-md cursor-pointer">
                All FAQS
              </button>

              <div className="w-10 h-12 flex items-center justify-center">
                <MdArrowOutward className="text-white text-xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-start">
            {/* Left Image */}
            <div className="relative overflow-hidden rounded-[28px] h-[500px]">
              <img
                src={PolustionImg}
                alt="Factory"
                className="w-full h-140 object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Contact Info */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-6 text-white">
                <div className="flex items-center gap-3">
                  <i className="fa-light fa-phone-volume text-[#F59E0B]"></i>

                  <span className="text-sm cursor-pointer">+91 1236547890</span>
                </div>

                <div className="flex items-center gap-3">
                  <i className="fa-light fa-envelope-open-text text-[#F59E0B]"></i>

                  <span className="text-sm cursor-pointer">
                    info@domainname.com
                  </span>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4 cursor-pointer">
              {faqs.map((faq, index) => {
                const active = activeIndexOne === index;

                return (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 ${
                      active
                        ? "bg-[#F59E0B] border-[#F59E0B]"
                        : "bg-white border-[#E7E7E7]"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full px-6 py-5 flex items-center justify-between ${
                        active ? "text-white" : "text-[#222]"
                      }`}
                    >
                      <span className="font-medium text-[16px] cursor-pointer">
                        {faq.question}
                      </span>

                      {active ? (
                        <FiChevronUp size={18} />
                      ) : (
                        <FiChevronDown size={18} />
                      )}
                    </button>

                    {active && (
                      <div className="px-6 pb-6">
                        <p className="text-white/90 leading-7 text-sm">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageBanner;
