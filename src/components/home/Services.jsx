import Container from "../common/Container";
import { FaIndustry, FaRobot, FaTools, FaCogs } from "react-icons/fa";
import Messions from "../../assets/images/Messions.jpg";
import { RiSettings4Line } from "react-icons/ri";
import Imageone from "../../assets/images/Imageone.jpg";
import Imagetwo from "../../assets/images/Imagetwo.jpg";
import Imagethree from "../../assets/images/Imagethree.jpg";
import SettingIcon from "../../assets/icons/SettingIcon.png";
import Photoone from "../../assets/images/Photoone.jpg";
import Phototwo from "../../assets/images/Imagetwo.jpg";
import Photothree from "../../assets/images/Photothree.jpg";
import whatwe from "../../assets/images/whatwe.png";
import SettingPrice from "../../assets/images/SettingPrice.png";

import { FaPlay } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";

import ProjectOne from "../../assets/images/ProjectOne.png";
import ProjectTwo from "../../assets/images/ProjectTwo.png";
import ProjectThree from "../../assets/images/ProjectThree.png";
import ProjectFour from "../../assets/images/ProjectFour.png";
import ContainerOne from "../../assets/images/ContainerOne.png";
import SettingRight from "../../assets/images/SettingRight.png";
import FreeOne from "../../assets/icons/FreeOne.png";
import FreeTwo from "../../assets/icons/FreeTwo.png";
import FreeThree from "../../assets/icons/FreeThree.png";
import PricingImg from "../../assets/images/PricingImg.png";
import PricingTwo from "../../assets/images/PricingTwo.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import ContainerTest from "../../assets/images/ContainerTest.png";
import FactroyProTwo from "../../assets/images/FactroyProTwo.png";
import FactroyProThree from "../../assets/images/FactroyProThree.png";
import FactroyProOne from "../../assets/images/FactroyProOne.png";
import FactroyProFour from "../../assets/images/FactroyProFour.png";
import AuthorOne from "../../assets/images/AuthorOne.png";
//import ClientImage from "../../assets/images/client.jpg";
import { MdArrowOutward } from "react-icons/md";

import BlogOne from "../../assets/images/BlogOne.png";
import BlogTwo from "../../assets/images/BlogTwo.png";
import Background from "../../assets/images/Background.png";


const blogs = [
  {
    image: BlogOne,
    title: "Sustainable Practices Reducing Waste in Industrial Production",
  },
  {
    image: BlogTwo,
    title: "Advanced Robotics Revolutionizing Industrial Workflows",
  },
];

const plans = [
  {
    active: false,
    title: "Advanced Plan",
    price: "$39",
  },
  {
    active: true,
    title: "Advanced Plan",
    price: "$39",
  },
  {
    active: false,
    title: "Advanced Plan",
    price: "$39",
  },
];

const features = [
  "Standard Manufacturing Services",
  "Quality Control Checks",
  "Technical Support",
  "Monthly Progress Reports",
];

const projects = [
  {
    imageImp: ProjectOne,
    category: "Development",
    title: "Total Quality Management Implementation",
  },
  {
    imageImp: ProjectTwo,
    category: "Automation",
    title: "Advanced Research In Material Science",
  },
  {
    imageImp: ProjectThree,
    category: "Infrastructure",
    title: "Workplace Safety Enhancement Initiative",
  },
  {
    imageImp: ProjectFour,
    category: "Infrastructure",
    title: "Robotic Process Automation Deployment",
  },
];

