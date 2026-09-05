import infosys from "../../assets/infosys.png";
import hdfc from "../../assets/hdfc.png";
import bitwise from "../../assets/bitwise.png";
import kotak from "../../assets/kotak.png";
import bigbasket from "../../assets/bigbasket.png";
import idbi from "../../assets/idbi.png";
import tcs from "../../assets/tcs.png";
import icici from "../../assets/icici.png";

const AboutTrainingPlacement = () => {
  return (
    <section className="w-full bg-white">

      {/* ================= HEADER ================= */}
      <div className="bg-[#15558c] py-4 text-center">
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          Training & Placement
        </h1>
      </div>


      {/* ================= PLACEMENTS INFORMATION ================= */}
      <div className="mx-auto max-w-6xl px-6 py-12">

        <h2 className="mb-6 text-center text-2xl font-bold text-[#15558c]">
          PLACEMENTS
        </h2>

        <p className="text-justify text-base leading-9 text-gray-700">
          The Training And Placement Cell Of PIRENS’ Institute Of Computer
          Technology, Loni Handles Campus Placement Of The Graduating Students
          Of All Our Campuses. The Placement Cell Provides Complete Support To
          The Visiting Companies At Every Stage Of Placement Process.
          Arrangements For Pre-Placement Talks, Written Tests, Interviews And
          Group Discussions Are Made As Per The Requirement Of The Visiting
          Companies.
        </p>

      </div>


      {/* ================= OUR RECRUITERS ================= */}
      <div className="w-full bg-white py-10">

        {/* Heading */}
        <h2 className="mb-10 text-center text-3xl font-bold text-[#0b2d4d] md:text-4xl">
          Our Recruiters
        </h2>


        {/* Recruiters */}
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">


            {/* ================= INFOSYS ================= */}
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white shadow-lg">
              <img
                src={infosys}
                alt="Infosys"
                className="h-48 w-48 object-contain"
              />
            </div>


            {/* ================= HDFC BANK ================= */}
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-[#075494] shadow-lg">
              <img
                src={hdfc}
                alt="HDFC Bank"
                className="h-48 w-48 object-contain"
              />
            </div>


            {/* ================= BITWISE ================= */}
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white shadow-lg">
              <img
                src={bitwise}
                alt="Bitwise"
                className="h-48 w-48 object-contain"
              />
            </div>


            {/* ================= KOTAK ================= */}
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-[#ed1c24] shadow-lg">
              <img
                src={kotak}
                alt="Kotak Securities"
                className="h-48 w-48 object-contain"
              />
            </div>


            {/* ================= BIGBASKET ================= */}
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white shadow-lg">
              <img
                src={bigbasket}
                alt="BigBasket"
                className="h-48 w-48 object-contain"
              />
            </div>


            {/* ================= IDBI BANK ================= */}
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-[#008c78] shadow-lg">
              <img
                src={idbi}
                alt="IDBI Bank"
                className="h-48 w-48 object-contain"
              />
            </div>


            {/* ================= TCS ================= */}
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-white shadow-lg">
              <img
                src={tcs}
                alt="TCS"
                className="h-48 w-48 object-contain"
              />
            </div>


            {/* ================= ICICI BANK ================= */}
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-[#ff4b00] shadow-lg">
              <img
                src={icici}
                alt="ICICI Bank"
                className="h-48 w-48 object-contain"
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutTrainingPlacement;