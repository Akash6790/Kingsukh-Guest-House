import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Rooms/>
      <Services/>
    <Gallery/>
     <Contact/> 
     <Map/>
     <Footer/>
    </>
  );
}

export default App;