const Services = () => {
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
      {/* BACKGROUND IMAGE SECTION */}

      <section
        className="service-card relative w-full h-[500px] lg:h-[550px] mt-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Messions})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <Container>
          <div className="relative z-10 pt-20 lg:pt-24">
            <div className="grid lg:grid-cols-2 gap-10 text-white">
              <div>
                <span className="flex text-[rgb(250,238,238)] cursor-pointer uppercase text-xs tracking-widest gap-2">
                  <RiSettings4Line size={20} className="text-orange-500 " />{" "}
                  Servises
                </span>
                <h2 className="text-4xl font-[320] lg:text-5xl mt-4 leading-tight">
                  Comprehensive solutions
                  <br />
                  <p className="text-4xl lg:text-5xl font-semibold leading-tight">
                    {" "}
                    for industrial excellence
                  </p>
                </h2>
              </div>

              <p className="text-gray-300 max-w-lg font-[400] mt-11">
                We provide a wide range of services tailored to meet the unique
                needs of modern industries. From precision manufacturing and
                advanced automation to custom product design and efficient
                logistics.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FLOATING CARDS */}

      <div className="relative -mt-32 z-20">
        <Container>
          <div className="bg-white rounded-[30px] shadow-2xl p-10">
            <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {/* Card 1 */}
              <div>
                <FaIndustry className="text-orange-500 text-3xl" />
                <h3 className="mt-5 font-medium">
                  Custom Manufacturing <br /> Solution
                </h3>

                <button className="mt-5 w-8 h-8 cursor-pointer bg-gray-100 rounded flex items-center justify-center">
                  →
                </button>
              </div>

              {/* Card 2 */}
              <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                <FaRobot className="text-orange-500 text-3xl" />

                <h3 className="mt-5 font-medium">
                  Industrial Automation <br />
                  And Robotics
                </h3>

                <button className="mt-5 w-8 h-8 bg-gray-100 rounded flex items-center justify-center cursor-pointer">
                  →
                </button>
              </div>

              {/* Card 3 */}
              <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                <FaTools className="text-orange-500 text-3xl" />

                <h3 className="mt-5 font-medium">
                  Product Design And <br /> Prototyping
                </h3>

                <button className="mt-5 w-8 h-8 bg-gray-100 rounded flex items-center justify-center cursor-pointer">
                  →
                </button>
              </div>

              {/* Card 4 */}
              <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                <FaCogs className="text-orange-500 text-3xl" />

                <h3 className="mt-5 font-medium">
                  Equipment Maintenance <br /> Support
                </h3>

                <button className="mt-5 w-8 h-8 cursor-pointer bg-gray-100 rounded flex items-center justify-center">
                  →
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* TRANSFORMING INDUSTRIES SECTION */}
      <section>
        <div className="tramsforming-industries grid lg:grid-cols-2 gap-16 items-start mt-10">
          {/* LEFT COLUMN */}
          <div className="story-card">
            <span className="storycard-our flex items-center ml-65  gap-2 pl-4 text-[11px] uppercase tracking-[3px] text-gray-700 font-medium cursor-pointer">
              <img src={SettingIcon} alt="" />
              Our Story
            </span>
            <h2 className="transform-industri mt-4 text-[42px] leading-[50px] ml-70  text-[#1f1f1f]">
              <span>Transforming industries</span>
              <br />
              <span className="font-semibold">with innovative efficient</span>
              <br />
              <span className="font-semibold">solutions</span>
            </h2>

            <img
              src={Imagethree}
              alt=""
              className="Imagethree mt-12 w-[600px] ml-70 rounded-[22px]"
            />
          </div>
          {/* RIGHT COLUMN */}
          <div className="demo-test">
            {/* Top Images */}

            <div className="margin-leftImage flex gap-4">
              <img
                src={Imageone}
                alt=""
                className="image-size w-70 h-[170px] object-cover rounded-[20px]"
              />

              <img
                src={Imagetwo}
                alt=""
                className="image-size w-70 h-[170px] object-cover rounded-[20px]"
              />
            </div>

            {/* Text */}

            <p className="explain-text mt-10 text-[#8f8f8f] leading-7 text-[15px]">
              We specialize in revolutionizing industries by delivering
              innovative, efficient <br /> solutions that enhance productivity
              and streamline processes. Through advanced <br /> technologies,
              precision engineering and sustainable practices.
            </p>

            {/* Divider */}

            <div className="border-t border-gray-200 my-10"></div>

            {/* Stats */}

            <div className="customer-Rating grid grid-cols-3">
              <div>
                <h3 className="customr-info text-orange-500 text-[42px] font-bold">10K+</h3>

                <p className="customr-info text-[14px] text-gray-600 mt-2">
                  Completed Project
                </p>
              </div>

              <div className="customr-infotwo ml-[-90px]">
                <h3 className="customr-infotwo text-orange-500 text-[42px] font-bold">15+</h3>

                <p className="customr-infotwo text-[14px] text-gray-600 mt-2">
                  Satisfied Customer
                </p>
              </div>

              <div className="customr-infothree ml-[-170px]">
                <h3 className="customr-infothree text-orange-500 text-[42px] font-bold">10K+</h3>

                <p className="customr-infothree text-[14px] text-gray-600 mt-2">
                  Year Of Mastery
                </p>
              </div>
            </div>

            {/* Bottom */}

            <div className="flex items-center gap-8 mt-10">
              {/* Avatars */}

              <div className="flex -space-x-3">
                <img
                  src={Photoone}
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white"
                />

                <img
                  src={Phototwo}
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white"
                />

                <img
                  src={Photothree}
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </div>

              {/* Play Button */}

              <div className="flex items-center gap-4 cursor-pointer">
                <button className="w-14 h-14 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 cursor-pointer">
                  <FaPlay className="ml-1" />
                </button>

                <span className="uppercase text-xs font-semibold tracking-wider cursor-pointer">
                  Watch Intro
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Your existing Innovation Section code here */}
      <section className="what-wedo pt-0 bg-[#222222] mt-20">
        <Container>
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="widthing-decrease relative px-6 lg:px-16 py-20">
              <span className="heigh-size flex gap-2 mt-[-60px] text-[#fafafa] uppercase tracking-[3px] text-[13px] cursor-pointer">
                <img src={SettingIcon} alt="" />
                What We Do
              </span>
              <h2 className="factory-industry text-white text-4xl lg:text-2xl font-light mt-5 leading-tight">
                Innovative factory and industry
                <br />
                <span className="font-semibold">solutions today</span>
              </h2>
              <div className="grid-containermap grid md:grid-cols-2 gap-5 mt-6">
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

              <p className="quote-free text-[#9b9b9b] mt-10 text-sm">
                Let's make something great work together.
                <span className="text-orange-500 font-medium ml-1 cursor-pointer">
                  Get Free Quote
                </span>
              </p>
            </div>

            {/* RIGHT SIDE */}

            <div className="rightside-image relative w-220">
              <img
                src={whatwe}
                alt=""
                className="rightside-image w-300 object-cover h-[710px]"
              />
              {/* CENTER CIRCLE */}
              <div className="absolute w-25 h-25 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
               <img src={Background} className="log-img" alt=""/>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-24 bg-white">
        <Container>
          {/* Header */}

          <div className="grid lg:grid-cols-2 gap-10 mb-5">
            <div>
              <span className="flex gap-2 text-[11px] mt-[-50px] uppercase tracking-[3px] text-[#222222] font-medium">
                {" "}
                <img src={SettingIcon} alt="" />
                Our Work
              </span>

              <h2 className="mt-4 text-[42px] leading-[50px] text-[#1f1f1f]">
                Our successful project
                <br />
                <span className="font-semibold">initiatives</span>
              </h2>
            </div>

            <div className="flex items-start lg:justify-end">
              <p className="max-w-md text-[#8d8d8d] text-sm leading-7">
                Our successful project initiatives showcase our commitment to
                excellence and innovation across various industries.
              </p>
            </div>
          </div>

          {/* Filter Menu */}

          <div className="flex flex-wrap justify-center gap-4 text-sm mb-14">
            <button className="text-orange-500 font-medium">All</button>

            <span>/</span>

            <button className="cursor-pointer">Automation</button>

            <span>/</span>

            <button className="cursor-pointer">Development</button>

            <span>/</span>

            <button className="cursor-pointer">Infrastructure</button>

            <span>/</span>

            <button className="cursor-pointer">Manufacturing</button>

            <span>/</span>

            <button className="cursor-pointer">.Sustainability</button>
          </div>

          {/* Project Grid */}

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <div className="relative overflow-hidden rounded-[26px]">
                  <img
                    src={project.imageImp}
                    alt={project.title}
                    className="w-full h-[300px] object-cover transition duration-500 hover:scale-105"
                  />

                  {/* Category Badge */}

                  <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-white text-xs">
                    {project.category}
                  </div>
                </div>

                <h3 className="text-center mt-5 text-lg font-medium text-[#222]">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="our-process py-20 bg-[#f8f8f8]">
        <Container>
          {/* Top Header */}
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-15">
            <div>
              <span className="flex gap-2 text-[11px] mt-[-60px] uppercase tracking-[3px] text-[#222222] font-medium cursor-pointer">
                <img src={SettingIcon} alt="" /> Our Process
              </span>

              <h2 className="head-line mt-4 text-[42px] leading-[52px] text-[#1f1f1f]">
                Streamlined processes <span className="font-semibold"> for
                <br />
                optimal efficiency</span>
              </h2>
            </div>

            <div className="ourprocess-para lg:pl-20 mt-[-60px]">
              <p className="text-[#8a8a8a] text-[15px] leading-7 max-w-lg">
                Our process is designed to maximize efficiency and quality at
                every stage of production. By integrating advanced technologies
                and best practices, we ensure seamless workflows.
              </p>
            </div>
          </div>

          {/* Content */}

          <div className="Understanding  grid lg:grid-cols-2 gap-15 items-center">
            {/* Left Image */}

            <div>
              <img
                src={ContainerOne}
                alt=""
                className="w-full rounded-[32px] object-cover"
              />
            </div>

            {/* Right Steps */}

            <div className="Understanding-with space-y-10">
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
      <section className="clint-oder py-24 bg-[#f8f8f8]">
        <Container>
          {/* Header */}

          <div className="pricing-plan grid lg:grid-cols-2 gap-12 mb-16 mt-[-60px]">
            <div>
              <span className="flex gap-2 text-[11px] uppercase tracking-[3px] text-[#222222] font-medium cursor-pointer">
                <img src={SettingIcon} alt="" /> Pricing Plan
              </span>

              <h2 className="mt-4 text-[42px] leading-[52px] text-[#222]">
                Transparent pricing for
                <br />
                <span className="font-semibold">every solution</span>
              </h2>
            </div>

            <div className="content-para lg:flex lg:justify-end">
              <p className="max-w-md text-[#8b8b8b] leading-7">
                We believe in providing clear and upfront pricing to ensure that
                you understand the value of our services.
              </p>
            </div>
          </div>

          {/* Pricing Cards */}

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`
                relative overflow-hidden rounded-[30px] p-8
                ${
                  plan.active
                    ? "bg-[#FF9900] text-white"
                    : "bg-[#efefef] text-[#222]"
                }
              `}
              >
                {/* Decorative Shape */}

                {index === 0 && (
                  <img
                    src={PricingImg}
                    alt=""
                    className="absolute top-0 right-0"
                  />
                )}

                {index === 1 && (
                  <img
                    src={SettingPrice}
                    alt=""
                    className="absolute top-0 right-0"
                  />
                )}

                {index === 2 && (
                  <img
                    src={PricingTwo}
                    alt=""
                    className="absolute top-0 right-0"
                  />
                )}

                {/* Price */}
                <div className="mt-2">
                  <span
                    className={`text-5xl font-bold ${
                      plan.active ? "text-white" : "text-[#FF9900]"
                    }`}
                  >
                    {plan.price}
                  </span>

                  <span className="ml-2 text-sm">/month</span>
                </div>
                {/* Title */}
                <h3 className="mt-4 text-2xl font-sm">{plan.title}</h3>

                {/* Features */}

                <div className="mt-10 space-y-5">
                  {features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <img
                        src={SettingRight}
                        alt=""
                        className={`w-5 h-5 ${
                          plan.active ? "brightness-0 invert" : ""
                        }`}
                      />

                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}

                <button
                  className={`
                  mt-10 px-6 py-3 cursor-pointer rounded-lg border text-sm font-medium
                  ${
                    plan.active
                      ? "border-white text-white"
                      : "border-orange-500 text-[#222]"
                  }
                `}
                >
                  Purchase Now
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Features */}

          <div className="bottom-feature flex flex-wrap justify-center gap-10 mt-12 text-sm text-[#666]">
            <div className="bottom-get flex items-center gap-2">
              <img src={FreeOne} alt="" />
              <span>Get 30 day free trial</span>
            </div>

            <div className="bottom-two flex items-center gap-2">
              <img src={FreeTwo} alt="" />
              <span>No any hidden fees pay</span>
            </div>

            <div className="bottom-three flex items-center gap-2">
              <img src={FreeThree} alt="" />
              <span>You can cancel anytime</span>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-24 bg-[#fafafa] relative overflow-hidden">
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
          <div className="clint-say relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}

            <div>
              <img
                src={ContainerTest}
                alt=""
                className="w-full h-120 rounded-[28px] object-cover"
              />
            </div>

            {/* Right Content */}

            <div>
              <span className="flex gap-2 text-[11px] uppercase tracking-[3px] text-[#222222] font-medium cursor-pointer">
                <img src={SettingIcon} alt="" />
                Our Client Say
              </span>

              <h2 className="mt-4 text-[42px] leading-[52px] text-[#222]">
                What our satisfied clients
                <br />
                <span className="font-semibold">are saying</span>
              </h2>

              <p className="mt-10 text-[#7f7f7f] leading-8 text-[16px] max-w-xl">
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

          <div className="divider-content border-t border-gray-200 mt-20 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center text-center">
              <img
                src={FactroyProThree}
                className="w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
              <img
                src={FactroyProTwo}
                className="margintop-imageTwo w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
              <img
                src={FactroyProOne}
                className="margintop-image  w-40font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
              <img
                src={FactroyProFour}
                className="margintop-imagelast  w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>

              <img
                src={FactroyProOne}
                className="margintop-image  w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 bg-[#fafafa]">
        <Container>
          {/* Header */}

          <div className="header-blog grid lg:grid-cols-2 gap-10 mb-16">
            <div>
              <span className="flex gap-2 text-[11px] uppercase tracking-[3px] text-[#222222] font-medium cursor-pointer">
               <img src={SettingIcon} alt=""  /> Latest Blog
              </span>

              <h2 className="mt-4 text-[42px] leading-[52px] text-[#222]">
                Insights from our
                <br />
                <span className="font-semibold">latest blogs</span>
              </h2>
            </div>

            <div className="blog-para lg:flex ml-[-30px]">
              <p className="max-w-md text-[#8b8b8b] leading-7">
                Stay updated with the latest trends, innovations, and expert
                insights in the manufacturing and industrial sectors.
              </p>
            </div>
          </div>

          {/* Blog Cards */}

          <div className="grid lg:grid-cols-2 gap-10">
            {blogs.map((blog, index) => (
              <div key={index}>
                {/* Image */}

                <div className="overflow-hidden rounded-[30px]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Bottom Content */}
                <div className="flex items-center justify-between mt-5 gap-5">
                  <h3 className="text-[22px] leading-8 font-medium text-[#222222] max-w-md">
                    {blog.title}
                  </h3>

                  <button className="min-w-[50px] h-[50px] bg-[#FF9900] rounded-lg flex items-center justify-center text-white hover:bg-[#e0a751] transition cursor-pointer">
                    <MdArrowOutward size={22} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
