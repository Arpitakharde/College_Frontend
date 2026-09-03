import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Contact from "./pages/Contact";
import ELearning from "./pages/academics/e-learning";

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



      </Routes>

    </BrowserRouter>
  );
}

export default App;