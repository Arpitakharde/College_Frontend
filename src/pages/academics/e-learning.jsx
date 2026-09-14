import shodhSindhu from "../../assets/e-ShodhSindhu.png";
import pathshala from "../../assets/pathshala.png";
import eYantra from "../../assets/eyantra.png";
import ndli from "../../assets/ndli.png";
import fossee from "../../assets/fossee.png";
import nptel from "../../assets/nptel.png";
import swayamPrabha from "../../assets/swayam_prabha.png";
import swayam from "../../assets/swayam.png";
import vidwan from "../../assets/VIDWAN.png";
import virtualLab from "../../assets/virtual_lap.png";

const Elearning = () => {
  const resources = [
    {
      id: 1,
      name: "e-ShodhSindhu",
      image: shodhSindhu,
      link: "https://ess.inflibnet.ac.in/",
    },
    {
      id: 2,
      name: "e-PG Pathshala",
      image: pathshala,
      link: "https://epgp.inflibnet.ac.in/",
    },
    {
      id: 3,
      name: "e-Yantra",
      image: eYantra,
      link: "https://www.e-yantra.org/",
    },
    {
      id: 4,
      name: "National Digital Library of India",
      image: ndli,
      link: "https://ndl.iitkgp.ac.in/",
    },
    {
      id: 5,
      name: "FOSSEE",
      image: fossee,
      link: "https://fossee.in/",
    },
    {
      id: 6,
      name: "NPTEL",
      image: nptel,
      link: "https://nptel.ac.in/",
    },
    {
      id: 7,
      name: "SWAYAM Prabha",
      image: swayamPrabha,
      link: "https://www.swayamprabha.gov.in/",
    },
    {
      id: 8,
      name: "SWAYAM",
      image: swayam,
      link: "https://swayam.gov.in/",
    },
    {
      id: 9,
      name: "VIDWAN",
      image: vidwan,
      link: "https://vidwan.inflibnet.ac.in/",
    },
    {
      id: 10,
      name: "Virtual Labs",
      image: virtualLab,
      link: "https://www.vlab.co.in/",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Banner */}
      <div className="relative h-24 sm:h-28 md:h-32 bg-[#14558a] flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-[#14558a]/50"></div>

        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          E-Learning Resource
        </h1>
      </div>

      {/* Table Section */}
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-5 md:px-6 py-10 sm:py-14 md:py-20">

        {/* Horizontal scroll only when required */}
        <div className="w-full overflow-x-auto">

          <table className="w-full min-w-[650px] border-collapse">

            {/* Table Header */}
            <thead>
              <tr className="bg-[#0b9250] text-white">

                <th className="w-[15%] border-2 border-white px-2 sm:px-4 py-3 sm:py-5 text-sm sm:text-base md:text-lg">
                  Sr. No.
                </th>

                <th className="w-[55%] border-2 border-white px-3 sm:px-4 py-3 sm:py-5 text-sm sm:text-base md:text-lg">
                  E – Learning Resource
                </th>

                <th className="w-[30%] border-2 border-white px-3 sm:px-4 py-3 sm:py-5 text-sm sm:text-base md:text-lg">
                  Website
                </th>

              </tr>
            </thead>

            {/* Table Rows */}
            <tbody>

              {resources.map((resource) => (

                <tr
                  key={resource.id}
                  className="bg-[#f1f1f1]"
                >

                  {/* Sr. No. */}
                  <td className="border-2 border-white px-2 sm:px-4 py-5 sm:py-7 md:py-8 text-center text-sm sm:text-base md:text-lg">
                    {resource.id}
                  </td>

                  {/* Resource Name */}
                  <td className="border-2 border-white px-3 sm:px-6 md:px-8 py-5 sm:py-7 md:py-8 text-sm sm:text-base md:text-lg text-gray-800">
                    {resource.name}
                  </td>

                  {/* Website Logo */}
                  <td className="border-2 border-white px-2 sm:px-4 py-4 sm:py-5 md:py-6 text-center">

                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <img
                        src={resource.image}
                        alt={resource.name}
                        className="mx-auto h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48 lg:h-28 lg:w-56 object-contain"
                      />

                    </a>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
};

export default Elearning;