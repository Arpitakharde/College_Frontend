import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

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
        "Mission & Vision",
        "Patrons",
        "President Message",
        "CEO Message",
        "Board Of Trustee",
        "Governing Body Member",
        "Director Message",
        "College Development Committee",
        "Faculty Profile",
        "Loni Campus",
        "Perspective Plan",
        "Organisation Chart",
      ],
    },

    {
      name: "Department",
      dropdown: [
        "MBA",
        "MCA",
        "Faculty",
      ],
    },

    {
      name: "Student Corner",
      dropdown: [
        "Student Activities",
        "Notice Board",
        "Events",
      ],
    },

    {
      name: "Academics",
      dropdown: [
        "Programs",
        "Syllabus",
        "Academic Calendar",
      ],
    },

    {
      name: "NAAC",
      dropdown: [
        "NAAC Documents",
        "IQAC",
        "Accreditation",
      ],
    },

    {
      name: "Placement",
      dropdown: [
        "Placement Cell",
        "Recruiters",
        "Placement Records",
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
    <header className="w-full bg-white border-t-[3px] border-[#0b2d4d]">

      {/* =====================================================
          DESKTOP HEADER
      ====================================================== */}

      <div className="hidden lg:block">

        <div className="w-full px-6 xl:px-10">

          <div className="h-[108px] flex items-center">

            {/* ================= LOGO ================= */}

            <div className="flex-shrink-0 w-[250px] xl:w-[275px]">

              <a
                href="/"
                className="inline-block"
              >
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
              </a>

            </div>


            {/* ================= NAVIGATION ================= */}

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
                  className="
                    relative
                    group
                    flex-shrink-0
                  "
                >

                  {/* ================= DROPDOWN MENU ================= */}

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
                          tracking-[-0.1px]
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


                      {/* ================= DROPDOWN ================= */}

                      <div
                        className="
                          absolute
                          top-[28px]
                          left-1/2
                          -translate-x-1/2

                          w-[210px]

                          bg-white

                          border
                          border-gray-100

                          rounded-md

                          shadow-lg

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

                            <a
                              key={dropdownItem}
                              href="#"
                              className="
                                block
                                px-5
                                py-3

                                text-[14px]

                                font-medium

                                text-[#132c47]

                                hover:bg-[#f3f8f5]

                                hover:text-[#079447]

                                transition-colors
                              "
                            >
                              {dropdownItem}
                            </a>

                          )
                        )}

                      </div>

                    </>

                  ) : (

                    /* ================= NORMAL LINK ================= */

                    <a
                      href={item.link}
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
                        duration-200
                      "
                    >
                      {item.name}
                    </a>

                  )}

                </div>

              ))}

            </nav>

          </div>

        </div>


        {/* ================= ACTIVE LINE ================= */}



      </div>


      {/* =====================================================
          MOBILE HEADER
      ====================================================== */}

      <div className="lg:hidden">

        {/* ================= MOBILE TOP ================= */}

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

          <a
            href="/"
            className="block"
          >

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

          </a>


          {/* ================= MENU BUTTON ================= */}

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

              transition
            "
          >

            {mobileMenu ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}

          </button>

        </div>


        {/* ================= MOBILE NAVIGATION ================= */}

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

                  {/* ================= DROPDOWN ================= */}

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

                          transition
                        "
                      >

                        {item.name}

                        <ChevronDown
                          size={18}
                          className={`
                            transition-transform
                            duration-200

                            ${
                              openDropdown ===
                              item.name
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />

                      </button>


                      {/* MOBILE SUB MENU */}

                      {openDropdown ===
                        item.name && (

                        <div
                          className="
                            pb-3
                            pl-4
                          "
                        >

                          {item.dropdown.map(
                            (dropdownItem) => (

                              <a
                                key={dropdownItem}
                                href="#"
                                className="
                                  block

                                  py-2

                                  text-[14px]

                                  text-gray-600

                                  hover:text-[#079447]

                                  transition
                                "
                              >
                                {dropdownItem}
                              </a>

                            )
                          )}

                        </div>

                      )}

                    </>

                  ) : (

                    /* ================= NORMAL MOBILE LINK ================= */

                    <a
                      href={item.link}
                      className="
                        block

                        py-4

                        text-[16px]

                        font-semibold

                        text-[#079447]

                        hover:text-[#057a39]

                        transition
                      "
                    >
                      {item.name}
                    </a>

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