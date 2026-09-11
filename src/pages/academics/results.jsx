const Results = () => {
  return (
    <main className="min-h-screen bg-white">

      {/* Page Title */}
      <div className="bg-[#14558a] py-5 text-center">
        <h1 className="text-4xl font-bold text-white">
          Annual Result of MCA/MBA
        </h1>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto py-24 px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

         {/* MBA */}
          <div className="text-center">

            <h2 className="text-3xl font-bold text-[#0b2d4d]">
              Annual Result of MBA
            </h2>

            <a
              href="https://www.unipune.ac.in/university_files/results.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-16 bg-[#092f52] text-white px-12 py-7 text-2xl"
            >
              Click here for MBA Result
            </a>


          </div>


          {/* MCA */}
          <div className="text-center">

            <h2 className="text-3xl font-bold text-[#0b2d4d]">
              Annual Result of MCA
            </h2>
            
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-16 bg-[#092f52] text-white px-12 py-7 text-2xl"
            >
              Click here for MCA Result
            </a>


          </div>



        </div>

      </div>

      

    </main>
  );
};

export default Results;