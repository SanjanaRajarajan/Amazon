import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // Import the Header component
import Main from './Components/Main'; // Main page combining Header and Main1
import Rewamp from './Components/Rewamp'; 
import Appliances from './Components/Appliances'; 
import Headphone from './Components/Headphone'; 
import Automotive from './Components/Automotive';
import Brand from './Components/Brand';
import Womenstyle from './Components/Womenstyle';
import Toys from './Components/Toys';
import Tools from './Components/Tools';
import Curated from './Components/Curated';
import Bike from './Components/Bike';
import All from './Components/All';
import Kitchen from './Components/Kitchen';
import Fashion from './Components/Fashion';
import Loved from './Components/Loved';
import Fruits from './Components/Fruits';
import Fancy from './Components/Fancy';
import Fitness from './Components/Fitness';
import Mobile from './Components/Mobile';
import Beauty from './Components/Beauty';
import Furniture from './Components/Furniture';
import Babyfits from './Components/babyfits';




function App() {
  return (
    <Router>
      <Header />
      {/* Include Header on all pages */}
      <Routes>
        {/* Route for the main page */}
        <Route path="/main" element={<Main />} />
        {/* Route for the rewamp page */}
        <Route path="/rewamp" element={<Rewamp />} />
        <Route path="/appliances" element={<Appliances />} />
        <Route path="/headphone" element={<Headphone />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/womenstyle" element={<Womenstyle />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/curated" element={<Curated />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/all" element={<All />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/loved" element={<Loved />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/fancy" element={<Fancy />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/babyfits" element={<Babyfits />} />
      </Routes>
    </Router>
  );
}

export default App;
