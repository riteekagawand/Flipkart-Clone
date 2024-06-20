import Image from "next/image";
import Header from './components/Header'; // Assuming Header.js is in components folder
import Footer from "./components/Footer"; // Assuming Footer.js is in components folder
import SliderComponent from "./components/Slider";
import Middle from "./components/Middle" // Assuming Slider.js is in components folder

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">  {/* Add some basic styling */}
      <Header />
      <SliderComponent />
      <Middle />
      <Footer />
    </div>
  );
}