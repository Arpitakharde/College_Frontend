import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Contact from "./pages/Contact";
import ELearning from "./pages/academics/e-learning";
import Results from "./pages/academics/results";
import Examination from "./pages/academics/examination";
import AcademicCalendar from "./pages/academics/academic-calendar";
import AcademicHoliday from "./pages/academics/academic-holiday";
import AcademicCommittee from "./pages/academics/academic-committee";
import Administration from "./pages/academics/administration";
import Cce from "./pages/academics/cce";


function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <h1 className="text-5xl font-bold text-[#0b2d4d]">
        PIRENS IBMA
      </h1>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/*academics e-learning*/ }
        <Route
          path="/academics/e-learning"
          element={<ELearning />}
        />

        {/*academics Results*/ }
        <Route
          path="/academics/results"
          element={<Results/>}
        />

        {/*academics Examination*/ }
        <Route
          path="/academics/examination"
          element={<Examination/>}
        />
        
        {/*academics AcademicsCalendar*/ }
        <Route
          path="/academics/academic-calendar"
          element={<AcademicCalendar/>}
        />

        {/*academics AcademicsHoliday*/ }
        <Route
          path="/academics/academic-holiday"
          element={<AcademicHoliday/>}
        />

        {/*academics AcademicsCommittee*/ }
        <Route
          path="/academics/academic-committee"
          element={<AcademicCommittee/>}
        />

        {/*academics Administration*/ }
        <Route
          path="/academics/administration"
          element={<Administration/>}
        />


      </Routes>

    </BrowserRouter>
  );
}

export default App;