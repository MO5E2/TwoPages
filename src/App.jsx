import Navbar from "./components/Navbar";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import "./App.css";
import Earth from "./assets/Earth.png";
import Sun from "./assets/Sun.png";

function App() {
  return (
    <main
      className="min-h-screen min-h bg-cover bg-center"
      style={{ backgroundImage: `url(${Earth})` }}
    >
      <Navbar />
      <PageOne />
      <PageTwo />
    </main>
  );
}

export default App;
