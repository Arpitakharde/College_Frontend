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
      <div
        className="relative h-28 bg-[#14558a] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-[#14558a]/50"></div>

        <h1 className="relative z-10 flex h-full items-center justify-center text-4xl font-bold text-white">
          E-Learning Resource
        </h1>
      </div>

      {/* Table */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="overflow-x-auto">

          <table className="w-full border-collapse">



          </table>

        </div>
      
      </div>
      
    </main>
  );
};

export default Elearning;