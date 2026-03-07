import Navbar from "./components/Navbar";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import "./App.css";
import Earth from "./assets/Earth.png";
import Sun from "./assets/Sun.png";
import Background from "./assets/Background.png";
import { useState } from "react";

function App() {
  const [currentPage, setPage] = useState("Earth");
  const displayPage = () => {
    switch (currentPage) {
      case "Earth":
        return <PageOne />;
      case "Sun":
        return <PageTwo />;
    }
  }
  
  return (
    <div className="bg-black min-w-dvw min-h-dvh">
      <Navbar currentPage={currentPage} setPage={setPage} />
      <main className={{}}>
        {displayPage()}
      </main>
    </div>
  );
}

export default App;
