import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },

    {
      name: "About Us",
      dropdown: [
        {
          name: "Mission & Vision",
          link: "/about/mission-vision",
        },
        {
          name: "Patrons",
          link: "/about/patrons",
        },
        {
          name: "President Message",
          link: "/about/president-message",
        },
        {
          name: "CEO Message",
          link: "/about/ceo-message",
        },
        {
          name: "Board Of Trustee",
          link: "/about/board-of-trustee",
        },
        {
          name: "Governing Body Member",
          link: "/about/governing-body-member",
        },
        {
          name: "Director Message",
          link: "/about/director-message",
        },
        {
          name: "College Development Committee",
          link: "/about/college-development-committee",
        },
        {
          name: "Faculty Profile",
          link: "/about/faculty-profile",
        },
        {
          name: "Loni Campus",
          link: "/about/loni-campus",
        },
        {
          name: "Perspective Plan",
          link: "/about/perspective-plan",
        },
        {
          name: "Organisation Chart",
          link: "/about/organisation-chart",
        },
      ],
    },

    {
      name: "Department",
      dropdown: [
        {
          name: "MBA",
          link: "/department/mba",
        },
        {
          name: "MCA",
          link: "/department/mca",
        },
        {
          name: "B.Voc.",
          link: "/department/bvoc",
        },
        {
          name: "Research Center",
          link: "/department/research-center",
        },
        {
          name: "Library",
          link: "/department/library",
        },
        {
          name: "Alumni Cell",
          link: "/department/alumni-cell",
        },
      ],
    },

    {
      name: "Student Corner",
      dropdown: [
        {
          name: "Admission Enquiry",
          link: "/student-corner/admission-enquiry",
        },
        {
          name: "Admission Procedure",
          link: "/student-corner/admission-procedure",
        },
        {
          name: "Online Application Forms",
          link: "/student-corner/online-application-forms",
        },
        {
          name: "Entrance Exams",
          link: "/student-corner/entrance-exams",
        },
        {
          name: "Fees Structure",
          link: "/student-corner/fees-structure",
        },
        {
          name: "Hostel Accommodation",
          link: "/student-corner/hostel-accommodation",
        },
        {
          name: "Students Development",
          link: "/student-corner/students-development",
        },
        {
          name: "National Service Scheme",
          link: "/student-corner/national-service-scheme",
        },
        {
          name: "Apply for Scholarship",
          link: "/student-corner/apply-for-scholarship",
        },
        {
          name: "Life @ PIRENS IBMA",
          link: "/student-corner/life-at-pirens-ibma",
        },
        {
          name: "Vidyalakshmi Portal",
          link: "/student-corner/vidyalakshmi-portal",
        },
        {
          name: "CO-PO",
          link: "/student-corner/co-po",
        },
      ],
    },

    {
      name: "Academics",
      dropdown: [
        {
          name: "Administration",
          link: "/academics/administration",
        },
        {
          name: "Academic Committee",
          link: "/academics/academic-committee",
        },
        {
          name: "Academic Holiday",
          link: "/academics/academic-holiday",
        },
        {
          name: "Academic Calendar",
          link: "/academics/academic-calendar",
        },
        {
          name: "Examination",
          link: "/academics/examination",
        },
        {
          name: "Results",
          link: "/academics/results",
        },
        {
          name: "E-Learning",
          link: "/academics/e-learning",
        },
        {
          name: "CCE",
          link: "/academics/cce",
        },
      ],
    },

    {
      name: "NAAC",
      dropdown: [
        {
          name: "NAAC Documents",
          link: "/naac/documents",
        },
        {
          name: "IQAC",
          link: "/naac/iqac",
        },
        {
          name: "Accreditation",
          link: "/naac/accreditation",
        },
      ],
    },

    {
      name: "Placement",
      dropdown: [
        {
          name: "About Training & Placement",
          link: "/placement/about-training-placement",
        },
        {
          name: "Student Placed",
          link: "/placement/student-placed",
        },
        {
          name: "MOU & Collaborations",
          link: "/placement/mou-collaborations",
        },
        {
          name: "Placement Calender",
          link: "/placement/placement-calender",
        },
        {
          name: "Placement Policy",
          link: "/placement/placement-policy",
        },
        {
          name: "TPO Message",
          link: "/placement/tpo-message",
        },
        {
          name: "Training and Placement Cell Report",
          link: "/placement/training-placement-cell-report",
        },
      ],
    },

    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(
      openDropdown === name ? null : name
    );
  };

  return (
    <header className="w-full bg-white">

      {/* =====================================================
          DESKTOP
      ====================================================== */}

      <div className="hidden lg:block">

        <div className="w-full px-6 xl:px-10">

          <div className="h-[108px] flex items-center">

            {/* LOGO */}

            <div className="flex-shrink-0 w-[250px] xl:w-[275px]">

              <Link to="/" className="inline-block">

                <img
                  src="/logo.png"
                  alt="PIRENS IBMA"
                  className="
                    block
                    w-[225px]
                    xl:w-[245px]
                    h-auto
                    object-contain
                  "
                />

              </Link>

            </div>


            {/* NAVIGATION */}

            <nav
              className="
                flex-1
                flex
                items-center
                justify-end
                gap-x-4
                xl:gap-x-5
                2xl:gap-x-6
                min-w-0
              "
            >

              {menuItems.map((item) => (

                <div
                  key={item.name}
                  className="relative group flex-shrink-0"
                >

                  {item.dropdown ? (

                    <>
                      <button
                        type="button"
                        onClick={() =>
                          toggleDropdown(item.name)
                        }
                        className={`
                          flex
                          items-center
                          gap-[4px]
                          whitespace-nowrap
                          text-[15px]
                          xl:text-[16px]
                          2xl:text-[17px]
                          font-semibold
                          transition-colors
                          duration-200
                          ${
                            item.name === "Department"
                              ? "text-[#079447]"
                              : "text-[#071f3d]"
                          }
                          hover:text-[#079447]
                        `}
                      >

                        {item.name}

                        <ChevronDown
                          size={15}
                          strokeWidth={1.6}
                          className="
                            transition-transform
                            duration-200
                            group-hover:rotate-180
                          "
                        />

                      </button>


                      {/* DROPDOWN */}

                      <div
                        className="
                          absolute
                          top-[28px]
                          left-1/2
                          -translate-x-1/2

                          w-[250px]

                          bg-white

                          border
                          border-gray-100

                          shadow-xl

                          overflow-hidden

                          opacity-0
                          invisible

                          translate-y-2

                          group-hover:opacity-100
                          group-hover:visible
                          group-hover:translate-y-0

                          transition-all
                          duration-200

                          z-[100]
                        "
                      >

                        {item.dropdown.map(
                          (dropdownItem) => (

                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.link}
                              className={`
                                block
                                px-5
                                py-3

                                text-[15px]
                                leading-[1.15]

                                font-medium

                                ${
                                  dropdownItem.name ===
                                  "Board Of Trustee"
                                    ? "text-[#079447]"
                                    : "text-[#0b2d4d]"
                                }

                                hover:bg-[#f3f8f5]
                                hover:text-[#079447]

                                transition-colors
                              `}
                            >
                              {dropdownItem.name}
                            </Link>

                          )
                        )}

                      </div>

                    </>

                  ) : (

                    <Link
                      to={item.link}
                      className="
                        block
                        whitespace-nowrap

                        text-[15px]
                        xl:text-[16px]
                        2xl:text-[17px]

                        font-semibold

                        text-[#079447]

                        hover:text-[#057a39]

                        transition-colors
                      "
                    >
                      {item.name}
                    </Link>

                  )}

                </div>

              ))}

            </nav>

          </div>

        </div>

      </div>


      {/* =====================================================
          MOBILE
      ====================================================== */}

      <div className="lg:hidden">

        <div
          className="
            min-h-[82px]
            px-5
            py-3
            flex
            items-center
            justify-between
          "
        >

          {/* LOGO */}

          <Link to="/" className="block">

            <img
              src="/logo.png"
              alt="PIRENS IBMA"
              className="
                w-[195px]
                sm:w-[225px]
                h-auto
                object-contain
              "
            />

          </Link>


          {/* MENU BUTTON */}

          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="
              w-10
              h-10

              flex
              items-center
              justify-center

              rounded-md

              border
              border-gray-200

              text-[#0b2d4d]

              hover:bg-gray-50
            "
          >

            {mobileMenu ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}

          </button>

        </div>


        {/* MOBILE MENU */}

        {mobileMenu && (

          <div
            className="
              border-t
              border-gray-200
              bg-white
              shadow-lg
              z-50
            "
          >

            <nav className="px-5 py-2">

              {menuItems.map((item) => (

                <div
                  key={item.name}
                  className="
                    border-b
                    border-gray-100
                    last:border-none
                  "
                >

                  {item.dropdown ? (

                    <>

                      <button
                        type="button"
                        onClick={() =>
                          toggleDropdown(item.name)
                        }
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          py-4
                          text-[16px]
                          font-semibold
                          text-[#0b2d4d]
                          hover:text-[#079447]
                        "
                      >

                        {item.name}

                        <ChevronDown
                          size={18}
                          className={`
                            transition-transform
                            duration-200
                            ${
                              openDropdown === item.name
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />

                      </button>


                      {openDropdown === item.name && (

                        <div className="pb-3 pl-4">

                          {item.dropdown.map(
                            (dropdownItem) => (

                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.link}
                                onClick={() =>
                                  setMobileMenu(false)
                                }
                                className="
                                  block
                                  py-2
                                  text-[14px]
                                  text-[#0b2d4d]
                                  hover:text-[#079447]
                                "
                              >
                                {dropdownItem.name}
                              </Link>

                            )
                          )}

                        </div>

                      )}

                    </>

                  ) : (

                    <Link
                      to={item.link}
                      onClick={() =>
                        setMobileMenu(false)
                      }
                      className="
                        block
                        py-4
                        text-[16px]
                        font-semibold
                        text-[#079447]
                      "
                    >
                      {item.name}
                    </Link>

                  )}

                </div>

              ))}

            </nav>

          </div>

        )}

      </div>

    </header>
  );
};

export default Header;