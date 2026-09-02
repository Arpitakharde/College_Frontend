import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Contact from "./pages/contact";
import MissionVision from "./pages/about/MissionVision";

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
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/about/mission-vision"
          element={<MissionVision />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;