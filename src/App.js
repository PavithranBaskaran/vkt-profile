import "./App.css";
import Application from "./Components/Application/Application";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Specialization from "./Components/Specialization/Specialization";
import Fabrics from "./Components/Fabrics/Fabrics";
import Aboutus from "./Components/AboutUs/Aboutus";

function App() {
  return (
    <>
      <Navbar />
      <Fabrics />
      <Specialization />
      {/* <Application /> */}
      <Aboutus/>
      <Contact />
    </>
  );
}

export default App;
