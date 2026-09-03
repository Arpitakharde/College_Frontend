const MissionVision = () => {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-[#0b2d4d] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#079447] font-semibold uppercase tracking-widest mb-3">
            PIRENS IBMA
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Mission & Vision
          </h1>

          <p className="mt-5 text-gray-200 max-w-2xl mx-auto text-lg">
            Empowering students through quality management education,
            leadership and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#079447]">
            
            <div className="w-14 h-14 rounded-full bg-[#eaf7f0] flex items-center justify-center mb-5">
              <span className="text-2xl">👁️</span>
            </div>

            <h2 className="text-3xl font-bold text-[#0b2d4d] mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8">
              To be a leading centre for management education that empowers
              rural youth to become competent, ethical, and innovative
              business leaders driving sustainable rural and national
              development.
            </p>

          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#0b2d4d]">

            <div className="w-14 h-14 rounded-full bg-[#eef4f8] flex items-center justify-center mb-5">
              <span className="text-2xl">🎯</span>
            </div>

            <h2 className="text-3xl font-bold text-[#0b2d4d] mb-4">
              Our Mission
            </h2>

            <ul className="space-y-4 text-gray-600 leading-7">

              <li className="flex gap-3">
                <span className="text-[#079447] font-bold">01</span>
                <span>
                  To provide affordable and quality management education
                  to students, especially from rural backgrounds.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#079447] font-bold">02</span>
                <span>
                  To develop socially responsible managers capable of
                  addressing rural and global business challenges.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#079447] font-bold">03</span>
                <span>
                  To promote experiential learning, research, innovation
                  and meaningful industry interaction.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#079447] font-bold">04</span>
                <span>
                  To promote inclusive growth through managerial excellence
                  and responsible leadership.
                </span>
              </li>

            </ul>

          </div>

        </div>
      </section>

    </main>
  );
};

export default MissionVision;