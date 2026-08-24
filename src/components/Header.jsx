import React, { useState } from "react";
import { Mail, Phone, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "#", dropdown: null },
  { label: "About Us", href: "#", dropdown: ["Our Vision", "Our Mission", "Governing Body", "Infrastructure"] },
  { label: "Department", href: "#", dropdown: ["MBA", "MCA", "Computer Science", "Management Studies"] },
  { label: "Student Corner", href: "#", dropdown: ["Result", "Time Table", "Circulars", "Grievance"] },
  { label: "Academics", href: "#", dropdown: ["Syllabus", "Academic Calendar", "Exam Cell"] },
  { label: "NAAC", href: "#", dropdown: ["SSR", "IIQA", "AQAR"] },
  { label: "Placement", href: "#", dropdown: ["Placement Cell", "Recruiters", "Placement Record"] },
  { label: "Contact", href: "#", dropdown: null },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="w-full font-sans ">
      <div className="bg-[#0e2a52] text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-4 py-2">
          <div className="flex flex-col xs:flex-row sm:items-center gap-1 sm:gap-5 shrink-0">
            <a href="mailto:directoribma@pirens.in" className="flex items-center gap-1.5 hover:text-[#f5a623] transition-colors">
              <Mail size={14} className="shrink-0" />
              <span>Email:&nbsp;<span className="font-medium">directoribma@pirens.in</span></span>
            </a>
            <a href="tel:02422273694" className="flex items-center gap-1.5 hover:text-[#f5a623] transition-colors">
              <Phone size={14} className="shrink-0" />
              <span>Phone:&nbsp;<span className="font-medium">02422-273694</span></span>
            </a>
          </div>
          <div className="flex-1 min-w-0 overflow-hidden px-2 hidden md:block">
            <p className="truncate text-center">
              <span className="text-slate-200">Notifications: </span>
              <span className="text-[#ff5a5f] font-semibold">come to PIRENS Institute of Business Management and Administration (IBMA)</span>
            </p>
          </div>
          <div className="flex flex-col xs:flex-row sm:items-center gap-1 sm:gap-5 shrink-0 text-slate-100">
            <span>DTE Code MBA:<span className="font-semibold">511710110</span></span>
            <span>DTE Code MCA:<span className="font-semibold">511724110</span></span>
          </div>
        </div>
        <div className="md:hidden px-4 pb-2 -mt-1">
          <p className="text-[#ff5a5f] font-semibold text-xs truncate">come to PIRENS Institute of Business Management and Administration (IBMA)</p>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-4 px-4 py-3">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <svg width="48" height="48" viewBox="0 0 52 52" aria-hidden="true">
              <circle cx="20" cy="18" r="14" fill="#f5a623" fillOpacity="0.9" />
              <circle cx="32" cy="18" r="14" fill="#7b8794" fillOpacity="0.75" />
              <circle cx="26" cy="30" r="14" fill="#0e2a52" fillOpacity="0.85" />
            </svg>
            <div className="leading-tight">
              <p className="text-[#0e2a52] font-semibold tracking-wide text-sm lg:text-base">PIRENS</p>
              <p className="text-[#0e2a52] font-extrabold text-xl lg:text-2xl -mt-1 tracking-tight">IBMA</p>
              <p className="text-[10px] text-slate-500 mt-0.5 max-w-[170px] leading-snug hidden lg:block">Institute of Business Management and Administration</p>
            </div>
          </a>

          <nav
            className="flex items-center gap-4 lg:gap-6 flex-nowrap overflow-x-auto flex-1 min-w-0"
            style={{ scrollbarWidth: "thin" }}
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative shrink-0"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                <button
                  onClick={() => item.dropdown && setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={`flex items-center gap-1 text-[13px] lg:text-[15px] font-medium py-2 whitespace-nowrap transition-colors ${
                    item.label === "Home" ? "text-emerald-600" : "text-[#0e2a52] hover:text-[#f5a623]"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  )}
                </button>

                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute left-0 top-full min-w-[190px] bg-white border border-slate-100 rounded-md shadow-lg py-2 z-50">
                    {item.dropdown.map((sub) => (
                      <a key={sub} href="#" className="block px-4 py-2 text-sm text-[#0e2a52] hover:bg-slate-50 hover:text-[#f5a623] transition-colors whitespace-nowrap">
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}