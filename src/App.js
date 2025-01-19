import logo from './logo.svg';
import './App.css';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import ErrorPage from './pages/error';
import MapWithGeoJSON from './pages/map';
import TrackingPage from './pages/track';


function App() {
  return (<>
    
       <Router>
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-8">
          <li>
            <Link to="/kharchra" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/kharchra/login" className="hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/kharchra/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="/kharchra/profile" className="hover:underline">Profile</Link>
          </li>
          <li>
            <Link to="/kharchra/map" className="hover:underline">Map</Link>
          </li>
          <li>
            <Link to="/kharchra/track" className="hover:underline">TrackMe</Link>
          </li>
    
        </ul>
      </nav>

      <div >
        <Routes>
          <Route path="/kharchra/" element={<Home />} />
          <Route path="/kharchra/about" element={<About />} />
          <Route path="/kharchra/login" element={<Login />} />
          <Route path="/kharchra/profile" element={<Profile />} />
          <Route path="/kharchra/map" element={<MapWithGeoJSON />} /> 
          <Route path="/kharchra/track" element={<TrackingPage />} /> 
          <Route path="*" element={<ErrorPage />} />
          </Routes>
      </div>
    </Router>
    
        </>
  );
}

export default App;
