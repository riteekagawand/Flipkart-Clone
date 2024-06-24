import Header from './component/Header'; // Assuming Header.js is in components folder
import Footer from "./component/Footer"; // Assuming Footer.js is in components folder
import SliderComponent from "./component/Slider";
import Middle from "./component/Middle" // Assuming Slider.js is in components folder

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">  {/* Add some basic styling */}
      <Header /> <div className="flex flex-col h-[25px] bg-gray-200"></div>
      <SliderComponent /> <div className="flex flex-col h-[25px] bg-gray-200"></div>
      <Middle /><div className="flex flex-col h-[25px] bg-gray-200"></div>
      <Footer />
    </div>
  );
}