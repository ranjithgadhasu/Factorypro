import Container from "../components/common/Container";
import MainLayout from "../components/layouts/MainLayout";
import SolutionCustomImg from "../assets/images/SolutionCustomImg.jpg";
import FreeOne from "../assets/icons/FreeOne.png";
import FreeTwo from "../assets/icons/FreeTwo.png";
import FreeThree from "../assets/icons/FreeThree.png";
import PricingImg from "../assets/images/PricingImg.png";
import PricingTwo from "../assets/images/PricingTwo.png";
import SettingPrice from "../assets/images/SettingPrice.png";
import SettingRight from "../assets/images/SettingRight.png";
import SettingIcon from "../assets/icons/SettingIcon.png";
import { FaIndustry, FaTools, FaCogs } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import whatwe from "../assets/images/whatwe.png";
import Background from "../assets/images/Background.png";
import FactroyProTwo from "../assets/images/FactroyProTwo.png";
import FactroyProThree from "../assets/images/FactroyProThree.png";
import FactroyProOne from "../assets/images/FactroyProOne.png";
import ContainerTest from "../assets/images/ContainerTest.png";
import AuthorOne from "../assets/images/AuthorOne.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FactroyProFour from "../assets/images/FactroyProFour.png";

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
const PricingPlan = () => {
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
              Pricing <span className="font-semibold">Plan</span>
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-5 text-sm cursor-pointer">
              <span className="text-white">Home</span>

              <span className="w-1 h-1 rounded-full bg-[#f59d0c]"></span>

              <span className="text-[#f59d0c]">Pricing</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#f8f8f8]">
        <Container>
          {/* Header */}

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

          <div className="freetrail-card flex flex-wrap justify-center gap-10 mt-12 text-sm text-[#666]">
            <div className="freetrail-paraone flex items-center gap-2">
              <img src={FreeOne} alt="" />
              <span>Get 30 day free trial</span>
            </div>

            <div className="freetrail-para flex items-center gap-2">
              <img src={FreeTwo} alt="" />
              <span>No any hidden fees pay</span>
            </div>

            <div className="freetrail-para flex items-center gap-2">
              <img src={FreeThree} alt="" />
              <span>You can cancel anytime</span>
            </div>
          </div>
        </Container>
      </section>
      {/* Your existing Innovation Section code here */}
      <section className="pt-0 bg-[#222222] mt-10">
        <Container>
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="pricing-planingSize relative px-6 lg:px-16 py-20">
              <span className="ourpricingtitle-header flex gap-2 mt-[-60px] text-[#fafafa] uppercase tracking-[3px] text-[13px] cursor-pointer">
                <img src={SettingIcon} alt="" />
                What We Do
              </span>
              <h2 className="whatwe-doIndustry text-white text-4xl lg:text-2xl font-light mt-5 leading-tight">
                Innovative factory and industry
                <br />
                <span className="font-semibold">solutions today</span>
              </h2>
              <div className=" automation-soludtion grid md:grid-cols-2 gap-5 mt-6">
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

              <p className="getfree-para text-[#9b9b9b] mt-10 text-sm">
                Let's make something great work together.
                <span className="text-orange-500 font-medium ml-1 cursor-pointer">
                  Get Free Quote
                </span>
              </p>
            </div>
            {/* RIGHT SIDE */}
            <div className="image-cutter relative w-220">
              <img
                src={whatwe}
                alt=""
                className="working-towards w-300 h-[710px]"
              />
              {/* CENTER CIRCLE */}
              <div className="center-logo absolute w-25 h-25 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src={Background} alt="" />
              </div>
            </div>
          </div>
        </Container>
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
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
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

          <div className="border-t border-gray-200 mt-20 pt-12">
            <div className="Logoipsum-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center text-center">
              <img
                src={FactroyProThree}
                className="w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
              <img
                src={FactroyProTwo}
                className=" w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
              <img
                src={FactroyProOne}
                className="logo-ipusm w-40font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
              <img
                src={FactroyProFour}
                className="logo-ipusm w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>

              <img
                src={FactroyProOne}
                className="logo-ipusm w-40 font-semibold text-xl text-[#222]"
              >
                {/*Logoipsum*/}
              </img>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default PricingPlan;
