import MainLayout from "../components/layouts/MainLayout";
import SolutionCustomImg from "../assets/images/SolutionCustomImg.jpg";
import SettingIcon from "../assets/icons/SettingIcon.png";
import ContactIconOne from "../assets/images/ContactIconOne.png";
import ContactIconTwo from "../assets/images/ContactIconTwo.png";
import ContactIconThree from "../assets/images/ContactIconThree.png";
import MapingImage from "../assets/images/MapingImage.png";

const contactInfo = [
  {
    icon: ContactIconOne,
    title: "Contact",
    value: "+1.809.120.670",
  },
  {
    icon: ContactIconTwo,
    title: "E-mail",
    value: "info@domainname.com",
  },
  {
    icon: ContactIconThree,
    title: "Our Address",
    value: "37 San Juan Lane Graaf Florisstraat 22A, 3021 CH",
  },
];
const Contact = () => {
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
              Contact <span className="font-semibold">US</span>
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-5 text-sm cursor-pointer">
              <span className="text-white">Home</span>

              <span className="w-1 h-1 rounded-full bg-[#f59d0c]"></span>

              <span className="text-[#f59d0c]">Contact</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f8f8f8] py-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="relative">
              {/* Small Title */}
              <div className="flex items-center gap-2 mb-5">
                <img src={SettingIcon} alt="" />
                <p className="uppercase tracking-[3px] text-[11px] font-medium text-[#222]">
                  Contact Us
                </p>
              </div>

              {/* Heading */}
              <h2 className="flex text-[34px] md:text-[50px] leading-[1.1] text-[#222] font-light mb-5">
                Get in touch <br />
                <span className="font-bold">with us</span>
              </h2>

              <p className="text-[#7b7b7b] text-sm max-w-md mb-12">
                Reach out for any inquiries, support, or to discuss how we can
                meet your industrial needs.
              </p>

              {/* Contact Cards */}
              <div className="space-y-8">
                {contactInfo.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 pb-8 border-b border-[#ececec]"
                    >
                      <div className="w-12 h-12 bg-[#f59d0c] rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-15 h-15 object-contain"
                        />
                      </div>

                      <div>
                        <h4 className="text-[#222] font-medium mb-1">
                          {item.title}
                        </h4>

                        <p className="text-[#8a8a8a] text-sm">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <img
                src={MapingImage}
                alt="Factory Outline"
                className="absolute bottom-[-100px] -left-70 mt-[30px] text-red-600 w-[700px] opacity-[10] pointer-events-none z-0"
              />
            </div>

            {/* Right Side Form */}
            <div className="bg-white rounded-[28px] p-8 md:p-10 shadow-sm">
              <h2 className="text-[34px] md:text-[50px] leading-none text-[#222] font-light mb-8">
                Contact <span className="font-bold">me</span>
              </h2>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="h-14 px-4 border border-[#e8e8e8] rounded-lg outline-none focus:border-[#f59d0c]"
                  />

                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="h-14 px-4 border border-[#e8e8e8] rounded-lg outline-none focus:border-[#f59d0c]"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="w-full h-14 px-4 border border-[#e8e8e8] rounded-lg outline-none focus:border-[#f59d0c]"
                />

                <input
                  type="tel"
                  placeholder="Enter your phone no."
                  className="w-full h-14 px-4 border border-[#e8e8e8] rounded-lg outline-none focus:border-[#f59d0c]"
                />

                <textarea
                  rows="5"
                  placeholder="Write Message"
                  className="w-full px-4 py-4 border border-[#e8e8e8] rounded-lg outline-none resize-none focus:border-[#f59d0c]"
                />

                <button
                  type="submit"
                  className="h-12 px-8 border border-[#f59d0c] rounded-lg text-[#222] font-medium hover:bg-[#f59d0c] hover:text-white transition-all"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f8f8f8] mt-0">
        <div className="max-w-8x1 mx-auto">
          <div className="overflow-hidden  border border-[#e5e5e5]">
            <iframe
              title="Location Map"
              src="https://maps.google.com/maps?q=London%20Eye&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[300px] md:h-[450px] lg:h-[550px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
