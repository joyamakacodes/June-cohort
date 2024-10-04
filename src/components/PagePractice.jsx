import PracticeNav from "./PracticeNav";
import TypingEffect from "./Tpying";
const HomePage = () => {
  return (
    <div>
      <PracticeNav />
      <div>
        <TypingEffect />
      </div>
      <div id="about" className="section bg-red-900 h-[500px]">
        <h2>About Us</h2>
        <p>This is the About section</p>
      </div>
      <div id="services" className="section h-[500px]">
        <h2>Our Services</h2>
        <p>This is the Services section</p>
      </div>
     
      <div id="contact" className="section h-[500px]">
        <h2>Contact Us</h2>
        <p>This is the Contact section</p>
      </div>
    </div>
  );
};

export default HomePage