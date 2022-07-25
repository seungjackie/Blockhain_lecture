import SlideRoutes from 'react-slide-routes';
import {  useLocation , Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

const App = () => {
  const location = useLocation();
  return (
    <>
      {/* <Router> */}
          {/* <Routes> */}
            <SlideRoutes location={location}> 
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </SlideRoutes>
          {/* </Routes> */}
        {/* </Router> */}
    </>
  );
};

export default App;