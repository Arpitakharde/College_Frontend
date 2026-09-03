import React from "react";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const informationLinks = [
    "Alumni Cell",
    "Photo Gallery",
    "Erasmus Mundus",
    "Youth4work",
    "Sports",
    "Health Facility",
    "Online Grievances Redressal System",
  ];

  const quickLinksOne = [
    "Mandatory Disclosure (IBMA)",
    "DTE Website",
    "S.P Pune University",
    "AICTE",
    "Seminars and Workshops",
    "AICTE Approvals",
    "AICTE Feedback Facility of Students & Faculty",
  ];

  const quickLinksTwo = [
    "Anti-Ragging Cell",
    "Women Grievance Cell",
    "College Students Council IBMA",
    "RTI",
    "Transport & Accommodation",
    "Caste Based Discrimination Complaints System",
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#07345c] text-white">

      {/* ================= BACKGROUND IMAGE ================= */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/footer-bg.jpg')",
        }}
      />

      {/* ================= OVERLAY ================= */}

      <div className="absolute inset-0 bg-[#06345d]/90" />


      {/* ================= FOOTER CONTENT ================= */}

      <div className="relative z-10">

        <div
          className="
            max-w-[1800px]
            mx-auto
            px-8
            lg:px-10
            xl:px-12
            pt-10
            pb-5
          "
        >

          {/* ================= FOUR COLUMNS ================= */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-8
              lg:gap-8
              xl:gap-12
            "
          >

            {/* =================================================
                COLUMN 1 - INFORMATION
            ================================================== */}

            <div>

              <h2
                className="
                  text-[24px]
                  lg:text-[25px]
                  font-semibold
                  mb-7
                "
              >
                Information
              </h2>

              <ul className="space-y-5">

                {informationLinks.map((item) => (

                  <li key={item}>

                    <a
                      href="#"
                      className="
                        block
                        text-[17px]
                        lg:text-[18px]
                        leading-[1.3]
                        text-white
                        hover:text-[#e9b43f]
                        transition-colors
                        duration-200
                      "
                    >
                      {item}
                    </a>

                  </li>

                ))}

              </ul>

            </div>


            {/* =================================================
                COLUMN 2 - QUICK LINKS
            ================================================== */}

            <div>

              <h2
                className="
                  text-[24px]
                  lg:text-[25px]
                  font-semibold
                  mb-7
                "
              >
                Quick Link
              </h2>

              <ul className="space-y-5">

                {quickLinksOne.map((item) => (

                  <li key={item}>

                    <a
                      href="#"
                      className="
                        block
                        text-[17px]
                        lg:text-[18px]
                        leading-[1.3]
                        text-white
                        hover:text-[#e9b43f]
                        transition-colors
                        duration-200
                      "
                    >
                      {item}
                    </a>

                  </li>

                ))}

              </ul>

            </div>


            {/* =================================================
                COLUMN 3 - QUICK LINKS
            ================================================== */}

            <div>

              <h2
                className="
                  text-[24px]
                  lg:text-[25px]
                  font-semibold
                  mb-7
                "
              >
                Quick Link
              </h2>

              <ul className="space-y-5">

                {quickLinksTwo.map((item) => (

                  <li key={item}>

                    <a
                      href="#"
                      className="
                        block
                        text-[17px]
                        lg:text-[18px]
                        leading-[1.3]
                        text-white
                        hover:text-[#e9b43f]
                        transition-colors
                        duration-200
                      "
                    >
                      {item}
                    </a>

                  </li>

                ))}

              </ul>

            </div>


            {/* =================================================
                COLUMN 4 - CONTACT INFO
            ================================================== */}

            <div>

              <h2
                className="
                  text-[24px]
                  lg:text-[25px]
                  font-semibold
                  mb-7
                "
              >
                Contact Info
              </h2>


              {/* ADDRESS */}

              <p
                className="
                  text-[17px]
                  lg:text-[18px]
                  leading-[1.45]
                  text-white
                  max-w-[420px]
                "
              >
                PIRENS, IBMA, Near IIT College,
                A/P Loni, Tal Rahata, Dist Ahmednagar,
                (MS) India. Loni-413736
              </p>


              {/* PHONE */}

              <a
                href="tel:02422273694"
                className="
                  block
                  mt-7
                  text-[17px]
                  lg:text-[18px]
                  text-white
                  hover:text-[#e9b43f]
                  transition-colors
                "
              >
                +02422 - 273694
              </a>


              {/* EMAIL */}

              <a
                href="mailto:directoribma@pirens.in"
                className="
                  block
                  mt-7
                  text-[17px]
                  lg:text-[18px]
                  text-white
                  hover:text-[#e9b43f]
                  transition-colors
                  break-all
                "
              >
                directoribma@pirens.in
              </a>

            </div>

          </div>


          {/* ================= BOTTOM LINE ================= */}

          <div
            className="
              mt-7
              border-t
              border-white/60
            "
          />

        </div>

      </div>





      {/* =====================================================
          BACK TO TOP
      ====================================================== */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          fixed
          right-7
          bottom-7
          z-50

          w-12
          h-12

          rounded-full

          bg-[#06345d]

          border
          border-white/10

          flex
          items-center
          justify-center

          shadow-xl

          hover:bg-[#074274]

          transition-colors
        "
      >

        <ChevronUp
          size={26}
          strokeWidth={2}
        />

      </button>

    </footer>
  );
};

export default Footer;