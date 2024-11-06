import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './App.css';
import About from './components/aboutus/AboutUs';
import Dashboard from './components/dashboard/Dashboard';
import FAQ from './components/faqs/Faqs';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Join from './components/join/Join';
import Programs from './components/programs/Programs';
import Testimonials from './components/testimonials/Testimonials';
import Work from './components/working/Work';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <About/>
      <Work/>
      <Features/>
      <Programs/>
      <Testimonials/>
      <Join/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
export default App;