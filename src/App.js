import './App.css';
import Navbar from './assets/Sections/Navbar';
import Chart from "chart.js/auto";
import Shery from 'sheryjs'
import { CategoryScale } from "chart.js";
import Section2 from './assets/Sections/Section2';
import Section3 from './assets/Sections/Section3';
import Webdev from './assets/Sections/Webdev';
Chart.register(CategoryScale);


function App() {
  Shery.mouseFollower({
    backgroundColor : "red",
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1.2,
  })
  return (

    <div className="App">
      <Navbar />
      <Section2 />
      <Section3 />
      <Webdev/>
    </div>
  );
}

export default App;
